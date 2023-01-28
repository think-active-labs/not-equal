<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import cms from 'netlify-cms-app'
import { Widget as FileRelationWidget } from '@ncwidgets/file-relation'

cms.registerWidget(FileRelationWidget)

cms.init()
</script>
