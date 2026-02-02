'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import ja from '@/locales/ja.json';
import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

const translations = { ja, en, zh };

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}` | K
        : K
      : never
    }[keyof T]
  : never;

type TranslationKey = NestedKeyOf<typeof ja>;

export function useTranslation() {
  const { lang } = useLanguage();

  const t = (key: TranslationKey | string): string => {
    const keys = key.split('.');
    let value: unknown = translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to Japanese if key not found
        value = translations['ja'];
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = (value as Record<string, unknown>)[k2];
          } else {
            return key; // Return key if not found in any language
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, lang };
}
