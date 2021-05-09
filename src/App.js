import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Post from "./Post";
import PostForm from "./PostForm";

const initial = {
  id: "",
  Name: "",
  Title: "",
  Author: "",
  Desc: "",
};

function App() {
  const [posts, setPosts] = useState([]);
  const [ipost, setIPost] = useState(initial);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const dbRef = firebase.firestore();
    const data = await dbRef.collection("Posts").get();
    const arr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPosts(arr);
  };
  const addPost = (post) => {
    const dbRef = firebase.firestore();
    if (post.id === "") {
      dbRef.collection("Posts").add(post);
    } else {
      dbRef
        .collection("Posts")
        .doc(post.id)
        .set({ ...post });
    }
    getPosts();
    setIPost(initial);
  };

  const deletePost = (id) => {
    const dbRef = firebase.firestore();
    dbRef.collection("Posts").doc(id).delete();
    getPosts();
  };
  const updatePost = (post) => {
    setIPost(post);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Firestore Crud Application</h1>
      <div className="mt-2">
        <PostForm ipost={ipost} addPost={addPost} />
      </div>
      <div className="mt-2">
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                deletePost={deletePost}
                updatePost={updatePost}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
