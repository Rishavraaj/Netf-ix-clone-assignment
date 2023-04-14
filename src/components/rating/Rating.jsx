import React from "react";
import styled from "styled-components";

const Rating = ({ rating }) => {
  return (
    <RatingWrapper>
      <RatingBg rating={rating}>
        <span>rating: {rating}</span>
      </RatingBg>
    </RatingWrapper>
  );
};

export default Rating;

const RatingWrapper = styled.div`
  position: relative;
`;
const RatingBg = styled.div`
  position: absolute;
  z-index: 10;
  top: 10px;
  width: 90px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 0 10px 10px 0;
  background: ${(props) => {
    if (props.rating > 7) {
      return "green";
    } else if (props.rating > 4) {
      return "orange";
    } else {
      return "red";
    }
  }};

  /* span {
    padding-left: 5px;
  } */
`;
