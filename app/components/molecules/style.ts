import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Tab = styled.div`
  font-size: 18px;
  padding: 8px 16px;
  &.selected {
    border-bottom: 2px solid #0066ff;
    font-weight: 600;
    color: #0066ff;
  }
`;
