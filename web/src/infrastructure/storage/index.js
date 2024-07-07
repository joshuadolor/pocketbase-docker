const storage = window.localStorage

export const get = (key) => {
    return storage.getItem(key)
}

export const set = (key, value) => {
    storage.setItem(key, value)
}

export const remove = (key) => {
    storage.removeItem(key)
}