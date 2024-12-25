import React from 'react'

// Obtiene el post por ID
const getPostById = async (url) => {
  const res = await fetch(url)
  return res.json()
    /* .then(res => res.json()); */
  /* if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json(); */
}

// Componente de la página dinámica
const BlogPost = async ({ params }) => {
  const { id } = await params;
  const apiUrl = process.env.STRAPI_PUBLIC_API_URL;
  const url = `${apiUrl}/${id}`
  console.log("Ruta", url)
  const data = await getPostById(url);
  console.log("Data", data)
  const {data:post} = data

  return (
    <main>
      <h1>{post.title}</h1>
      {/* <img src={post.featuredImage.url}/> */}
      <p>{post.content}</p>
    </main>
  );
};

export default BlogPost;
