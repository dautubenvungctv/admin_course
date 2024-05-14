import styled from "styled-components";
export const StyledShoppingCart = styled.div<any>`
  padding: 0 15px;
  .title-shopping-cart {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    .box-shoppingcart {
      display: flex;
      gap: 16px;
      width: 100%;
      .box-product {
        width: calc(100% - 16px - 50%);
        padding: 16px 30px;
        margin: 0 0 30px 0;
        border-radius: 3px;
        border: 1px solid #d5d8dc;
        .close {
          /* float: right; */
          display: flex;
          justify-content: end;
        }
        .form-cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          .cart-left {
            font-weight: 700;
            font-size: 0.9em;
          }
          .cart-right {
          }
        }
      }
      .box-total {
        width: calc(100% - 16px - 50%);

        padding: 16px 30px;
        margin: 0 0 30px 0;
        border-radius: 3px;
        border: 1px solid #d5d8dc;
        .title {
        }
        .form-cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          .cart-left {
            font-weight: 700;
            font-size: 0.9em;
          }
          .cart-right {
          }
        }
        .to-checkout {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: stretch;
          .btn-checkout {
            padding: 15px 1em;
            width: auto;
            font-size: 15px;
            text-align: center;
            color: #fff;
            border-radius: 3px;
            min-height: auto;
            text-decoration: none;
            background-color: #5bc0de;
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .box-shoppingcart {
      display: grid;
      .box-product {
        padding: 16px 30px;
        margin: 0 0 30px 0;
        border-radius: 3px;
        border: 1px solid #d5d8dc;
        .close {
          /* float: right; */
          display: flex;
          justify-content: end;
        }
        .form-cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          .cart-left {
            font-weight: 700;
            font-size: 0.9em;
          }
          .cart-right {
          }
        }
      }
      .box-total {
        padding: 16px 30px;
        margin: 0 0 30px 0;
        border-radius: 3px;
        border: 1px solid #d5d8dc;
        .title {
        }
        .form-cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          .cart-left {
            font-weight: 700;
            font-size: 0.9em;
          }
          .cart-right {
          }
        }
        .to-checkout {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: stretch;
          .btn-checkout {
            padding: 15px 1em;
            width: auto;
            font-size: 15px;
            text-align: center;
            color: #fff;
            border-radius: 3px;
            min-height: auto;
            text-decoration: none;
            background-color: #5bc0de;
          }
        }
      }
    }
  }
`;
