import styled from "styled-components";
import Img from "../../assets/cloud-bg.png";

export const Container = styled.div`
  background: url(${Img}), var(--sidebarBg);
  background-repeat: no-repeat;
  background-position: center 20%;
  background-blend-mode: soft-light;

  max-width: 43.9rem;
  width: 100%;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  @media (max-width: 850px) {
    max-width: 30.9rem;
    width: 100%;
  }

  @media(max-width: 660px) {
    position: relative;
    width: 100vw;
    max-width: 100%;
  }

  padding: 4rem;
  @media (max-width: 400px) {
    padding: 2rem;
        }
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .searchBox {
    display: flex;
    justify-content: space-between;

    button {
      background: var(--gray-600);
      outline: none;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .gps {
      border-radius: 50%;
      padding: 1rem;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  img {
    margin: 12rem auto 0;
    object-fit: cover;
    max-width: 200px;
    height: 200px;
    z-index: 1;
  }

  .temperature {
    font-size: 14.4rem;
    color: var(--gray-200);
  }

  .celsius {
    font-size: 6rem;
    color: var(--gray);
  }

  .status {
    color: var(--gray);
    font-size: 3.6rem;
    font-weight: 600;
    margin: 4rem 0;
  }

  .date {
    display: flex;
    justify-content: center;
    gap: 1.4rem;

    span,
    time {
      font-weight: 500;
      font-size: 1.8rem;
      color: var(--gray);
    }
  }

  .location {
    margin-top: 4rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 600;
      font-size: 1.8rem;
      color: var(--gray);
    }
  }
`;
