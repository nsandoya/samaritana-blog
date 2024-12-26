import Image from "next/image";
import Link from "next/link";
import {redirect} from 'next/navigation'

import Loading from './loading';
import { getServerSession } from "next-auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import UserCard from "@/components/shared/UserCard";
import ItemsList from "@/components/shared/ItemsList";

export const metadata = {
  title: 'Home',
  description: 'Samaritana blog admin website :)'
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

  

  return (
    <div className="">
      <main>
        {/* <UserCard user={session.user}/> */}
          <div className="w-full flex flex-row items-center rounded-xl card bg-white">
            <img 
              src={userImage}
              width={40} height={40}
              className="rounded-full mx-4"
            />
            <h3>
              Bienvenido/a, {username}
            </h3>
          </div>
          <ItemsList section={"reviews"}></ItemsList>
      </main> 
    </div>
  );
}

