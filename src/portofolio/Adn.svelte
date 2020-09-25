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

  #sticker {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(30%, -40%);
    width: 80px;
  }
</style>

<main in:fade={{ duration: 2000 }}>
  <PortofolioMenuHeader theme="theme-adn" heroImage="/img/adn/heroADN.png" />

  <PortofolioProject
    type="Client"
    title="Action Design Network"
    roles={['User Testing', 'Prototyping', 'UI Design']}
    deliverables={['Design Principles', 'Hi-Fi Screens', 'Design System']}
    tools={['figma', 'zeplin']}>
    <div slot="description">
      <div>
        Action Design Network is a non-profit organization that promotes the use
        of behavioral economics and psychology in policy and product design.
        They have about 10,000 members participating in monthly events held
        across 15 different cities.
      </div>
      <div class="mt-6">
        I worked independently over three weeks to rebrand and re- design Action
        Design’s website to be more fresh, professional, and to make it stand
        out as a reliable leader in the field of applied behavioral science.
      </div>
    </div>
  </PortofolioProject>

  <div class="theme-adn bg-lines p-8 md:p-20">
    <Video src="./img/adn/videoADN.m4v" />
  </div>

  <ProjectAnalysis>
    <span slot="goal1">Improve the website and brand aesthetic to be more
      modern, professional, and reflective of the educational design community</span>
    <span slot="goal2">Confirm the new IA developed by the UX team to improve
      the discoverability of events and make improvements, if needed</span>

    <span slot="user1">THE ASPIRING PRACTITIONER</span>
    <span slot="userCase1"><div>
        The aspiring practitioner wants to connect with the human behavioral
        community – especially practitioners – through events, direct contact,
        and educational opportunities.
      </div>
      <div class="mt-12">
        They are frustrated by there being no clear, central authoritative
        entity for the field.
      </div></span>

    <span slot="user2">THE SEASONED PRACTITIONER</span>
    <span slot="userCase2"><div>
        The seasoned practitioner wants a platform for sharing knowledge with
        other practitioners and educating others, as well as a way to keep
        up-to-date on the field.
      </div>
      <div class="mt-12">
        They are frustrated by having no centralized space to knowledge share.
      </div></span>
  </ProjectAnalysis>

  <div class="theme-adn bg-lines p-8 md:p-20">
    <div class="container mx-auto">
      <div class="text-3xl"><b>My Method:</b></div>
      <div class="portofolio-method-text mt-4">
        I was provided with annotated wireframes by the UX team. The home page
        is shown below.
      </div>

      <div class="mt-12">
        <img
          src="/img/adn/wireframe.jpg"
          alt="wireframe"
          class="mx-auto drop-img w-full md:w-1/3" />
      </div>

      <div class="portofolio-method-text mt-12">
        I created 3 divergent styles based on the wireframe for the home page to
        test with users
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
        <div>
          <img src="/img/adn/style1.png" alt="Crate Screen" class="drop-img" />
        </div>
        <div>
          <img
            src="/img/adn/style2.png"
            alt="Wayfair Screen"
            class="drop-img" />
        </div>
        <div class="relative">
          <img src="/img/adn/style3.png" alt="Crate Screen" class="drop-img" />
          <img src="/img/adn/sticker.png" alt="preferred" id="sticker" />
        </div>
      </div>

      <div class="portofolio-method-text mt-12">
        Users preferred bright colors and touches of whimsy, while still
        communicating scientific authority.
      </div>

      <div class="portofolio-method-text mt-12">
        Because ADN’s brand color has been blue since its inception, I decided
        to keep blue as a nod to their roots, but update the palette with
        fresher, brighter hues.
      </div>

      <div class="mt-12">
        <img
          src="/img/adn/stylefinal.png"
          alt="FInal Style"
          class="mx-auto w-full md:w-1/2" />
      </div>
    </div>
  </div>

  <div class="p-8 md:p-20">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24">
      <div>
        <img src="/img/adn/screenHome.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenEvents.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenBoston.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenVolunteer.jpg" alt="" class="mb-16 drop-img" />
      </div>

      <div>
        <img src="/img/adn/screenAbout.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenChapters.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenPodcast.jpg" alt="" class="mb-16 drop-img" />
        <img src="/img/adn/screenBlog.jpg" alt="" class="mb-16 drop-img" />
      </div>
    </div>

    <div class="text-center mt-12">
      <a href="https://www.figma.com/proto/4I5pHmJb9yv7HBheAuLNjH/Action-Design-Network?node-id=421%3A0&viewport=574%2C507%2C0.10546174645423889&scaling=scale-down-width" class="text-xl">Figma Prototype →</a>
    </div>
  </div>

  <div class="theme-adn bg-lines p-8 md:p-20">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div>
        <div class="text-3xl"><b>Design System:</b></div>
        <div class="mt-16 font-lato font-light">
          Alongside the finished interface designs, I produced a Zeplin file
          documenting all colors, typography, and components to keep the designs
          as consistent as possible and to help the development team to
          implement the design more easily.
        </div>
      </div>

      <div><img src="/img/adn/zeplin.png" alt="" class="drop-img" /></div>
    </div>
  </div>

  <div class="flex-none px-8 py-2" style="background: #FFFEFE">
    <Footer />
  </div>
</main>
