const animateonmouseover = (id, FirstText, SecoundText) => {

    if ((FirstText == undefined)|| (SecoundText == undefined)) {
        FirstText = document.getElementById(id).innerText;
        SecoundText = document.getElementById(id).innerText;
    }
    const element = document.getElementById(id);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    let iteration = 0;
    let buffer = FirstText;
    if (document.getElementById(id).innerText == buffer) {buffer = SecoundText}
    clearInterval(interval);
    interval = setInterval(() => {
        element.innerText = buffer
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return buffer[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        if (iteration >= buffer.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
};
export default animateonmouseover;
