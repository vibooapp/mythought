const loginForm =
document.getElementById("loginForm")

const message =
document.getElementById("message")

loginForm.addEventListener("submit", async (e)=>{

  e.preventDefault()

  const email =
  document.getElementById("email").value

  const password =
  document.getElementById("password").value

  message.innerText = "Logging in..."

  const { error } =
  await supabaseClient.auth.signInWithPassword({

    email,
    password

  })

  if(error){

    message.innerText = error.message
    return

  }

  message.innerText = "Login Success"

  setTimeout(()=>{

    window.location.href = "index.html"

  },1000)

})