import { REACT_APP_SARAMIN_BASE_URL } from "./apis/constants";
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/job-search', // 프록시 요청을 보낼 엔드포인트
    createProxyMiddleware({
      target: REACT_APP_SARAMIN_BASE_URL,
      changeOrigin: true,
    })
  );
};