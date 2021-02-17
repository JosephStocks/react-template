import styled from "styled-components";

export const DivSC = styled.div`
  background-color: ${(props) => props.bgc ?? "purple"};
  width: 400px;
  height: 400px;
  color: white;
`;

//shortcut: 'sc' for styled component

export const H1SC = styled.div`
  background-color: ${(props) => props.bgc ?? "purple"};
  width: 400px;
  height: 400px;
  color: white;
`;

export const Paper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  height: ${(props) => props.height ?? "300px"};
  width: ${(props) => props.width ?? "300px"};
  margin-left: auto;
  margin-right: auto;
`;
