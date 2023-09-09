import React, { useState } from "react";
import { Button } from "antd";
import styles from "./Counter.module.css";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className={styles.counter}>
      <Button type="primary" shape="round" onClick={() => setCount(count - 1)}>
        -
      </Button>
      <span className={styles.countValue}>{count}</span>
      <Button type="primary" shape="round" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button
        type="secondary"
        shape="round"
        onClick={() => setCount(initialValue)}
      >
        Reset
      </Button>
    </div>
  );
}

export default Counter;
