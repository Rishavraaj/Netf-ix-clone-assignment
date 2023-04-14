import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Browse = ({ setBrowse }) => {
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
      setBrowse(false);
    } else if (type === "tv") {
      navigate("/explore/tv");
      setBrowse(false);
    } else {
      navigate("/explore/popular");
      setBrowse(false);
    }
  };

  return (
    <BrowseWrapper>
      <Navlists>
        <ul>
          <li onClick={() => handleNavigate("tv")}>TV Shows</li>
          <li onClick={() => handleNavigate("movie")}>Movies</li>
        </ul>
      </Navlists>
    </BrowseWrapper>
  );
};

export default Browse;

const BrowseWrapper = styled.div`
  @media (max-width: 768px) {
    position: relative;
  }
`;

const Navlists = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    width: 200px;
    top: 20px;
    left: -10px;
    z-index: 70;
    ul {
      list-style-type: none;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`;
