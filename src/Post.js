import React,{useState,useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import {db} from "./Firebase";


function Post({ postId,username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment,setComment] = useState("");
  useEffect(() =>{
    let unsubscribe;
    if(postId){
      unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) =>{
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
        return () =>{
          unsubscribe();
        }
    }
  },[postId]);

  const postComment = (event) =>{
    //event.preventDefault();
  }
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Vinothkumar"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} />
      <h4 className="post__text">
        <strong>{username}</strong> : {caption}
      </h4>
      <form className = "post__commentBox">
        <input 
        className = "post__input"
        type = "text"
        value ={comment}
        placeholder = "Comment goes here..."
        onChange = {(event) => setComment(event.target.value)}
        />
        <button
        className ="post_button"
        disabled ={!comment}
        type = "submit"
        onClick ={postComment}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
