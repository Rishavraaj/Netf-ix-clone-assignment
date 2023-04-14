import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Cast = ({ data }) => {
  const { url } = useSelector((state) => state.home);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <MainWrapper>
      <CastWrapper>
        <Heading>Top Casts</Heading>
        {data && (
          <Carousel responsive={responsive}>
            {data.map((item) => (
              <CastersDetails key={item.id}>
                <CasterImage>
                  <img src={url?.poster + item?.profile_path} alt="" />
                </CasterImage>
                <Name>{item.name}</Name>
                <Character>{item.character}</Character>
              </CastersDetails>
            ))}
          </Carousel>
        )}
      </CastWrapper>
    </MainWrapper>
  );
};

export default Cast;

const MainWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
`;

const CastWrapper = styled.div`
  margin: 60px 0px;
`;

const Heading = styled.span`
  font-weight: 600;
  font-size: 30px;
`;

const CastersDetails = styled.div`
  margin: 25px;
`;

const CasterImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Name = styled.span``;
const Character = styled.span``;
