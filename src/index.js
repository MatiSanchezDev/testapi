import app from "./app.js";
const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto -> http://localhost:${PORT}`);
});
