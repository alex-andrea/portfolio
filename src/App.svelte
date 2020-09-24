<script>
  import { Router, Route } from 'svelte-routing';
  import Menu from './Menu.svelte';
  import Home from './home/Home.svelte';
  import Ikea from './portofolio/Ikea.svelte';
  import Adn from './portofolio/Adn.svelte';
  import HappyElephant from './portofolio/HappyElephant.svelte';
  import BackTop from './BackTop.svelte';

  export let url = '';
</script>

<Menu />
<BackTop />

<Router {url}>
  <Route path="/adn">
    <Adn />
  </Route>
  <Route path="/happy-elephant">
    <HappyElephant />
  </Route>
  <Route path="/ikea">
    <Ikea />
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Router>
