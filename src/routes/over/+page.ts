import { useStoryblokApi } from '$lib/storyblok';

export async function load() {
  const storyblokApi = useStoryblokApi();

  try {
    const { data } = await storyblokApi.get('cdn/stories/over', {
      version: 'draft',
      resolve_links: 'url'
    });

    return {
      story: data.story
    };
  } catch (error) {
    console.error('Error loading over page:', error);
    return {
      story: null
    };
  }
}
