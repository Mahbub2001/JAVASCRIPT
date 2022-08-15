//step - 1: add event listener to the post button
document.getElementById("btn-post").addEventListener("click", function () {
  //step - 2 ; get the comment inside the text area
  const commentBox = document.getElementById("new-comment");
  const newComment = commentBox.value;

  //step -3: set the comment inside the comment container
  // 1.get the comment container
  // /2.creat a new element (p tag)
  //3.set the text of the comment as innerText of the p tag
  //4. add the p tag by sing appendchild
  const CommentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;
  CommentContainer.appendChild(p);

  //step -4: clear the text area
  commentBox.value = "";
});
