import { useState, useEffect } from "react";
import { convertDateToDays } from "../../helpers/helpers";
import { Wrapper, Item, Poster, Title, ReleaseDate, RemoveButton } from "./MoviePlaylist.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/config";

export type PlayList = {
    movie_id: number;
    movie_title: string;
    movie_poster: string;
    movie_release_date: string;
};

const MoviePlayList: React.FC = () => {
    const [movieData, setMovieData] = useState<PlayList[]>([]);

    useEffect(() => {
        getItem();
        console.log('rendered')
    }, []);

    const getItem = async () => {
        try {
            const resp = await JSON.parse(localStorage.getItem('Playlist') as string);
            setMovieData(resp);
        } catch (e) {
            console.log({ "`Storage Util Error\nGet Item:`": e });
        }

    }

    const removeFromPlaylist = (mId: number) => {
        console.log(mId);
        const items = movieData.filter((item: PlayList) => item.movie_id !== mId);
        localStorage.setItem('Playlist', JSON.stringify(items)) as any;
        getItem();
    }
    return (
        <Wrapper>
            {
                movieData && movieData.length > 0 ? (movieData.map((item: PlayList) => (

                    <Item key={item.movie_id}>
                        <Poster src={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.movie_poster}`} alt="movie-thumb" />
                        <Title>{item.movie_title}</Title>
                        <ReleaseDate>Release date:{" "} {convertDateToDays(item.movie_release_date)}{" "} days ago</ReleaseDate>
                        <RemoveButton onClick={() => removeFromPlaylist(item.movie_id)}>REMOVE</RemoveButton>
                    </Item>
                ))
                ) : (
                    <p style={{color:'#000'}}>You don't have playlist. Please add!</p>
                )
            }
        </Wrapper>
    );
}

export default MoviePlayList;