"use client"; // This makes the component a Client Component

import { useEffect, useRef, useState } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';

// Fetch markdown content (this will still happen server-side)
async function fetchMarkdown() {
  const markdown = `
---
title: Next.js with MongoDB Cloud
markmap: 
  colorFreezeLevel: 2 
  collapsed: false
  nodeMinHeight: 30
  initialExpandLevel: 2
---

## Topics
- Web Development
  - React
  - Next.js
  - Markmap
- Backend Development
  - Node.js
  - Databases
- DevOps
  `;
  return markdown;
}

const MarkmapPage = () => {
  const svgRef = useRef(null);
  const [markdown, setMarkdown] = useState('');
  const [scale, setScale] = useState(1); // State to keep track of zoom level

  useEffect(() => {
    const fetchAndSetMarkdown = async () => {
      const markdownContent = await fetchMarkdown();
      setMarkdown(markdownContent);
    };

    fetchAndSetMarkdown();
  }, []);

  useEffect(() => {
    if (markdown && svgRef.current) {
      const transformer = new Transformer();
      const { root } = transformer.transform(markdown);
      Markmap.create(svgRef.current, {}, root);
    }
  }, [markdown]);

  // Toolbar controls
  const zoomIn = () => {
    const svg = svgRef.current;
    if (svg) {
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      const newScale = scale * 1.2; // Increase scale by 20%
      svg.setAttribute('viewBox', `${viewBox[0] * 1.2} ${viewBox[1] * 1.2} ${viewBox[2] / 1.2} ${viewBox[3] / 1.2}`);
      setScale(newScale); // Update scale state
    }
  };

  const zoomOut = () => {
    const svg = svgRef.current;
    if (svg) {
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      const newScale = scale * 0.8; // Decrease scale by 20%
      svg.setAttribute('viewBox', `${viewBox[0] * 0.8} ${viewBox[1] * 0.8} ${viewBox[2] / 0.8} ${viewBox[3] / 0.8}`);
      setScale(newScale); // Update scale state
    }
  };

  const resetView = () => {
    const svg = svgRef.current;
    if (svg) {
      svg.setAttribute('viewBox', '0 0 1000 1000'); // Adjust based on your initial view
      setScale(1); // Reset scale state
    }
  };

  return (
    <div>
      <h1>Markmap with Control Bar</h1>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetView}>Reset View</button>
      </div>
      <svg ref={svgRef} width="100%" height="600px" viewBox="0 0 1000 1000"></svg>
    </div>
  );
};

export default MarkmapPage;
