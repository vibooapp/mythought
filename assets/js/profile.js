async function loadProfile(){

  const { data:{ user } } =
  await supabaseClient.auth.getUser()

  if(!user){

    window.location.href = "login.html"
    return

  }

  const { data } =
  await supabaseClient
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .single()

  document.getElementById("profileName")
  .innerText = data.full_name

  document.getElementById("profileBio")
  .innerText = data.bio || "No bio yet"

  loadMyPosts(user.id)

}

async function loadMyPosts(userId){

  const { data } =
  await supabaseClient
  .from("posts")
  .select("*")
  .eq("user_id", userId)
  .order("id", { ascending:false })

  const myPosts =
  document.getElementById("myPosts")

  myPosts.innerHTML = ""

  data.forEach(post => {

    myPosts.innerHTML += `

      <img src="${post.image_url}">

    `

  })

}

loadProfile()