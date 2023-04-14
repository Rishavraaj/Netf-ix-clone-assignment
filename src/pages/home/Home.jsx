import React from "react";
import styled from "styled-components";
import HeroSection from "./Hero/Herosection";
import Trending from "./Trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <HomeConatainer>
      <HeroSection />
      <Trending />
      <Popular />
      <TopRated />
    </HomeConatainer>
  );
};

export default Home;

const HomeConatainer = styled.div``;
