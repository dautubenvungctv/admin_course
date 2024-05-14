import styled from "styled-components";
export const StyleCheckoutQR = styled.div`
  .title-checkqr {
    font-size: 1.75rem;
    text-align: center;
  }
  .box {
    padding: 0 15px;
    .thanks {
      font-size: 14px;
      line-height: 21px;
      color: #69727d;
    }
    .order_details {
      margin: 0 0 3em;
      list-style: none;
      li {
        float: left;
        margin-right: 2em;
        text-transform: uppercase;
        font-size: 0.715em;
        line-height: 1;
        border-right: 1px dashed #cfc8d8;
        padding-right: 2em;
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
        strong {
          display: block;
          font-size: 1.4em;
          text-transform: none;
          line-height: 1.5;
        }
      }
    }
    .box-qr {
      .titleqr {
        text-align: center;
        margin-top: 20px;
        font-size: 2rem;
        color: #69727d;
      }
      table td {
        padding: 15px;
        line-height: 1.5;
        vertical-align: top;
        border: 1px solid hsla(0, 0%, 50.2%, 0.5019607843);
      }
      .btn-pay {
        margin: 20px 0;
        display: inline-block;
        font-weight: 400;
        color: #c36;
        text-align: center;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid #c36;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-radius: 3px;
        transition: all 0.3s;
      }
    }
    .woocommerce-order-details {
      .order_details {
        text-align: left;
        width: 100%;
        tbody {
          tr {
            td {
              .link {
                color: var(--links-normal-color, #5bc0de);
                text-decoration: none;
              }
            }
          }
        }
        td {
          padding: 15px 0;
        }
      }
    }
  }
  .btnDownloadQR {
    width: 100%;
    border-radius: 0;
    border: none;
    padding: 10px 10px;
    border-color: #0274be;
    background-color: #0274be;
    color: #ffffff;
    line-height: 1;
  }
`;
