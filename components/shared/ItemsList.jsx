import React from 'react';

import DataCard from './DataCard'

async function getBlogPosts(section) {

  //await new Promise(resolve => setTimeout(resolve, 3000))

    const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const url = `${strapiApiUrl}${section}?populate=*`
    console.log("URL",url)
    const res = await(fetch(url, {
      next:{
        revalidate: 0 // El caché estará inactivo para esta página
      }
    }))

    return res.json()
  }
  
  export default async function ItemsList ({section}) {
    const {data:posts} = await getBlogPosts(section)
    //console.log("Blogs",posts)
    
  return (
    <div key={section}>
      <h1 className='capitalize'>{section} list</h1>
      {posts.map((post) => (
        <DataCard post={post} section={section} ></DataCard>
      ))}
    </div>
  )
}

//export default BlogPostsList
