const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;

const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;

export { apiBaseUrl, port };