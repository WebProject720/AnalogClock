function getDate() {
    let date = new Date();
    return date.toDateString();
}
document.getElementById("dayDate").innerText = String(getDate());
// CSS variable
document.documentElement.style.setProperty("--sec-start", `${new Date().getSeconds() * 6 + 180}deg`)
document.documentElement.style.setProperty("--min-start", `${(new Date().getMinutes() * 6) + 180 + (new Date().getSeconds() / 10)}deg`)
document.documentElement.style.setProperty("--hour-start", `${(new Date().getHours() * 30) + 180 + (new Date().getMinutes() / 2) + (new Date().getSeconds() / 120)}deg`)
// Size of container
let len = (document.body.clientHeight);
let wid = (document.body.clientWidth);
if (len >= wid) {
    document.documentElement.style.setProperty("--con-len", `${wid - 15}px`);
} else {
    document.documentElement.style.setProperty("--con-len", `${len - 15}px`);
}