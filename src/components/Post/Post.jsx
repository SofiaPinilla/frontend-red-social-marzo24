import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/postdetail/"+post.id}>
            <p>{post.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
