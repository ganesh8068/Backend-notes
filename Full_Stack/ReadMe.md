# Folder Notes

## Frontend Notes

### Axios
- Axios is used for making HTTP requests from the frontend to the backend API.
- It simplifies sending GET, POST, PUT, DELETE requests and handling responses.
- Example usage:
  ```js
  import axios from 'axios';

  axios.get('/api/data')
    .then(response => {
      // handle success
    })
    .catch(error => {
      // handle error
    });
  ```
- Axios can be configured globally for base URLs and headers.

### Proxy Server
- The proxy server is set up in the frontend development environment (e.g., in `package.json` for React).
- It forwards API requests from the frontend to the backend, avoiding CORS issues.
- Example configuration in `package.json`:
  ```json
  "proxy": "http://localhost:5000"
  ```
- This allows you to use relative API paths (e.g., `/api/data`) in your frontend code.

