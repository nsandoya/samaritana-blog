"use client" // Needs hydration

import React from 'react';

import {useRouter} from 'next/navigation'

const CreateForm = () => {
    const blogPost = {
        
    }

    const {body, title, date, imageUrls, onInputChange, formState} = useForm(blogPost);

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>Title:</span>
          <input
            required 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Title:</span>
          <textarea
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span>Priority:</span>
          <select 
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </label>
        <button 
          className="btn-primary" 
          disabled={isLoading}
        >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
      </form>
    )
}

export default CreateForm
