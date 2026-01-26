export type Locale = 'en' | 'fr' | 'de';
export type Namespace = 'common' | 'home' | 'about' | 'contact' | 'pricing' | 'features' | 'integrations' | 'blog';

export const locales: Locale[] = ['en', 'fr', 'de'];

export async function getTranslation(locale: Locale, namespace: Namespace) {
  try {
    const mod = await import(`@/locales/${locale}/${namespace}.json`);
    return mod.default;
  } catch (error) {
    console.error(`Could not load translation for ${locale}/${namespace}`, error);
    return {};
  }
}

export async function getBlogPost(locale: Locale, slug: string) {
    try {
        const mod = await import(`@/locales/${locale}/blog/${slug}.json`);
        return mod.default;
    } catch (error) {
        console.error(`Could not load blog post for ${locale}/${slug}`, error);
        return null;
    }
}
