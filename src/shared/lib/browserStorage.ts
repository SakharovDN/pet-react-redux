class BrowserStorage {
  private readonly namespace: string;
  private readonly storage: Storage;

  constructor(namespace: string, storage: Storage = localStorage) {
    this.namespace = namespace;
    this.storage = storage;
  }

  clearNamespace(): void {
    const keys = Object.keys(this.storage).filter((key) => key.startsWith(`${this.namespace}:`));
    keys.forEach(this.storage.removeItem);
  }

  get<T>(key: string): T | null {
    const storageKey = this.getKey(key);
    const value = this.storage.getItem(storageKey);

    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }

  remove(key: string): void {
    const storageKey = this.getKey(key);
    this.storage.removeItem(storageKey);
  }

  set<T>(key: string, value: T): void {
    const storageKey = this.getKey(key);
    this.storage.setItem(storageKey, JSON.stringify(value));
  }

  private getKey(key: string): string {
    return `${this.namespace}:${key}`;
  }
}

export default BrowserStorage;
