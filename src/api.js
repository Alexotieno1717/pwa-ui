import axios from 'axios'
const api = axios.create({
  baseURL: 'http://197.248.4.233/mswali/mswali_app/backend/web/index.php?r=corporate-tunnel',
  headers: {
    'Accept': 'application/json',
  }
});
export default api;