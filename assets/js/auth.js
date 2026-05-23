const signupForm =
document.getElementById("signupForm")

const message =
document.getElementById("message")

signupForm.addEventListener("submit", async (e)=>{

  e.preventDefault()

  const name =
  document.getElementById("name").value

  const email =
  document.getElementById("email").value

  const password =
  document.getElementById("password").value

  message.innerText = "Creating account..."

  const { data, error } =
  await supabaseClient.auth.signUp({

    email,
    password

  })

  if(error){

    message.innerText = error.message
    return

  }

  const user = data.user

  await supabaseClient
  .from("profiles")
  .insert([
    {
      id:user.id,
      full_name:name
    }
  ])

  message.innerText = "Signup Success ✅"

  setTimeout(()=>{

    window.location.href = "login.html"

  },1000)

})