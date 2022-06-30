<script setup>
definePageMeta({
  layout: "home",
});

const items = ref([])

items.value.push({
  img: "home.png",
  title: "Not-Equal home",
  subtitle: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  slug: "social-algorithmic-justice"
})

items.value.push({
  img: "social-algorithmic-justice.png",
  title: "Social Algorithmic Justice",
  subtitle: "How can computers and their underlining algorithms help make the decisions that affect us all, fairer?",
  slug: "social-algorithmic-justice"
})

items.value.push({
  img: "digital-security-for-all.png",
  title: "Digital Security for All",
  subtitle: "What digital security models can ensure the safeguarding of all in our digital society?",
  slug: "digital-security-for-all"
})

items.value.push({
  img: "fairer-future-for-business-and-workforce.png",
  title: "Fairer Futures for Business + Workforce",
  subtitle: "What business models offer fairer opportunities & working conditions for all in the platform economy?",
  slug: "fairer-future-for-business-and-workforce"
})

items.value.push({
  img: "digital-access.png",
  title: "Digital Access",
  subtitle: "Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis?",
  slug: "digital-access"
})

const activeTab = ref("home")

</script>

<template>
  <div class="flex h-screen">
    <!-- navbar -->
    <slot name="side-nav">
      <SideNavigation v-on:click="activeTab = 'home'" class="cursor-pointer" />
    </slot>
    <!-- page items -->
    <div class="ml-[90px] flex w-full">
      <div class="flex" :class="activeTab == item.slug ? 'grow' : ''" v-for="item in items"
        v-on:click="activeTab = item.slug">
        <!-- titlebar -->
        <div
          class="w-24 h-full flex flex-col text-center items-center justify-between cursor-pointer shrink-0 border-r-slate-800 border-r-4"
          :class="item.slug == 'home' ? 'hidden' : ''">
          <h2 class="rotated-header text-3xl pt-24">{{ item.title }}</h2>
          <a href="#" class="mb-4 text-4xl">→</a>
        </div>
        <!-- content -->
        <div class="flex flex-col p-12 justify-start border-r-slate-800 border-r-4"
          :class="activeTab == item.slug ? 'w-full' : 'hidden'">
          <div class="prose prose-2xl">
            <img :src="`/assets/images/${item.img}`" class="object-contain max-h-[50%]" />
            <h1 class="text-4xl">{{ item.title }}</h1>
            <p>{{ item.subtitle }}</p>
            <NuxtLink :to="`/${item.slug}`" class="text-underline justify-end">View More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotated-header {
  @media (min-width: 649px) {
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
}
</style>
