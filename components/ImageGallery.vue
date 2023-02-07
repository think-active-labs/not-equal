<template>
  <!-- <div class="flex flex-row gap-3 overflow-auto flex-wrap justify-center"> -->
  <div class="not-prose">
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" snap-align="center">
      <Slide v-for="i, index in section.images" :key="index">
        <div class="carousel__item">
          <div class="flex flex-col justify-between h-full">
            <img class="object-fill h-auto sm:h-96 sm:max-h-96 w-auto rounded-md" :alt="i.caption" :src="i.image" />
            <p>{{ i.caption }}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <Carousel id="thumbnails" :items-to-show="4" :wrap-around="false" v-model="currentSlide" ref="carousel"
      snap-align="center">
      <Slide v-for="i, index in section.images" :key="index">
        <div class="carousel__item p-0.5" @click="slideTo(index)">
          <div class="flex">
            <img class="w-full h-36 object-cover" :alt="i.caption" :src="i.image" />
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


interface ImageBlock {
  type: string,
  images: [{
    image: string,
    caption?: string
  }],
}

const props = defineProps<{
  section: ImageBlock
}>()

const currentSlide = ref(0)

const slideTo = (index: number) => {
  currentSlide.value = index
}
</script>

<style>
.carousel__item {
  height: 100%;
}

.carousel__prev,
.carousel__next {
  color: white;
  border-radius: 25px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>