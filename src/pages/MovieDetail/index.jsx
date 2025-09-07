import MovieInfoCard from '@/shared/ui/MovieInfoCard';
import SimilarMovies from '@/shared/ui/SimilarMovies';
import CastList from '@/shared/ui/CastList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: '#fff';
`;

const MovieDetail = () => {
  return (
    <Wrapper>
      <MovieInfoCard />
      <SimilarMovies />
      <hr />
      <CastList />
    </Wrapper>
  );
};

export default MovieDetail;
