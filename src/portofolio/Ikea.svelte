<script>
  import { fade } from 'svelte/transition';
  import Video from './Video.svelte';
  import PortofolioMenuHeader from './PortofolioMenuHeader.svelte';
  import PortofolioProject from './PortofolioProject.svelte';
  import ProjectAnalysis from './ProjectAnalysis.svelte';
  import Footer from '../Footer.svelte';
</script>

<style>
  main {
    background: #fffefe;
  }
</style>

<main in:fade={{ duration: 2000 }}>
  <PortofolioMenuHeader theme="theme-ikea" heroImage="/img/ikea/heroIkea.png" />

  <PortofolioProject
    title="Ikea"
    roles={['UX Design', 'Prototyping', 'UI Design', 'User Testing']}
    deliverables={['Wireframes', 'Hi-Fi Screens']}
    tools={['sketch']}
    prototype="https://www.figma.com/proto/4I5pHmJb9yv7HBheAuLNjH/Action-Design-Network?node-id=421%3A0&viewport=574%2C507%2C0.10546174645423889&scaling=scale-down-width"
    label="InVision Prototype →"
    >
    <div slot="description">
      I worked in a group of three to evaluate and redesign the IKEA website
      over the course of two weeks. We spent one week conducting market research
      and redesigning the website to present a more polished version of the IKEA
      brand. We spent the second week conducting user testing via UsabilityHub.
      I contributed significantly to both the UX and UI design, and was
      responsible for the image selection and UI finalization for testing.
    </div>
  </PortofolioProject>

  <div class="theme-ikea bg-lines p-8 md:p-20">
    <Video src="./img/ikea/videoIkea.mp4" />
  </div>

  <ProjectAnalysis>
    <span slot="goal1">Improve the website and brand aesthetic to be more modern
      and on-par with other online furniture retailers</span>
    <span slot="goal2">Improve the website and brand aesthetic to be more modern
      and on-par with other online furniture retailers</span>

    <span slot="user1">THE COLLEGE STUDENT</span>
    <span slot="userCase1"><div>
        The college student wants chic furniture on a budget. They aren’t as
        interested in investment pieces are they are in aesthetic and
        functionality.
      </div>
      <div class="mt-12">
        They are frustrated that Ikea’s website doesn’t organize their products
        well – for example, different color options for the same product are
        listed separately.
      </div></span>

    <span slot="user2">THE FIRST APARTMENT/HOME/CONDO BUYER</span>
    <span slot="userCase2"><div>
        The new homebuyer is starting to become interested in investment pieces
        that will last, but still wants to stay within budget. They are working
        full-time and don’t have time to visit every furniture store.
      </div>
      <div class="mt-12">
        They are frustrated that Ikea’s website is catered towards customers who
        plan to come into the store, without a way to save items to a wishlist
        to look at or compare later.
      </div></span>
  </ProjectAnalysis>

  <div class="theme-ikea bg-lines p-8 md:p-20 hidden md:block">
    <div class="container mx-auto">
      <div class="text-3xl"><b>Method:</b></div>
      <div class="portofolio-method-text my-12">
        We completed a comparative analysis of some of Ikea’s competitors to
        develop a strategy for improving Ikea’s IA.
      </div>

      <div class="grid grid-cols-3 gap-16 items-center mb-4">
        <div>
          <img src="/img/ikea/logoCrate.png" alt="Crate Logo" class="mx-auto" />
        </div>
        <div>
          <img
            src="/img/ikea/logoWayfair.png"
            alt="Wayfair Logo"
            class="mx-auto" />
        </div>
        <div>
          <img
            src="/img/ikea/logoHayneedle.png"
            alt="Hayneedle Logo"
            class="mx-auto" />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-16">
        <div>
          <img src="/img/ikea/crate.jpg" alt="Crate Screen" class="drop-img" />
        </div>
        <div>
          <img
            src="/img/ikea/wayfair.jpg"
            alt="Wayfair Screen"
            class="drop-img" />
        </div>
        <img
          src="/img/ikea/hayneedle.jpg"
          alt="Crate Screen"
          class="drop-img" />
      </div>

      <div class="portofolio-method-text mt-20">
        <div class="my-6">
          Ikea’s current website groups all of its categories under a single
          drawer labeled, “Products.”
        </div>

        <div class="my-6">
          Based on our comparative analysis, we restructured Ikea’s IA to have a
          full top-nav, reducing the number of clicks it takes users to navigate
          to Ikea’s products.
        </div>

        <div class="my-6">
          We also brought Ikea’s imagery into the forefront of the design.
        </div>
      </div>

      <div class="relative">
        <div class="absolute font-lato font-light" style="top: 9%; left: 9%;">
          Finished Wireframes
        </div>
        <img src="/img/ikea/wireframe.png" alt="Wireframe" />
      </div>

      <div class="portofolio-method-text mt-20">
        <div class="my-6">
          Ikea’s catalogues are chock full of beautiful product imagery.
        </div>

        <div class="my-6">
          For our UI, I personally selected from this imagery to bring them to
          the forefront and become the defining aspect of the brand.
        </div>
      </div>

      <div class="flex flex-row">
        <div class="p-12">
          <div class="font-lato font-light mb-2 text-center">
            <span
              style="transform: translateX(-100%); display: inline-block;">Ikea’s
              current site</span>
          </div>
          <img
            src="/img/ikea/screenCurrent.jpg"
            alt="Screen Current"
            class="drop-img" />
        </div>
        <div class="p-12">
          <div class="font-lato font-light mb-2 text-center">
            <span
              style="transform: translateX(100%); display: inline-block;">Our
              redesign</span>
          </div>
          <img src="/img/ikea/screenFinal.png" alt="Screen Final" />
        </div>
      </div>

      <div class="portofolio-method-text mt-20">
        <div class="my-6">
          <img
            src="/img/ikea/asterisk.png"
            alt="asterisk"
            class="spin"
            style="position: relative; left: 5px; top: 5px;" /> We used UsabilityHub
          to test our wireframe against a wireframe of IKEA's current layout. We
          gave users instructions to find a specific IKEA product.
        </div>

        <div class="my-6">
          Our layout resulted in a <span class="font-semibold">1779.43%</span> increase
          in task completion compared to IKEA's current layout.
        </div>
      </div>
    </div>
  </div>

  <div class="p-8 md:p-20">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24">
      <div>
        <img src="/img/ikea/screen1.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/ikea/screen2.jpg" alt="" class="mb-16 drop-img" />
      </div>

      <div>
        <img src="/img/ikea/screen3.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/ikea/screen4.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/ikea/screen5.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/ikea/screen6.jpg" alt="" class="mb-16 drop-img" />
      </div>
    </div>

    <div class="text-center mt-12">
      <a href="/" class="text-xl">InVision Prototype →</a>
    </div>
  </div>

  <div class="flex-none px-8 py-2" style="background: #FFFEFE">
    <Footer />
  </div>
</main>
