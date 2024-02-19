import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hometext() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm <span style='color: #FFC300;'>Prakhar</span>",
        "And I'm a <span style='color: #FFC300;'>web developer</span>.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center font-mono">
      <span
        ref={el}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      />
    </div>
    
  );
}

export default Hometext;
