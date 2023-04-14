import React from "react";
import Carousell from "../../../components/carousell/Carousell";
import MovieCard from "../../../components/movieCard/MovieCard";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";

const Popular = () => {
  const { data } = useFetch(`/tv/popular`);

  return (
    <PopularWrapper>
      <Heading>Popular</Heading>
      {data && (
        <Carousell>
          {data?.results?.map((item) => (
            <MovieCard key={item.id} data={item} endpoint={"tv"} />
          ))}
        </Carousell>
      )}
    </PopularWrapper>
  );
};

export default Popular;

const PopularWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;
const Heading = styled.h2`
  margin: 50px 0;
`;
