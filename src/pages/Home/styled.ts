import { styled } from "styled-components";

// type Props = {
//   screen_mode: string | "dark" | "light";
// };

export const StyledHome = styled.div<any>`
  @media (max-width: 886px) {
    .box-headerhome {
      /* width: 100%; */
      padding: 0 15px;
      .banner-header {
        display: none;
      }
    }
    .container {
      /* padding: 0 0px 0 17px; */
      width: 100%;

      .carousel {
        width: 100%;
      }
      .box-shadow-2 {
        background-color: rgb(242, 241, 182);
        border-color: rgb(52, 147, 250);
        border-radius: 20px;
        margin-top: 20px;
        padding: 15px 10px 10px 10px;
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.16),
          0 3px 6px rgba(0, 0, 0, 0.23);
        border-style: dashed;
      }
    }
  }
  @media (min-width: 886px) {
    .box-headerhome {
      .banner-header {
        display: block;
      }
    }
    .container {
      /* padding: 0 0px 0 17px; */
      width: calc(100% - 39%);

      .carousel {
        width: 100%;
      }
      .box-shadow-2 {
        background-color: rgb(242, 241, 182);
        border-color: rgb(52, 147, 250);
        border-radius: 20px;
        margin-top: 20px;
        padding: 15px 10px 10px 10px;
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.16),
          0 3px 6px rgba(0, 0, 0, 0.23);
        border-style: dashed;
      }
    }
  }
  .title-course {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .box-headerhome {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    .banner-header {
      width: calc(100% - 65%);
      border-radius: 3px;
    }
  }
  .banner {
    margin-top: 20px;
    width: 100%;
    .img-banner {
      width: 100%;
      height: 166px;
    }
  }
  .wrapper-book {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .title-book {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    .ant-flex-wrap-wrap {
      justify-content: center;
      .item-caroulsel {
        /* box-shadow: 2px 2px 20px #0000002b; */

        border-image: linear-gradient(
            #4fcf70,
            #fad648,
            #a767e5,
            #12bcfe,
            #44ce7b
          )
          30;
        border-width: 2px;
        border-style: solid;
        padding: 2px;
        overflow: hidden;
        text-decoration: none;
        display: flex;
        width: 170px;
        height: 220px;
        padding: 8px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
        border-radius: 3px;
        background: #f0f3fa;
        .title {
          display: flex;
          align-items: center;
          gap: 24px;
          width: 100%;
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
          justify-content: space-between;
          gap: 4px;
          align-self: stretch;
          .body-first {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
            gap: 25px;
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
    }
    .ant-flex-gap-small {
      gap: 16px !important;
    }
    .member {
      margin-top: 30px;
      background-color: #80bd01;
      padding: 30px;
      display: grid;
      gap: 20px;
      .text-member {
        font-size: 130%;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
      }
      .box-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        .btn-member {
          text-decoration: none;
          background-color: #3594ef;
          padding: 20px;
          text-align: center;
          width: 100px;
          border-radius: 5px;
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
  }
`;
