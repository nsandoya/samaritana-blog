import { notFound } from 'next/navigation';
import React from 'react'

// Obtiene el post por ID
const getPostById = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('Post no existe'); // Lanza un error personalizado
    }
    throw new Error('Error al obtener el post');
  }
  return res.json(); // Devuelve los datos JSON de la respuesta
}
  //return res.json()



// Componente de la página dinámica
const BlogPost = async ({ params }) => {
  try{
    const { id } = await params;
    const apiUrl = process.env.STRAPI_PUBLIC_API_URL;
    const url = `${apiUrl}/${id}`
    //console.log("Ruta", url)
    const data = await getPostById(url);
  
    if (!data || !data.data) {
      throw new Error('Not found');
    }
  
    const {data:post} = data
    
    return (
      <main>
        <h1>{post.title}</h1>
        {/* <img src={post.featuredImage.url}/> */}
        <p>{post.content}</p>
      </main>
    );
  }catch(error){
    notFound()
  }

};

export default BlogPost;
