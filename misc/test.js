function addSpace(cnt) {
    space = "";
    for (let n = 0; n < cnt; n++) {
        space += " ";
    }
    return space;
}

function triDraw(cnt) {
    let line = "*";
    let cnt2 = cnt;
    for (let n = 0; n < cnt; n++) {
        console.log(addSpace(cnt2) + line);
        line += "**";
        cnt2--;
    }
}

triDraw(10)