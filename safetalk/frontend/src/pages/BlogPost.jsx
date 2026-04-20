import { useParams, Link } from 'react-router-dom';

// ... (posts object stays the same)

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Article not found</h2>
        <Link to="/blogs" className="text-blue-600 mt-4 inline-block underline">
          Return to Blog List
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 bg-white">
      {/* Navigation */}
      <Link to="/blogs" className="text-blue-600 flex items-center mb-8 hover:translate-x-[-4px] transition-transform">
        ← Back to Insights
      </Link>

      {/* Header */}
      <header className="text-center mb-10">
        <div className="text-6xl mb-6 animate-bounce-short">{post.image}</div>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </header>

      {/* Content Body */}
      <div 
        className="prose prose-blue lg:prose-xl mx-auto text-gray-700 leading-relaxed space-y-6"
        style={{ whiteSpace: 'pre-line' }}
      >
        {post.body}
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
        <div className="text-4xl mb-4">💙</div>
        <p className="text-gray-500 italic">
          Thank you for reading. Take a deep breath—you're doing great.
        </p>
      </footer>
    </article>
  );
}