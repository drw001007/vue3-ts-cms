<template>
  <div class="user-info">
    <div class="header-icon">
      <el-icon class="header-icon-item">
        <ChatDotRound />
      </el-icon>
      <el-icon class="header-icon-item">
        <CollectionTag />
      </el-icon>
      <el-icon class="header-icon-item">
        <BellFilled />
      </el-icon>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="user-name">{{ name }}</span>
        <!-- <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon> -->
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon>
              <CircleClose />
            </el-icon>
            退出登录
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon>
              <Avatar />
            </el-icon>
            用户信息
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon>
              <Setting />
            </el-icon>
            系统管理
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return { name }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .header-icon {
    display: flex;
    align-items: center;

    .header-icon-item {
      margin-right: 20px;
    }
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .user-name {
    margin-left: 10px;
  }
}
</style>
