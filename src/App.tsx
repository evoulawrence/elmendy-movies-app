//import { differenceInDays, fromUnixTime } from "date-fns";
import { useState } from "react";
import "./App.scss";
import { Movie, movies } from "./movies";
import MovieListItem from "./components/MovieListItem/MovieListItem";
import MoviePlayList from "./components/MoviePlayList/MoviePlayList";
import SearchBox from "./components/SearchBox/SearchBox";

const App: React.FC = () => {
  const [leftList, setLeftList] = useState<Movie[]>(movies);
  const [rightList, setRightList] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (movie: Movie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item: Movie) => item.id !== movie.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
    leftList.push(movie);
    setLeftList(leftList);

    const newRightList = rightList.filter((item: Movie) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <main className="App">
      <section id="left-movie-container">
        <SearchBox
          search={search}
          setSearch={setSearch}
        />

        {
          leftList.map((movie: Movie) => {
            if (!movie.title.includes(search)) {
              return false;
            }
            return (
              <MovieListItem
                movieItem={movie}
                onAddClick={onAddClick}
              />
            )
          })
        }
      </section>

      <section id="right-movie-container">
        {
          rightList.map((movie: Movie) => {
            if (!movie.title.includes(search)) {
              return false;
            }
            return (
              <MoviePlayList
                movieItem={movie}
                onRemoveClick={onRemoveClick}
              />
            );
          })
        }
      </section>
    </main>
  );
}

export default App;
