import styled from 'styled-components';

const StyleContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;

  p {
    padding: 15px 0;
  }

  h2 {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
    padding: 15px 0;
  }

  h3 {
    padding: 15px 0;
  }

  ins {
    background: #fdfdcd;
    padding: 3px;
    font-style: italic;
  }
  pre span {
    font-size: 14px;
  }

  .highlight {
    padding-top: 10px !important;
    padding-bottom: 15px !important;
    font-size: 14px !important;
  }

  .highlight pre {
    padding: 15px !important;
  }

  .heading-element {
    padding-top: 15px !important;
  }

  a {
    color: #0969da;
    text-decoration: underline;
    cursor: pointer;
  }

  menu,
  ol,
  ul {
    list-style: disc;
  }

  .gist__title {
    padding: 0 26px;
    font-weight: bold;
    font-size: 12px;
  }
  .ltag-github-readme-tag {
      position: relative;
      border: 1px solid #d4d4d4;
      box-shadow: var(--shadow-smooth);
      border-radius: var(--radius-auto);
      margin: 1.1em auto 1.3em;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
      overflow: hidden;
  }
`;
export { StyleContainer };
