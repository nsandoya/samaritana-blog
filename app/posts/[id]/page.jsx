import React from 'react'

//import Error from 'next/error';
import { notFound } from 'next/navigation';

// Obtiene el post por ID
const getPostById = async (url) => {
  //await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${url}?populate=*`);
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
    const { id } = params;
    const apiUrl = process.env.STRAPI_PUBLIC_API_URL;
    const url = `${apiUrl}/${id}`
    //console.log("Ruta", url)
    const data = await getPostById(url);
  
    if (!data || !data.data) {
      throw new Error('Not found');
    }
  
    const {data:post} = data;
    //console.log("Qué ha llegado",data)
    
    return (
      <main>
        <h1>{post.title}</h1>
        <img 
          src={post.featuredImage.formats.small.url}
          width={post.featuredImage.formats.small.width} 
          height={post.featuredImage.formats.small.height} 
        />
        <p>{post.content}</p>
      </main>
    );
  }catch(error){
    //Error()
    notFound()
    //console.log(error)
  }

};

export default BlogPost;
