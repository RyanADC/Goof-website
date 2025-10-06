<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { StoryblokComponent } from '$lib/storyblok';

	export let data;

	$: story = data.story;
	$: project = story.content;
	$: moreProjects = data.moreProjects || [];
</script>

<svelte:head>
	<title>{story.name} - Goof</title>
</svelte:head>

<Header />

<article class="project-detail">
	<!-- Hero Section with Title -->
	<section class="project-hero">
		<div class="container">
			<h1>{story.name}</h1>
		</div>
	</section>

	<!-- Cover Image -->
	{#if project.hoofdAfbeelding?.filename}
		<div class="project-cover">
			<div class="container-full">
				<img src={project.hoofdAfbeelding.filename} alt={story.name} />
			</div>
		</div>
	{/if}

	<!-- Project Info Box -->
	<section class="project-info">
		<div class="container">
			<div class="info-box">
				<div class="info-main">
					<h2>{project.projectTitel || 'lorem ipsum dolor sit amet'}</h2>
					{#if project.projectBeschrijving}
						<p>{project.projectBeschrijving}</p>
					{/if}
				</div>

				<div class="meta">
					{#if project.klant}
						<div class="meta-item">
							<span class="label">Klant</span>
							<span class="value">{project.klant}</span>
						</div>
					{/if}
					{#if project.jaar}
						<div class="meta-item">
							<span class="label">Jaar</span>
							<span class="value">{project.jaar}</span>
						</div>
					{/if}
				</div>

				<div class="info-tags">
					{#if project.tags && project.tags.length > 0}
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					{:else}
						<span class="tag">logo ontwerp</span>
						<span class="tag">visuele identiteit</span>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- Additional Images Grid -->
	{#if project.afbeelding1?.filename || project.afbeelding2?.filename}
		<section class="project-images">
			<div class="container">
				<div class="images-grid">
					{#if project.afbeelding1?.filename}
						<img
							src={project.afbeelding1.filename}
							alt={project.afbeelding1.alt || story.name}
							loading="lazy"
						/>
					{/if}
					{#if project.afbeelding2?.filename}
						<img
							src={project.afbeelding2.filename}
							alt={project.afbeelding2.alt || story.name}
							loading="lazy"
						/>
					{/if}
				</div>
			</div>
		</section>
	{/if}

	<!-- Project Content Blocks -->
	{#if project.body}
		<div class="project-content">
			<div class="container">
				{#each project.body as blok}
					<StoryblokComponent {blok} />
				{/each}
			</div>
		</div>
	{/if}
</article>

<!-- More Work Section -->
<section class="more-work">
	<div class="container-full">
		<h2>meer werk</h2>
		<div class="work-grid">
			{#each moreProjects.slice(0, 3) as otherProject}
				<a href="/werk/{otherProject.slug}" class="work-card">
					{#if otherProject.content?.hoofdAfbeelding?.filename}
						<img src={otherProject.content.hoofdAfbeelding.filename} alt={otherProject.name} loading="lazy" />
					{:else}
						<div class="placeholder"></div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>

<Footer />

<style>
	.project-detail {
		background: #ffffff;
	}

	.container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 clamp(10px, 2vw, 20px);
	}

	.container-full {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 clamp(10px, 2vw, 20px);
	}

	/* Hero Section */
	.project-hero {
		background: #fdff96;
		padding: clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem);
	}

	.project-hero h1 {
		color: #4a5b4c;
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 500;
		line-height: 1.2;
		text-transform: lowercase;
	}

	/* Cover Image */
	.project-cover {
		background: #fdff96;
		padding-bottom: clamp(2rem, 4vw, 4rem);
	}

	.project-cover img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		border-radius: 20px;
		max-height: 500px;
	}

	/* Project Info Box */
	.project-info {
		padding: clamp(2rem, 4vw, 4rem) 0;
	}

	.info-box {
		background: #4a5b4c;
		border-radius: 20px;
		padding: clamp(2rem, 4vw, 3rem);
		display: grid;
		grid-template-columns: 2fr 1fr 0.5fr;
		gap: clamp(2rem, 4vw, 4rem);
		align-items: flex-start;
	}

	.info-main h2 {
		color: #fdff96;
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 700;
		margin: 0 0 1rem 0;
		text-transform: lowercase;
		line-height: 1;
	}

	.info-main p {
		color: #fdff96;
		font-size: clamp(0.9rem, 1.2vw, 1rem);
		font-weight: 300;
		line-height: 1.7;
		opacity: 0.95;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.meta-item .label {
		color: #fdff96;
		font-size: clamp(1rem, 1.8vw, 1.4rem);
		font-weight: 600;
		line-height: 1;
	}

	.meta-item .value {
		color: #fdff96;
		font-size: clamp(1rem, 1.8vw, 1.4rem);
		line-height: 1;
		padding-top: 8px;
	}

	.info-tags {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-end;
	}

	.tag {
		background: transparent;
		border: 2px solid #fdff96;
		color: #fdff96;
		padding: clamp(0.6rem, 1.2vw, 1rem) clamp(1.2rem, 2vw, 2rem);
		border-radius: 50px;
		font-size: clamp(1rem, 1.5vw, 1.3rem);
		font-weight: 500;
		text-transform: lowercase;
		white-space: nowrap;
		line-height: 1;
		display: inline-flex;
		align-items: center;
	}

	/* Project Images Grid */
	.project-images {
		padding: clamp(2rem, 4vw, 3rem) 0;
	}

	.images-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(1rem, 2vw, 2rem);
	}

	.images-grid img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		border-radius: 20px;
		background: #f5f5f5;
	}

	/* Project Content */
	.project-content {
		padding: clamp(2rem, 4vw, 3rem) 0;
	}

	/* More Work Section */
	.more-work {
		background: #4a5b4c;
		padding: clamp(3rem, 6vw, 5rem) 0;
	}

	.more-work h2 {
		color: #fdff96;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 500;
		margin-bottom: clamp(2rem, 3vw, 3rem);
		text-transform: lowercase;
	}

	.work-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}

	.work-card {
		display: block;
		border-radius: 20px;
		overflow: hidden;
		background: #e8d9d9;
		aspect-ratio: 4/3;
		transition: transform 0.2s ease;
	}

	.work-card:hover {
		transform: scale(1.02);
	}

	.work-card img,
	.work-card .placeholder {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.work-card .placeholder {
		background: #e8d9d9;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.info-box {
			grid-template-columns: 1fr;
		}

		.info-tags {
			align-items: flex-start;
		}

		.work-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.images-grid {
			grid-template-columns: 1fr;
		}

		.work-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.project-hero {
			padding: 2rem 0 1.5rem;
		}

		.project-hero h1 {
			font-size: 2rem;
		}

		.info-box {
			padding: 1.5rem;
			gap: 1.5rem;
		}

		.info-main h2 {
			font-size: 1.25rem;
		}

		.info-main p {
			font-size: 0.9rem;
		}

		.tag {
			padding: 0.5rem 1rem;
			font-size: 0.8rem;
		}

		.more-work {
			padding: 2.5rem 0;
		}

		.more-work h2 {
			font-size: 1.75rem;
		}
	}
</style>
