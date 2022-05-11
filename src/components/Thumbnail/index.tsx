import { convertDateToDays } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import { Image, Info, Title, ReleaseDate } from "./Thumbnail.styles";

type Props = {
  image: string;
  movieId?: number;
  clickable: boolean;
  movieHeight?: boolean;
  movieTitle: string;
  releaseDate: string;
}

const Thumbnail: React.FC<Props> = ({ image, movieId, clickable, movieHeight, movieTitle, releaseDate }) => {
  
  return (
    <>
      {clickable ? (
          <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />
            <Info>
              <Title>{movieTitle}</Title>
              <ReleaseDate>Release date:{" "} {convertDateToDays(releaseDate)}{" "} days ago</ReleaseDate>
            </Info>
          </Link>
      ) : (

        <Image src={image} alt="movie-thumb" movieHeight={movieHeight} />


      )}
    </>
  );
};

export default Thumbnail;
