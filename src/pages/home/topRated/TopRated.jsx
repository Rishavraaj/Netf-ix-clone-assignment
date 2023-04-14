import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "react-multi-carousel";
import Carousell from "../../../components/carousell/Carousell";
import MovieCard from "../../../components/movieCard/MovieCard";
import styled from "styled-components";

const TopRated = () => {
  const { data } = useFetch("/movie/top_rated");

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 4,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <TopRatedWrapper>
      <Heading>Top Rated</Heading>
      {data && (
        <Carousell>
          {data?.results?.map((item) => (
            <MovieCard key={item.id} data={item} endpoint={"movie"} />
          ))}
        </Carousell>
      )}
    </TopRatedWrapper>
  );
};

export default TopRated;

const TopRatedWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Heading = styled.h2`
  margin: 50px 0;
`;
