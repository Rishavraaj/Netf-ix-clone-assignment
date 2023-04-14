import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard/MovieCard";
import styled from "styled-components";
import { fetchDataFromApi } from "../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

const Explore = () => {
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);

  const { media } = useParams();

  const fetchInitialData = () => {
    fetchDataFromApi(`/discover/${media}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${media}?page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    fetchInitialData();
  }, [media]);

  return (
    <MainWrapper>
      <Heading>
        {media === "movie" ? `All ${media} Shows` : `All ${media} Shows`}
      </Heading>
      <InfiniteScroll
        dataLength={data?.results?.length || []}
        next={fetchNextPageData}
        hasMore={pageNum <= data?.total_pages}
      >
        <ExploreWrapper>
          {data?.results?.map((item) => (
            <MovieCard data={item} endpoint={media} />
          ))}
        </ExploreWrapper>
      </InfiniteScroll>
    </MainWrapper>
  );
};

export default Explore;

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

const Heading = styled.h2`
  margin: 50px 0;
  text-transform: uppercase;
`;

const ExploreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }
`;
