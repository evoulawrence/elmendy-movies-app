import "./movieListItem.scss"
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from "../../movies";

type Props = {
    movieItem: Movie
    onAddClick: (movie: Movie) => void
}

const MovieListItem: React.FC<Props> = ({ movieItem, onAddClick }) => {

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        let l = 0;
        function updateColor(newl: number) {
            l = newl;
            el.style.backgroundColor = `#64c864${20 + l * 5}`;
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
                (e.currentTarget.style.backgroundColor = "#64c86420")
            }
        >
            <div id="movie-title">{movieItem.title}</div>
            <div>
                Release date:{" "}
                {differenceInDays(new Date(), fromUnixTime(movieItem.release_date))}{" "}
                days ago
            </div>
            <button id="add-button" onClick={() => onAddClick(movieItem)}>
                Add
            </button>
        </div>
    )
}

export default MovieListItem