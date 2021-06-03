import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <section>
      <ul>
        {movies.map((m, i) => (
          <MovieItem key={i} id={m.id} title={m.title}/>
        ))}
      </ul>
    </section>
  );
}
