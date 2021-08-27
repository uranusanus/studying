let width = 100, height = 50;
let a, b, new_a, new_b;
let cx, cy;
let esc_radius = 5;
let max_iter = 100;
let line = "";

console.clear();
// console.time();
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        a = 0;
        b = 0;
        cx = 0.02 * (x - 80);
        cy = 0.04 * (y - 25);
        for (var n = 0; n < max_iter; n++) {
            //a ** 4 - 6 * a ** 2 * b ** 2 + b ** 4 + cx;
            //4 * a ** 3 * b - 4 * a * b ** 3 + cy;
            new_a = a * a - b * b + cx;
            new_b = 2 * a * b + cy;
            if (new_a > esc_radius || new_b > esc_radius) {
                break;
            }
            a = new_a;
            b = new_b;
        }
        if (n === max_iter) {
            line += "#";
        } else {
            line += `\u2007`;
        }
    }
    console.log(line);
    line = "";
}
// console.timeEnd()