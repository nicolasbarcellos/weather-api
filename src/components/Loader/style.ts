import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  opacity: 0.5;
  background: #000;
`