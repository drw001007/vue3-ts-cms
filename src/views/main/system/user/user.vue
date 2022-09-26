<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import pageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
