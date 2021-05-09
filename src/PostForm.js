import React, { useState, useEffect } from "react";

const PostForm = ({ ipost, addPost }) => {
  const [post, setPost] = useState(ipost);

  useEffect(() => {
    setPost(ipost);
  }, [ipost]);

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost(ipost);
  };

  return (
    <form onSubmit={onSubmit} className="m-5 shadow p-5">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={post.Name}
            className="form-control"
            onChange={(e) => setPost({ ...post, Name: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={post.Title}
            className="form-control"
            onChange={(e) => setPost({ ...post, Title: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Author</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={post.Author}
            className="form-control"
            onChange={(e) => setPost({ ...post, Author: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Desc</label>
        <div className="col-sm-10">
          <input
            type="text"
            value={post.Desc}
            className="form-control"
            onChange={(e) => setPost({ ...post, Desc: e.target.value })}
          />
        </div>
      </div>
      <button className="btn btn-primary">Add Post</button>
    </form>
  );
};

export default PostForm;
