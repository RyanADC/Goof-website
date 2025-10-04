<script lang="ts">
  // Hardcoded header: no CMS-driven nav
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
  }

  /* Centered pill nav */
  .navpill {
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: clamp(1rem, 2.9rem, 2.9rem);
    padding: clamp(0.7rem, 1.2rem, 1.2rem) clamp(1rem, 3rem, 3rem);
    border-radius: 9999px;
    border: 2px solid #4A5B4C;
    background: transparent;
  }
  .navpill a {
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: 400;
    color: #4A5B4C;
    text-decoration: none;
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
  }
  .cta:hover { filter: brightness(1.05); }

  /* Responsive behavior */
  @media (max-width: 900px) {
    .shell { grid-template-columns: 1fr auto; row-gap: .6rem; }
    .navpill { grid-column: 1 / -1; justify-self: center; gap: 1.4rem; padding: .7rem 1rem; }
    .cta { padding: .75rem 1rem; }
  }
</style>
