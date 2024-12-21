<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter();
const name = ref('')
const email = ref('')
const picture = ref('')

// 從 localStorage 取得 token
const token = localStorage.getItem('token')

// 檢查是否已登入
const isloggedIn = computed(() => !!token)

const getAccount = async () => {
  if (!isloggedIn.value) return;

  try {
    const res = await axios.get('http://localhost:3000/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    name.value = res.data.username
    email.value = res.data.email
    picture.value = res.data.picture
  } catch (error) {
      console.error('獲取用戶資料失敗：', error)
  }
}

const gotoLink = () => {
  if (isloggedIn.value) {
    router.push({ name: 'user' })
  } else {
    router.push({ name: 'login' })
  }
}

onMounted(() => {
  getAccount();
})
</script>

<template>
    <div @click="gotoLink" class="flex items-center gap-1 text-white rounded-full bg-black/50 default-transition hover:bg-zinc-800/50 cursor-pointer">
        <div class="flex flex-col items-center gap-1 p-1 rounded-full">
            <div class="flex-none rounded-full size-6 bg-black/70 overflow-hidden">
                <img v-if="picture" :src="picture" alt="使用者頭像">
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                </svg>
            </div>
        </div>
        <span v-if="isloggedIn" class="text-sm flex-none max-w-[8rem] truncate">{{ name }}</span>
        <span v-else class="text-sm flex-none max-w-[8rem] truncate">登入</span>
        <div class="p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/base.css';
</style>