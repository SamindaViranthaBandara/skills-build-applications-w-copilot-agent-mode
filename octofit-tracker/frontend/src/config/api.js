// Requires VITE_CODESPACE_NAME to be defined (e.g. in .env.local) to reach the
// Codespaces-hosted backend; falls back to localhost when it is unset.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function apiUrl(resource) {
  return `${API_BASE_URL}/api/${resource}/`;
}

// Backend responses may be a plain array, a paginated object with a `results`
// array, or an object wrapping a single array property (e.g. `{ users: [] }`).
export function extractItems(data) {
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  if (data && typeof data === 'object') {
    const arrayValue = Object.values(data).find((value) => Array.isArray(value));
    if (arrayValue) {
      return arrayValue;
    }
  }
  return [];
}
