async function createNotification({

  senderId,
  receiverId,
  type,
  postId = null,
  message

}){

  // SAME USER KO NOTIFICATION NAHI

  if(senderId === receiverId){

    return

  }

  // INSERT

  const { error } =
  await supabaseClient
  .from("notifications")
  .insert([{

    sender_id:senderId,

    receiver_id:receiverId,

    type:type,

    post_id:postId,

    message:message

  }])

  if(error){

    console.log(
      "Notification Error:",
      error.message
    )

  }

}