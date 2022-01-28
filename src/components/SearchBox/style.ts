import styled from "styled-components";

interface InputBoxProps {
  isOpenSearchModal: boolean;
}

export const InputBox = styled.aside<InputBoxProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.isOpenSearchModal ? "0" : "-100%")};
  max-width: 43.9rem;
  width: 100%;
  z-index: 2;
  transition: all 0.8s cubic-bezier(0.5, -0.005, 0.2, 1);
  background: var(--sidebarBg);
  padding: 3rem;
  overflow: auto;

  @media (max-width: 850px) {
    max-width: 30.9rem;
    width: 100%;
  }

  @media (max-width: 660px) {
    position: absolute;
    width: 100vw;
    max-width: 100%;
    left: ${(props) => (props.isOpenSearchModal ? "0" : "-100%")};
    right: 0;
    padding: 2rem 2rem;
  }

  > svg {
    cursor: pointer;
    fill: var(--gray-200);
    transition: 0.3s;
    margin-left: 95%;

    &:hover {
      filter: brightness(0.9);
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    position: relative;
    width: 100%;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    button {
      background: var(--gray-500);
      border: 0;
      outline: 1px solid transparent;
      height: 4.8rem;
      padding: 0 3rem;
      border-radius: 4px;
      font-weight: 600;
      box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.5);
      transition: 0.3s;

      @media (max-width: 850px) {
        width: 100%;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    div {
      position: relative;
      align-self: stretch;
      display: flex;
      flex: 1;
      align-items: center;

      svg {
        fill: var(--gray-600);
        position: absolute;
        left: 1rem;
      }

      input {
        display: inline-block;
        border: 1px solid var(--gray-200);
        background: transparent;
        border-radius: 4px;
        color: var(--gray-600);
        height: 100%;
        width: 100%;
        padding: 0 2rem 0 4rem;
        outline: 0px transparent;
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.5);

        @media (max-width: 850px) {
          height: 4.8rem;
        }

        &::placeholder {
          color: var(--gray-600);
        }
      }
    }
  }
`;

export const Locals = styled.div`
  width: 100%;
  margin-top: 4rem;

  > div {
    width: 100%;
    display: flex;
    padding: 2.5rem;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--gray-500);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

    &:hover {
      filter: brightness(0.7);
    }

    & + div {
      margin-top: 2rem;
    }

    span {
      font-weight: 500;
    }

    svg {
      fill: var(--gray-500);
    }
  }
`;
