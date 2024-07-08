const secretKey = $os.getenv('PB_JWT_REFRESH_SECRET');
const refreshTokenTTL = $os.getenv('PB_JWT_REFRESH_TTL');
// schedule something to regenerate this
const refreshTokenName = $os.getenv('PB_JWT_REFRESH_NAME');

const createRefreshToken = (payload) => {
    return $security.createJWT(payload, secretKey, refreshTokenTTL);
}

const extractPayloadFromRefreshToken = (token) => {
    return $security.parseJWT(token, secretKey)
}

module.exports = {
    extractRefreshTokenFromCookie: (c) => {
        const refreshToken = c.cookie(refreshTokenName).value;
        const payload = extractPayloadFromRefreshToken(refreshToken)
        return payload;
    },
    attachRefreshTokenToCookie: (context, payload) => {
        const refreshToken = createRefreshToken(payload)
        const cookie = new Cookie({
            name: refreshTokenName,
            value: refreshToken,
            path: "/",
            maxAge: refreshTokenTTL,
            secure: true,
            httpOnly: true,
        })
        context.setCookie(cookie)
    }
}