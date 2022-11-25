import styled from "styled-components";

export const StyledMobileComponent = styled.div`
  width:100%;
  @media (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledDesktopComponent = styled.div`
  width:100%;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: block;
  }
`;
// @todo better device width/group