'use client'
import { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';

const MarkmapComponent = ({ markdown }) => {
  const svgRef = useRef(null);
  const transformer = new Transformer();

  useEffect(() => {
    if (typeof window !== 'undefined' && svgRef.current) {
      // Transform Markdown to Markmap data
      const { root } = transformer.transform(markdown);
      // Render the mind map
      Markmap.create(svgRef.current, null, root);
    }
  }, [markdown]);

  return <svg ref={svgRef} width="100%" height="500px"></svg>;
};

export default MarkmapComponent;