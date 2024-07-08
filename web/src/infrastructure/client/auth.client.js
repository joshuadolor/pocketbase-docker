import ApiClient from '@/infrastructure/client/api.client';
import { setupInterceptors } from '@/infrastructure/client/interceptors/token.interceptor';
import { getAccessToken } from '@/infrastructure/utils/token-manager';
class AuthApiClient extends ApiClient {
    constructor() {
        super();
        this.token = getAccessToken();
        setupInterceptors(this.httpClient)
    }

    get(url, config = {}) {
        return super.get(url, this.addAuthHeader(config));
    }

    post(url, data, config = {}) {
        return super.post(url, data, this.addAuthHeader(config));
    }

    put(url, data, config = {}) {
        return super.put(url, data, this.addAuthHeader(config));
    }

    delete(url, config = {}) {
        return super.delete(url, this.addAuthHeader(config));
    }

    addAuthHeader(config) {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${this.token}`,
            }
        };
    }
}

export default AuthApiClient;
