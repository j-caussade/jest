const { verifyPassword } = require("../../app.js");

describe("verifyPassword", () => {
	test("Devrait retourner true si la longueur du mot de passe est égale ou supérieure à 8", () => {
		expect(verifyPassword("12345678")).toBe(true);
	});
	test("Devrait retourner false si la longueur du mot de passe est inférieure à 8", () => {
		expect(verifyPassword("1234567")).toBe(false);
	});
});
