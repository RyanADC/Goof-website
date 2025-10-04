<script lang="ts"> export let blok: any; </script>
{#if blok?.asset?.filename}
  <img src={blok.asset.filename} alt={blok.alt || ''} />
{/if}