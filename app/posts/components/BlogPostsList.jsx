import React from 'react';

import PostCard from './PostCard'

async function getBlogPosts() {

  //await new Promise(resolve => setTimeout(resolve, 3000))

    const strapiApiUrl = process.env.STRAPI_PUBLIC_API_URL;
    const res = await(fetch(strapiApiUrl, {
      next:{
        revalidate: 0 // El caché estará inactivo para esta página
      }
    }))
    //console.log(res)
    return res.json()
  }
  
  export default async function BlogPostsList () {
    const {data:blogPosts} = await getBlogPosts()
    //console.log("Blogs",blogPosts)
  return (
    <div>
      <h1>Blog Post list</h1>
      {blogPosts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  )
}

//export default BlogPostsList
