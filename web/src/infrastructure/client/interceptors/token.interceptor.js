import userService from "@/application/services/user.service";
import { setAccessToken } from "@/infrastructure/utils/token-manager";

let debounceTimer;
export function setupInterceptors(httpClient) {
    httpClient.interceptors.response.use(
        response => response,
        async error => {
            const { config } = error;
            const originalRequest = config;

            // If error status is 401, try to refresh the token
            if (error.response && error.response.status === 401) {
                clearTimeout(debounceTimer)
                try {
                    const token = await userService.refreshToken();
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return httpClient(originalRequest);
                } catch (refreshError) {
                    setAccessToken(null);
                }
                return Promise.reject(error);
            }
        }
    );
}