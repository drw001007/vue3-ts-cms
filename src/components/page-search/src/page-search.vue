<template>
  <div class="page-search">
    <rw-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="header-btns">
          <el-button>
            <el-icon><RefreshRight /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button type="primary">
            <el-icon><Search /></el-icon>
            <span>搜索</span>
          </el-button>
        </div>
      </template>
    </rw-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RwForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    RwForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped lange="less">
.header {
  color: red;
}

.header-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
