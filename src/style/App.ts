import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  height: 100vh;
  overflow-x: hidden;

  display: flex;

  /* display: grid;
  grid-template-columns: minmax(25rem, 46rem) 1fr; */

  @media(max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`;
