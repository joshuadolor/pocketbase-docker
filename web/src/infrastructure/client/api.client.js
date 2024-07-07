import axios from 'axios'
import HttpClient from '@/infrastructure/client/http.client';
import baseConfig from '@/infrastructure/config/api.config';

class ApiClient extends HttpClient {
    constructor(config = {}) {
        const httpClient = axios.create({ ...baseConfig, ...config });
        super(httpClient)
    }
}

export default ApiClient;