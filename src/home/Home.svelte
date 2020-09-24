<script>
  import { fade } from 'svelte/transition';
  import * as animateScroll from 'svelte-scrollto';

  import HomePortofolio from './HomePortofolio.svelte';
  import Footer from '../Footer.svelte';
  import SocialLinks from './SocialLinks.svelte';

  import { toggleMenu } from '../app.store.js';

  function scrollToPortofolio() {
    animateScroll.scrollTo({ element: '#portofolio-section' });
  }
</script>

<style>
  main {
    background: #f5f5f5;
  }
  #logo {
    position: absolute;
    top: -2px;
    transform: translateY(-50%) scale(0.8);
    z-index: 1;
  }

  #menu-container {
    position: relative;
    left: 30px;
    top: 10px;
  }

  #about {
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.7);
  }

  #hero {
    position: absolute;
    transform: translateX(-50%);
    height: 80%;
    left: 10%;
    opacity: 0.05;
  }

  .white-bg {
    background-color: #fffefe;
  }
</style>

<main in:fade={{ duration: 2000 }}>
  <div class="bg-lines white-bg">
    <div class="home-top container mx-auto flex flex-col px-12 md:px-0">
      <div class="flex-none relative flex justify-between">
        <div>
          <img
            src="./img/home/logoHalf.svg"
            id="logo"
            alt="ALEX ANDREA - UX/UI DESIGN SEATTLE, WA"
            class="w-full md:w-1/2" />
        </div>
        <div id="menu-container" class="flex p-4">
          <span
            class="cursor-pointer hidden md:block"
            on:click={scrollToPortofolio}>PORTFOLIO</span>
          <img
            src="./img/icons/hamburger.svg"
            alt="menu"
            class="ml-4 cursor-pointer"
            on:click={() => toggleMenu(true)} />
        </div>
      </div>
      <div
        class="flex-grow flex justify-center items-center"
        style="font-family: Lato;">
        <div class="w-0 hidden md:w-1/3 md:block" />
        <div class="w-full md:w-1/3 flex flex-col justify-center">
          <img src="./img/home/poppies.jpg" alt="Andrea" id="poppies" />
          <div class="mt-2 md:hidden">
            <SocialLinks />
          </div>
        </div>
        <div class="w-0 hidden md:w-1/3 md:block pl-8">
          <div
            class="flex justify-between"
            style="position: relative; left: -15%; width: 115%;">
            <img src="./img/icons/LSP.svg" alt="LSP" />
            <img src="./img/icons/seattle.svg" alt="seattle" />
            <img src="./img/icons/dragon.svg" alt="dragon" />
            <img src="./img/icons/croissant.svg" alt="croissant" />
            <img src="./img/icons/tablet.svg" alt="tablet" />
          </div>
          <div id="about" class="mt-12">
            Passionate interface and experience designer. In a world of
            superfluity, I strive to create only what is meaningful, deliberate,
            and delightful.
          </div>
          <div class="text-xl mt-20">
            <a href="/resume" class="link">MY RÉSUMÉ →</a>
          </div>
          <div class="text-xl mt-4">
            <a href="/email" class="link">EMAIL ME →</a>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 hidden md:block" />
    </div>
  </div>
  <div
    class="relative px-4 py-2 bg-lines white-bg items-end hidden md:flex"
    style="height: 15vh">
    <div class="container mx-auto flex-1">
      <img
        src="./img/home/scroll.png"
        alt="scroll"
        class="absolute hidden md:block scroller" />
      <Footer />
    </div>
  </div>
  <div id="portofolio-section" class="container mx-auto flex flex-col p-4">
    <HomePortofolio
      image="./img/home/adn.jpg"
      header="ACTION DESIGN NETWORK"
      link="/adn"
      headerSub="Interface & Interaction Design / Branding">
      Website redesign and rebranding for a nonprofit organization promoting the
      use of behavioral economics and psychology in policy and product design.
    </HomePortofolio>

    <HomePortofolio
      image="./img/home/happyelephant.jpg"
      header="HAPPY ELEPHANT"
      link="/happy-elephant"
      headerSub="Experience & Interface Design"
      reverse={true}>
      Responsive website design for a resource locating and documenting ethical
      elephant sanctuaries and tours across Southeast Asia.
    </HomePortofolio>

    <HomePortofolio
      image="./img/home/ikea.jpg"
      header="IKEA"
      link="/ikea"
      headerSub="Experience & Interface Design">
      Website IA and UI redesign for IKEA, a Swedish multinational group that
      designs and sells ready-to-assemble furniture, kitchen appliances, home
      accessories, and more.
    </HomePortofolio>
  </div>

  <div class="relative flex flex-col h-auto md:h-screen">
    <div
      class="flex-grow flex flex-col items-center justify-center text-xl
        xs:text-2xl sm:text-4xl md:text-5xl xl:text-6xl my-32 md:my-0">
      <div class="flex flex-col font-light">
        <div>Let’s <b>create</b> something <b>beautiful.</b></div>
        <div>
          Email me → <a
            href="email:alandrea@uw.edu"
            class="font-semibold link">alandrea@uw.edu</a> →
        </div>
        <div>
          to get <b>started.</b>
          <img
            src="./img/home/peace-sign.png"
            alt="peace sign"
            class="inline ml-2 h-6 md:ml-4 sm:h-10 md:h-12" />
        </div>
      </div>
      <img
        src="./img/home/logoWhole.svg"
        id="hero"
        alt="ALEX ANDREA - UX/UI DESIGN SEATTLE, WA" />
    </div>
    <div class="flex-none px-8 py-2" style="background: #FFFEFE">
      <Footer />
    </div>
  </div>
</main>
