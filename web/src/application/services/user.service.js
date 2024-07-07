import ApiClient from '@/infrastructure/client/api.client';
import AuthClient from '@/infrastructure/client/auth.client';
import User from '@/application/models/user.model';

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

    suspendUser(userId) {
        // return this.userService.deactivateUser(userId);
    }

    getUserProfile(userId) {
        // return this.userService.getUserById(userId);
    }
}

export default new UserService();
