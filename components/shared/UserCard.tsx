import React from 'react'
interface User {
    userImage?: string;
    username?: string;
  }
const UserCard = ({ user }: { user: User }) => {
    const {userImage, username} = user
  return (
    <div className="w-full flex flex-row items-center rounded-xl card bg-white">
        <img 
            src={userImage}
            width={40} height={40}
            className="rounded-full mx-4"
        />
        <h3>
            Bienvenido/a, {username}
        </h3>
        {/* Usuario conectado: {JSON.stringify(session.user)} */}
    </div>
  )
}

export default UserCard
