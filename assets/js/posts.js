const postForm =
document.getElementById("postForm")

const message =
document.getElementById("message")

postForm.addEventListener("submit", async (e)=>{

  e.preventDefault()

  message.innerText = "Uploading..."

  const { data:{ user } } =
  await supabaseClient.auth.getUser()

  const file =
  document.getElementById("postImage").files[0]

  const caption =
  document.getElementById("caption").value

  let imageUrl = null

  // IMAGE UPLOAD ONLY IF FILE EXISTS

  if(file){

    const fileName =
    Date.now() + "-" + file.name

    const { error:uploadError } =
    await supabaseClient.storage
    .from("posts")
    .upload(fileName, file)

    if(uploadError){

      message.innerText = uploadError.message
      return

    }

    const { data:imageData } =
    supabaseClient.storage
    .from("posts")
    .getPublicUrl(fileName)

    imageUrl = imageData.publicUrl

  }

  // SAVE POST

  const { error:postError } =
  await supabaseClient
  .from("posts")
  .insert([
    {
      user_id:user.id,
      caption,
      image_url:imageUrl
    }
  ])

  if(postError){

    message.innerText = postError.message
    return

  }

  message.innerText = "Post Uploaded ✅"

  setTimeout(()=>{

    window.location.href = "index.html"

  },1000)

})