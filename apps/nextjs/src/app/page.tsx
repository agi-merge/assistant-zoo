import { Suspense } from "react";

import { AuthShowcase } from "./_components/auth-showcase";

import "./_components/posts";

import { PostCardSkeleton, PostList } from "./_components/posts";
import SignInSide from "./_components/signInSide";

export const runtime = "edge";

export default function HomePage() {
  return (
    // <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    // <AuthShowcase />

    <SignInSide />
    // <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll">
    //   <Suspense
    //     fallback={
    //       <div className="flex w-full flex-col gap-4">
    //         <PostCardSkeleton />
    //         <PostCardSkeleton />
    //         <PostCardSkeleton />
    //       </div>
    //     }
    //   >
    //     <PostList />
    //   </Suspense>
    // </div>
    // </main>
  );
}
