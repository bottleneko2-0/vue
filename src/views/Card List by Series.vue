<template>
        <div class="All root-container">
            <SidebarGrid style="grid-area: sidebar;" />
                <div class="aa" style="grid-area: main">
                    <div class="all-card">
                        <div class="top-container">
                            <div class="Top-bar">
                                <div class="search-bar">
                                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" placeholder="想看哪個系列？" v-model="searchQuery" @keyup="searchSeries">
                                    <button @click="clearSearch">✖</button>
                                </div>
                                <div class="sort-button">
                                    <button class="active1" :class="{ 'selected' : nameIsSelected }" :style="{ background: nameIsSelected ? 'linear-gradient(to right, #5eead4, #93c5fd)' : 'white' }" @click="toggleNameSort" >
                                        <i class="fa-solid fa-arrow-up" :class="{ 'rotate180' : nameIsSorted }"></i>
                                        名稱
                                    </button>
                                    <button class="active2"  :class="{ 'selected' : dateIsSelected }" :style="{ background: dateIsSelected ? 'linear-gradient(to right, #5eead4, #93c5fd)' : 'white' }" @click="toggleDateSort">
                                        <i class="fa-solid fa-arrow-up " :class="{ 'rotate180' : dateIsSorted }"></i>
                                        日期
                                    </button>
                                </div>
                            </div>

                            <div class="icons">
                                <div class="icon"><i class="fa-regular fa-bell"></i></div>
                                <div class="login">
                                    <i class="fa-regular fa-user"></i>
                                    <span>登入</span>
                                    <span><i class="fa-solid fa-chevron-down"></i></span>
                                </div>
                            </div>
                        </div>
                        <h2 class="font-size30 color-white h2-padding">之前查看系列</h2>
                        <section class="show-card">
                            <a v-for="card in viewedSeries" :key="card.id" href="#" class="url transition-colors" @click.prevent="handleSeries(card.id)" >

                                    <div>
                                        <img :src ="card.cover || '/src/img/cover.png'" alt="">
                                    </div>
                                    <div class="card-text">
                                        <div class="flex">
                                            <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                                                <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                                                </path>
                                                <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                                                </path>
                                            </svg>
                                            <p class="color-a1">{{ card.code.join(', ') }}</p>
                                        </div>
                                        <p class="font-size20 color-white padding-bottom" >{{ card.name }}</p>
                                        <p class="color-a1">{{ card.sellAt[0] || '-' }}</p>
                                    </div>
                            </a>
                        </section>
                        <h2 class="font-size30 color-white">系列<br>
                            <span class="font-size75rem color-a1">一共有  {{ searchResultCount }}  結果</span>
                        </h2>
                        <section class="grid-card">
                           
                            <a v-for="card in cardSeries" :key="card.id" href="#" class="url transition-colors" @click.prevent="handleSeries(card.id)" >
                                    <div>
                                        <img :src ="card.cover || '/src/img/cover.png'" alt="">
                                    </div>
                                    <div class="card-text">
                                        <div class="flex">
                                            <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                                                <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                                                </path>
                                                <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                                                </path>
                                            </svg>
                                            <p class="color-a1">{{ card.code.join(', ') }}</p>
                                        </div>
                                        <p class="font-size20 color-white padding-bottom" >{{ card.name }}</p>
                                        <p class="color-a1">{{ card.sellAt[0] || '-' }}</p>
                                    </div>
                            </a>   
                        </section>
                    </div>
                    <footer class="hero-member-footer">
                        <div class="work-shop-footer">
                            <div class="work-shop-footer-flexbox">
                            <div class="work-shop-footer-flexbox-left">
                                <ul class="work-shop-footer-flexbox-left-item">
                                <li class="work-shop-footer-flexbox-left-item-title">
                                    簡介
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                    href="#"
                                    class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    關於我們
                                    </a>
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                    href="#"
                                    class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    與我聯絡
                                    </a>
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                    href="#"
                                    class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    Weiβ Schwarz
                                    </a>
                                </li>
                                <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                    href="#"
                                    class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    V2新版介紹
                                    </a>
                                </li>
                                </ul>
                                <ul class="work-shop-footer-flexbox-left-item">
                                    <li class="work-shop-footer-flexbox-left-item-title">
                                    資源
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    Bushi DeckLog
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    Bushi DeckLog EN
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    遊々亭價格
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    基本規則
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                        <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                        >
                                        禁卡表
                                        </a>
                                    </li>
                                </ul>
                                <ul class="work-shop-footer-flexbox-left-item">
                                    <li class="work-shop-footer-flexbox-left-item-title">
                                        常用連結
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    卡片問答集
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    我的專頁
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                    >
                                    偏好設定
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                    <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text text-color-red" 
                                    id="footer-logout" >
                                    登出帳號
                                    </a>
                                    </li>
                                    <li class="work-shop-footer-flexbox-left-item-link">
                                        <a
                                        href="#"
                                        class="work-shop-footer-flexbox-left-item-link-text" 
                                        >
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
                                    >用一杯咖啡讓工程師罐罐休息一下</span
                                    >
                                </a>
                                <div class="work-shop-footer-flexbox-right-icon-list">
                                    <a href="#">
                                    <i class="fa-brands fa-google-play"></i>
                                    </a>
                                    <a href="#">
                                    <i class="fa-brands fa-apple"></i>
                                    </a>
                                    <a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
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
                                <a href="#">隱私權政策 </a>
                                </li>
                                <li class="work-shop-footer-copyright-left-item">
                                <a href="#">服務條款</a>
                                </li>
                                <li class="work-shop-footer-copyright-left-item">
                                <a href="#">商業合作</a>
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
            
        </div>
