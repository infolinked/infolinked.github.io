import styled from 'styled-components';

export const GistContainer = styled.div`
  /* Your styles for the Gist container */
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

export const GistFile = styled.div`
  /* Your styles for the individual files in the Gist */
  margin-bottom: 10px;
`;

export const FileName = styled.h3`
  /* Your styles for the file name */
  color: #333;
`;

export const FileContent = styled.pre`
  /* Your styles for the file content */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
`;

export const Code = styled.code`
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const InlineCode = styled(Code)`
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
`;
