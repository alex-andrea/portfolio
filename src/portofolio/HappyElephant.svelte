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
  <PortofolioMenuHeader
    theme="theme-happyelepehant"
    heroImage="/img/happyelephant/hero.jpg" />

  <PortofolioProject
    title="Happy Elephant"
    roles={['Concept', 'UX Design', 'Prototyping', 'UI Design']}
    deliverables={['Wireframes']}
    tools={['sketch']}>
    <div slot="description">
      <div>
        Happy Elephant is a website concept I designed over the course of one
        week to aid tourists in making ethical decisions while traveling,
        specifically when it comes to interacting with elephants in Southeast
        Asia.
      </div>
      <div class="mt-6">
        Mistreatment and misinformation regarding elephants in SE Asia is, and
        has been, an ongoing problem. There are existing blog posts and articles
        listing a few noteworthy elephant sanctuaries, but no websites that make
        it easy for tourists to find organizations in the area that they are
        travelling.
      </div>
    </div>
  </PortofolioProject>

  <div class="theme-happyelepehant bg-lines p-8 md:p-20">
    <Video src="./img/happyelephant/videoHE.mp4" />
  </div>

  <ProjectAnalysis>
    <span slot="goal1">Create a responsive, one-stop resource for tourists
      seeking to interact ethically with elephants in SE Asia</span>
    <span slot="goal2">Design a UI aesthetic that conveys trustworthiness while
      still appearing fresh and modern</span>

    <span slot="user1">THE ETHICAL TRAVELER</span>
    <span slot="userCase1"><div>
        The ethical traveler wants to be mindful of how the money they spend and
        the activities they take part in will affect the people, animals, and
        environment of their destinations.
      </div>
      <div class="mt-12">
        They are frustrated by there being so few reliable resources for
        evaluating the ethicality of travel activities.
      </div></span>

    <span slot="user2">THE TRENDY TRAVELER</span>
    <span slot="userCase2"><div>
        The trendy traveler always has their finger on the pulse and wants to
        take part in the newest and coolest travel activities.
      </div>
      <div class="mt-12">
        They are frustrated by option-fatigue and overwhelmed by (often
        unreliable) advertising and having to rely on bloggers for information
        about activities.
      </div></span>
  </ProjectAnalysis>

  <div class="theme-happyelepehant bg-lines p-8 md:p-20">
    <div class="container mx-auto flex flex-col items-center">
      {#each ['image-39.png', 'image-40.png', 'image-41.png', 'image-42.png'] as image, i}
        <img
          src="/img/happyelephant/{image}"
          alt=""
          style=""
          class="px-6 md:px-40 py-10 md:py-20 drop-img" />
      {/each}
    </div>
  </div>

  <div class="flex-none px-8 py-2" style="background: #FFFEFE">
    <Footer />
  </div>
</main>
