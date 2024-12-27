
import {redirect} from 'next/navigation'

import ItemsList from '../components/shared/ItemsList';

import { getServerSession } from "next-auth";
import {authOptions} from '@/lib/auth'
import UserCard from "@/components/shared/UserCard";



export const metadata = {
  title: 'Home',
  description: 'Samaritana blog admin website :)'
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

  const user = {userImage, username}
  

  return (
    <div className="">
      <main>
          <UserCard user={user}/>
          <ItemsList section="posts" />
      </main> 
    </div>
  );
}

