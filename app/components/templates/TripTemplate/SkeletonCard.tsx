"use client";
import React, { useMemo } from "react";
import styled from "styled-components";
const SkeletonCard = () => {
  const SkeletonCardMemo = useMemo(() => {
    return (
      <Wrapper>
        <SkeletonContainer>
          <Box width="80%" height="36px" />
          <Box width="90%" height="20px" />
          <div className="divider"></div>
          <Box width="40%" height="20px" />
          <Box width="40%" height="20px" />
          <div className="divider"></div>
          <Box width="100%" height="42px" />
        </SkeletonContainer>
      </Wrapper>
    );
  }, []);
  return SkeletonCardMemo;
};

export default SkeletonCard;

const Wrapper = styled.div`
  padding: 0px 16px;
`;
const SkeletonContainer = styled.div`
  background-color: #fff;
  min-height: 100px;
  margin-bottom: 27px;
  border-radius: 12px;
  height: 312px;
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(214, 214, 214, 0.2),
      transparent
    );
    animation: shimmer 1s infinite;
  }
  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
  .divider {
    margin: 0 auto;
    border: 1px solid #ebedf1;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;
const Box = styled.div<BoxProps>`
  height: ${(props) => props.height};
  background-color: #f5f5f5;
  border-radius: 6px;
  width: ${(props) => props.width};
`;

interface BoxProps {
  width: string;
  height: string;
}
