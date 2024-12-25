import Link from 'next/link';
import React from 'react'

const PostCard = ({post}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div id={post.documentId}>
      <div className="card">
          <h3>{post.title}</h3>
          <p>{post.content.slice(0,150)}...</p>
          <div className='pill medium'>
            {post.wrote_at}
          </div>
          
        <Link href={`${apiUrl}/posts/${post.documentId}`}>
          <button className='btn-primary'>Detalles</button>
        </Link>
          
        </div>
    </div>
  )
}

export default PostCard
