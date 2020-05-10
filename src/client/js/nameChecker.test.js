import { checkForName } from './nameChecker';

test("Name should be checked appropriately", () => {
    expect(checkForName("Picard")).toBe("Picard");
})