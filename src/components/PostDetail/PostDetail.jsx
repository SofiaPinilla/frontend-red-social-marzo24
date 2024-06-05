import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const PostDetail = () => {
  const { id } = useParams();
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if(isLoading){
    return <Spin/>
  }

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.User?.name}</p>
    </div>
  );
};

export default PostDetail;
