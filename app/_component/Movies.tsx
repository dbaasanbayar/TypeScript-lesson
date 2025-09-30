import { MovieCard } from "@/app/_component/MoviesCard";
import { MovieType } from "@/lib/types";

export const Movies = (props: { movies: MovieType[] }) => {
  const { movies } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
