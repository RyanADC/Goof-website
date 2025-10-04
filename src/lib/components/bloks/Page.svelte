<script lang="ts">
  import { StoryblokComponent } from '@storyblok/svelte';
  export let blok: any;
</script>

<div>
  {#if blok?.body}
    {#each blok.body as nested}
      <StoryblokComponent blok={nested} />
    {/each}
  {/if}
</div>