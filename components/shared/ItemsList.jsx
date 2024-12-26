import React from 'react';

import PostCard from './DataCard'

async function getBlogPosts(section) {

  //await new Promise(resolve => setTimeout(resolve, 3000))

    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const url = `${strapiApiUrl}${section}`
    //console.log(section)
    const res = await(fetch(url, {
      next:{
        revalidate: 0 // El caché estará inactivo para esta página
      }
    }))

    return res.json()
  }
  
  export default async function ItemsList ({section}) {
    const {data:blogPosts} = await getBlogPosts(section)
    //console.log("Blogs",blogPosts)
  return (
    <div>
      <h1 className='capitalize'>{section} list</h1>
      {blogPosts.map((post) => (
        <PostCard post={post} section={section} ></PostCard>
      ))}
    </div>
  )
}

//export default BlogPostsList
