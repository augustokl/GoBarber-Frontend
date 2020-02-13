import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: #eee;
  }
  input {
    display: none;
  }
`;
