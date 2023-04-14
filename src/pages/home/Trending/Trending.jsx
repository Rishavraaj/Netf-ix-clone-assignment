import React from "react";
import styled from "styled-components";
import MovieCard from "../../../components/movieCard/MovieCard";
import useFetch from "../../../hooks/useFetch";
import Carousell from "../../../components/carousell/Carousell";

const Trending = () => {
  const { data } = useFetch(`/trending/all/week`);

  return (
    <TrendingWrapper>
      <Heading>Trending</Heading>
      {data && (
        <Carousell>
          {data?.results?.map((item) => (
            <MovieCard key={item?.id} data={item} />
          ))}
        </Carousell>
      )}
    </TrendingWrapper>
  );
};

export default Trending;

const TrendingWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  margin: 50px 0;
`;
