import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/initial-data">Using initial data For Prefetching</Link>
      </p>
      <p>
        <Link href="/hydration">Using Hydration For Prefetching</Link>
      </p>
    </>
  );
}
