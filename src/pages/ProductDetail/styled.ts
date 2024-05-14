import styled from "styled-components";
export const StyledProductDetail = styled.div<any>`
  padding: 0 15px;

  @media (min-width: 1200px) {
    .box-first {
      display: flex;
      justify-content: space-between;
      .info-product {
        width: 49%;

        .img {
          width: 100%;

          .img-detail {
            width: 100%;
          }
        }
      }
      .technical-information {
        width: 49%;
      }
    }
  }
  @media (max-width: 1200px) {
    .box-first {
      display: grid;
      .info-product {
        .img {
          .img-detail {
            width: 100%;
          }
        }
      }
      .technical-information {
        width: 100%;
      }
    }
  }
  .box-first {
    .info-product {
    }
    .technical-information {
      .title-product {
        font-weight: 700;
        font-size: 20px;
      }
      .price {
        font-size: 23px !important;
        color: #0683ff !important;
        font-weight: bold;
      }
      .row-info {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        clear: both;
        width: 100%;
        padding: 5px 0;
        border-top: 1px dashed #eaeaea;
        border-bottom: 1px dashed #eaeaea;
        font-size: 14px;
        height: 40px;
        .right {
          text-align: center;
          width: 30%;
          display: inline-block;
          background: #e4e4e4;
          border-radius: 4px;
          color: #292929;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .btn-add-shopping-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 3px 5px 3px 5px;
        height: 45px;
        width: 100%;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        background-color: #3d5a98;
        border: none;
        margin-bottom: 10px;
      }
    }
  }
  .btn-membership {
    border-radius: 10px;
    padding: 3px 5px 3px 5px;
    height: 45px;
    width: 100%;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    background-color: #f26b54;
    border: none;
    margin-bottom: 10px;
  }

  .describe {
    .describe-first {
      .title {
        padding: 0 10px;
        border-top-color: #3493fa;
        background: #eaeaea;
        font-family: "roboto", sans-serif;
        font-size: 15px;
        text-transform: none;
        color: black;
        font-weight: 700;
        height: 40px;
        display: flex;
        align-items: center;
      }
      .title-product {
        margin-top: 20px;
        font-size: 1.2em;
        font-weight: 700;
        color: #ff9900;
      }
      .warning {
        font-style: italic;
        color: #ff0000;
        font-size: 16px;
        font-weight: bold;
      }
      .wp-caption-text {
        background: rgba(0, 0, 0, 0.05);
        font-size: 0.9em;
        font-style: italic;
        padding: 0.4em;
      }
    }
    .describe-second {
      .title-product {
        font-size: 1.2em;
        font-weight: 700;
        color: #ff9900;
      }
      blockquote {
        border-left: 2px solid #f68002;
        color: #333;
        font-size: 1.2em;
        font-style: italic;
        margin: 0 0 1.25em;
        padding: 0 1.25em 0 1.875em;
        position: relative;
      }
    }
  }
`;
