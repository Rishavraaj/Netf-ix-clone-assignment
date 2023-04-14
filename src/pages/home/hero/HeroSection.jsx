import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [background, setBackground] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const { data } = useFetch("/movie/upcoming");

  useEffect(() => {
    const randomIndx = [Math.floor(Math.random() * 20)];
    const randomMovie = data?.results?.[randomIndx];
    const bg = url.backgroundImg + randomMovie?.backdrop_path;
    setBackground(bg);
    setMovieDetails(randomMovie);
  }, [data]);

  return (
    <div>
      <HeroWrapper>
        <HomeTumbnail>
          <img src={background} alt="background" />
        </HomeTumbnail>
        <OpacityLayer />
        <MovieDetails>
          <MovieTitle>{movieDetails?.title}</MovieTitle>
          <MovieDes>{movieDetails?.overview}</MovieDes>
          <Buttons>
            <button
              onClick={() =>
                navigate(
                  `/${movieDetails?.media_type || "movie"}/${movieDetails?.id}`
                )
              }
            >
              <AiOutlineInfoCircle />
              More Info
            </button>
          </Buttons>
        </MovieDetails>
      </HeroWrapper>
    </div>
  );
};

export default HeroSection;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  background: #000000;
`;
const HomeTumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OpacityLayer = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #000000 79.17%);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const MovieDetails = styled.div`
  position: absolute;
  z-index: 10;
  color: #fff;
  width: 36%;
  display: flex;
  flex-direction: column;
  top: 150px;
  left: 8%;
  gap: 30px;
  @media (max-width: 768px) {
    width: 84%;
    top: 100px;
  }
`;

const MovieTitle = styled.span`
  font-size: 40px;
  font-weight: 700;
`;
const MovieDes = styled.span`
  font-size: 17px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 30px;
  button {
    padding: 10px 14px;
    font-size: 17px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
  }

  button:first-child {
    background: #fff;
  }

  button:last-child {
    background: #575b5a;
    color: #fff;
    opacity: 0.9;
  }
`;
