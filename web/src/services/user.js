

import ApiClient from '@/utils/api-client';
export default class AuthService {
    static endpoint = '/collections/users/records';

    static create(userData) {
        return ApiClient.setUrl(this.endpoint)
            .post(userData)
            .then(({ data }) => {
                console.log(data)
            })
            .catch((e) => e);
    }
}
