import app from "../app.js";
import request from "supertest";

describe("GET /consulta", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/consulta").send();

    expect(response.statusCode).toBe(200);

    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    expect(JSON.stringify(response.body).length).toBeGreaterThan(1794);
  });

  test("Endpoint /datos devuelve JSON según el ID proporcionado", async () => {
    const response1 = await request(app).get("/consulta/detalle/1").send();
    expect(response1.statusCode).toBe(200);
    expect(response1.body).toEqual({
      id: "1",
      type: "cash",
      title: "Cobro en efectivo",
      description: "Caja 2",
      amount: "751,61",
    });

    const response2 = await request(app).get("/consulta/detalle/5");
    expect(response2.statusCode).toBe(200);
    expect(response2.body).toEqual({
      id: "5",
      type: "card",
      title: "Cobro con tarjeta",
      description: "Caja 3",
      amount: "246,36",
    });

    const response3 = await request(app).get("/consulta/detalle/12");
    expect(response3.statusCode).toBe(200);
    expect(response3.body).toEqual({
      id: "12",
      type: "qr",
      title: "Cobro con QR",
      description: "Caja 2",
      amount: "60,62",
    });

    const responseNoExistente = await request(app).get("/consulta/detalle/256");
    expect(responseNoExistente.statusCode).toBe(404);
    expect(responseNoExistente.body).toEqual({
      message: "No se encontró la consulta",
    });
  });
});
