// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",  // Your backend server URL
      changeOrigin: true,
      secure: false, // Optional: set to false for development with self-signed certs
      logLevel: "debug", // Optional: enables logging for debugging
    })
  );
};
