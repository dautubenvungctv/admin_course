import { styled } from "styled-components";

// type Props = {
//   screen_mode: string | "dark" | "light";
// };

export const StyledHeader = styled.div<any>`
  .header-main {
    width: 100%;
    z-index: 10;
    padding-top: 15px;
    margin-bottom: 20px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    .flex-row {
      padding: 0 15px;
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      /* width: 100%; */
      height: 100%;
    }
    .icon {
      height: 32px;
      width: 32px;
      /* background-color: rgba(66, 167, 50, 1); */
      border-radius: 99999999px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-size: 25px;
      font-weight: 600;
      text-decoration: none;
      color: black;
    }
  }
  @media (max-width: 549px) {
    .header-main {
      height: 70px;
      box-shadow: 2px 2px 10px #00000024;
    }
  }
`;
