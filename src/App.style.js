import styled from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  padding: 20px;
  background-color: #4070f4;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 25px 45px rgba(0, 0, 0, 0.1);

  h1 {
    color: #fff;
    margin-bottom: 10px;
  }
`;

export const AddInput = styled.input`
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  height: 35px;
  font-size: 16px;
  font-weight: 500;
  padding: 0 15px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff7300;
  color: #f7f7f7;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    color: #ff7300;
  }
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px 0;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;

  p {
    font-size: 18px;
    font-weight: 500;
    color: #222;
    text-transform: capitalize;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  padding: 3px;

  .icon {
    cursor: pointer;
    font-size: 20px;
    color: #ff7300;
  }
`;