</template>

<script setup>
import SidebarGrid from '../components/SidebarGrid.vue';
import { ref, computed, onMounted } from 'vue';
import { useCardSeriesStore } from "@/stores/card-series";
import { storeToRefs } from "pinia";
import axios from "axios";
import { useRouter } from 'vue-router'

const router = useRouter(); 

const cardSeries = ref([])
const originalSeries = ref([])
const error = ref('')
const API_URL = 'https://bottleneko.app/api/series'
const sortState = ref(0)
const searchQuery = ref('');
const viewedSeries = ref([]);

// 獲取系列卡表資料
const fetchCardseries = async () => {
    try {
        const response = await axios.get('/api/series');
        originalSeries.value = response.data
        cardSeries.value = [...originalSeries.value].sort((a, b) => {
            const dateA = a.sellAt[0] ? new Date(a.sellAt[0]) : null;
            const dateB = b.sellAt[0] ? new Date(b.sellAt[0]) : null;

            if (!dateA && !dateB) return 0; 
            if (!dateA) return 1;           
            if (!dateB) return -1;

            return dateB - dateA;
            });
            sortState.value = 0;
            dateIsSorted.value = false;
            dateIsSelected.value = true;
            nameIsSorted.value = false;
            nameIsSelected.value = false;
    }
    catch (err) {
        error.value = '獲取系列卡表資料失敗' + err.message
    }
};

const cardSeriesStore = useCardSeriesStore();

const getSeriesCards = cardSeriesStore.getSeriesCards;
const saveLastViewSeries = cardSeriesStore.saveLastViewSeries;
    
const handleSeries = async(seriesId) => {

    try {
        // 先獲取系列卡片數據
        await getSeriesCards(seriesId);
        
        router.push(`/card-series/${ seriesId }`);

        // 保存最後瀏覽的系列
        saveLastViewSeries(seriesId);    

        // 更新已查看的卡片記錄
        await saveViewedSeries(seriesId);

    } catch (error) {
    
        console.error("處理時出現錯誤：", error);
    }
    
}

const saveViewedSeries = async (seriesId) => {
    try {
    let viewed = JSON.parse(localStorage.getItem('viewedSeries')) || [];
    viewed = viewed.filter(id => id !== seriesId);

    viewed.unshift(seriesId);
    localStorage.setItem('viewedSeries', JSON.stringify(viewed));

    } catch (err) {

      console.log(err);
    }
};


// A-Z>50音排序
const nameSort = (a, b) => {
  const nameA = a.name
  const nameB = b.name

  
  const len = Math.min(nameA.length, nameB.length)
  for (let i = 0; i < len; i++) {
    const charA = nameA[i]
    const charB = nameB[i]


    if (/[A-Z]/.test(charA) && !/[A-Z]/.test(charB)) return -1
    if (!/[A-Z]/.test(charA) && /[A-Z]/.test(charB)) return 1

  
    if (/[a-z]/.test(charA) && !/[a-z]/.test(charB)) return -1
    if (!/[a-z]/.test(charA) && /[a-z]/.test(charB)) return 1


    const EnglishCompare = charA.localeCompare(charB)
    if (EnglishCompare !== 0) return EnglishCompare

    
    const japaneseOrder = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'
    const aJapaneseIndex = japaneseOrder.indexOf(charA)
    const bJapaneseIndex = japaneseOrder.indexOf(charB)
    if (aJapaneseIndex !== -1 && bJapaneseIndex !== -1) {
      const japaneseCompare = aJapaneseIndex - bJapaneseIndex
      if (japaneseCompare !== 0) return japaneseCompare
    }
  }

  
  return nameA.length - nameB.length
}

