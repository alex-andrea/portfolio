<script>
  import { navigate } from 'svelte-routing';

  import { fly } from 'svelte/transition';
  import { isMenuOpen, toggleMenu } from './app.store';

  const flyDuration = 900;

  function navigateTo(url) {
    navigate(url);
    close();
  }

  function close() {
    toggleMenu(false);
  }
</script>

<style>
  aside {
    background: #000000;
    color: #fff;
    z-index: 1000000;
    width: 100%;
    right: -100%;
    transition: right 0.6s ease-in-out;
  }

  .open {
    right: 0;
  }
</style>

<svelte:head>
  {#if $isMenuOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<aside class="fixed h-screen flex flex-col" class:open={$isMenuOpen}>
  <div
    class="absolute w-full h-20 items-center flex justify-end px-4 md:px-12"
    style="top: 0;">
    <button
      type="button"
      class="px-4"
      style="color: #fff; font-size: 24px; position: relative; top: -8px;"
      on:click={() => close()}>&times;</button>
  </div>

  <div class="flex-none">
    <div class="container flex mx-auto py-4 mt-2 items-center">
      <div
        class="flex-grow flex justify-center content-center font-light text-sm"
        style="opacity: 0.7; pointer-events: none; font-family:Lato;">
        SELECTED WORKS
      </div>
    </div>
  </div>
  <div class="flex-grow flex flex-col items-center justify-center px-4">
    {#if $isMenuOpen}
      <div
        on:click={() => navigateTo('/adn')}
        class="menu-link"
        in:fly={{ y: 120, duration: flyDuration, delay: 500 }}>
        Action Design Network
      </div>
      <div
        on:click={() => navigateTo('/happy-elephant')}
        class="menu-link"
        in:fly={{ y: 120, duration: flyDuration, delay: 1000 }}>
        Happy Elephant
      </div>
      <div
        on:click={() => navigateTo('/ikea')}
        class="menu-link"
        in:fly={{ y: 120, duration: flyDuration, delay: 1500 }}>
        IKEA
      </div>
    {/if}
  </div>
</aside>
