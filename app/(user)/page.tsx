import { previewData } from "next/headers";
import { groq } from 'next-sanity'
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import post from "@/schemas/post";

const query = groq`
  *[_type =='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={
        <div role='status' >
          <p className="text-center text-lg animate-pulse text-[#f7ab0a]" >Loading Preview Data...</p>
        </div>
      } >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);
  console.log(posts)
  return (
    <BlogList posts={posts} />
  )
}

