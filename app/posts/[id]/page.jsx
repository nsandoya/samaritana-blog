import React from 'react'

import { notFound } from 'next/navigation';
import { getMedia } from '@/data/helpers/fetchCloudinaryMedia';

const getPostById = async (url) => {
  try {
    const res = await fetch(`${url}?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Post no existe');
      }
      throw new Error('Error al obtener el post');
    }

    const {data} = await res.json();
    const img = await getMedia(data.featuredImage?.url, data.featuredImage?.name);
    //console.log("Respuesta", img)

    return { post: data, img };
  } catch (error) {
    console.error('Error en getPostById:', error);
    throw error;
  }
}


const BlogPost = async ({ params }) => {
  try{
    const { id } = await params;
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const url = `${apiUrl}/${id}`
    const data = await getPostById(url);
  
    if (!data || !data.post) {
      throw new Error('Not found');
    }
  
    const {post, img} = data;
    
    return (
      <main className='grid grid-cols-1 gap-4'>
        <h1>{post.title}</h1>
        <img 
          src={img}
          width={post.featuredImage.formats.medium.width} 
          height={post.featuredImage.formats.medium.height} 
        />
        <p>{post.content}</p>
      </main>
    );
  }catch(error){
    notFound()
    //console.log(error)
  }

};

export default BlogPost;
