import { createProxyMiddleware } from 'http-proxy-middleware';

const simpleRequestLogger = (proxyServer) => {
  proxyServer.on('proxyReq', (proxyReq, req) => {
    console.log(`[HPM] [${req.method}] ${req.url}`); // outputs: [HPM] GET /users
  });
  proxyServer.on('proxyRes', (proxyReq, req, res) => {
    console.log(`[HPM r] ${res} [${req.method}] ${req.url}`); // outputs: [HPM] GET /users
  });
  proxyServer.on('error', (err, req) => {
    console.log(`[HPM e] ${err} [${req.method}] ${req.url}`); // outputs: [HPM] GET /users
  });
};

export const proxy = createProxyMiddleware({
  target: 'http://ui_container:4200',
  changeOrigin: true,
  ws: true,
  plugins: [simpleRequestLogger],
});
