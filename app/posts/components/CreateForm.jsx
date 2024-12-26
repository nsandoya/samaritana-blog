"use client" // Needs hydration

import React, { useEffect } from 'react';

import {useRouter} from 'next/navigation'
import { useForm } from '@/hooks/useForm';
import { getServerSession } from 'next-auth';

//const session = await getServerSession(authOptions);



const CreateForm = ({authors}) => {
  //const authors = await getAuthors()
    /* await getAuthors()
    const url = process.env.NEXT_STRAPI_API_BASE_URL
    const handleSubmit = async(e) => {
      e.preventDefault();
      // loading: true
      // petición http
      const post = {
        title, content // , excerpt, author, createdAt 
      }

    const res = await fetch(`${url}/posts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/JSON",
        "bearer": session.token,
      },
      body: JSON.stringify({...post})
    })

  } */

    /* useEffect(() => {
      
    }, []) */
    /* const blogPost = {
      title: "", 
      content: "", 
      excerpt: "", 
      author: {}
    }

    const {body, title, date, imageUrls, onInputChange, formState} = useForm(blogPost);

    const onSubmit = async (formData) => {

    } */

    return (
        <form /* onSubmit={handleSubmit} */ className="w-1/2">
        <label>
          <span>Título:</span>
          <input
            required 
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            /* value={title} */
          />
        </label>
        <label>
          <span>Contenido del blog:</span>
          <textarea
            required
            name="content"
            onChange={(e) => setBody(e.target.value)}
            /* value={body} */
          />
        </label>
        <label>
          <span>Priority:</span>
          <select 
            /* onChange={(e) => setPriority(e.target.value)}
            value={priority} // priority es el state */
          >
            {authors?.map((author) => (
              <option id={author.id} value={author}>{author.name}</option> 
            ))}
            
          </select>
        </label>
        <button 
          className="btn-primary" 
          /* disabled={isLoading} */
        > Crear
        {/* {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>} */}
      </button>
      </form>
    )
}

export default CreateForm
