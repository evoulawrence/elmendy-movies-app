import { Wrapper, Content, Text } from "./MovieTitle.styles";

type Props = {
    movieTitle: string;
  }

const MovieTitle:React.FC<Props> = ({movieTitle}) => {
  return (
    <Wrapper>
      <Content>
        <Text>
            <h2>{movieTitle}</h2>
            <p>test</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieTitle;
