import dynamic from 'next/dynamic';

// Dynamically import the Markmap component to avoid SSR issues
const MarkmapComponent = dynamic(() => import('../components/Markmap'), {
  ssr: false,
});

const markdownContent = `
---
title: Next.js with MongoDB Cloud
markmap: 
  colorFreezeLevel: 2 
  collapsed: false
  nodeMinHeight: 30
  # maxWidth: 300
  initialExpandLevel: 2
---

# Mind Map Example

- **Item 1**
  - Sub-item 1
  - Sub-item 2
- **Item 2**
  - Sub-item 1
  - Sub-item 2
    - Sub-sub-item 1
    - Sub-sub-item 2
`;

const RawHtmlPage = () => {
  return (
    <div>
      <h1>Markmap Mind Map Visualization</h1>
      <MarkmapComponent markdownContent={markdownContent} />
    </div>
  );
};

export default RawHtmlPage;