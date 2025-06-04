import BrowserStorage from '@/shared/storage';

import { Language } from './types';

class LanguageStorage {
  private static readonly CURRENT_LANGUAGE_KEY = 'current';
  private static readonly STORAGE_NAMESPACE = 'language';

  private storage: BrowserStorage;

  constructor() {
    this.storage = new BrowserStorage(LanguageStorage.STORAGE_NAMESPACE);
  }

  clear(): void {
    this.storage.clearNamespace();
  }

  getCurrent(): Language | null {
    return this.storage.get<Language>(LanguageStorage.CURRENT_LANGUAGE_KEY);
  }

  setCurrent(language: Language): void {
    this.storage.set(LanguageStorage.CURRENT_LANGUAGE_KEY, language);
  }
}

export default new LanguageStorage();
