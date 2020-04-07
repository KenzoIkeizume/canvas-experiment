const LOCAL_STORAGE_FUNC = "funcText";

const funcText = localStorage.getItem(LOCAL_STORAGE_FUNC);
if (!funcText) {
  localStorage.setItem(LOCAL_STORAGE_FUNC, "line");
}

function line() {
  this.ctx.beginPath();
  this.ctx.moveTo(75, 50);
  this.ctx.lineTo(100, 75);
  this.ctx.lineTo(100, 25);
  this.ctx.fill();
}

function path() {
  this.ctx.beginPath();
  this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
  this.ctx.moveTo(110, 75);
  this.ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (sentido horário)
  this.ctx.moveTo(65, 65);
  this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Olho esquerdo
  this.ctx.moveTo(95, 65);
  this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Olho direito
  this.ctx.stroke();
}

function angle() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      this.ctx.beginPath();
      var x = 25 + j * 50; // coordenada x
      var y = 25 + i * 50; // coordenada y
      var radius = 20; // Raio do Arco
      var startAngle = 0; // Ponto inicial no círculo
      var endAngle = Math.PI + (Math.PI * j) / 2; // Ponto final no círculo
      var anticlockwise = i % 2 == 0 ? false : true; // horário ou anti-horário

      this.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

      if (i > 1) {
        this.ctx.fill();
      } else {
        this.ctx.stroke();
      }
    }
  }
}

function quadratic() {
  this.ctx.beginPath();
  this.ctx.moveTo(75, 25);
  this.ctx.quadraticCurveTo(25, 25, 25, 62.5);
  this.ctx.quadraticCurveTo(25, 100, 50, 100);
  this.ctx.quadraticCurveTo(50, 120, 30, 125);
  this.ctx.quadraticCurveTo(60, 120, 65, 100);
  this.ctx.quadraticCurveTo(125, 100, 125, 62.5);
  this.ctx.quadraticCurveTo(125, 25, 75, 25);
  this.ctx.stroke();
}

function curve() {
  this.ctx.beginPath();
  this.ctx.moveTo(75, 40);
  this.ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  this.ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  this.ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  this.ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  this.ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  this.ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  this.ctx.fill();
}

function packman() {
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
  }

  roundedRect(this.ctx, 12, 12, 150, 150, 15);
  roundedRect(this.ctx, 19, 19, 150, 150, 9);
  roundedRect(this.ctx, 53, 53, 49, 33, 10);
  roundedRect(this.ctx, 53, 119, 49, 16, 6);
  roundedRect(this.ctx, 135, 53, 49, 33, 10);
  roundedRect(this.ctx, 135, 119, 25, 49, 10);

  this.ctx.beginPath();
  this.ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  this.ctx.lineTo(31, 37);
  this.ctx.fill();

  for (var i = 0; i < 8; i++) {
    this.ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (i = 0; i < 6; i++) {
    this.ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (i = 0; i < 8; i++) {
    this.ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  this.ctx.beginPath();
  this.ctx.moveTo(83, 116);
  this.ctx.lineTo(83, 102);
  this.ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  this.ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  this.ctx.lineTo(111, 116);
  this.ctx.lineTo(106.333, 111.333);
  this.ctx.lineTo(101.666, 116);
  this.ctx.lineTo(97, 111.333);
  this.ctx.lineTo(92.333, 116);
  this.ctx.lineTo(87.666, 111.333);
  this.ctx.lineTo(83, 116);
  this.ctx.fill();

  this.ctx.fillStyle = "white";
  this.ctx.beginPath();
  this.ctx.moveTo(91, 96);
  this.ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  this.ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  this.ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  this.ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  this.ctx.moveTo(103, 96);
  this.ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  this.ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  this.ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  this.ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  this.ctx.fill();

  this.ctx.fillStyle = "black";
  this.ctx.beginPath();
  this.ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  this.ctx.fill();

  this.ctx.beginPath();
  this.ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  this.ctx.fill();
}

function path2d() {
  var rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  var circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  this.ctx.stroke(rectangle);
  this.ctx.fill(circle);
}

function solarsystem() {
  var sun = new Image();
  var moon = new Image();
  var earth = new Image();

  sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
  earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
  window.requestAnimationFrame(draw);

  function draw() {
    this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.clearRect(0, 0, 300, 300); // clear canvas

    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    this.ctx.save();
    this.ctx.translate(150, 150);

    // Earth
    var time = new Date();
    this.ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    this.ctx.translate(105, 0);
    this.ctx.fillRect(0, -12, 40, 24); // Shadow
    this.ctx.drawImage(earth, -12, -12);

    // Moon
    this.ctx.save();
    this.ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    this.ctx.translate(0, 28.5);
    this.ctx.drawImage(moon, -3.5, -3.5);
    this.ctx.restore();

    this.ctx.restore();

    this.ctx.beginPath();
    this.ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    this.ctx.stroke();

    this.ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
  }
}

function init() {
  const canvas = document.getElementById("tutorial");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const form = () => {
      this.ctx = ctx;

      return {
        line: line,
        path: path,
        angle: angle,
        quadratic: quadratic,
        curve: curve,
        packman: packman,
        path2d: path2d,
        solarsystem: solarsystem
      };
    };

    const funcText = localStorage.getItem(LOCAL_STORAGE_FUNC);
    const text = prompt("Enter a form: ", funcText);
    localStorage.setItem(LOCAL_STORAGE_FUNC, text);

    const func = form()[text];

    if (func) {
      func(ctx);
    } else {
      alert("error: function does not exists");
      localStorage.setItem(LOCAL_STORAGE_FUNC, "line");
    }
  } else {
    // alguma coisa
  }
}

window.onload = init;