// 名稱排序規則2
const nameSortReverse = (a, b) => {
  const nameA = a.name;
  const nameB = b.name;

  const len = Math.min(nameA.length, nameB.length);
  for (let i = 0; i < len; i++) {
    const charA = nameA[i];
    const charB = nameB[i];

    if (/[A-Z]/.test(charA) && !/[A-Z]/.test(charB)) return 1;
    if (!/[A-Z]/.test(charA) && /[A-Z]/.test(charB)) return -1;

    if (/[a-z]/.test(charA) && !/[a-z]/.test(charB)) return 1;
    if (!/[a-z]/.test(charA) && /[a-z]/.test(charB)) return -1;

    const EnglishCompare = charA.localeCompare(charB);
    if (EnglishCompare !== 0) return -EnglishCompare; 

    
    const japaneseOrder = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
    const aJapaneseIndex = japaneseOrder.indexOf(charA);
    const bJapaneseIndex = japaneseOrder.indexOf(charB);
    if (aJapaneseIndex !== -1 && bJapaneseIndex !== -1) {
      const japaneseCompare = bJapaneseIndex - aJapaneseIndex; 
      if (japaneseCompare !== 0) return japaneseCompare;
    }
  }

  return nameB.length - nameA.length; 
};



// 名稱排序切換
const dateIsSorted = ref(false)
const dateIsSelected = ref(true)
const nameIsSorted = ref(false)
const nameIsSelected = ref(false)

const toggleNameSort = () => {
  if (nameIsSorted.value) {
    cardSeries.value = [...cardSeries.value].sort(nameSortReverse)
    nameIsSorted.value = false;
    nameIsSelected.value = true;
    dateIsSorted.value = false;
    dateIsSelected.value = false;
  } else {
    cardSeries.value = [...cardSeries.value].sort(nameSort)
    nameIsSorted.value = true;
    nameIsSelected.value = true;
    dateIsSorted.value = false;
    dateIsSelected.value = false;
    sortState.value = 0;
  }
}

//日期排序切換

const toggleDateSort = () => {
  if (sortState.value === 0) {
    cardSeries.value = [...cardSeries.value].sort((a, b) => {
        const dateA = a.sellAt[0] ? new Date(a.sellAt[0]) : null;
        const dateB = b.sellAt[0] ? new Date(b.sellAt[0]) : null;

        if (!dateA && !dateB) return 0;
        if (!dateA) return -1;
        if (!dateB) return 1;

        return dateA - dateB;
        });
        sortState.value = 1; 
        dateIsSorted.value = true;
        dateIsSelected.value = true;
        nameIsSorted.value = false;
        nameIsSelected.value = false;
  } else {
        cardSeries.value = [...cardSeries.value].sort((a, b) => {
            const dateA = a.sellAt[0] ? new Date(a.sellAt[0]) : null;
            const dateB = b.sellAt[0] ? new Date(b.sellAt[0]) : null;

            if (!dateA && !dateB) return 0; 
            if (!dateA) return 1;           
            if (!dateB) return -1;

            return dateB - dateA;
            });
            sortState.value = 0;
            dateIsSorted.value = false;
            dateIsSelected.value = true;
            nameIsSorted.value = false;
            nameIsSelected.value = false;
    }
}

const searchResultCount = computed(() => cardSeries.value.length);

const sortByDate = (a, b) => {
  const dateA = a.sellAt[0] ? new Date(a.sellAt[0]) : null;
  const dateB = b.sellAt[0] ? new Date(b.sellAt[0]) : null;

  if (!dateA && !dateB) return 0;
  if (!dateA) return sortState.value === 0 ? 1 : -1; 
  if (!dateB) return sortState.value === 0 ? -1 : 1; 

  return sortState.value === 0 ? dateB - dateA : dateA - dateB; 
};

const searchSeries = () => {
    if (!searchQuery.value.trim()) {
        cardSeries.value = originalSeries.value;
    } else {
        const query = searchQuery.value.toLowerCase();
        cardSeries.value = originalSeries.value.filter((card) => {
            const name = card.name?.toLowerCase() || '';
            const code = card.code?.join(', ').toLowerCase() || '';
            return name.includes(query) || code.includes(query);
        });       
    }

    if (nameIsSorted.value) {
        cardSeries.value = [...cardSeries.value].sort(nameSort);
    } else if (dateIsSorted.value) {
        cardSeries.value = [...cardSeries.value].sort(sortByDate);
    }      
};

