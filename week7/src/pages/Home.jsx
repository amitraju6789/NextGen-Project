import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container hero">
      <h1>Welcome to DevBlog 🚀</h1>
      <p>Exploring Web Development, React, and Software Engineering concepts.</p>
      <Link to="/blog" className="btn">Explore Blog Posts</Link>
    </div>
  );
}

export default Home;