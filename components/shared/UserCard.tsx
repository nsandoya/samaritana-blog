import Image from 'next/image';
import React from 'react'
interface User {
    userImage?: string;
    username?: string;
  }
const UserCard = ({ user }: { user: User }) => {
    const userImage = (user?.userImage)
    ? user?.userImage
    : "https://via.placeholder.com/1080"

    const username = (user?.username)
    ? user?.username
    : "No user name"

  return (
    <div className="w-full flex flex-row items-center rounded-xl card bg-white">
        <Image 
          src={userImage} alt={userImage}
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