const clearSearch = () => {
  searchQuery.value = '';
  cardSeries.value = originalSeries.value;
  if (nameIsSorted.value) {
      cardSeries.value = [...cardSeries.value].sort(nameSort);
  } else if (dateIsSorted.value) {
      cardSeries.value = [...cardSeries.value].sort(sortByDate);
  }
}

onMounted(async () => {
  await fetchCardseries(); 
  
  const viewed = JSON.parse(localStorage.getItem('viewedSeries')) || [];
  
  // 匹配卡片信息並渲染已查看的系列
  viewedSeries.value = viewed.map((id) => {
    return originalSeries.value.find((card) => card.id === id);
  }).filter(Boolean);
});

</script>

<style scoped>
.root-container {
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 4rem 1fr;
  grid-template-areas:
      "sidebar main"
      "sidebar main";
}

.All{
    position: relative;
}

.aa{
    position: absolute;
    top: 0;
    /* left: 270px; */
    background-color: #121212;
    padding: 10px;
    box-sizing: border-box;
    margin: 8px 8px 8px 0;
    border-radius: 10px;
    height: calc(100vh - 16px);
    overflow-y: scroll;
    scrollbar-width: none;
    width: calc(100% - 8px);
}
.top-container {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #121212;
    padding: 20px 30px;
    border-radius: 5px;
    justify-content: space-between;
    position: fixed;
    width: calc(99% - 336px);
    top:8px;
    /* left: 270px; */
}
.Top-bar{
    display: flex;
    gap: .5rem;
}
/* 搜尋框 */
.search-bar {
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #333;
    border-radius: 20px;
    padding: 5px 10px;
    position: relative;
}

.search-bar input {
    border: none;
    outline: none;
    background: none;
    padding: 5px;
    font-size: 14px;
    color: #333;
    width: 100%;
}

.search-bar input::placeholder {
    color: #888;
}

.search-bar button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    position: absolute;
    right: 5px;
}

/* 排序按鈕 */
.sort-button {
    display: flex;
    gap: .5rem;
}

.sort-button button {
    border: none;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    color:black;
    font-weight: 700;
    padding: 8px 15px;
    white-space: nowrap;
    font-size: .875rem;
    background-size: 200% 100%; /* 設定背景大小以便反轉 */
    background-position: 0% 0%; /* 初始位置 */
}

.sort-button button i {
    transition: 0.3s ease; 
}

.active1 {
    background:white;
}

