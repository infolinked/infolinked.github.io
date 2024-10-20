"use client"; // This makes the component a Client Component

import { useEffect, useRef, useState } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';

// Fetch markdown content (this will still happen server-side)
async function fetchMarkdown() {
  const markdown = `
## Topics
- Sample code 

- Links

  - [Website](https://markmap.js.org/)
  - [GitHub](https://github.com/gera2ld/markmap)

- Related Projects

  - [coc-markmap](https://github.com/gera2ld/coc-markmap) for Neovim
  - [markmap-vscode](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode) for VSCode
  - [eaf-markmap](https://github.com/emacs-eaf/eaf-markmap) for Emacs

- Features

  - Note that if blocks and lists appear at the same level, the lists will be ignored.

- Lists

  - **strong** ~~del~~ *italic* ==highlight==
  - inline code
  - [x] checkbox
  - Katex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- markmap: fold -->
    - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
  - Now we can wrap very very very very long text based on maxWidth option
  - Ordered list
    1. item 1
    2. item 2

- Blocks


  - console.log('hello, JavaScript')


  - | Products | Price |
    |-|-|
    | Apple | 4 |
    | Banana | 2 |

    ![](/favicon.png)
  `;
  return markdown;
}

const MarkmapPage = () => {
  const svgRef = useRef(null);
  const [markdown, setMarkdown] = useState('');
  const [scale, setScale] = useState(1.2); // State to keep track of zoom level

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

      // Create the Markmap and pass the SVG element
      const markmap = Markmap.create(svgRef.current, {
        colorFreezeLevel: 2,
        collapsed: false,
        nodeMinHeight: 30,
        initialExpandLevel: 2,
      }, root);

      // Set initial zoom and align center
      const svg = svgRef.current;
      const { width, height } = svg.getBoundingClientRect(); // Get SVG container size
      const viewBoxWidth = width / scale;
      const viewBoxHeight = height / scale;

      // Center the viewBox by adjusting its x and y positions
      const xOffset = (width - viewBoxWidth) / 2;
      const yOffset = (height - viewBoxHeight) / 2;
      
      svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${viewBoxWidth} ${viewBoxHeight}`);
      setScale(scale); // Set the scale state to reflect the initial zoom
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
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetView}>Reset View</button>
      </div>
      <svg style={{ marginTop: '60px' }} ref={svgRef} width="100%" height="600px" viewBox="0 0 1000 1000"></svg>
    </div>
  );
};

export default MarkmapPage;
