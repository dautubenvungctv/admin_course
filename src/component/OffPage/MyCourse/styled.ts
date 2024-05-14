import styled from "styled-components";
export const StyledMyCourse = styled.div<any>`
  .title-my-course {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .box-logout {
    width: 100%;
    display: flex;
    justify-content: center;
    .btn-logout {
      background-color: #3493fa;
      border: 1px solid transparent;
      border-radius: 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-size: 0.97em;
      font-weight: bolder;
      letter-spacing: 0.03em;
      line-height: 2.4em;

      margin-top: 10px;
      max-width: 100%;
      min-height: 2.5em;
      padding: 0 1.2em;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-rendering: optimizeLegibility;
      text-shadow: none;
      text-transform: uppercase;
      transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
        opacity 0.3s, color 0.3s;
      vertical-align: middle;
    }
  }
`;
