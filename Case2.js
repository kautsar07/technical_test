const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Hai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Hai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai Juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// comments.map((item) => console.log(item.commentContent));

let x =0
let y =0

function totalComment (data){

  for (let i = 0; i < data.length; i++) {
    if (data[i].commentId && data[i].replies) {
      x = x + 1;
  
      for (let j = 0; j < data[i].replies.length; j++) {
        if (data[i].replies[i].replies) {
          x = x + 1;
  
          for (let k = 0; k < data[i].replies[i].replies.length; k++) {
            if (data[i].replies[i].replies[i].replies) {
              x = x + 1;
            } else {
              y = y + 1;
            }
          }
        } else {
          y = y + 1;
        }
      }
    }
  }
  let total = x + y
  console.log("Total komentar adalah" + " " + total);
}
totalComment(comments)
