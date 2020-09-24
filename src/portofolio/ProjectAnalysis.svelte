<div class="container mx-auto py-20 md:pt-40">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-16 px-6">
    <div class="text-3xl">Project Goals:</div>
    <div class="flex ml-6">
      <div class="numberCircle flex-none">1</div>
      <div class="flex-grow font-lato text-lg pl-8">
        <slot name="goal1" />
      </div>
    </div>
    <div class="flex ml-6">
      <div class="numberCircle flex-none">2</div>
      <div class="flex-grow font-lato text-lg pl-8">
        <slot name="goal2" />
      </div>
    </div>
  </div>
</div>

<div class="container mx-auto py-20 md:pb-40">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-16 px-6">
    <div class="text-3xl">The Users:</div>
    <div class="flex flex-col ml-6">
      <div class="mb-12">
        <div class="portofolio-header">
          <slot name="user1" />
        </div>
      </div>
      <div class="font-lato text-lg">
        <slot name="userCase1" />
      </div>
    </div>
    <div class="flex flex-col ml-6">
      <div class="mb-12">
        <div class="portofolio-header">
          <slot name="user2" />
        </div>
      </div>
      <div class="font-lato text-lg">
        <slot name="userCase2" />
      </div>
    </div>
  </div>
</div>
