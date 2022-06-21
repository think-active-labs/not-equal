<script setup>
const items = ref([])

items.value.push({
  img: "home.png",
  title: "Not-Equal",
  subtitle: "How can computers and their underlining algorithms help make the decisions that affect us all, fairer?",
  slug: "home"
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
  subtitle: "How can computers and their underlining algorithms help make the decisions that affect us all, fairer?",
  slug: "digital-security-for-all"
})

items.value.push({
  img: "fairer-future-for-business-and-workforce.png",
  title: "Fairer Futures for Business + Workforce",
  subtitle: "How can computers and their underlining algorithms help make the decisions that affect us all, fairer?",
  slug: "fairer-future-for-business-and-workforce"
})

items.value.push({
  img: "digital-access.png",
  title: "Digital Access",
  subtitle: "How can computers and their underlining algorithms help make the decisions that affect us all, fairer?",
  slug: "digital-access"
})

const activeTab = ref("home")

</script>

<template>
  <div class="flex h-screen">
    <!-- navbar -->
    <SideNavigation v-on:click="activeTab = 'home'" class="cursor-pointer" />
    <!-- page items -->
    <div class="ml-[90px] flex w-full">
      <div class="flex" :class="activeTab == item.slug ? 'grow' : ''" v-for="item in items" :key="index"
        v-on:click="activeTab = item.slug">
        <!-- titlebar -->
        <div
          class="w-24 h-full flex flex-col text-center items-center justify-between cursor-pointer shrink-0 border-r-slate-800 border-r-4"
          :class="item.slug == 'home' ? 'hidden' : ''">
          <h2 class="rotated-header text-3xl pt-24">{{ item.title }}</h2>
          <a href="#" class="mb-4 text-4xl">→</a>
        </div>
        <!-- content -->
        <div class="flex flex-col p-8 justify-start border-r-slate-800 border-r-4"
          :class="activeTab == item.slug ? 'w-full' : 'hidden'">
          <div class="prose prose-2xl">
            <img :src="`/assets/images/${item.img}`" class="object-contain max-h-[50%]" />
            <h1 class="text-4xl">{{ item.title }}</h1>
            <p>{{ item.subtitle }}</p>
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
