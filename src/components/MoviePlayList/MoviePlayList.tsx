import "./moviePlayList.scss"
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from "../../movies";
import React from "react";

type Props = {
    movieItem: Movie
    onRemoveClick: (movie: Movie) => void
}

const MoviePlayList: React.FC<Props> = ({ movieItem, onRemoveClick }) => {

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        let l = 0;
        function updateColor(newl: number) {
            l = newl;
            el.style.backgroundColor = `#c86464${20 + l * 5}`;
            if (l < 10) {
                setTimeout(() => updateColor(l + 1), 25);
            }
        }
        setTimeout(() => updateColor(l + 1), 25);
    }

    return (
        <div
            id="movie"
            style={{ width: 400, height: 100, border: "1px solid black" }}
            onMouseOver={handleMouseOver}
            onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#c8646420")
            }
        >
            <div id="movie-title">{movieItem.title}</div>
            <div>
                Release date:{" "}
                {differenceInDays(new Date(), fromUnixTime(movieItem.release_date))}{" "}
                days ago
            </div>
            <button id="remove-button" onClick={() => onRemoveClick(movieItem)}>
                Remove
            </button>
        </div>
    )
}

export default MoviePlayList