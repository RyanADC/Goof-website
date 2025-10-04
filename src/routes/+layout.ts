import { useStoryblokApi } from '$lib/storyblok';

export async function load({ url }) {
  const isDraft = url.searchParams.has('_storyblok') || url.searchParams.get('version') === 'draft';
  const version = isDraft ? 'draft' : 'published';

  const api = useStoryblokApi();

  // Check if API is properly initialized
  if (!api) {
    console.error('Storyblok API not initialized. Check if PUBLIC_STORYBLOK_ACCESS_TOKEN is set.');
    return {
      navigation: null,
      siteConfig: null,
      version
    };
  }

  const [navRes, confRes] = await Promise.allSettled([
    api.get('cdn/stories/navigation', { version }),
    api.get('cdn/stories/siteconfig', { version })
  ]);

  return {
    navigation: navRes.status === 'fulfilled' ? navRes.value.data.story?.content : null,
    siteConfig: confRes.status === 'fulfilled' ? confRes.value.data.story?.content : null,
    version
  };
}