import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./styles/PagePost.css";

const PagePost = ({ posts, handleDelete, setIsEditting}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const nav = useNavigate()

  const handleEditting = () => {
    setIsEditting(true)
    nav(`/edit/${post.id}`)
  }

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/post/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PagePost;
