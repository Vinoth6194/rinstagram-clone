import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Vinothkumar"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      
      <img
        className="post__image"
        src="https://i.morioh.com/200623/6c839150.jpg"
      />
      <h4 className="post__text">
        <strong>vinoth_6194</strong> :Looks good..Way to go
      </h4>
    </div>
  );
}

export default Post;
