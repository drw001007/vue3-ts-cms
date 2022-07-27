<template>
  <div>
    <el-form label-width="80px" :rules="rules" :model="phone" ref="phomeRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'

import { defineComponent, reactive, ref } from 'vue'

import { useStore } from 'vuex'

import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const phomeRef = ref<InstanceType<typeof ElForm>>()

    const phone = reactive({
      num: '',
      code: ''
    })

    const phoneAction = () => {
      phomeRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }
    return { phomeRef, phone, rules, phoneAction }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
