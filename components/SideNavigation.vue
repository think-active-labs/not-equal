<script setup>

const isOpen = ref(false)

</script>


<template>
  <!-- <nav class="h-full w-24 flex flex-col items-center left-0 bg-red-500"> -->
  <nav class="top-0 h-screen sm:w-3/5 fixed ease-in-out duration-150 z-30 flex flex-col sm:flex-row justify-between"
    :class="isOpen ? 'open' : 'close'">
    <div class="flex grow">
      <ul class="text-center w-full items-center">
        <li class="text-2xl py-3 sm:py-6 sm:text-4xl ">About</li>
        <li class="text-2xl py-3 sm:py-6 sm:text-4xl ">Search</li>
        <li class="text-2xl py-3 sm:py-6 sm:text-4xl ">Pedagogies</li>
      </ul>
    </div>
    <!-- side items -->
    <div
      class="flex w-full justify-end flex-row sm:flex-col sm:w-24 sm:justify-start items-center border-r-slate-800 border-r-4">
      <!-- hamburger -->
      <div class="m-8 sm:mt-8 order-last sm:order-first" v-on:click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <!-- title -->
      <h1 class="rotated-header">Not-Equal Archive</h1>
    </div>
  </nav>
</template>

<style>
.rotated-header {
  @media (min-width: 649px) {
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
}

.open {
  transform: translateY(0, 0);
  background-color: red;

  /* mobile */
  @media (max-width: 649px) {
    transform: translateY(0, 0);
    width: 100%;
    background-color: red;
  }
}

.close {
  transform: translateX(calc(-100% + 88px));

  @media (max-width: 649px) {
    background-color: gray;
    transform: translateY(calc(-100% + 88px));
    width: 100%;
  }
}
</style>