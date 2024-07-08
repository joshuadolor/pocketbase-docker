routerAdd("GET", "/api/auth/me", c => {
    const token = require(`${__hooks}/utils/token.js`)
    const info = $apis.requestInfo(c);
    const record = info.authRecord;
    const data = record.publicExport();

    // every request make a fresh refresh token and attach it to the request
    token.attachRefreshTokenToCookie(c, { id: data.id })

    return c.json(200, { ...data, email: record.get('email'), id: $security.pseudorandomString(12) })
}, $apis.requireRecordAuth('users'))

routerAdd("POST", "/api/auth/refresh", (c) => {
    const tokenUtil = require(`${__hooks}/utils/token.js`)
    const { id } = tokenUtil.extractRefreshTokenFromCookie(c);
    const userRecord = $app
        .dao()
        ?.findFirstRecordByFilter(
            "users",
            `id = '${id}'`
        );

    const token = $tokens.recordAuthToken($app, userRecord)

    c.json(200, { token })
})

onRecordAfterAuthWithPasswordRequest((e) => {
    const token = require(`${__hooks}/utils/token.js`)
    token.attachRefreshTokenToCookie(e.httpContext, { id: e.record.id })
    e.record.set('id', $security.pseudorandomString(12))
}, "users")