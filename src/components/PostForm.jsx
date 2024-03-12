// import React from "react";

import { useState } from "react";

const PostForm = ({ addPost }) => {
  const formAction = (formData) => {
    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
    };
    addPost(newPost);
  };
  return (
    <form
      action={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40%] m-auto text-left mt-4"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text -sm font-bold mb-2"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none foucus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter title"
          name="title"
        />
      </div>
      <div>
        <label
          htmlFor="body"
          className="block text-gray-700 text -sm font-bold mb-2"
        >
          Body
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none foucus:shadow-outline"
          name="body"
          id="body"
          placeholder="Enter body"
          rows="5"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 py-2 rounded focus:outline-none foucus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Post1 = () => {
    const [posts,setPosts]=useState([]);
    const addPost=(newPost)=>{
        setPosts((posts)=>[...posts,newPost])
    }
  return (
    <>
      <PostForm addPost={addPost}/>
      {posts.map((post,ind)=>(
        <PostItem key={ind} post={post} />
      ))}
    </>
  );
};

const PostItem=({post})=>{

    return(
        <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg w-[40%] m-auto">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
}

export default Post1;
