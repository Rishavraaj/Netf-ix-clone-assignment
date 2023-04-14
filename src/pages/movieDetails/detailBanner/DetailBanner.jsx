import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Rating from "../../../components/rating/Rating";

const MovieDetailBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();

  const { data } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const bgImg = url?.backgroundImg + data?.backdrop_path;

  const posterImg = url?.poster + data?.poster_path;

  const director = crew?.filter((f) => f.job === "Director");

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <>
      <MovieDetailBannerWrapper>
        <BackgroundImg>
          <img src={bgImg} alt="" />
        </BackgroundImg>
        <OpacityLayer />
      </MovieDetailBannerWrapper>
      <DetailWrapper>
        <LeftSideWrapper>
          <ImageWrapper>
            <img src={posterImg} alt="" />
          </ImageWrapper>
        </LeftSideWrapper>
        <RightSideWrapper>
          <AllDetails>
            <Title>
              <span>{data?.title || data?.name}</span>
            </Title>
            <RatingTrailerWrapper>
              <Rating rating={data?.vote_average.toFixed(1)} />
              <Trailer>
                <span
                  onClick={() => {
                    setShow(true);
                    setVideoId(video?.key);
                  }}
                >
                  Watch Trailer
                </span>
              </Trailer>
            </RatingTrailerWrapper>
            <Overview>
              <span>Overview</span>
              <span>{data?.overview}</span>
            </Overview>
            <Info>
              {data?.status && <span>Status: {data?.status}</span>}

              <span>Relesed: {data?.release_date || data?.first_air_date}</span>

              {data?.runtime && (
                <span>Duration: {toHoursAndMinutes(data?.runtime)}</span>
              )}
            </Info>
            <DirectorWrapper>
              <span> Ditector : </span>
              {director?.length > 0 &&
                director?.map((d, i) => (
                  <span key={i}>
                    {d.name} {director?.length - 1 !== i && ", "}
                  </span>
                ))}
            </DirectorWrapper>
            <WritterWrapper></WritterWrapper>
          </AllDetails>
        </RightSideWrapper>
        <VideoPop>
          {show && (
            <VideoPopup
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
              show={show}
            />
          )}
        </VideoPop>
      </DetailWrapper>
    </>
  );
};

export default MovieDetailBanner;

const MovieDetailBannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

const DetailWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSideWrapper = styled.div`
  width: 50%;
  height: 600px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const RightSideWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AllDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  span {
    font-weight: 500;
    font-size: 50px;
  }
`;

const RatingTrailerWrapper = styled.div`
  display: flex;
  gap: 150px;
  font-size: 30px;
`;

const Trailer = styled.div``;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span:first-child {
    font-size: 30px;
    font-weight: 500;
  }

  span:last-child {
    font-size: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
`;
const DirectorWrapper = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
`;
const WritterWrapper = styled.div``;

const VideoPop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* width: 50%;
  height: 50%; */
  z-index: 11;
  transform: translate(-50%, -50%);
`;
