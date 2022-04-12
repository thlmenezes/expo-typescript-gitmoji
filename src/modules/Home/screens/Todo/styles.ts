import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${({ theme }) => theme.background};
  padding: 0 10%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.title};
  /* flex: 1; */
  text-align: center;
  font-size: 26px;
  border-radius: 10px;
  padding: 10px 8px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  margin: 12px;
  border: 1px;
  border-radius: 20px;
  padding-left: 5%;
`;
