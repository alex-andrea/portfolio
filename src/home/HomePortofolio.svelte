<script>
  export let image;
  export let header;
  export let headerSub;
  export let link;
  export let reverse = false;

  $: classRow = reverse ? 'flex-row-reverse' : 'flex-row';
</script>

<style>
  .portofolio-img {
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
  }

  .portofolio {
    font-size: 15px;
    font-style: normal;
    letter-spacing: 0em;
    max-width: 391px;
  }

  .portofolio-header {
    font-weight: 700;
  }

  .portofolio-header-sub {
    font-style: italic;
    font-weight: 300;
  }

  .link {
    font-size: 20px;
    line-height: 24px;
  }
</style>

<div class="flex {classRow} flex-wrap items-center my-12 md:my-24">
  <div class="w-full md:w-1/2 p-4">
    <img src={image} class="portofolio-img" alt={header} />
  </div>
  <div class="w-full mt-6 md:w-1/2 md:mt-0 p-0 md:p-4">
    <div class="portofolio font-lato mx-auto text-center md:text-left">
      <div class="portofolio-header">{header}</div>
      <div class="portofolio-header-sub mt-4">{headerSub}</div>
      <div class="portofolio-description mt-6">
        <slot />
      </div>
      <div class="mt-12"><a href={link} class="link">VIEW CASE →</a></div>
    </div>
  </div>
</div>
