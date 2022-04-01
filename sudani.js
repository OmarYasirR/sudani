let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.querySelector(".btn").onclick = function () {
    let phonum = [];
    while (phonum.length < 10) {
        let randumLength = Math.trunc(Math.random() * numArray.length);
        switch (phonum.length) {
            case 0:
                if (numArray[randumLength] == 0) {
                    phonum.push(numArray[randumLength]);
                }
                break;
            case 1:
                if (numArray[randumLength] == 1) {
                    phonum.push(numArray[randumLength]);
                }
                break;
            case 2:
                if (numArray[randumLength] < 2) {
                    phonum.push(numArray[randumLength]);
                }
                break;
            case 3:
                if (phonum[2] == 0) {
                    if (numArray[randumLength] == 0) {
                        phonum.push(numArray[randumLength]);
                    }
                } else {
                    phonum.push(numArray[randumLength]);
                }
                break;
            default:
                phonum.push(numArray[randumLength]);
                break;
        }
    }

    let di = document.createElement("div");
    di.innerHTML = phonum.join("");
    document.querySelector(".container .number-container").appendChild(di);
};
