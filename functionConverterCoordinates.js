let centerX = Number(prompt('Центр х'));
let centerY = Number(prompt('Центр y'));
let radius = Number(prompt('Радиус'));
let multStr = ""

for (let i = 0; i < 360; i++) {
  let digitAngle = i * Math.PI / 180;
  let x = (centerX + radius * Math.cos(digitAngle)).toFixed(2);
  let y = (centerY + radius * Math.sin(digitAngle)).toFixed(2);
  multStr = multStr + String(x) + "," + String(y) + ",";
  
}

console.log(multStr);