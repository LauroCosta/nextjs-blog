import Link from 'next/link';

interface Post {
  id: number;
  title: string;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
