import React from 'react';
import CreateForm from '../components/CreateForm';

const getAuthors = async () => {
    //https://samaritana-blog.onrender.com/api/authors?populate=*
    const url = process.env.NEXT_PUBLIC_STRAPI_API_URL
    const res = await fetch(`${url}authors?populate=*`)
    //const {data} = await res.json()
    /* console.log("###Link",`${url}authors?populate=*` )
    console.log("###Autores", res)  */
    return res.json()
  }
const CreatePost = async () => {
    /* const session = await getServerSession(authOptions);

    const res = await fetch(`${process.env.NEXT_STRAPI_API_BASE_URL}/authors?populate=*`);
    const data = res.json()
    console.log("Link", `${process.env.NEXT_STRAPI_API_BASE_URL}/authors?populate=*`)
    console.log("###Autores", data.data)
    return data.data */
    
      
    const {data:authors} = await getAuthors()
    console.log("###Authors", authors)

    return (
        <main>
            <h2 className="text-primary text-center">Add a new post</h2>
            {/* Client component */}
            <CreateForm authors={authors}/>
        </main>
    )
}

export default CreatePost
