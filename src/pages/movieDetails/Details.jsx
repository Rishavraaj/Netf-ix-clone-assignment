import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailBanner from "./detailBanner/DetailBanner";
import styled from "styled-components";
import Cast from "./cast/Cast";
import Similar from "./similar/Similar";

const MovieDetails = () => {
  const { mediaType, id } = useParams();

  const { data } = useFetch(`/${mediaType}/${id}/videos`);

  const { data: credits } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <MovieDetailWrapper>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} />
      <Similar mediaType={mediaType} id={id} />
    </MovieDetailWrapper>
  );
};

export default MovieDetails;

const MovieDetailWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
`;

const DetailWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 50px;
`;
