import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post) {
    notFound(); 
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.body}</p>
    </div>
  );
}
