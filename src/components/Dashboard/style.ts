import styled from "styled-components";

export const Container = styled.div`
  margin-left: calc(43.9rem);
  min-height: 100%;
  width: 100%;
  padding: 4rem 2rem;

  @media (max-width: 850px) {
    margin-left: 30.9rem;
  }

  @media (max-width: 660px) {
    width: 100vw;
    margin-left: 0;
    padding: 4rem 2rem;
  }

  .row {
    margin: 0 auto;
    max-width: 86rem;
    width: 100%;

    .types {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      .celsius {
        background: var(--gray-200);
        color: var(--gray-800);
      }

      button {
        background: var(--gray-600);
        font-size: 1.8rem;
        font-weight: 700;
        border: 0;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
    margin-top: 6rem;

    @media (max-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    .box {
      background: var(--sidebarBg);
      position: relative;
      display: flex;
      height: 18rem;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

      p {
        margin: 2rem 0 1rem;
      }

      p,
      span {
        font-weight: 500;
      }

      img {
        height: 6.2rem;
        width: 5.6rem;
        margin-bottom: 2rem;
      }

      .content {
        display: flex;
        gap: 1rem;

        .variant {
          color: var(--gray);
        }
      }
    }
  }

  footer {
    font-size: 1.4rem;
    color: var(--gray);
    width: 100%;
    padding: 4rem 0 2rem;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }
`;

export const Hightlights = styled.section`
  margin-top: 10rem;

  .cardsHigh {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    @media (max-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
    gap: 2rem;

    .boxHigh {
      background: var(--sidebarBg);
      position: relative;
      display: flex;
      justify-content: space-around;
      height: 20rem;
      padding: 1rem 0;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);

      .larger {
        font-weight: 700;
        line-height: 1rem;
        font-size: 6.4rem;

        @media (max-width: 400px) {
          font-size: 4rem;
        }

        span {
          font-size: 3.6rem;
          font-weight: 700;
        }
      }

      .wind {
        font-weight: 700;
        line-height: 1rem;
        font-size: 6.4rem;

        span {
          font-size: 3.6rem;
          font-weight: 700;
        }
      }

      div {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 500;
        border-radius: 50%;
        padding: 0.8rem;

        .navigation {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(-150deg);
        }
      }
    }
  }

  h3 {
    font-weight: 700;
    font-size: 2.4rem;
  }
`;

interface HumidityProps {
  boxWidth: string;
}

export const Humidity = styled.div<HumidityProps>`
    background: var(--gray-200);
    border-radius: 80px !important;
    width: 70%;
    margin: 0 auto;
    padding: 0;
    height: 0.8rem;
    position: relative;
    padding: 0 !important;

    &:before {
      content: "";
      display: block;
      border-radius: 8rem;
      width: ${(props) => props.boxWidth};
      height: 100%;
      background: var(--yellow);
      position: absolute;
      left: 0;
      top: 0;
    }

    .humidityNumbers {
      position: absolute;
      top: -2.3rem;
      left: 0;
      right: 0;
      display: flex;
      gap: 0;
      justify-content: space-between;
      width: 100%;
      padding: 0 !important;
      border-radius: 0;
    }

    small {
      position: absolute;
      right: 0;
      top: 1rem;
    }
  }
`;
