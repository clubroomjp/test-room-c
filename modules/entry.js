export const start = (room) => {
  const ctx = room.surface().getContext("2d");
  room.text("modules: " + room.modules().length);
  room.onFrame((t) => { ctx.fillStyle = "hsl(" + (Math.floor(t / 20) % 360) + " 70% 50%)"; ctx.fillRect(0, 0, 960, 540); });
};
