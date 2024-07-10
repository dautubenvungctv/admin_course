import styled from "styled-components";

export const StyledCarousel = styled.div<any>`
  .item-caroulsel {
    border-image: linear-gradient(#4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b)
      30;
    border-width: 2px;
    border-style: solid;
    text-decoration: none;
    display: flex;
    width: 281px;
    height: 263px;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 8px;
    background: ${(props) =>
      props.screen_mode === "dark" ? "#2a2e39" : "#F0F3FA"};
    .title {
      display: flex;
      align-items: center;
      gap: 24px;
      .text-title {
        color: #3594ef;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
      .body-first {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        gap: 50px;
        .item-first {
          color: ${(props) =>
            props.screen_mode === "dark" ? "#fff" : "#080808"};
          font-family: Roboto;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .price {
          font-size: 16px !important;
          font-weight: bold;
          color: #0683ff !important;
          text-align: center;
          width: 100%;
        }
      }
      .body-second {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        .item-second {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          .item {
            color: ${(props) =>
              props.screen_mode === "dark" ? "#fff" : "#080808"};
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .item-value {
            color: ${(props) =>
              props.screen_mode === "dark"
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(8, 8, 8, 0.5)"};
            font-family: Roboto;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
`;
