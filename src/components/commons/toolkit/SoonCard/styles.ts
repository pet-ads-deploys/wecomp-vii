import styled from "styled-components";

export const SoonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2%;

  width: 100%;
  height: 100%;
`;

export const InformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const SoonImage = styled.img<{ isMobile: boolean }>`
  width: 100%;
  max-width: ${({ isMobile }) => (isMobile ? "15rem" : "20rem")};
`;

export const SoonText = styled.span`
  padding-bottom: 0.25rem;

  color: var(--secondary-text-color);

  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
