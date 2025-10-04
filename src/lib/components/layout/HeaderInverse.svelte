<script lang="ts">
	import { onMount } from 'svelte';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	// Close menu on escape key
	onMount(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') menuOpen = false;
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	});
</script>

<header class="header">
	<div class="shell">
		<a href="/" class="brand" aria-label="Goof">goof</a>

		<nav class="navpill" aria-label="Primary">
			<a href="/werk">werk</a>
			<a href="/diensten">diensten</a>
			<a href="/over">over</a>
			<a href="/contact">contact</a>
		</nav>

		<a href="/contact" class="cta">let's goof</a>

		<!-- Mobile menu button -->
		<button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="mobile-menu" on:click={closeMenu}>
			<nav class="mobile-nav">
				<a href="/werk" on:click={closeMenu}>werk</a>
				<a href="/diensten" on:click={closeMenu}>diensten</a>
				<a href="/over" on:click={closeMenu}>over</a>
				<a href="/contact" on:click={closeMenu}>contact</a>
				<a href="/contact" class="mobile-cta" on:click={closeMenu}>let's goof</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	/* Header wrapper keeps sticky behavior defined in app.css .header */
	.header {
		border-bottom: none;
		background: #4a5b4c;
	}

	/* Dark rounded container - inverse colors */
	.shell {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 1rem;
		max-width: 1400px;
		margin: 0 auto;
		padding: clamp(1rem, 2rem, 2rem) clamp(10px, 2vw, 20px) clamp(1rem, 1.5rem, 1.5rem);
		border-radius: 28px;
	}

	/* Brand */
	.brand {
		justify-self: start;
		font-size: clamp(1.8rem, 2.8vw, 2.6rem);
		font-weight: 700;
		letter-spacing: 0.4px;
		color: #fdff96; /* yellow text */
		text-decoration: none;
		font-family: 'Outfit', sans-serif;
	}

	/* Centered pill nav */
	.navpill {
		justify-self: center;
		display: inline-flex;
		align-items: center;
		gap: 2.9rem;
		padding: 1.2rem 3rem;
		border-radius: 9999px;
		border: 2px solid #fdff96;
		background: transparent;
	}
	.navpill a {
		font-size: clamp(1.1rem, 1.2vw, 1.2rem);
		font-weight: 400;
		color: #fdff96;
		text-decoration: none;
		font-family: 'Outfit', sans-serif;
	}
	.navpill a:hover {
		color: #e0e070;
	}

	/* CTA on the right */
	.cta {
		justify-self: end;
		display: inline-flex;
		align-items: center;
		padding: 1rem 1.4rem;
		border-radius: 9999px;
		background: #fdff96; /* yellow pill */
		color: #4a5b4c; /* dark text */
		text-decoration: none;
		font-size: clamp(1.1rem, 1.2vw, 1.2rem);
		font-weight: 700;
		border: 2px solid #fdff96;
		font-family: 'Outfit', sans-serif;
	}
	.cta:hover {
		filter: brightness(0.95);
	}

	/* Mobile menu button */
	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
		justify-self: end;
	}

	.menu-toggle .bar {
		width: 25px;
		height: 3px;
		background: #fdff96;
		border-radius: 3px;
		transition: all 0.3s ease;
	}

	/* Mobile menu overlay */
	.mobile-menu {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		animation: fadeIn 0.2s ease;
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 80%;
		max-width: 300px;
		background: #fdff96;
		padding: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		animation: slideIn 0.3s ease;
	}

	.mobile-nav a {
		color: #4a5b4c;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
		text-transform: lowercase;
		padding: 0.5rem 0;
	}

	.mobile-nav a:hover {
		opacity: 0.8;
	}

	.mobile-cta {
		background: #4a5b4c;
		color: #fdff96 !important;
		padding: 1rem 2rem !important;
		border-radius: 50px;
		text-align: center;
		font-weight: 700 !important;
		margin-top: auto;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	/* Responsive behavior */
	@media (max-width: 900px) {
		.shell {
			grid-template-columns: 1fr auto;
			padding: 1rem clamp(10px, 2vw, 20px);
		}

		.brand {
			font-size: 1.8rem;
		}

		.navpill,
		.cta {
			display: none;
		}

		.menu-toggle {
			display: flex;
		}
	}
</style>
