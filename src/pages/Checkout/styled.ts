import styled from "styled-components";
export const StyleCheckout = styled.div<any>`
  padding: 0 15px;
  .title {
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
    padding: 16px;
  }
  .box-first {
    .returning {
      border-radius: 3px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      display: flex;
      justify-content: center;
      gap: 8px;
      .login {
        text-decoration: none;
        color: #5bc0de;
      }
    }
    .form-checkout {
      display: flex;
      flex-direction: column;
      border-radius: 3px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      .title-form {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 30px;
        color: #000;
      }
      .form-input {
        margin-bottom: 5px;
        .top {
          font-size: 14px;
          color: #69727d;
          margin-bottom: 10px;
        }
        .bottom {
          color: #69727d;
          background-color: #f9fafa;
          font-size: 14px;
          border: none;
          font-weight: 400;
          padding: 16px;
          width: calc(100% - 30px);
        }
      }
    }
  }
  .box-second {
    padding-bottom: 50px;
    .product-buy {
      border-radius: 3px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      display: grid;
      .title {
        font-size: 14px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: var(--sections-title-spacing, 30px);
        color: var(--sections-title-color, #000);
      }
      .shop_table {
        .order-total,
        .cart-subtotal,
        .cart_item,
        .header-table {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          width: calc(100% - 30px);
        }
      }
    }
    .payment {
      border-radius: 3px;
      padding: 16px 30px;
      margin: 0 0 24px 0;
      border: 1px solid #d5d8dc;
      display: grid;
      .title-payment {
        font-size: 14px;
        text-align: left;
        color: var(--sections-radio-buttons-color, #69727d);
      }
      .payment_box {
        color: #69727d;
        background-color: #f9fafa;
        font-weight: 400;
        font-size: 13px;
      }
    }
    .btn-order {
      background-color: #5bc0de;
      width: 100%;
      float: none;
      color: var(--purchase-button-normal-text-color, #fff);
      min-height: auto;
      padding: var(--purchase-button-padding, 1em 1em);
      border-radius: var(--purchase-button-border-radius, 3px);
      border: none;
    }
  }
`;
