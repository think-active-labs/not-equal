<template>
  <!-- <nav class="h-full w-24 flex flex-col items-center left-0 bg-red-500"> -->
  <nav
    class="side-menu top-0 h-screen sm:w-2/5 fixed ease-in-out duration-300 z-30 flex flex-col sm:flex-row justify-between"
    :class="isOpen ? 'open' : 'close'">
    <div class="flex flex-col grow justify-center">
      <ul class="px-6 my-3 text-center flex flex-col gap-3 sm:gap-6 sm:my-5 sm:text-left w-full">
        <nuxt-link to="/" @click.native="isOpen = false">
          <li class="text-2xl font-link sm:text-4xl ">Home</li>
        </nuxt-link>
        <nuxt-link to="/about" @click.native="isOpen = false">
          <li class="text-2xl font-link sm:text-4xl ">About</li>
        </nuxt-link>
        <li class="text-2xl font-link sm:text-4xl ">Search</li>
        <li class="text-2xl font-link sm:text-4xl ">Pedagogies</li>
      </ul>
    </div>
    <!-- side items -->
    <div
      class="flex w-full flex-row pl-5 sm:pl-0 sm:flex-col sm:w-24 sm:justify-start items-center justify-between border-b-slate-800 border-b-2 sm:border-b-0 sm:border-r-slate-800 sm:border-r-4 sm:border-l-slate-600 sm:border-l-2 cursor-pointer"
      v-on:click="isOpen = !isOpen">
      <!-- hamburger -->
      <div class="m-8 sm:mt-8 order-last sm:order-first">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <!-- title -->
      <h1 class="rotated-header font-link">Not-Equal Archive</h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideNavigation",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.side-menu {
  background-color: #e1e1e1;
  background-image: url("~/assets/images/cardboard.png");
}

/* screen */
@media screen and (min-width: 650px) {
  .open {
    transform: translateY(0, 0);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    clip-path: inset(0px -60px 0px 0px);
  }

  .close {
    transform: translateX(calc(-100% + 96px));
  }
}

/* mobile */
@media (max-width: 649px) {
  .open {
    transform: translateY(0, 0);
    width: 100%;
  }

  .close {
    transform: translateY(calc(-100% + 90px));
    width: 100%;
  }
}
</style>
