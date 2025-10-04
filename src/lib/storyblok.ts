import { apiPlugin, storyblokInit, StoryblokComponent, useStoryblokApi } from '@storyblok/svelte';
import { PUBLIC_STORYBLOK_ACCESS_TOKEN } from '$env/static/public';

// <<< vervang deze imports door jouw echte blokcomponenten zodra je ze hebt >>>
import Page from '$lib/components/bloks/Page.svelte';
import RichText from '$lib/components/bloks/RichText.svelte';
import ImageBlock from '$lib/components/bloks/ImageBlock.svelte';
import Grid from '$lib/components/bloks/Grid.svelte';
import ProjectList from '$lib/components/bloks/ProjectListHero.svelte';
import OverGoof from '$lib/components/bloks/OverGoof.svelte';

storyblokInit({
  accessToken: PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    richText: RichText,
    image: ImageBlock,
    grid: Grid,
    projectList: ProjectList,
    overGoof: OverGoof
    // <<< voeg hier jouw eigen blokcomponenten toe zodra je je hebt >>>
  }
});

export { StoryblokComponent, useStoryblokApi };