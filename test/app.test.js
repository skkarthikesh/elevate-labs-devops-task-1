const { test } = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("Health endpoint returns healthy status", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://127.0.0.1:${port}/health`
        );

        const data = await response.json();

        assert.equal(response.status, 200);
        assert.equal(data.status, "healthy");
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});