<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../components/Loading.vue';
import SideBar from '../components/SidebarGrid.vue'

const router = useRouter();
const name = ref('')
const email = ref('')
const picture = ref('')
const decks = ref([])
const posts = ref([])
const fileInput = ref(null)
const isUploading = ref(false) // 是否正在上傳圖片
const isEditingName = ref(false) // 是否正在編輯名字
const originalName = ref('') // 原始名字
const isScrolled = ref(false); // 是否滾動

// 計算獲取的牌組和文章數量
const deckCount = computed(() => decks.value.length);
const postCount = computed(() => posts.value.length);

const getAccount = async () => {
  const token = localStorage.getItem('token');
  console.log('token:', token);
  if (!token) {
    Swal.fire({
        icon: 'error',
        title: '沒有 token',
        text: '請重新登入',
    });
    await nextTick();
    router.replace({ name: 'login' });
    return;
  }

  try {
    const res = await axios.get('http://localhost:3000/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    name.value = res.data.username;
    email.value = res.data.email;
    picture.value = res.data.picture;

    await getUserDecks();
    await getUserArticles();
  } catch (error) {
    console.error('獲取用戶資料失敗：', error);
    
    if (error.response && error.response.status === 403) {
        Swal.fire({
            icon: 'error',
            title: 'token 無效或過期',
            text: '請重新登入',
        });
        await nextTick();
        router.replace({ name: 'login' });
    }
  }
};

// 根據滾動位置判斷顯示 header 標題和背景色
const handleScroll = () => {
  const scrollTop = mainElement.value.scrollTop;
  isScrolled.value = scrollTop > 300;
};

let mainElement = ref(null);

const main = () => {
    mainElement.value = document.querySelector('.background');
  if (mainElement.value) {
    mainElement.value.addEventListener('scroll', handleScroll);
  }
};

const editName = () => {
    originalName.value = name.value; // 保存原始用户名
    isEditingName.value = true;
};

// 保存新的用户名
const saveName = async () => {
  console.log('saveName called');
  
  const token = localStorage.getItem('token');
  if (!token) {
    Swal.fire({
      icon: 'error',
      title: '没有 token',
      text: '請重新登入',
    });
    await nextTick();
    router.replace({ name: 'login' });
    return;
  }

  try {
    await axios.put('http://localhost:3000/users/update-name', { name: name.value }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isEditingName.value = false; // 保存成功，退出编輯模式
    Swal.fire({
      icon: 'success',
      title: '名稱更新成功',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error('更新名稱失敗：', error);
    Swal.fire({
      icon: 'error',
      title: '更新名稱失敗',
      text: error.response?.data?.message || '請稍後重試',
    });
  }
};

// 取消编辑
const cancelEdit = () => {
    console.log('cancelEdit called');
  name.value = originalName.value; // 恢复原始用户名
  isEditingName.value = false;
};

// 點擊上傳頭像
const uploadPic = () => {
    console.log('uploadPic called');
    
    if (fileInput.value) {
      fileInput.value.click();
    }
};

// 處理上傳圖片檔案
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const token = localStorage.getItem('token');
  if (!token) {
    Swal.fire({
      icon: 'error',
      title: '沒有 token',
      text: '請重新登入',
    });
    router.push({ name: 'login' });
    return;
  }

  const formData = new FormData();
  formData.append('picture', file);

  isUploading.value = true; // 開始上傳

  try {
    const res = await axios.post('http://localhost:3000/users/upload-picture', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('圖片上傳成功：', res.data);
    
    // 更新圖片網址，添加時間戳，避免緩存
    picture.value = res.data.data.picture + '?' + Date.now();

    Swal.fire({
      icon: 'success',
      title: '圖片上傳成功',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error('圖片上傳失敗：', error);
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '圖片上傳失敗',
      text: error.response?.data?.message || '請稍後重試',
    });
  } finally {
    isUploading.value = false; // 上傳結束
  }
};

// 獲取用戶的牌組
const getUserDecks = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }

  try {
    const res = await axios.get('http://localhost:3000/decks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    decks.value = res.data.decks;
    console.log('用戶牌組：', decks.value);
    
  } catch (error) {
    console.error('獲取用戶牌組失敗：', error);
    Swal.fire({
      icon: 'error',
      title: '獲取用戶牌組失敗',
      text: error.response?.data?.message || '請稍後重試',
    });
  }
};

// 獲取用戶的文章
const getUserArticles = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }

  try {
    const res = await axios.get('http://localhost:3000/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    posts.value = res.data.posts;
    console.log('用戶文章：', posts.value);
    
  } catch (error) {
    console.error('獲取用戶文章失敗：', error);
    Swal.fire({
      icon: 'error',
      title: '獲取用戶文章失敗',
      text: error.response?.data?.message || '請稍後重試',
    });
  }
};

const formatDate = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份從0开始，需要加1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const refreshPage = async () => {
  await getAccount(); // 重新獲取用户信息、牌组和文章
};

const logout = () => {
  localStorage.removeItem('token');
  router.replace({ name: 'login' });
};

onMounted(() => {
  getAccount();
  main();
});

onBeforeUnmount(() => {
  if (mainElement.value) {
    mainElement.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
    <div class="layout">
        <SideBar />
        <header class="h-16 z-10" :class="{ 'scrolled': isScrolled }">
            <nav class="header-container">
                <button class="flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </button>
                <button class="arrow-right flex-none p-1 rounded-full bg-black/50 text-white default-transition hover:bg-zinc-800/50 disabled:opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                </button>
                <div class="w-full min-w-0 font-bold text-white justify-start">
                    <h2 class="header-title truncate text-2xl font-bold">帳號管理</h2>
                </div>
                <div class="icons">
                    <!-- <button class="setting">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                        <p class="setting-txt">偏好設定</p>
                    </button> -->
                    <button class="update" @click="refreshPage">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>
                        <p class="update-txt">重新整理</p>
                    </button>
                    <button class="logout" @click="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path></svg>
                        <p class="logout-txt">登出</p>
                    </button>
                </div>
                <div class="notice z-10">
                    <input type="checkbox" id="notice-jump">
                    <label for="notice-jump" class="cursor-pointer inline-flex items-center p-1 rounded-full default-transition text-center hover:bg-zinc-800/50 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                    </label>
                    <div class="notice-grid z-10">
                        <div class="notice-grid-up">
                            <h2>通知(0)</h2>
                        </div>
                        <div class="notice-grid-down">
                            <img src="https://bottleneko.app/images/status/empty.png" alt="no-data">
                            <h2>沒東西</h2>
                            <p>你只有一無所有的時候，才能全身心地投入機會。 - 拿破崙·波拿巴</p>
                        </div>
                    </div>
                </div>
                <div class="login-btn flex rounded-full bg-black/50 text-white items-center gap-1 default-transition hover:bg-zinc-800/50">
                    <div class="p-1 rounded-full flex flex-col items-center gap-1">
                        <div class="rounded-full size-6 flex-none bg-black/70 overflow-hidden">
                            <img v-if="picture" :src="picture" alt="使用者頭像">
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                            </svg>
                        </div>
                    </div>
                    <span class="text-sm max-w-[8rem] truncate">{{ name }}</span>
                    <div class="p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 flex-none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
        <div class="background scrollbar">
            <main class="main-grid">
            <div class="account-info">
                <div class="account-info-inside">
                    <input id="uploadPic" type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="hidden" />
                    <label class="upload cursor-pointer group" @click.stop="uploadPic">
                        <Loading v-if="isUploading" />
                        <div class="rounded-full relative h-full w-full shadow-[0_4px_60px_rgba(0,0,0,.5)] overflow-hidden" style="background-color: rgb(50, 201, 255);">
                            <img v-if="picture" :src="picture" alt="使用者頭像" class="w-full h-full object-cover">
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>
                        </div>
                        <div class="group-hover:opacity-100 opacity-0 default-transition absolute inset-0 text-white bg-black/50 grid place-content-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-20 w-20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/></svg>
                        </div>
                    </label>
                    <div class="account-info-right-area">
                        <div class="e-mail">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                            <p>{{ email }}</p>
                        </div>
                        <div v-if="!isEditingName" class="edit">
                            <h1>{{ name }}</h1>
                            <label for="editName" @click="editName" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg>                        
                            </label>
                        </div>
                        <div v-else class="flex items-center gap-2">
                            <div class="border-b-2 border-white/50 md:w-2/3">
                                <input id="editName" v-model="name" class="w-full p-0 bg-transparent border-none focus:ring-0 placeholder:text-zinc-500 md:mb-2 text-3xl md:text-7xl font-bold leading-relaxed line-clamp-2 break-all placeholder:text-cyan-600" type="text" placeholder="請輸入名稱">
                            </div>
                            <button @click="saveName" class="rounded-full p-1 flex-none btn btn-sm bg-green-400/70 hover:bg-green-400 text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>
                            </button>
                            <button @click="cancelEdit" class="rounded-full p-1 flex-none btn btn-sm bg-red-400/70 hover:bg-red-400 text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <div class="card-and-article">
                            <div class="card">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                                <a href="">
                                    共有 {{ deckCount }} 副牌組
                                </a>
                            </div>
                            <div class="article">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
                                <a href="">
                                    共有 {{ postCount }} 篇文章
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main">
                    <div class="main-inside scroll-smooth">
                        <section class="main-card-area">
                            <h2 class="main-card-area-h2 text-2xl font-bold pb-2 pt-6">
                                <a href="">我的牌組</a>
                                <span class="text-sm text-zinc-400 font-normal">一共有 {{ deckCount }} 結果</span>
                            </h2>
                            <section class="show-card scrollbar-y">
                                <a v-if="decks" v-for="deck in decks" class="will-change-[background] transition-colors cursor-pointer min-w-[8rem] snap-center flex flex-col">
                                    <div class="mx-auto m-0 w-full relative rounded-xl shadow-xl grid place-content-center overflow-hidden">
                                        <img :src="deck.deck_cover" class="shadow-lg h-full w-full aspect-square object-top object-cover select-none rounded-xl overflow-hidden">
                                    </div>
                                    <div class="mt-2 md:mt-4 min-h-0 md:min-h-[62px]">
                                        <div class="flex gap-1 font-mono text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>
                                            <p class="text-xs truncate">{{ deck.deck_id }}</p>
                                        </div>
                                        <p class="pb-1 text-sm md:text-base font-normal md:font-bold !text-white truncate">{{ deck.deck_name }}</p>
                                        <p class="text-xs md:text-sm font-mono text-zinc-400 truncate">{{ deck.build_time.substring(0, 10) }}</p>
                                    </div>
                                </a>
                                <a href="/mycard" class="url transition-colors overflow-hidden">
                                    <div class="read-more-area">
                                        <div class="read-more">
                                            <span class="animate-ping h-[6rem] w-[6rem] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                                            <!-- <span class="animation-ping"></span> -->
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3rem] w-[3rem] stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg>
                                        </div>
                                        <span>閱讀更多</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="mx-auto size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>                    
                                    </div>
                                </a>
                            </section>
                        </section>
                        <section class="main-article-area scrollbar-y">
                            <h2 class="main-card-area-h2 text-2xl font-bold pb-2 pt-6">
                                <a href="">我的文章</a>
                                <span class="text-sm text-zinc-400 font-normal">一共有 {{ postCount }} 結果</span>
                            </h2>
                            <section class="show-card">
                                <a v-if="posts" v-for="post in posts" class="will-change-[background] transition-colors cursor-pointer min-w-[8rem] snap-center flex flex-col">
                                    <div class="mx-auto m-0 w-full relative rounded-xl shadow-xl grid place-content-center overflow-hidden">
                                        <img src="https://bottleneko.app/images/cover.png" class="shadow-lg h-full w-full aspect-square object-top object-cover select-none rounded-xl overflow-hidden">
                                    </div>
                                    <div class="mt-2 md:mt-4 min-h-0 md:min-h-[62px]">
                                        <div class="flex gap-1 font-mono text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 flex-none"><path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd"></path></svg>
                                            <p class="text-xs truncate">{{ post.post_code }}</p>
                                        </div>
                                        <p class="pb-1 text-sm md:text-base font-normal md:font-bold !text-white truncate">{{ post.title }}</p>
                                        <p class="text-xs md:text-sm font-mono text-zinc-400 truncate">{{ post.created_at.substring(0, 10) }}</p>
                                    </div>
                                </a>
                                <a href="/social/my" class="url transition-colors overflow-hidden">
                                    <div class="read-more-area">
                                        <div class="read-more">
                                            <span class="animate-ping h-[6rem] w-[6rem] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3rem] w-[3rem] stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></svg>
                                        </div>
                                        <span>閱讀更多</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="mx-auto size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>                    
                                    </div>
                                </a>
                            </section>
                        </section>
                        <section class="main-setting-area">
                            <h2 class="text-2xl font-bold pb-2 pt-6">設定 
                                <span class="text-xs text-zinc-400 font-normal">根據喜好設定，只有您看的到</span>
                            </h2>
                            <div class="main-setting-bar">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-6 flex-none text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"></path></svg>
                                    <span>輸入英雄代碼</span>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                                    <span>偏好設定</span>
                                </button>
                                <button @click="logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path></svg>
                                    <span>登出</span>
                                </button>
                                <button @click="refreshPage">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>
                                    <span>重新整理</span>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path></svg>
                                    <span>管理封鎖名單</span>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                    <span>刪除帳號</span>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <footer>
                    <div class="work-shop-footer">
                        <div class="work-shop-footer-flexbox">
                            <div class="work-shop-footer-flexbox-left">
                            <ul class="work-shop-footer-flexbox-left-item">
                                <li class="work-shop-footer-flexbox-left-item-title">
                                簡介
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                <a href="https://bottleneko.app/about" target="_blank" 
                                class="work-shop-footer-flexbox-left-item-link-text">
                                    關於我們
                                </a> 
                                <a href="https://bottleneko.app/contact" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                    與我聯絡
                                </a> 
                                <a href="https://ws-tcg.com/" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                    Weiβ Schwarz
                                </a> 
                                <a href="https://jasonxddd.notion.site/V2-56de4919639442f4af617ef3cb0b89fc" target="_blank"
                                class="work-shop-footer-flexbox-left-item-link-text">
                                    V2新版介紹
                                </a> 
                                </li>
                            </ul>
                            <ul class="work-shop-footer-flexbox-left-item">
                                <li class="work-shop-footer-flexbox-left-item-title">
                                    資源
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a href="https://decklog.bushiroad.com/" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">      
                                    Bushi DeckLog
                                    </a> 
                                    <a href="https://ws-tcg.com/rules/deck_rule/" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    Bushi DeckLog EN
                                    </a> 
                                    <a href="https://yuyu-tei.jp/" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    遊々亭價格
                                    </a> 
                                    <a href="https://ws-tcg.com/rules/" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    基本規則
                                    </a> 
                                    <a href="https://ws-tcg.com/rules/deck_rule/" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">           
                                    禁卡表
                                    </a> 
                                </li>
                                </ul>
                                <ul class="work-shop-footer-flexbox-left-item">
                                <li class="work-shop-footer-flexbox-left-item-title">
                                    常用連結
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a href="https://bottleneko.app/qa" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    卡片問答集
                                    </a> 
                                    <a href="login" 
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    我的專業
                                    </a> 
                                    <a href="login"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    偏好設定
                                    </a> 
                                    <a href="login"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    登出帳號
                                    </a>
                                    <a href="#" style="color: red;" target="_blank"
                                    class="work-shop-footer-flexbox-left-item-link-text">
                                    英雄榜
                                    </a> 
                                </li>
                                </ul>  
                            </div>
                            <div class="work-shop-footer-flexbox-right">
                            <div class="work-shop-footer-flexbox-right-group">
                                <a class="work-shop-footer-flexbox-right-item" href="#">
                                <span class="work-shop-footer-flexbox-right-item-icon">
                                    <i class="fa-solid fa-gift"></i>
                                </span>
                                <span class="work-shop-footer-flexbox-right-item-text"
                                    >用一杯咖啡讓工程師罐罐休息一下</span>
                                </a>
                                <div class="work-shop-footer-flexbox-right-icon-list">
                                <a href="https://play.google.com/store/apps/details?id=app.bottleneko.twa&pli=1" target="_blank">
                                    <i class="fa-brands fa-google-play"></i>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=app.bottleneko.twa&pli=1" target="_blank">
                                    <i class="fa-brands fa-apple"></i>
                                </a>
                                <a href="https://www.facebook.com/BottleNeko" target="_blank">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://discord.com/invite/GKuxTzpB2A" target="_blank">
                                    <i class="fa-brands fa-discord"></i>
                                </a>
                                <a href="#">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <hr class="work-shop-footer-hr" />
                        <div class="work-shop-footer-copyright">
                            <ul class="work-shop-footer-copyright-left">
                            <li class="work-shop-footer-copyright-left-item">
                                <a href="https://bottleneko.app/policy" target="_blank">
                                    隱私權政策 
                                </a>
                            </li>
                            <li class="work-shop-footer-copyright-left-item">
                                <a href="https://bottleneko.app/eula" target="_blank">
                                    服務條款
                                </a>
                            </li>
                            <li class="work-shop-footer-copyright-left-item">
                                <a href="https://bottleneko.app/contact" target="_blank">
                                    商業合作
                                </a>
                            </li>
                            </ul>
                            <div class="work-shop-footer-copyright-right">
                                <span>卡片資料來源 Weiβ Schwarz.</span>
                                <span>Copyright @ 2023 BottleNeko</span>
                            </div>
                        </div>
                        </div>
                </footer>
            </div>
        </main>
        </div>
    </div>

</template>

<style scoped>
@import '@/assets/base.css';
@import '@/assets/main.css';

.layout{
    display: flex;
    flex-direction: row;
}

.default-transition {
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}

header {
    width: calc(100% - 270px - 0.5rem);
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(50, 201, 255, 0);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin:  0.5rem 0.5rem 0 0;
    transition: background-color 0.3s ease;
}

header.scrolled {
    background-color: rgba(50, 201, 255, 1);
}

.header-container {
    height: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 1;
    margin-top: 0.5rem;
}

.header-title {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

header.scrolled .header-title {
    opacity: 1;
    transform: translateY(0);
}

.notice{
    position: relative;
}

.notice-icon{
    width: 24px;
    height: 24px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 50%; 
    padding: 6px;
    background-color: transparent; 
    transition: background-color 0.3s ease, opacity 0.3s ease;
}

.notice-icon:hover {
    background-color: #2a2727; 
    opacity: 0.8;
}

.notice-grid-up h2{
    color: white;
    font-weight: bolder;
    font-size: 24px;
}

.notice-grid{
    display: grid;
    grid-template-columns: 352px;
    grid-template-rows: 64px 416px;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-70%);
    display: none;
    height: 0;
    transition: opacity 0.3s ease, height 0.3s ease, transform 0.3s ease;
    z-index: 999;
}

#notice-jump:checked ~ .notice-grid{
    display: block;
    height: 480px;
}

#notice-jump{
    display: none;
}

.notice-grid-up{
    grid-area: 1/1/2/2;
    background-color: #27272a;
    padding: 24px 16px 8px 16px;
    border-radius: 10px 10px 0px 0px;
}

.notice-grid-down {
    grid-area: 2/1/3/2;
    background-color: #1f1f22;    
    border-radius: 0px 0px 10px 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notice-grid-down img{
    width: 240px;
    height: 240px;
    margin-bottom: 30px;
}

.notice-grid-down h2{
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #f4f4f5
}

.notice-grid-down p {
    color: rgb(161 161 170);
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
}

.background {
    height: calc(100vh - 1rem);
    width: calc(100vw - 270px - .5rem);
    border-radius: 1rem;
    overflow: scroll;
    background-color: #32c9ff;
}

.content-container {
    height: calc(100vh - 1rem);
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* overflow: hidden; */
}

.scrollbar {
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
}

.main-container {
    min-height: 340px;
    position: relative;
    z-index: 1;
}

.grid-container {
    margin-top: 1rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

.card {
    cursor: pointer;
}

.icons{
    display: flex;
    gap: 1rem;
}

.setting,
.update,
.logout{
    border: none;
    position: relative;
    border-radius: 50%; 
    padding: 6px;
}

.setting:hover,
.update:hover,
.logout:hover{
    background-color: rgba(0, 0, 0, .5);
    opacity: 0.8;
}

.setting svg,
.update svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.logout svg{
    width: 24px;
    height: 24px;
    stroke: red;
}

.setting-txt,
.update-txt,
.logout-txt {
    position: absolute;
    top: 50px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    width: 40px;
    line-height: 25px;
    border-radius: 10px;
    padding: 3px;
    text-align: center;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.setting:hover .setting-txt,
.update:hover .update-txt,
.logout:hover .logout-txt {
    opacity: 1;
}

.main-grid {
    background-color: #121212;
    padding-bottom: 2rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    overflow: auto;
    grid-area: main-view;
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
}

.account-info{
    background-image: linear-gradient(transparent, rgba(0,0,0,.4) 455px);
    background-color: rgb(50, 201, 255);
    position: relative;
}

.account-info-inside{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    position: relative;
    top: 64px;
}

.account-info-right-area{
    gap:.5rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.upload{
    min-width: 240px;
    min-height: 240px;
    border: none;
    border-radius: 100%;
    margin-left: 24px;
    background-color: rgb(50, 201, 255);
    position: relative;
}

.e-mail{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.e-mail svg{
    width: 24px;
    height: 24px;
    stroke: white;
    
}

.e-mail p{
    font-size: .875rem;
    line-height: 1.25rem;
    color: white;
}

.edit{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.edit h1{
    font-size: 4.5rem;
    line-height: 1;
    font-weight: 900;
    color: white;
}

.edit button{
    width: 28px;
    height: 28px;
    padding: .25rem;
    border: none;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, .1);
}

.edit svg{
    width: 20px;
    height: 20px;
    stroke: white;
}

.card-and-article{
    display: flex;
    gap: 1rem;
}

.card{
    display: flex;
    gap: .25rem;
    align-items: center;
}

.card svg{
    width: 20px;
    height: 20px;
    stroke: white;
}

.card a{
    color: white;
    font-size: 16px;
    text-decoration: none;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-line: underline;
    letter-spacing: 1px;
}

.article{
    display: flex;
    gap: .25rem;
    align-items: center;
}

.article a {
    color: white;
    font-size: 16px;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-line: underline;
    letter-spacing: 1px;
}

.article svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.main {
    background:
    linear-gradient(rgba(50, 201, 255, 0.44) 100px, transparent 500px),
    #1f1f22;    
    padding: 0px 24px;
    grid-area: card-view;
    margin-top: 100px;
}

.main-inside{
    display: flex;
    flex-direction: column;
}

.main-card-area-h2 a,
.main-article-area-h2 a,
.main-setting-area h2{
    color: white;
    text-decoration: none;
    display: block;
}

.main-card-area span,
.main-article-area span,
.main-setting-area span{
    display: block;
    color: rgb(161 161 170);
    text-decoration: none;
}

.main-setting-bar{
    display: flex;
    flex-direction: column;
}

.main-setting-bar button{
    display: flex;
    width: 41.67%;
    padding: 1rem;
    border-radius: .75rem;
    margin-top: 1rem;
    background-color: rgb(24 24 27);
    border: none;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
}

.main-setting-bar svg{
    width: 24px;
    height: 24px;
}

.main-setting-bar button:nth-child(-n+5) svg{
    stroke: white;
}

.main-setting-bar button:first-child svg{
    stroke: #eab308;
    fill: #eab308;
}

.main-setting-bar button:last-child svg{
    stroke: red;
}

.main-setting-bar button:nth-child(-n+5) span{
    color: white;
    font-size: 16px;
}

.main-setting-bar button:last-child span{
    color: red;
    font-size: 16px;
}

.main-setting-bar button:hover{
    background-color: #2f2f35;
}

.main-setting-bar button:last-child{
    margin-bottom: 2rem;
}

.show-card {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x var(--tw-scroll-snap-strictness);
    /* scrollbar-width: none; */
    -ms-overflow-style: none;
    display: flex;
    gap: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.scrollbar-y {
    &::-webkit-scrollbar{
        width: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #121212;
        border-radius: 10px;
        margin: 20px 130px;
    }
    /* &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: cyan;
    } */
}

.show-card a {
    display: block;
    max-width: calc(20% - 2rem);
    min-width: calc(20% - 2rem);
    padding: 1rem;
    border-radius: .75rem;
    background-color: #18181b;
}

.show-card a:hover {
    background-color: #27272a;
}
    
/* .flex{
    display: flex;
    align-items: center;
    gap: .25rem;
}

.flex svg{
    fill: #a1a1aa;;

} */

.card-text{
    margin-top: 1rem;
}

.padding-bottom{
    padding-bottom: 5px;
}
    
.h2-padding{
    padding-top:30px ;
    padding-bottom: 10px;
}
    
.color-white{
    color: white;
}

.color-a1{
    color: #a1a1aa;
    font-size: .875rem;
    line-height: 1.25rem;
}

.url{
    padding: 1rem;
    display: inline-block;
    background-color: #18181b;
    border-radius: .75rem;
    box-sizing: border-box;
}

.url img{
    border-radius: 10%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-size{
    height: 1rem;
    width: 1rem;
    align-self: center;
}

a {
    text-decoration:none ;
}

.aa a:hover{
    background-color: #27272a;
}

.font-size20{
    font-size: 1rem;
    line-height: 1.5rem;
}

.read-more-area{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
}

.read-more{
    border-radius: 100%;
    background-image: linear-gradient(to right, #06b6d4, #3b82f6);
    width: 6rem;
    height: 6rem;
    position: relative;
    margin-top: 1rem;
}

.read-more svg{
    width: 3rem;
    height: 3rem;
    stroke: white;
    stroke-width: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.read-more-area > svg{
    width: 24px;
    height: 24px;
    stroke: white;
}

.read-more-area > span{
    color: white;
}

.url:last-child{
    background-color: rgba(24, 24, 27, .3);
}

.scroll-smooth{
    scroll-behavior: smooth;
}

.work-shop-footer {
    max-width: 100%;
    padding: 80px 32px 64px;
    box-sizing: border-box;
    background-color: #121212;
}

.work-shop-footer-flexbox {
    width: 100%;
    display: flex;
}

.work-shop-footer-flexbox-left {
    width: 100%;
    display: flex;
    gap: 1rem;
}

.work-shop-footer-flexbox-left-item {
    list-style: none;
    margin-top: 16px;
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.work-shop-footer-flexbox-left-item-title {
    width: 100%;
    color: white;
    line-height: 24px;
}

.work-shop-footer-flexbox-left-item-link {
    width: 100%;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.work-shop-footer-flexbox-left-item-link-text {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #6d6d76;
}

.work-shop-footer-flexbox-left-item-link-text:hover {
    color: white;
}

.work-shop-footer-flexbox-right {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}

.work-shop-footer-flexbox-right-group {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.work-shop-footer-flexbox-right-item {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: #d4d4d8;
    text-decoration: none;
}

.work-shop-footer-flexbox-right-item:hover span {
    cursor: pointer;
    color: white;
}

.work-shop-footer-flexbox-right-item-icon {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: #d4d4d8;
    font-size: 20px;
}

.work-shop-footer-flexbox-right-item-text {
    color: #d4d4d8;
    font-size: 20px;
    line-height: 28px;
}

.work-shop-footer-flexbox-right-icon-list {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.work-shop-footer-flexbox-right-icon-list a {
    display: inline-block;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 24px;
    border-radius: 50%;
    background-color: #3f3f46;
    text-align: center;
    line-height: 40px;
}

.work-shop-footer-flexbox-right-icon-list a:hover {
    background-color: #5b5b64;
}

.work-shop-footer-hr {
    border: none;
    border-top: 1px solid #3f3f46;
    margin: 16px 0px;
}

.work-shop-footer-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.work-shop-footer-copyright-left {
    display: flex;
    gap: 1rem;
    list-style: none;
}

.work-shop-footer-copyright-left-item {
    width: 100%;
    text-wrap: nowrap;
}

.work-shop-footer-copyright-left-item a {
    text-decoration: none;
    color: #6d6d76;
    width: 100%;
}

.work-shop-footer-copyright-left-item a:hover {
    color: white;
    cursor: pointer;
}

.work-shop-footer-copyright-right {
    color: #6d6d76;
    font-size: 14px;
}

.work-shop-footer-copyright-right span {
    line-height: 20px;
}

.text-color-red {
    color: #941816;
}

.text-color-red:hover {
    color: red;
}

@media screen and (width < 1200px) {
    header {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        /* background-color: #32c9ff; */
        margin: 0;
        border-radius: 0%;
    }

    .header-container {
        background-color: #30bdf0;
        margin-top: 0rem;
    }

    .show-card[data-v-ea08477a]::-webkit-scrollbar {
        display: none; 
    }

    .arrow-right{
        display: none;
    }

    .notice {
        display: none;
    }

    .login-btn {
        display: none;
    }

    .update{
        display: none;
    }

    .logout{
        display: none;
    }

    .background {
        width: 100%;
        margin: 0;
        border-radius: 0;
    }

    .content-container {
        border-radius: 0;
    }

    .account-info-inside{
        flex-direction: column;
        align-items: center;
    }

    .show-card{
        overflow: scroll;
    }

    .show-card a{
        padding: 0;
        background-color: transparent;
        display: block;
        min-width: calc(50% - 2rem);
    }

    .show-card a:hover{
        background-color: transparent;
    }

    .main-setting-bar button{
        display: flex;
        width: 100%;
        padding: 1rem;
        border-radius: .75rem;
        margin-top: 1rem;
        background-color: rgb(24 24 27);
        border: none;
        gap: .5rem;
        align-items: center;
        cursor: pointer;
    }    

    .work-shop-footer-flexbox {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .work-shop-footer{
        padding: 5rem 2rem 11rem;
        padding-left: -16px;
        padding-right: -16px;
    }

    .work-shop-footer-flexbox-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .work-shop-footer-flexbox-left-item{
        width: 100%;
    }

    .work-shop-footer-flexbox-left-item-link{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    } 
    
    .work-shop-footer-flexbox-right{
        justify-content: center;
        margin-top: 40px;
    }

    .work-shop-footer-flexbox-right-item-text{
        font-size: 16px;
    }

    .work-shop-footer-flexbox-right-group{
        margin-top: 1rem;
    }

    .work-shop-footer-flexbox-right-icon-list{
        justify-content: center;
    }

    .work-shop-footer-copyright{
        flex-direction: column;
        gap: .5rem;
    }

    .work-shop-footer-copyright-right{
        display: flex;
        flex-direction: column;
    }

    .main-grid {
        margin-right: 0;
        &::-webkit-scrollbar {
            height: 0;
            width: 0;
        }
    }
}

@media screen and (width < 1200px){
    .md\:mt-2 {
        margin-top: 0;
    }

    .md\:mr-2 {
        margin-right: 0;
    }

}
</style>