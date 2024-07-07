import getProp from "@/infrastructure/utils/get-prop";

class HttpClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async request(method, url, data = null, config = {}) {
        try {
            if (method === 'get' || method === 'delete') {
                return await this.httpClient[method](url, config);
            } else {
                return await this.httpClient[method](url, data, config);
            }
        } catch (error) {
            const { shouldThrow = true } = config;
            // log? do before throwing if shouldThrow

            if (shouldThrow) {
                const message = getProp(error, 'response.data.message', 'An error occured')
                const errCode = getProp(error, 'response.data.code', 500)
                throw new Error(message)
            }

        }
    }

    get(url, config = {}) {
        return this.request('get', url, null, config);
    }

    post(url, data, config = {}) {
        return this.request('post', url, data, config);
    }

    put(url, data, config = {}) {
        return this.request('put', url, data, config);
    }

    delete(url, config = {}) {
        return this.request('delete', url, null, config);
    }
}

export default HttpClient;
