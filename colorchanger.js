
function getcolor(){
    const rn = Math.floor(Math.random()*16777215);
    const cc = "#" + rn.toString(16);
    document.body.style.backgroundColor = cc;
    document.getElementById("color-code").innerText = cc;
    navigator.clipboard.writeText(cc);
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)


getcolor()