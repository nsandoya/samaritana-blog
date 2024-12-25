import Image from "next/image";
import Link from "next/link";

import BlogPostList from './posts/components/BlogPostsList'

export const metadata = {
  title: 'Home',
  description: 'Project main page'
}

export default function Home() {
  return (
    <div className="">
      <main>
        <BlogPostList></BlogPostList>
        
      </main> 
    </div>
  );
}

