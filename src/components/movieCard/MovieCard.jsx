import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating from "../rating/Rating";
import styled from "styled-components";

const MovieCard = ({ data, endpoint }) => {
  const { url } = useSelector((state) => state.home);

  const posterImage = url?.poster + data?.poster_path;

  const navigate = useNavigate();

  return (
    <MovieCardWrapper
      onClick={() => navigate(`/${data?.media_type || endpoint}/${data?.id}`)}
    >
      <Rating rating={data?.vote_average.toFixed(1)} />
      <MoviCardImage>
        <img src={posterImage} alt="posterImage" />
      </MoviCardImage>
      <MovieCardDetails>
        <span>{data?.title || data?.name}</span>
        <span>Release: {data?.release_date || data?.first_air_date}</span>
      </MovieCardDetails>
    </MovieCardWrapper>
  );
};

export default MovieCard;

const MovieCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  transition: 0.3s all ease-in-out;
  &:hover {
    scale: 1.2;
    cursor: pointer;
  }
`;

const MoviCardImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  span:last-child {
    color: #00c8ff;
  }
`;
