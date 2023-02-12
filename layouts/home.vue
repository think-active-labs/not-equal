<template>
  <div>
    <slot name="side-nav"></slot>
    <NuxtPage />
    <div class="mt-[90px] sm:mt-0 sm:ml-[96px] flex w-full">
      <search-overlay :show="true" />
    </div>
  </div>
</template>