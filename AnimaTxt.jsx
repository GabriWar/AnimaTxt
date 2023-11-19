const animatonmouseover = (id, originText) => {
    if (!originText) {
        originText = document.getElementById(id).innerText;
    }
    const element = document.getElementById(id);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return originText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        if (iteration >= originText.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
};
export default animatonmouseover;