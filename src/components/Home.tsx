import { useState } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config/config";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { AddToPlaylist, Wrapper, InPlaylist } from "./Home.styles";
import NoImage from "../images/no_image.jpg";


const Home: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const movieData = JSON.parse(localStorage.getItem('Playlist') as string) || [];
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  console.log(state);

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  const addToPlaylist = (mId: number, mTittle: string, mPath: string, mReleaseDate: string): void => {
    console.log(mId);

    const movieDetails = {
      movie_id: mId,
      movie_title: mTittle,
      movie_poster: mPath,
      movie_release_date: mReleaseDate
    };
    movieData.push(movieDetails);
    localStorage.setItem('Playlist', JSON.stringify(movieData));
    
    //reload page to show disabled button
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}


      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
      
        {state.results.map(movie => (
          <Wrapper>
            <Thumbnail
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieHeight={false}
              movieId={movie.id}
              movieTitle={movie.title}
              releaseDate={movie.release_date}
            />
            {
              !movieData.some((m: any) => m.movie_id === movie.id) ? (
                <AddToPlaylist onClick={() => addToPlaylist(movie.id, movie.title, movie.poster_path, movie.release_date)}>ADD TO PLAYLIST</AddToPlaylist>
              ) : (
                <InPlaylist>In Playlist</InPlaylist>
              )
            }
          </Wrapper>
        ))}
      </Grid>

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </>
  );
};
export default Home;

