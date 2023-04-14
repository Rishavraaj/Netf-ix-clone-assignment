import React from "react";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import Carousell from "../../../components/carousell/Carousell";
import MovieCard from "../../../components/movieCard/MovieCard";

const Similar = ({ mediaType, id }) => {
  const { data } = useFetch(`/${mediaType}/${id}/similar`);

  return (
    <SimilarWrapper>
      <Heading>Similar</Heading>
      {data && (
        <Carousell>
          {data?.results?.map((item) => (
            <MovieCard data={item} endpoint={mediaType} />
          ))}
        </Carousell>
      )}
    </SimilarWrapper>
  );
};

export default Similar;

const SimilarWrapper = styled.div``;

const Heading = styled.h2`
  margin: 50px 0;
`;
