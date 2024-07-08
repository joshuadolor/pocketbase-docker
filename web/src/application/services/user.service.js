import ApiClient from '@/infrastructure/client/api.client';
import AuthClient from '@/infrastructure/client/auth.client';
import User from '@/application/models/user.model';
import { setAccessToken } from '@/infrastructure/utils/token-manager';

class UserService {
    constructor() {
        this.client = new ApiClient();
        this.authClient = new AuthClient();
    }

    async registerUser(request) {
        const { data } = await this.client.post('/collections/users/records', request.toJSON())
        return data;
    }

    async getCurrentUser() {
        const { data } = await this.authClient.get("/auth/me")
        return new User(data);
    }

    async refreshToken() {
        const { data } = await this.authClient.post('/auth/refresh')
        const { token } = data;
        setAccessToken(token);
        return token;
    }

}

export default new UserService();
