import ApiClient from '@/infrastructure/client/api.client';
import { setAccessToken } from '@/infrastructure/utils/token-manager';

class AccountService {
  constructor() {
    this.client = new ApiClient();
  }

  async signIn(request) {
    const { data } = await this.client.post('/collections/users/auth-with-password', request.toJSON())
    setAccessToken(data.token);
    return data;
  }

  async forgotPassword() {

  }

  async changePassword() {

  }
}

export default new AccountService();
