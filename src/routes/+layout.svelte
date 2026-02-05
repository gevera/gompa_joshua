<script lang="ts">
  import "./layout.css";
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.svg";
  import { SITE_URL, DEFAULT_META } from "$lib/seo";

  let { children } = $props();
  import {
    showModal,
    ContactForm,
    Frame,
    Footer,
    Nav,
    Modal,
  } from "$lib/components";

  const seo = $derived(
    page.data?.seo
      ? {
          title: page.data.seo.title,
          description: page.data.seo.description,
          path: page.data.seo.path ?? (page.url.pathname || "/"),
          ogImage: page.data.seo.ogImage ?? DEFAULT_META.ogImage,
        }
      : {
          title: DEFAULT_META.title,
          description: DEFAULT_META.description,
          path: page.url.pathname || "/",
          ogImage: DEFAULT_META.ogImage,
        }
  );
  const canonicalUrl = $derived(`${SITE_URL}${seo.path === "/" ? "" : seo.path}`);

  const jsonLd = $derived.by(() => {
    if (seo.path !== "/") return null;
    return {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      name: "Gompa Apartments",
      description: DEFAULT_META.description,
      url: SITE_URL,
      image: DEFAULT_META.ogImage,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Truth or Consequences",
        addressRegion: "NM",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.128349,
        longitude: -107.252906,
      },
    };
  });
</script>

<svelte:head>
  {#if jsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
  {/if}
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={seo.ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.ogImage} />
  <link rel="icon" href={favicon} />
</svelte:head>
{#if $showModal}
  <Modal />
{/if}
<a href="#main-content" class="skip-link">Skip to main content</a>
<div class="flex justify-center">
  <div class="w-full main-container">
    <!-- <div class="cntr">
		<h1>Website is temporary under construction</h1>
	</div> -->
    <nav>
      <Nav />
    </nav>
    <main id="main-content">
      {@render children()}
    </main>
    <footer>
      <div class="contacts">
        <Frame>
          <h3>Contact Gompa Apartments</h3>
          <p>The transformation of Gompa Apartments, How can you help?</p>
          <ContactForm />
        </Frame>
      </div>
      <div class="disclaimer">
        <Frame>
          <p class="small">
            Gompa apartments LLC is an equal opportunity housing provider, Gompa
            Apartments LLC (DBA Gompa Apartments), provides housing
            opportunities regardless of race, color, national origin, religion,
            non-religion, sex, physical or mental disability, familial status or
            any other designation protected by applicable federal, state or
            local law.
          </p>
        </Frame>
      </div>
      <Footer />
    </footer>

    <div class="pattern-bg"></div>
  </div>
</div>

<style>
  .main-container {
    padding: 1rem;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E");
    min-height: calc(100vh - 2rem);
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }
  .pattern-bg {
    background: rgb(71, 71, 71);
    background: radial-gradient(
      circle,
      rgb(70, 70, 70) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -10;
  }

  main {
    margin-top: 2.5rem;
  }

  nav {
    position: sticky;
    top: 0;
  }

  .contacts {
    max-width: 768px;
    padding-top: 3rem;
  }

  .disclaimer {
    margin: 0 auto;
    max-width: 768px;
    padding-top: 3rem;
  }
  .small {
    font-size: 1rem;
  }

  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    padding: 0.75rem 1rem;
    background: var(--gray-dark);
    color: var(--gray-lighter);
    z-index: 100;
    transition: top 0.2s;
  }
  .skip-link:focus {
    top: 0;
  }
</style>
