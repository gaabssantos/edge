import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* garante que ele ocupe o espaço disponível */

  h2 {
    color: white;
    margin-bottom: 15px;
    text-align: center;
  }

  input {
    padding: 12px 16px;
    width: 50%;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: border-color 0.3s, box-shadow 0.3s;

    &::placeholder {
      color: #aaa;
      text-align: center;
    }

    &:focus {
      border-color: #4c8bf5;
      box-shadow: 0 0 0 3px rgba(76, 139, 245, 0.2);
    }
  }
`;
