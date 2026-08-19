const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

test('GET / should return 200 and operational message', async () => {
  const server = app.listen(0);
  const port = server.address().port;

  const res = await fetch(`http://localhost:${port}/`);
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(data.message, 'DevSecOps Pipeline API is operational 🚀');
  assert.strictEqual(data.version, '1.0.0');

  server.close();
});

test('GET /healthz should return healthy status', async () => {
  const server = app.listen(0);
  const port = server.address().port;

  const res = await fetch(`http://localhost:${port}/healthz`);
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(data.status, 'healthy');

  server.close();
});
