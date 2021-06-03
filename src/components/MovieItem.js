import { Link } from 'react-router-dom';

export default function MovieItem({ title, id }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
  );
}
