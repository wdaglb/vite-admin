export default class Storage {
  static get<T>(key: string, def?: T, timeout: number = 0) {
    const value = localStorage.getItem(key)
    if (!value) {
      return def
    }
    try {

    }
    const data = JSON.parse(value)

  }

  static set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
