import styled from "@emotion/styled";
import type { ThemeType } from "./types/component";
import { dark01, white } from "./styles/abstracts/variables";

export const AppShell = styled.div<{theme: ThemeType}>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme === "light" ? white : dark01}
`;

export const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AppImageContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export const TodoItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 540px;
  gap: 24px;
`;

export const TodoItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AppContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppHeader = styled.div`
  max-width: 540px;
  width: 540px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
