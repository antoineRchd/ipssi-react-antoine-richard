import React, { useState } from 'react'
import '../style/App.css';
 
function Counter() {
    const [count, setCount] = useState(0)
 
    const increment = () => {
        setCount(count + 1)
    }
    const deincrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
 
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button className={isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'} onClick={toggleDarkMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <p>Compteur : {count}</p>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={deincrement}>de-Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter