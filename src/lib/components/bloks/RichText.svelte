<script lang="ts">
  import { renderRichText } from '@storyblok/svelte';
  export let blok: any;
  $: html = renderRichText(blok?.content);
</script>
<div class="prose">{@html html}</div>