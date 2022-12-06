import test from "node:test";
import assert from "assert/strict";
import sum from "./math.js";

test("Sum function", async (t) => {
    await t.test("It should add two numbers", () => {
        assert.equal(sum(1, 2), 3);
    });
    await t.test("It should not subtract numbers", () => {
        assert.notEqual(sum(1, 2), -1);
        });
});