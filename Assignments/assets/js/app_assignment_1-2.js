// first Way
let styles = {
    "color": "blue",
    "font-size": "80px",
    "font-weight": "bold",
    "text-align": "center",
    "font-family": "Arial",
};
document.write("<h1 id='first'>Elzero</h1>")
let h1 = document.getElementById("first");
Object.assign(h1.style, styles);


// second way
// document.write("<h1 id='first'>Elzero</h1>");
// let h1 = document.getElementById("first");
// h1.setAttribute("style", "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;");