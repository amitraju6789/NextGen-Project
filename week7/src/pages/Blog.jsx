import { Link } from 'react-router-dom';
import { posts } from '../data/postsData';

function Blog() {
  return (
    <div className="page-container">
      <h2>All Articles</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <small>{post.date} • {post.author}</small>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read Full Post →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;