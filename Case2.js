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

for (let i = 0; i < comments.length; i++) {
  if (comments[i].commentId && comments[i].replies) {
    x = x + 1;

    for (let j = 0; j < comments[i].replies.length; j++) {
      if (comments[i].replies[i].replies) {
        x = x + 1;

        for (let k = 0; k < comments[i].replies[i].replies.length; k++) {
          if (comments[i].replies[i].replies[i].replies) {
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

