import styled from "styled-components";
export const StyleFooter = styled.div<any>`
  .wrapper-footer {
    padding: 30px 15px;
    .box {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      background: white;
      border: 1px solid #f4f4f4;
      padding: 6px;
      border-radius: 5px;
      box-shadow: 2px 2px 20px #0000000f;
      .box-text {
        display: flex;
        align-items: center;
        .first {
          font-weight: 700;
          /* margin-bottom: 0.5em; */
          margin-top: 0;
          text-rendering: optimizeSpeed;
          width: 100%;
          font-size: 16px;
        }
        .second {
          border: none;
          color: #fff;
          font-weight: 500;
          background-color: #f68002;
          font-size: 13px;
          width: 110px;
          height: 30px;
          border-radius: 3px;
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
