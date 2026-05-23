const SUPABASE_URL = "lpbaziwnptdbkyomthyu"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYmF6aXducHRkYmt5b210aHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0Mjg1ODgsImV4cCI6MjA5NTAwNDU4OH0.rDB5JEgxByMi0dpGiAGu5ThZnQKMBhhR2apAqDvnPLw"

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)

const btn = document.getElementById("testBtn")
const result = document.getElementById("result")

btn.addEventListener("click", async () => {

  result.innerText = "Connecting..."

  try {

    const { data, error } = await supabaseClient
      .from("test")
      .select("*")

    if(error){
      result.innerText = error.message
    }else{
      result.innerText = "Supabase Connected Successfully ✅"
    }

  } catch(err){
    result.innerText = err.message
  }

})