<script>
  import { fade } from 'svelte/transition';

  import * as animateScroll from 'svelte-scrollto';

  export let limit = 150;
  let y;
</script>

<svelte:window bind:scrollY={y} />

{#if y > limit}
  <div
    transition:fade={{ duration: 500 }}
    class="fixed text-xs font-light cursor-pointer hidden md:block z-10"
    style="right: 0; bottom: 85px; transform: rotate(-90deg); font-family: sans-serif;"
    on:click={() => animateScroll.scrollToTop({ duration: 1000 })}>
    BACK TO TOP
  </div>
{/if}
