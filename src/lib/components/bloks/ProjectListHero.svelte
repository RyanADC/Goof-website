<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokApi } from '$lib/storyblok';
	export let blok: any = null;
	$: void blok;

	const isDraft =
		typeof window !== 'undefined' &&
		(new URLSearchParams(window.location.search).has('_storyblok') ||
			new URLSearchParams(window.location.search).get('version') === 'draft');

	let projects: any[] = [];
	let loading = true;
	let error = '';
	let timedOut = false;

	onMount(async () => {
		const timeout = setTimeout(() => {
			if (loading) {
				timedOut = true;
				error =
					'Het laden duurt te lang (8s). Controleer je internetverbinding of je Storyblok token.';
				loading = false;
			}
		}, 8000);
		try {
			const api = useStoryblokApi();
			const { data } = await api.get('cdn/stories', {
				starts_with: 'projects/',
				// Temporarily remove content_type filter to avoid mismatches during setup
				// content_type: 'project',
				version: isDraft ? 'draft' : 'published',
				per_page: 6,
				sort_by: 'first_published_at:desc'
			});
			projects = data.stories;
			if (!projects || projects.length === 0) {
				error =
					'Geen projecten gevonden. Controleer dat de folder "projects" heet, de stories gepubliceerd zijn, en (optioneel) het content type "project" is.';
			}
			clearTimeout(timeout);
		} catch (e) {
			error = 'Kon projecten niet laden. ' + (e?.message || '');
			clearTimeout(timeout);
			console.error(e);
		} finally {
			if (!timedOut) {
				loading = false;
			}
		}
	});
</script>

<section class="projects">
	<div class="container">
		{#if loading}
			<p class="muted">Laden…</p>
		{:else if error}
			<p class="error">{error}</p>
		{:else}
			<div class="grid">
				{#each projects as p}
					<a class="card proj" href={'/werk/' + p.slug} aria-label={p.name}>
						<figure class="proj__media">
							{#if p.content?.cover?.filename}
								<img src={p.content.cover.filename} alt={p.name} />
							{:else}
								<div class="proj__ph"></div>
							{/if}
						</figure>
						<div class="proj__body">
							<h3 class="proj__title">{p.name}</h3>
							{#if p.content?.intro}
								<p class="proj__intro">{p.content.intro}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.projects {
		padding: clamp(2rem, 8vw, 8rem) 0;
		background: linear-gradient(to bottom, #FDFF96 0%, #FDFF96 10%, transparent 20%);
		overflow-x: hidden;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(1.5rem, 3vw, 2rem);
	}
	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 0 1rem;
		}
	}

	.card.proj {
		display: block;
		background: #efe9e6; /* zachte kaartkleur zoals je voorbeeld */
		border-radius: 18px;
		text-decoration: none;
		color: inherit;
		overflow: hidden;
		transform: translateZ(0);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}
	.card.proj:hover {
		transform: scale(1.02);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
	}

	.proj__media {
		margin: 0;
	}
	.proj__media img,
	.proj__ph {
		width: 100%;
		aspect-ratio: 16/8;
		object-fit: cover;
		display: block;
	}
	.proj__ph {
		background: #ece7e4;
	}

	.proj__body {
		padding: 1.5rem;
	}
	.proj__title {
		margin: 0.25rem 0 0.35rem;
		font-size: clamp(1.2rem, 2vw, 1.5rem);
		font-weight: 500;
	}
	.proj__intro {
		margin: 0;
		opacity: 0.8;
		font-size: clamp(0.9rem, 1.2vw, 1rem);
	}

	.muted {
		opacity: 0.7;
	}
	.error {
		color: tomato;
	}

	.container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 clamp(10px, 2vw, 20px);
	}
</style>
