import React from 'react'

const PostCard = ({post}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div>
      <div className="card">
          <h3>{post.title}</h3>
          <p>{post.content.slice(0,150)}...</p>
          <a href={`${apiUrl}/posts/${post.documentId}`}>
            <button>Ir al post</button>
          </a>
        </div>
    </div>
  )
}

export default PostCard
