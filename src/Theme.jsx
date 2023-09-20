import { useState } from "react";

function Theme () {
    const [theme, setTheme] = useState("dark");
    const handleButton = () => {
        const body = document.querySelector("body");

        if (theme == "dark") {
            setTheme("light");
            body.setAttribute("data-theme", "light");
        } else if (theme == "light") {
            setTheme("dark");
            body.setAttribute("data-theme", "dark");
        } 
    }
    return ( 
        <button class='abs' onClick={handleButton}>
            {theme === 'dark' ? <h2>☀️</h2>: <h2>🌑</h2>}
        </button>
     );
}

export default Theme;