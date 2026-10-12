import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/postsData';

function BlogDetails() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="page-container">
        <h2>Post Not Found!</h2>
        <p>The requested blog article does not exist.</p>
        <Link to="/blog" className="btn">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="page-container post-details">
      <h2>{post.title}</h2>
      <p className="meta">By <strong>{post.author}</strong> on {post.date}</p>
      <hr />
      <p className="content">{post.content}</p>
      <Link to="/blog" className="btn secondary">← Back to Blog</Link>
    </div>
  );
}

export default BlogDetails;