import { get, set, remove } from '@/infrastructure/storage'

const TOKEN_KEY = 'pb_demo_at'

export const setAccessToken = (token) => {
    set(TOKEN_KEY, token)
};

export const getAccessToken = () => {
    return get(TOKEN_KEY);
};

export const clearAccessToken = () => {
    remove(TOKEN_KEY)
};
