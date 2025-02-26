import styled from "styled-components";
import { theme } from "@/lib/global-styles";

export const Container = styled.section`
  max-width: ${theme.devices.containerXL};
  margin: 0 auto;
  padding: 0px 24px;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Text = styled.h2`
  color: ${theme.secondary};
  font-size: 3.2rem;
`;
