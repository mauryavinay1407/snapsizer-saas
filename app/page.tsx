"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter();
  const words = [
    {
      text: "Snap",
    },
    {
      text: ",Size",
    },
    {
      text: "and",
    },
    {
      text: "Compress",
    },
    {
      text: "with",
    },
    {
      text: "Snapsizer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Frame It Right, Compress It Tight
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
        onClick={()=>router.push('/home')}
        >
          Explore
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
         onClick={()=>router.push('/sign-up')}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
