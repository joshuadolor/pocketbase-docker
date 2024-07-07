routerAdd("GET", "/api/auth/me", (c) => {
    const info = $apis.requestInfo(c);
    const record = info.authRecord;
    const data = record.publicExport();
    return c.json(200, { ...data, email: record.get('email') })
}, $apis.requireRecordAuth('users'))