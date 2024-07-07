export default function getProp(obj, path, defaultValue = null) {
    const keys = path.split('.');
    return keys.reduce((acc, key) => {
        if (acc && acc.hasOwnProperty(key)) {
            return acc[key];
        } else {
            return defaultValue;
        }
    }, obj);
}

