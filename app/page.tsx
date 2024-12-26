import Image from "next/image";
import Link from "next/link";
import {redirect} from 'next/navigation'

import BlogPostList from './posts/components/BlogPostsList';
import Loading from './loading';
import { getServerSession } from "next-auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route'

export const metadata = {
  title: 'Home',
  description: 'Project main page'
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect("/api/auth/signin");
  }

  const userImage = (session.user?.image)
    ? session.user?.image
    : "https://via.placeholder.com/1080"

  const username = (session.user?.name)
    ? session.user?.name
    : "No user name"

  

  return (
    <div className="">
      <main>
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
          <BlogPostList></BlogPostList>
      </main> 
    </div>
  );
}

