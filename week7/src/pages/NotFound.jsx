import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
}

export default NotFound;