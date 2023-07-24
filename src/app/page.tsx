import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/hydration-stream-suspense">
          (recommended method): React Query With Streamed Hydration --- Bad for
          SEO
        </Link>
      </p>
      <p>
        <Link href="/initial-data">
          Prefetching Using initial data --- Good for SEO
        </Link>
      </p>
      <p>
        <Link href="/hydration">
          Prefetching Using Hydration --- Good for SEO
        </Link>
      </p>
    </div>
  );
}
