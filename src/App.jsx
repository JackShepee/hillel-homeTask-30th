import React from "react";
import styles from "./App.module.css";
import Counter from "./Counter";

function App() {
  return (
    <div className={styles.App}>
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
