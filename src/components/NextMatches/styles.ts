import styled from "styled-components";

export const MatchesCardContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
  }
`;

export const Match = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const MatchTeams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const MatchInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  text-align: center;
`;
