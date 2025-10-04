<script lang="ts">
  import { StoryblokComponent } from '@storyblok/svelte';
  export let blok: any;
</script>
<div class="grid">
  {#each blok?.columns || [] as col}
    <div class="col"><StoryblokComponent blok={col} /></div>
  {/each}
</div>
<style>
  .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem}
  .col{grid-column:span 6}
  @media (max-width:768px){.col{grid-column:span 12}}
</style>