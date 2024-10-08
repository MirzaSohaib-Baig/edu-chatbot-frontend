'use client';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';

export default function KatexSpan(props: { text: string, delegated: any }) {
  const katexTextRef = useRef();
  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    }
  }, [props.text]);

  return (
    <span ref={katexTextRef} {...props.delegated} dangerouslySetInnerHTML={{ __html: props.text ? props.text : '' }}>
    </span>
  );
}