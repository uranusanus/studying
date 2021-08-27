const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const iterNumInput = document.getElementById("iter_num")
const iterNumBox = document.getElementById("iter_num_box")

const putPixel = (x, y, fillColor = "black") => {
    context.fillStyle = fillColor;
    context.fillRect(x, y, 1, 1);
}

let width = canvas.width, height = canvas.height;
const scale = 30;
const esc_radius = 5;
let max_iter = +iterNumInput.value;
let a, b, new_a, new_b;
let cx = 0, cy = 0;
let angle = 0;

const drawJulia = () => {
    cx = Math.sin(angle);
    cy = Math.cos(angle);
    angle += 0.02;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            a = (x - width / 2) / scale;
            b = (y - height / 2) / scale;
            for (var n = 0; n < max_iter; n++) {
                new_a = a * a - b * b + cx;
                new_b = 2 * a * b + cy;
                if (new_a > esc_radius || new_b > esc_radius) {
                    break;
                }
                a = new_a;
                b = new_b;
            }
            if (n === max_iter) {
                putPixel(x, y);
            } else {
                putPixel(x, y, `rgba(calc(0 + ${n * 25}), calc(0 + ${n * 10}), calc(0 + ${n * 20}), ${1 / n}`);
            }
        }
    }
}

// const clearContext = () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
// }

iterNumInput.addEventListener("input", (e) => {
    max_iter = +iterNumInput.value;
    iterNumBox.innerText = e.target.value;
})

setInterval(() => {
    drawJulia();
}, 10)