import { useStoryblokApi } from '$lib/storyblok';

export async function load() {
  const storyblokApi = useStoryblokApi();

  try {
    const { data } = await storyblokApi.get('cdn/stories', {
      starts_with: 'projects/',
      version: 'published',
      per_page: 100,
      sort_by: 'first_published_at:desc'
    });

    return {
      projects: data.stories || []
    };
  } catch (error) {
    console.error('Error loading projects:', error);
    return {
      projects: []
    };
  }
}