.active2 {
    background: linear-gradient(to right, #5eead4, #93c5fd  );
}

.selected {
  background: linear-gradient(to right, #5eead4, #93c5fd);
}


.rotate180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in;
}

/* 通知和登入按鈕 */
.icons {
    display: flex;
    gap: 10px;
    align-items: center;
}

.icons .icon {
    font-size: 18px;
    cursor: pointer;
    color: white;
}

.icons .login {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    background-color: #090909;
    padding: 10px;
    color: white;
    border-radius: 20px;
}

.icons .login span {
    font-size: 14px;
}
.all-card{
    margin-top: 80px;
    width: 100%;
    box-sizing: border-box;
    
}
.all-card h2{
    margin-left: 30px;
}
.show-card {
    display: flex;
    gap: 1.5rem;
    padding: 20px 40px;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    box-sizing: border-box;
}
.show-card >*{
    width: calc(20% - 2rem);
}
.show-card > *:nth-child(n+8) {
    display: none;
}

.grid-card{
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.5rem;
    margin: 20px 0;
    padding:  0 40px;
    box-sizing: border-box;
    /* width:100% */
}
.flex{
    display: flex;
    gap: .25rem;
}
.card-text{
    margin-top: 1rem;
}
.font-size20{
    font-size: 20px;
    font-weight: 700;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.font-size30{
    font-size: 30px;
    font-weight: 700;
    line-height: 1.75rem;
    padding-bottom: .5rem;
    padding-top: 1.5rem;
    --tw-text-opacity: 1;
}
.font-size75rem{
    font-size: 17.5px;
    font-weight: 400;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.url{
    padding: 16px;
    display: inline-block;
    background-color: #18181b;
    border-radius: 5%;
    box-sizing: border-box;
    
}
.url img{
    border-radius: 10%;
    width: 100%;
}
.icon-size{
    height: 1rem;
    min-height: 1rem;
    min-width: 1rem;
    width: 1rem;
    align-self: center;
}
.transition-colors{
    transition-duration: .15s;
    transition-property: color, background-color, border-color,text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}
a{
    text-decoration:none ;
}
.aa a:hover{
    background-color: #27272a;
}
@media (width > 1339px) {
    .grid-card{
        grid-template-columns: repeat(7, minmax(0, 1fr));
        
    }
    .show-card >*{
        width: calc(14.28571% - 1.28571rem);
    }
}
@media (width < 1200px) {
    .root-container {
      display: grid;
      grid-template-areas:
          "main"
          "main";
      grid-template-columns: 1fr;
      grid-template-rows: 4rem 1fr;
      height: 100vh;
    }
    .top-container {
        width: calc(100% - 48px); ;
        top:0;
        left: 0;    
    }
    .icons{
        display: none;
    }
    .Top-bar {
        width: 100%;
        justify-content:space-between;
    }
    .search-bar {
        flex-grow:10;
        margin-right: 10px;
    }
    .font-size30{
        font-size: 20px;
    }
    .all-card h2{
        margin:  0 0 0 16px ;
    }
    .h2-padding{
        padding: 24px 0 8px 0;
    }
    .show-card{
        padding: 0px;
        margin: 0;
        
    }
    .show-card > *{
        width: calc(20% - 2rem);
        flex: none;
    }
    .grid-card{
        padding: 0;
        margin: 0;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        
    }
    .url{
        background-color: transparent;
        padding: 0 ;
    }
    .all-card{
        width: 100%;
    }
      .aa{
        left: 0;
        width: 100%;
      }
}
@media (width < 1024px) {
    .grid-card{
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .url{
        background-color: #121212;
    }
    .icons{
        display: none;
    }
    .Top-bar {
        width: 100%;
        justify-content:space-between;
    }
    .search-bar {
        flex-grow:10;
        margin-right: 10px;
    }
    .font-size30{
        font-size: 20px;
    }
    .all-card h2{
        margin:  0 0 0 16px ;
    }
    .h2-padding{
        padding: 24px 0 8px 0;
    }
    .show-card{
        padding: 0px;
        margin: 0;
    }
    .show-card > *{
        width: calc(20% - 2rem);
        flex: none;
    }
    .grid-card{
        padding: 0px;
        margin: 0;
    }
    .url{
        background-color: transparent;
        padding: 0 ;
    }
    .all-card{
        width: 100%;
    }
    body{
        background-color:#121212;
    }
}
@media (width < 768px) {
    .grid-card{
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    .url{
        background-color: #121212;
    }
    .icons{
        display: none;
    }
    .Top-bar {
        width: 100%;
        justify-content:space-between;
    }
    .search-bar {
        flex-grow:10;
        margin-right: 10px;
    }
    .font-size30{
        font-size: 20px;
    }
    .all-card h2{
        margin:  0 0 0 16px ;
    }
    .h2-padding{
        padding: 24px 0 8px 0;
    }
    .show-card{
        padding: 0px;
        margin: 0;
    }
    .show-card > *{
        width: calc(50% - 2rem);
        flex: none;
    }
    .grid-card{
        padding:0px;
        margin: 0;
    }
    .url{
        background-color: transparent;
        padding: 0 ;
    }
}
.work-shop-footer {
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
    gap: 8px;
  }
  
  .work-shop-footer-flexbox-left-item-title {
    width: 100%;
    color: white;
    line-height: 24px;
  }
  
  .work-shop-footer-flexbox-left-item-link {
    width: 100%;
    line-height: 24px;
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
    .work-shop-footer {
      padding: 80px 16px 176px;
      max-width:100%;
    }
  
    .work-shop-footer-flexbox {
      display: block;
    }
  
    .work-shop-footer-flexbox-left {
      flex-direction: column;
      margin-bottom: 16px;
    }
  
    .work-shop-footer-flexbox-left-item {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .work-shop-footer-flexbox-left-item-title {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  
    .work-shop-footer-flexbox-right {
      justify-content: center;
    }
  
    .work-shop-footer-flexbox-right-icon-list {
      justify-content: center;
    }
  
    .work-shop-footer-flexbox-right-icon-list a {
      background-color: transparent;
    }
  
    .work-shop-footer-copyright {
      flex-direction: column;
      gap: 8px;
    }
  
    .work-shop-footer-copyright-right span {
      display: block;
    }
  }
</style>



