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
    if(data.featuredImage){
        const img = await getMedia(data.featuredImage?.url, data.featuredImage?.name);
        return { post: data, img };
    }
    return {post: data}
    //console.log("Respuesta", img)

  } catch (error) {
    console.error('Error en getPostById:', error);
    throw error;
  }
}

const ReviewDetails = async ({ params }) => {
  try{
    const { id } = await params;
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const url = `${apiUrl}reviews/${id}`
    const data = await getPostById(url);
  
    if (!data || !data.post) {
      throw new Error('Not found');
    }
  
    const {post, img} = data;
    
    
    return (
      <main className='grid grid-cols-1 gap-4'>
        <h1>{post.author}</h1>
        <span className='text-slate-600 '>Fecha: <span className='font-semibold'>{post.wrote_at}</span></span>
        {img &&
            <img 
            src={img}
            width={post.featuredImage.formats.medium.width} 
            height={post.featuredImage.formats.medium.height} 
            />
        }
        
        <p>{post.content}</p>
      </main>
    );
  }catch(error){
    notFound()
    //console.log(error)
  }

};

export default ReviewDetails;
