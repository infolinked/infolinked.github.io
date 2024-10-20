'use client'
// components/Markmap.js
import { useEffect, useRef } from 'react';
import { Markmap } from 'markmap-view';

const MarkmapComponent = ({ markdown }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      // Parse and render the markdown content as a mind map
      Markmap.create(svgRef.current, null, markdown);
    }
  }, [markdown]);

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default MarkmapComponent;