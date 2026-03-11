import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const DaysTabs = styled.div`
  display: flex;
  background: #fff;
  padding: 8px 12px; 
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 20px;
  margin-bottom: 50px;

  width: 100%; 
  max-width: 1100px; 
  
  justify-content: space-between; 
  align-items: center;
  gap: 10px;
  
  height: 65px; 

  @media (max-width: 900px) {
    height: auto;
    justify-content: center;
    padding: 10px;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? "#000" : "transparent"};
  color: ${props => props.$active ? "#fff" : "#000"};
  
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  
  height: 50px; 
  width: 200px; 
  border-radius: 10px; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    background: ${props => props.$active ? "#000" : "#f0f0f0"};
  }

  @media (max-width: 768px) {
    height: 40px;
    width: auto;
    min-width: 120px;
    font-size: 0.85rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px; 

  width: 100%;
  max-width: 1100px; 
  padding-left: 12px; 
  
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

export const TimeTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* MESMA LARGURA DO TabButton */
  width: 200px; 
`;

export const TimeButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? "#000" : "#fff"}; 
  color: ${props => props.$active ? "#fff" : "#000"};
  
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  
  height: 50px;
  border-radius: 10px;
  width: 100%;
  
  box-shadow: ${props => props.$active ? "none" : "0 4px 10px rgba(0, 0, 0, 0.08)"};

  &:hover {
    background: ${props => props.$active ? "#000" : "#f9f9f9"};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 0.9rem;
  }
`;

export const EventsList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
