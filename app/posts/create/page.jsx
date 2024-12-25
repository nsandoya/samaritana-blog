import React from 'react';
import CreateForm from '../components/CreateForm';

const CreatePost = () => {


    return (
        <main>
            <h2 className="text-primary text-center">Add a new post</h2>
            {/* Client component */}
            <CreateForm />
        </main>
    )
}

export default CreatePost
