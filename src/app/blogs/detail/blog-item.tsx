'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import useHandleError from "@/app/hooks/use-handle-error";
import OpenToWorkComponent from "@/components/open-to-work-component";
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Change this line
import styled, { createGlobalStyle } from 'styled-components';

interface GistFile {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  content: string;
}

interface Gist {
  description: string;
  files: { [key: string]: GistFile };
}

const GistContainer = styled.div`
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
`;

const GistFileContainer = styled.div`
  margin-bottom: 16px;
`;

const FileName = styled.div`
  font-weight: bold;
  color: #0366d6;
  margin-bottom: 8px;
`;

const FileContent = styled.div`
  background-color: #f6f8fa;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  overflow-x: auto;
`;

// Define props for the code component
interface CodeProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}


// Define global styles for the Markdown elements
const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    line-height: 1.5;
    color: #24292e;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    background-color: #f0f0f0; 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin: 1em 0 0.5em;
  }
  
  h1 {
    font-size: 2.25em; // Adjust size to match GitHub
  }

  h2 {
    font-size: 1.875em;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    margin: 0.5em 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 16px;
    line-height: 1.5;
  }

  code {
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    background: rgba(27, 31, 35, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  pre {
    background: #f6f8fa;
    padding: 16px;
    border-radius: 6px;
    overflow: auto;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  }

  ul, ol {
    margin-left: 20px;
    margin-bottom: 1em;
  }

  blockquote {
    border-left: 4px solid #dfe2e5;
    padding-left: 16px;
    color: #6a737d;
    margin: 1em 0;
  }
`;



export default function BlogItem() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("of");
  
  const { handleError } = useHandleError();
  const [gist, setGist] = useState<Gist | null>(null);

  const fetchGist = async () => {
    try {
      const response = await axios.get<Gist>(
        `https://api.github.com/gists/67f09992e02b237f8e1d8f8b7bd5a98f`,
      );
      setGist(response.data);
    } catch (err) {
      if (err instanceof Error) {
        handleError(err);
      }
    }
  };

  useEffect(() => {
    fetchGist();
  }, []);

  return (
    <>
      <GlobalStyle /> 
      <div className="max-w-3xl mx-auto overflow-hidden bg-white">
        {gist && (
          <GistContainer>
            {slug}
            {Object.values(gist.files).map((file) => (
              <GistFileContainer key={file.filename}>
                <FileName>{file.filename}</FileName>
                <FileContent>
                  <ReactMarkdown
                    components={{
                      code({ inline, className, children, ...props }: CodeProps) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={solarizedlight} // Ensure this is set correctly
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      }
                    } as Components}
                  >
                    {file.content || ''}
                  </ReactMarkdown>
                </FileContent>
              </GistFileContainer>
            ))}
          </GistContainer>
        )}
        <OpenToWorkComponent />
      </div>
    </>
  );
}
