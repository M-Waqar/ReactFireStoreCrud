import React from "react";

const Post = ({ post, deletePost, updatePost }) => {
  const onDelete = () => {
    deletePost(post.id);
  };
  const onUpdate = () => {
    updatePost(post);
  };
  return (
    <div className="card m-3">
      <div className="card-header">{post.id}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{post.Name}</li>
        <li className="list-group-item">{post.Title}</li>
        <li className="list-group-item">{post.Desc}</li>
        <li className="list-group-item">{post.Author}</li>
      </ul>
      <div className="card-body">
        <button onClick={onUpdate} className="btn btn-primary mr-4">
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
