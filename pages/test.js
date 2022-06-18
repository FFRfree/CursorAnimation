import React, { useEffect, useState } from 'react';
import styles from '../styles/Cursor.module.css';

const Test = () => {

  const size = 8;
  const loopSpeed = .16;

  const [cursor, setCursor] = useState({
    x: 200,
    y: 200,
  });

  const cursor2 = {
    x: 200,
    y: 200,
  }
  const pos = {
    x: 0,
    y: 0
  }

  function lerp(start, end, amount) {
    return (1 - amount) * start + amount * end
  }

  // componentDidMount
  useEffect(() => {

    window.addEventListener('mousemove', (e) => {
      pos = {
        x: e.clientX,
        y: e.clientY
      }
    });
    function loop() {
      // cursor2.x = lerp(cursor2.x, pos.x, loopSpeed);
      // cursor2.y = lerp(cursor2.y, pos.y, loopSpeed);
      cursor2 = {
        x: lerp(cursor2.x, pos.x, loopSpeed),
        y: lerp(cursor2.y, pos.y, loopSpeed)
      }
      setCursor(cursor2);
      requestAnimationFrame(loop);
    }
    loop();

  }, []);


  return (
    <>
      <div>{pos.x}:{pos.y}</div>
      <div className={styles.cursor} style={
        {
          top: `${cursor.y - size / 2}px`,
          left: `${cursor.x - size / 2}px`,
          '--size': `8px`
        }
      }></div>
    </>
  );
}

export default Test;

