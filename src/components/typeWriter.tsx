import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypeWriter() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Fullstack Developer', 'UI/UX designer', 'Low Level Programmer', "Serverless Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text-3xl font-mono text-black dark:text-white w-16" />;
}