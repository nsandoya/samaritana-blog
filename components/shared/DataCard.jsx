import { getMedia } from '@/data/helpers/fetchCloudinaryMedia';
import Link from 'next/link';
import React from 'react'

const PostCard = ({post, section}) => {
  //const apiUrl = process.env.NEXT_STRAPI_API_BASE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  const {documentId, title, wrote_at, content, author} = post

  return (
    <div id={documentId}>
      <div className="card">
        {author? <h3>{author}</h3>
        :<h3>{title}</h3>}
          
          <p>{content.slice(0,150)}...</p>
          <div className='pill medium'>
            {wrote_at}
          </div>
          
        <Link href={`/${section}/${documentId}`}>
          <button className='btn-primary'>Detalles</button>
        </Link>
          
        </div>
    </div>
  )
}

export default PostCard
