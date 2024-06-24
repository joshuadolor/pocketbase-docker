
import mergeDeep from "./merge-deep";
import isEmpty from "./is-empty";
import axios from 'axios'

class Http {
    constructor () {
        this.config = {
            crossDomain: true,
        };
    }

    get(url, params = {}, config = {}) {
        this._construct();
        this._prepareXhr(url, 'get', config);
        this.config.params = params;
        return this._send();
    }

    post(url, data = {}, config = {}) {
        this._construct();
        this._prepareXhr(url, 'post', config);
        this.config.data = data;
        return this._send();
    }

    put(url, data = {}, config = {}) {
        this._construct();
        this._prepareXhr(url, 'put', config);
        this.config.data = data;
        return this._send();
    }

    delete(url, data = {}, config = {}) {
        this._construct();
        this._prepareXhr(url, 'delete', config);
        this.config.data = data;
        return this._send();
    }

    _prepareXhr(url, method, config) {
        this.config.url = url;
        this.config.method = method;
        this.overrides = config;
    }

    _construct() {
        this.overrides = {};

        try {
            const accessToken = JSON.parse(localStorage.getItem('accessToken'));
            this.config = {
                url: '',
                data: {},
                method: 'get',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {},
            };
        } catch (e) {
            console.log(e);
        }
    }

    _send() {
        if (!isEmpty(this.overrides)) {
            this.config = mergeDeep(this.config, this.overrides);
        }

        return axios(this.config).then((response) => {
            if (response) {
                window.axiosResponseHeaders = response.headers;
                return response.data;
            }
        });
    }
}

export default Http;
