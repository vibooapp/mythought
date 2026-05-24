// REALTIME AUTO REFRESH

const channel = supabaseClient
.channel("realtime-app")

.on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "posts"
  },
  ()=>{

    if(typeof loadPosts === "function"){

      loadPosts()

    }

  }
)

.on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "comments"
  },
  ()=>{

    if(typeof loadPosts === "function"){

      loadPosts()

    }

  }
)

.on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "likes"
  },
  ()=>{

    if(typeof loadPosts === "function"){

      loadPosts()

    }

  }
)

.on(
  "postgres_changes",
  {
    event: "*",
    schema: "public",
    table: "profiles"
  },
  ()=>{

    if(typeof loadProfile === "function"){

      loadProfile()

    }

  }
)

.subscribe()