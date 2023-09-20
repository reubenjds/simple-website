function Theme () {

    const handleButton = () => {
        const body = document.querySelector("body");
        const button = document.querySelector("button");
        if (body.getAttribute("data-theme") == "dark") {
            body.setAttribute("data-theme", "light");
        } else if (body.getAttribute("data-theme") == "light") {
            body.setAttribute("data-theme", "dark");
        } 
    }
    return ( 
        <button class='abs' onClick={handleButton}>Button</button>
     );
}

export default Theme;