import React, { SyntheticEvent } from "react";
import styles from "../styles/CustomCursor.module.css";

const CustomCursor = () => {
  const customCursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const getMousePosition = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - customCursorRef.current!.clientWidth / 2;
      const mouseY = clientY - customCursorRef.current!.clientHeight / 2;
      customCursorRef.current!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    document.addEventListener("mousemove", getMousePosition);
    return () => document.removeEventListener("mousemove", getMousePosition);
  }, []);
  return <div ref={customCursorRef} className={styles.cursor}></div>;
};

export default CustomCursor;
