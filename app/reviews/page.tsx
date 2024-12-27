
import {redirect} from 'next/navigation'

import { getServerSession } from "next-auth";
import {authOptions} from '@/lib/auth'
import ItemsList from "@/components/shared/ItemsList";
import UserCard from '@/components/shared/UserCard';

export const metadata = {
  title: 'Reviews',
  description: "People feedback about Samaritana's books"
}

export default async function Reviews() {
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
          <ItemsList section="reviews" />
      </main> 
    </div>
  );
}

