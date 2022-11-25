import styled from "styled-components";

export const StyledAccordion = styled.div`
  width:100%;
  display: block;
  text-align: center;
`;

export const StyledAccordionButton = styled.button<{isOpen: boolean}>`
  background: ${prop=>prop.isOpen ? 'white' : '#ccffff'};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  width:100%;
`;

export const StyledAccordionContent = styled.div<{isOpen: boolean}>`
  padding-top:${prop=>prop.isOpen ? '1rem' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  max-height: ${prop=>prop.isOpen ? '350px' : '0'};
  text-align: left;
`;
