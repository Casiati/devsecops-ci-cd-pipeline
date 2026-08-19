const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'DevSecOps Pipeline API is operational 🚀',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

module.exports = app;
