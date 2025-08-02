import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LogoCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #4c8bf5;
  box-shadow: 0 4px 8px rgba(76, 139, 245, 0.4);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: box-shadow 0.3s ease;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 6px 12px rgba(76, 139, 245, 0.7);
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TeamName = styled.div`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;
