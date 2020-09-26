<script>
  import { toggleMenu } from '../app.store.js';

  export let heroImage;
  export let theme;

  let y;
</script>

<style>
  #hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
  }

  #hero-image-container {
    position: relative;
    overflow: hidden;
  }
</style>

<svelte:window bind:scrollY={y} />

<div class="portofolio-top flex flex-col">
  <div
    class="flex-none h-20 flex items-center justify-end px-4 md:px-12 {theme} portofolio-menu-header">
    <img
      src="./img/home/logoHalf.svg"
      id="logo"
      alt="ALEX ANDREA - UX/UI DESIGN SEATTLE, WA"
      class="portofolio-logo" />

    <div class="flex">
      <a href="/" class="cursor-pointer hidden md:block">HOME</a>
      <img
        src="./img/icons/hamburger.svg"
        alt="menu"
        class="ml-4 cursor-pointer"
        on:click={() => toggleMenu(true)} />
    </div>
  </div>
  <div id="hero-image-container" class="flex-grow {theme}">
    <img
      id="hero-image"
      src={heroImage}
      alt=""
      style="transform: translate3d(0, -{y / 100}%, 0) scale({(100 + y / 5) / 100})" />
    <div
      class="absolute bg-lines"
      style="top:0; left: 0; right: 0; bottom: 0;" />
  </div>
</div>
