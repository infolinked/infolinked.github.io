import { useEffect, useState } from 'react';

const RawHTMLPage = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the raw HTML from GitHub
    fetch('https://raw.githubusercontent.com/aungthuoo/apis/refs/heads/main/infolinked/sample/index.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Raw HTML Content from GitHub</h1>
      {/* Use dangerouslySetInnerHTML to render raw HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default RawHTMLPage;