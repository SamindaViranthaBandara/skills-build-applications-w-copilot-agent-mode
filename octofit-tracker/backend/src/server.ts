const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;

const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

export { apiBaseUrl, port };