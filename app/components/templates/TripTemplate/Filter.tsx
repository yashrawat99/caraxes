"use client";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FilterComponent, FilterType } from "./trips.spec";
// import greenCross from '../../../Icons/svg/green-cross.svg';

const Filters = ({ handleFilterSelect }: FilterComponent) => {
  const { tripFilters } = useSelector((state: any) => state.marketPlace);
  const { isFetching, filters }: FilterType = tripFilters;

  return (
    <FlexWrapper>
      {isFetching ? (
        <Skeleton>
          <div className="filter-card"></div>
          <div className="filter-card"></div>
          <div className="filter-card"></div>
        </Skeleton>
      ) : (
        filters.map((tab) => (
          <FilterButton
            key={tab.key}
            onClick={() => handleFilterSelect(tab.key)}
            className={`${tab.selected ? "selected" : ""}`}
          >
            {tab.value}
            {tab.selected && (
              <div className="cross__container">
                {/* <img src={greenCross} alt="" /> */}
              </div>
            )}
          </FilterButton>
        ))
      )}
    </FlexWrapper>
  );
};

export default Filters;

const FlexWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  margin-bottom: 35px;
  padding-left: 16px;
`;
const FilterButton = styled.button`
  padding: 9px 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.06);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border: none;
  display: flex;
  gap: 10px;
  &.selected {
    background: #e7f4e8;
    border: 1px solid #248e28;
    color: #248e28;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
  }
  .cross__container {
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;
  }
`;
const Skeleton = styled.div`
  background-color: rgb(244, 245, 250);
  min-height: 50px;
  width: fit-content;
  border-radius: 12px;
  position: relative;
  padding-left: 16px;
  display: flex;
  gap: 10px;
  overflow-x: hidden;
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
  .filter-card {
    height: 50px;
    border-radius: 12px;
    background-color: #fff;
    width: 84px;
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
