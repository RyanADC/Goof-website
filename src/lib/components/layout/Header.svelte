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
  .header { border-bottom: none; background: #FDFF96; }

  /* Yellow rounded container like the design */
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
    letter-spacing: .4px;
    color: #4A5B4C; /* deep green/grey */
    text-decoration: none;
    font-family: 'Outfit', sans-serif;
  }

  /* Centered pill nav */
  .navpill {
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: clamp(1.5rem, 2.5rem, 2.5rem);
    padding: clamp(0.5rem, 0.75rem, 0.75rem) clamp(1.5rem, 2.5rem, 2.5rem);
    border-radius: 9999px;
    border: 2px solid #4A5B4C;
    background: transparent;
  }
  .navpill a {
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: 400;
    color: #4A5B4C;
    text-decoration: none;
    font-family: 'Outfit', sans-serif;
  }
  .navpill a:hover { color: #25302b; }

  /* CTA on the right */
  .cta {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    padding: clamp(0.75rem, 1rem, 1rem) clamp(1rem, 1.4rem, 1.4rem);
    border-radius: 9999px;
    background: #4A5B4C; /* dark pill */
    color: #FDFF96;      /* yellow text */
    text-decoration: none;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: 700;
    border: 2px solid #4A5B4C;
    font-family: 'Outfit', sans-serif;
  }
  .cta:hover { filter: brightness(1.05); }

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
    background: #4A5B4C;
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
    background: #4A5B4C;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    animation: slideIn 0.3s ease;
  }

  .mobile-nav a {
    color: #FDFF96;
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
    background: #FDFF96;
    color: #4A5B4C !important;
    padding: 1rem 2rem !important;
    border-radius: 50px;
    text-align: center;
    font-weight: 700 !important;
    margin-top: auto;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
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
