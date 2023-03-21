import { createUser } from "../src/createUser";

describe("Test function Create User Labook", () => {
    test("Should return message succeeded.", async () => {

        const user = {
            id: "12345",
            name: "Name Test",
            email: "testmail@test.com",
            password: "test123"
        }

        const insert = await createUser(user)

        expect(insert).toBe("Success!")
    });
})