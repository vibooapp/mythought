const SUPABASE_URL = "https://lpbaziwnptdbkyomthyu.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYmF6aXducHRkYmt5b210aHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0Mjg1ODgsImV4cCI6MjA5NTAwNDU4OH0.rDB5JEgxByMi0dpGiAGu5ThZnQKMBhhR2apAqDvnPLw"

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)

