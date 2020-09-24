<script>
  export let type = 'Project';
  export let title;
  export let roles = [];
  export let deliverables = [];
  export let tools = [];
</script>

<style>
</style>

<div
  class="relative container mx-auto flex flex-col md:flex-row py-20 md:py-32">
  <img
    src="./img/home/scroll.png"
    alt="scroll"
    class="absolute hidden md:block scroller" />
  <div class="w-full md:w-1/2 flex flex-col px-6">
    <div class="text-3xl mb-12">
      <b>{type}:</b>
      <span class="font-light px-2">{title}</span>
    </div>
    <div class="font-lato text-xl">
      <slot name="description" />
    </div>
    <div class="mt-16">InVision Prototype →</div>
  </div>
  <div
    class="w-full md:w-1/2 flex flex-row justify-between md:justify-around px-6
      mt-24 md:mt-4">
    <div>
      <div class="portofolio-header mb-12">MY ROLE</div>
      {#each roles as role, i}
        <div class="portofolio-list-item">{role}</div>
      {/each}
    </div>
    <div>
      <div class="portofolio-header mb-12">Deliverables</div>
      {#each deliverables as deliverable, i}
        <div class="portofolio-list-item">{deliverable}</div>
      {/each}
    </div>
    <div>
      <div class="portofolio-header mb-12">Tools Used</div>
      <div class="flex">
        {#each tools as tool, i}
          <div class="portofolio-list-item px-1">
            <img src="./img/icons/{tool}.svg" alt={tool} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
