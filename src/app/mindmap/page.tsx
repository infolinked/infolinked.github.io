'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Markmap } from 'markmap-view';
import { transformer } from '../markmap';
import { Toolbar } from 'markmap-toolbar';
import 'markmap-toolbar/dist/style.css';

const initValue = `
# Sample code 

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- [coc-markmap](https://github.com/gera2ld/coc-markmap) for Neovim
- [markmap-vscode](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode) for VSCode
- [eaf-markmap](https://github.com/emacs-eaf/eaf-markmap) for Emacs

## Features

Note that if blocks and lists appear at the same level, the lists will be ignored.

### Lists

- **strong** ~~del~~ *italic* ==highlight==

- [x] checkbox
- Katex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- markmap: fold -->
  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
- Now we can wrap very very very very long text based on maxWidth option
- Ordered list
  1. item 1
  2. item 2

### Blocks

| Products | Price |
|-|-|
| Apple | 4 |
| Banana | 2 |

![](/favicon.png)
`;

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove();
  if (mm && wrapper) {
    const toolbar = new Toolbar();
    toolbar.attach(mm);
    toolbar.register({
      id: 'alert',
      title: 'Click to show an alert',
      content: 'Alert',
      onClick: () => alert('You made it!'),
    });
    toolbar.setItems([...Toolbar.defaultItems, 'alert']);
    wrapper.append(toolbar.render());
  }
}

export default function MarkmapHooks() {
  const [value, setValue] = useState(initValue);
  const refSvg = useRef<SVGSVGElement>();
  const refMm = useRef<Markmap>();
  const refToolbar = useRef<HTMLDivElement>();

  useEffect(() => {
    if (refMm.current) return;
    const mm = Markmap.create(refSvg.current, {
      colorFreezeLevel: 2,
      collapsed: false,
      nodeMinHeight: 30,
      initialExpandLevel: 3// Ensure no animation during rendering
    });
    refMm.current = mm;
    renderToolbar(refMm.current, refToolbar.current);
  }, [refSvg.current]);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex-container">
      <svg className="flex-svg" ref={refSvg} />
      <div className="toolbar-wrapper" ref={refToolbar}></div>
    </div>
  );
}
