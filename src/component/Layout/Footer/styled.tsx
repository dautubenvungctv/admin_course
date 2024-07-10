import styled from "styled-components";
export const StyleFooter = styled.div<any>`
  .wrapper-footer {
    padding: 30px 15px;
    .title-group {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.3em; /* Adjust this value as needed */
      font-family: Arial, sans-serif;
    }
    .box {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;

      padding: 6px;
      border-radius: 5px;
      gap: 30px;

      .box-text {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        width: calc(50% - 24px);
        background: linear-gradient(to bottom, #0f1a53, #2081f7);
        border-radius: 16px;
        .first {
          font-weight: 400;
          font-family: "system-ui";
          /* margin-bottom: 0.5em; */
          margin-top: 0;
          text-rendering: optimizeSpeed;
          width: 100%;
          font-size: 21px;
          color: #fff;
        }
        .demo-group {
          font-size: 11px;
          color: #fff;
          font-family: sans-serif;
        }
        .box-btn-group {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          .second {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            color: #031b55;
            font-weight: 700;
            background-color: #56d699;
            font-size: 13px;
            width: 110px;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }
  .absolute-footer {
    display: grid;
    justify-content: center;
    align-items: center;
    .container {
      .footer-secondary {
        display: grid;
        gap: 8px;
        .footer-text {
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            text-decoration: none;
            color: #f68002;
          }
        }
      }
      .footer-primary {
        display: flex;
        justify-content: center;
        .copyright-footer {
          display: grid;
          justify-content: center;
          align-items: center;
          h4,
          p {
            margin: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .contact {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: grid;
    gap: 10px;
  }
  @media (max-width: 849px) {
    .medium-text-center .pull-left,
    .medium-text-center .pull-right {
      float: none;
    }
  }
`;
