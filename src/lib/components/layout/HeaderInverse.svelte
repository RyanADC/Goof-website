<script lang="ts">
  // Hardcoded header: no CMS-driven nav (Inverse colors)
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
    </div>
</header>

<style>
  /* Header wrapper keeps sticky behavior defined in app.css .header */
  .header { border-bottom: none; background: #4A5B4C; }

  /* Dark rounded container - inverse colors */
  .shell {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 1rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 10px 1.5rem;
    border-radius: 28px;
  }

  /* Brand */
  .brand {
    justify-self: start;
    font-size: clamp(1.8rem, 2.8vw, 2.6rem);
    font-weight: 700;
    letter-spacing: .4px;
    color: #FDFF96; /* yellow text */
    text-decoration: none;
  }

  /* Centered pill nav */
  .navpill {
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: 2.9rem;
    padding: 1.2rem 3rem;
    border-radius: 9999px;
    border: 2px solid #FDFF96;
    background: transparent;
  }
  .navpill a {
    font-size: clamp(1.1rem, 1.2vw, 1.2rem);
    font-weight: 400;
    color: #FDFF96;
    text-decoration: none;
  }
  .navpill a:hover { color: #e0e070; }

  /* CTA on the right */
  .cta {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    padding: 1rem 1.4rem;
    border-radius: 9999px;
    background: #FDFF96; /* yellow pill */
    color: #4A5B4C;      /* dark text */
    text-decoration: none;
    font-size: clamp(1.1rem, 1.2vw, 1.2rem);
    font-weight: 700;
    border: 2px solid #FDFF96;
  }
  .cta:hover { filter: brightness(0.95); }

  /* Responsive behavior */
  @media (max-width: 900px) {
    .shell { grid-template-columns: 1fr auto; row-gap: .6rem; }
    .navpill { grid-column: 1 / -1; justify-self: center; gap: 1.4rem; padding: .7rem 1rem; }
    .cta { padding: .75rem 1rem; }
  }
</style>
