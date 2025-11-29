export function startParticles() {
  const canvas = document.getElementById("particle-canvas");
  const hero = document.getElementById("hero");
  const ctx = canvas.getContext("2d");

  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;

  // Resize fix
  window.addEventListener("resize", () => {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  });

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() * 3 + 1,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
      ctx.fillStyle = "#00eaff";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      particles.forEach((p2) => {
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.strokeStyle = "rgba(0,234,255,0.2)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(draw);
  }

  draw();
}
