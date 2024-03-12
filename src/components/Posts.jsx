import React, { use, Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const Posts = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <PostItems />
    </Suspense>
  );
};

export default Posts;

const PostItems = () => {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};
