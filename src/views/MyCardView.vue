<template>
  <div class="work-shop-page-container">
    <SidebarGrid style="grid-area: sidebar;" />
    <div class="work-shop-main-content-container">
      <header class="work-shop-header">
        <div class="header-container Top-bar">
        <div class="input-svg-container ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="icon search-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input type="text" class="header-input" placeholder="找我的牌組？">
            <button class="clear-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="icon clear-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
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
        <div class="w-full login">
            <div class="notice">
                <input type="checkbox" id="notice-jump">
                <label for="notice-jump" class="notice-jump">
                    <svg class="notice-icon" data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" stroke="white"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"  aria-hidden="true"
                        data-slot="icon" >
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">

                        </path>
                    </svg>
                </label>
                <p class="notice-txt">通知</p>
            </div>
                <button class="login-btn" data-bs-toggle="modal" data-bs-target="#login">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="white" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5"  aria-higit dden="true" data-slot="icon"
                    class="m-1 text-zinc-200">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z">
                    </path>
                     </svg>
                     <p>登入</p>
                     <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" stroke="white" fill="none"
                         viewBox="0 0 24 24" stroke-width="1.5"  aria-hidden="true" data-slot="icon"
                         class="h-4 w-4 flex-none">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                     </svg>
                 </button>
             </div>
         </div>
      </header>
      <main class="work-shop-main">
         <div class="display-area">
                <div class="display-card" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="card-area" style="margin-right: 10px;">
                        <button  v-for="(name, index) in matchedNames" :key="index" @click ="toggleSeriesSort(matchedCodes[index], index)" :class="{ selectedGray  :  sortedStates[index]}" class="hover:bg-[rgb(39,39,42)] overflow-hidden  rounded-lg border border-zinc-800 flex items-center gap-2 px-1 md:p-2 bac-1818 w-full-col">
                            <div class="grow-1 min-w-0 w-full text-left w-full-col ">
                                <span class=" truncate text-xs text-zinc-400 font-mono flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"
                                        class="size-4 flex-none svg">
                                        <path class="path" stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6">
                                        </path>
                                    </svg> 
                                    {{ (matchedCodes[index]).join(',') }}
                                    </span>
                                <p class="hidden md:block truncate text-zinc-200 div-text card-name" >{{ name }}</p>
                            </div>
                            <span class="flex-none ml-auto text-lg md:text-2xl text-white font-bold font-mono fz-24 card-area-span">{{  }}</span>
                        </button>
                    </div>
                </div>   
            </div>
        <div class="work-shop-title">    
          <h2>實用工具</h2>    
          <section class="show-container ">
                <a href="#" class="button a-button" type="button" id="#looking">
                    <div class="out-div shadow" style="background-image:url(https://bottleneko.app/images/workshop/find.png);" >
                        <div class="in-div " >
                            <p class="in-div in-div-text" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"
                                    class="flex-none size-6 md:size-8" data-v-f025b9fc="">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3
                            7.5l9 5.25M3 7.5v9l9 5.25m0-9v9">
                                    </path>
                                </svg>
                                <span >尋找牌組</span>
                            </p>
                        </div>
                    </div>
                </a>
                
                <a href="#" class="button a-button" type="button" data-bs-toggle="modal" data-bs-target="#remit">
                    <div class="out-div shadow" style="background-image:url(https://bottleneko.app/images/workshop/report.png);" >
                        <div class="in-div" >
                            <p class="in-div in-div-text " >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"
                                    class="flex-none size-6 md:size-8" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3
                           7.5l9 5.25M3 7.5v9l9 5.25m0-9v9">
                                    </path>
                                </svg>
                                <span data-v-f025b9fc="">匯出牌組</span>
                            
                            </p>
                        </div>
                    </div>
                </a>
            </section>
        
          
        </div>
        <div class="work-shop-title">
          <h2>我的牌組</h2>
          <p>一共有{{ cardDecks.length }}結果</p>
        </div>
       
            <section class="show-card grid-card">
                <a v-for="cardDeck in cardDecks" href="#" class="hover:bg-[rgb(39,39,42)] url gap15 transition-colors">
                <div class="img-btn">
                    <img :src ="cardDeck.deck_cover || '/src/img/cover.png'" class="aspect-square object-top object-cover" alt="">
                    <button data-v-6e6279af="" class=" bottom-0 right-0 m-1 p-1 rounded-full bg-zinc-800  text-white">
                        <svg data-v-6e6279af="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 text-white stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0
                             1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="card-text">
                    <div class="flex">
                        <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                            <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                            </path>
                            <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                            </path>
                        </svg>
                        <p class="card-div-text">{{ cardDeck.deck_id }}</p>
                    </div>
                    <p class="card-name" >{{ cardDeck.deck_name }}</p>
                    <p class="color-a1">{{ formaDate(cardDeck.build_time) }}</p>
                </div>
            </a>
        </section>

        
      </main>
      <footer class="work-shop-footer">
        <MainFooter />
      </footer>
    </div>
  </div>

</template>

<script setup>
import MainFooter from "@/components/MainFooter.vue";
import SidebarGrid from '../components/SidebarGrid.vue';
import router from '@/router'
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';


// 日期大>小排序函數
const dateSort = (a, b) => {
        const dateA = a.build_time ? new Date(a.build_time) : null;
        const dateB = b.build_time ? new Date(b.build_time) : null;

        if (!dateA && !dateB) return 0; 
        if (!dateA) return 1;           
        if (!dateB) return -1;

        return dateB - dateA;
};


const cardDecks = ref([])
const originalDecks = ref([])
const error = ref('')
const sortState = ref(0)
const dateIsSorted = ref(false)
const dateIsSelected = ref(true)
const nameIsSorted = ref(false)
const nameIsSelected = ref(false)

// 獲取我的牌組資料
const fetchMyDecks = async () => {
    try {
        const response = await axios.get('http://localhost:3000/decks',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
        });
    originalDecks.value = response.data.decks
    cardDecks.value = [...originalDecks.value].sort(dateSort);
    console.log(cardDecks.value)
    sortState.value = 0;
    dateIsSorted.value = false;
    dateIsSelected.value = true;
    nameIsSorted.value = false;
    nameIsSelected.value = false;
    }
    catch (err) {
        error.value = '獲取我的牌組資料失敗' + err.message
    }
};


// 獲取系列卡表資料
const originalSeries = ref([])
const fetchCardSeries = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/series');
        originalSeries.value = response.data
        console.log(originalSeries.value)
    }
    catch (err) {
        error.value = '獲取系列卡表資料失敗' + err.message
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
const toggleNameSort = () => {
  if (nameIsSorted.value) {
    cardDecks.value = [...originalDecks.value[i].deck_name].sort(nameSortReverse)
    nameIsSorted.value = false;
    nameIsSelected.value = true;
    dateIsSorted.value = false;
    dateIsSelected.value = false;
  } else {
    cardDecks.value = [...originalDecks.value[i].deck_name].sort(nameSort)
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
    cardDecks.value = [...originalDecks.value].sort((a, b) => {
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
        cardDecks.value = [...originalDecks.value].sort(dateSort);
        sortState.value = 0;
        dateIsSorted.value = false;
        dateIsSelected.value = true;
        nameIsSorted.value = false;
        nameIsSelected.value = false;
    }
}


// 獲取我的牌組seriesCode
const seriesCodes = ref([]);
const fetchSeriesCode = async () => {
   try {
     const response = await axios.get('http://localhost:3000/decks', {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
       },
     });
     
     const decks = response.data.decks;
     seriesCodes.value = [];

     decks.forEach(decksItem => {
       decksItem.deck.forEach(card => {
         if (card.seriesCode && !seriesCodes.value.includes(card.seriesCode)) {
             seriesCodes.value.push(card.seriesCode);
            //  console.log(seriesCodes.value)
         }
       });
     });
   } catch (err) {
     error.value = '獲取我的牌組資料失敗: ' + err.message;
   }
};


// 比對seriesCode及code並回傳系列中文名稱
const matchedNames = ref([]);
const findZhNames = () => {    
  matchedNames.value = []; 

    seriesCodes.value.forEach((code)=> {
        for (let i= 0; i < originalSeries.value.length; i++) {
            originalSeries.value[i].code.forEach((item)=>{
                if(item == code){
                    if (!matchedNames.value.includes(originalSeries.value[i].i18n.zh.name)) {
                        matchedNames.value.push(originalSeries.value[i].i18n.zh.name);
                    }
                }
            })           
        }
    })
    console.log(matchedNames)
 };


 // 比對seriesCode及code並回傳系列code
 const matchedCodes = ref([])
 const findMatchedCode = () => {    
    matchedCodes.value = []; 

    seriesCodes.value.forEach((code)=> {
        for (let i= 0; i < originalSeries.value.length; i++) {
            originalSeries.value[i].code.forEach((item)=>{
                if(item == code){
                    if (!matchedCodes.value.includes(originalSeries.value[i].code)) {
                        matchedCodes.value.push(originalSeries.value[i].code);
                    }
                }
            })           
        }
    })
 };


 const MatchedCodeCounter = () => {  
    const count = 0;
    seriesCodes.value.forEach((code)=> {
        for (let i= 0; i < originalSeries.value.length; i++) {
            originalSeries.value[i].code.forEach((item)=>{
                if(item == code){
                    if (!matchedCodes.value.includes(originalSeries.value[i].code)) {
                        matchedCodes.value.push(originalSeries.value[i].code);
                    }
                }
            })           
        }
    })
 };


// response.data.decks[0].deck[0].seriesCode
// 系列按鈕的排序功能
const sortedStates =  ref({ }); // 追蹤每個按鈕的排序狀態

const toggleSeriesSort = (codes, index) => {
  // 如果當前系列已排序，則恢復原始資料
  if (sortedStates.value[index]) {
    cardDecks.value = [...originalDecks.value].sort(dateSort);
    sortedStates.value[index] = false
    return
  }

  // 篩選特定系列的牌組
  const sortedDecks = originalDecks.value.filter(decksItem => 
    decksItem.deck.some(card => 
      card.seriesCode && codes.includes(card.seriesCode)
    )
  )

  // 更新牌組顯示
  cardDecks.value = sortedDecks.sort(dateSort);

  // 重置所有按鈕狀態，然後設置當前按鈕為已排序
  Object.keys(sortedStates.value).forEach(key => {
    sortedStates.value[key] = false
  })
  sortedStates.value[index] = true
}


 const initData = async () => {
    await fetchCardSeries();  // 先獲取系列卡表
    await fetchSeriesCode();  // 再獲取牌組的系列代碼
    findZhNames();
    findMatchedCode();
}

// 日期格式化函數
const formaDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString('en-CA'); 
}


onMounted(() => {
    fetchMyDecks();
    fetchCardSeries();
    fetchSeriesCode();
    initData();
});
</script>


<style scoped>
@import '../assets/base.css';

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.work-shop-page-container {
  background-color: black;
  max-width: 100%;
  max-height: 100vh;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.work-shop-main-content-container {
  width: 100%;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 16px;
  background-color: #121212;
  overflow: auto;
}

.work-shop-header {
  max-width: 100%;
  box-sizing: border-box;
}

.work-shop-main {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}


.work-shop-title {
  width: 100%;
  padding: 24px 0px 8px;
}

.work-shop-title h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
}

.work-shop-title p {
  font-size: 14px;
  line-height: 20px;
  color: #e6e6e6;
}

.header-container {
    width: 100%;
    display: flex;
    padding: 16px;
    height: 64px;
    box-sizing: border-box;
}

.Top-bar{
    gap: .5rem;
    
}

.w-full {
    display: flex;
    justify-content: flex-end; 
    align-items: center; 
    width: 90%;
    
}

.input-svg-container {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 9999px; 
    background-color: white;
    max-width: 270px; 
}

.page-control-container {
  width: 100%;
  position: relative;
  padding: 0 24px;
  box-sizing: border-box;
}

.page-control {
  width: calc(100% - 326px);
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  /* background-color: black; */
}

.page-control-left {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.page-control-up-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(9, 9, 9, 0.8);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
}

.page-control-up-btn:hover {
  cursor: pointer;
  background-color: rgba(40, 40, 40, 0.6);
  transition: background-color 0.2s ease-in-out;
}

.page-control-down-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: rgb(9, 9, 9, 0.8);
  font-size: 18px;
  transform: rotateZ(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
}

.page-control-down-btn:hover {
  cursor: pointer;
  background-color: rgba(40, 40, 40, 0.6);
  transition: background-color 0.2s ease-in-out;
}

.page-control-right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.page-control-message-btn {
  width: 32px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  background-color: transparent;
  font-size: 18px;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;
}



.page-control-message-btn:hover {
  cursor: pointer;
  background-color: rgb(18, 18, 18, 0.5);
  transition: background-color 0.2s ease-in-out;
}

.notice-icon{
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%; 
    background-color: transparent; 
    transition: background-color 0.3s ease, opacity 0.3s ease;
}

.notice-icon:hover {
    background-color: #2a2727; 
    opacity: 0.8;
}

.notice-txt{
    position: absolute;
    top: 50px;
    background-color: black;
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

.notice:hover .notice-txt {
    opacity: 1;
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
    opacity: 0;
    height: 0;
    transition: opacity 0.3s ease, height 0.3s ease, transform 0.3s ease;
}

#notice-jump:checked ~ .notice-grid{
    opacity: 1;
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
    color: #f4f4f5
}

.notice-grid-down p {
    color: rgb(161 161 170);
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
}


/* .page-control-status-btn {
  max-width: 500px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 92px;
  background-color: rgb(9, 9, 9, 0.8);
  box-sizing: border-box;
  padding: 0 4px;
  transition: background-color 0.2s ease-in-out;
} */

.login {
    display: flex-end;
    padding-right: 1.5rem;
}

.login-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96px;
    height: 32px;
    border: none;
    border-radius: 20px;
    background-color: #111010;
    cursor: pointer;
}

.login-btn > svg:first-child{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 4px;
    background-color: black;
}

.login-btn > svg:last-child{
    width: 16px;
    height: 16px;
}

.login-btn > p{
    color: white;
    font-size: 16px;
}

.login-btn:hover{
    background-color: #2a2727;
}


.page-control-status-btn:hover {
  background-color: rgba(40, 40, 40, 0.6);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.page-control-status-btn-user-icon {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  background-color: black;
  border-radius: 50%;
  color: white;
}

.page-control-status-btn-text {
  min-width: 24px;
  text-align: center;
  font-size: 14px;
  color: white;
}

.page-control-status-btn-arrow-icon {
  width: 24px;
  height: 24px;
  transform: rotateZ(-90deg);
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  color: white;
}

.page-control-space {
  width: 100%;
 
}

.header-input {
    display: flex;
    /* border: none; */
    outline: none;
    font-size: 1rem;
    color: black;
    background-color: transparent;
    height: 20px;
}

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


.icon {
  color: #666;
  width: 15px;
}



.arrow {
    color: #000000;
    margin-right: 5px; 
    transition: transform 0.3s ease;
    transform-origin:center;
    
}



.header-button:nth-child(3) {
    background: linear-gradient(90deg, #5eead4, #93c5fd);
    
}

.header-button span {
    font-size: 14px;
    color: #000000;
    font-weight: 700;
}

.clear-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
}

.clear-icon {
    color: #666;
    width: 20px;
    height: 20px;
}

.header-input {
    display: flex;
    align-items: center;
    border-radius: 12px;
    flex-grow: 1;
    background-color: white;
    border: none;
    gap: 4px;
    font-weight: 300;
    font-size: 14px;
    padding: 0;
    height: 20px;
}

.button {
    display: block;
    width: 160px;
    /* height: 120px; */
    overflow: hidden;
    border-radius:18px;
    aspect-ratio:4/3;
}

.show-container {
    display: flex;
    margin-top: 10px;
    padding: 1rem 2rem;
    gap: 1.5rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
}

.out-div {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    gap: 1rem;
    transform-origin:center;
    position: relative;
    transition: all 0.2s  ;
    background-image: linear-gradient(to bottom, transparent, rgba(24, 24, 27 ,0.8))
    
}

.shadow {
    position: relative;
    
}

.shadow:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    background-image: linear-gradient(to bottom, transparent, rgba(24, 24, 27 ,0.8))
    
}


.in-div {
    bottom: 0;
    background-color: transparent;
    width: 100%;
    padding: 32px 8px 0 8px;
    border-radius:12px ;
    display: flex;
    align-items: flex-end;
    padding-bottom: .5rem;
}

.in-div-text {
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: 700;
    color: #b6b4b4;
    align-items: center;
    padding-bottom: .5rem;
    bottom: 0;
}

.in-div-text:hover {
    position: absolute;
    left: 0;
    bottom: 0;
    font-weight: 700;
    color: #ffffff;
    transition: all 0.2s;
}


.in-div svg {
    width: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-decoration: none; 
}

.in-div svg:hover {
    color: #ffffff;
    transition: all 0.2s;
    font-weight: 700;
    stroke:white;
}



.in-div span {
    font-size: 20px;
}

.flex-none {
  flex:none;
}

.button:hover .out-div {
    transition: all 0.2s ease-out;
    transform:scale(1.05);

}

.modal-content {
    background-color: rgb(18,18,18);
}

.modal-title {
    color: white;
    font-size: 16px;
}

.topic {
    --tw-text-opacity: 1;
    color: rgb(228 228 231 / var(--tw-text-opacity));
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    margin-right: auto;
}


.my-4 {
    display:grid;
    word-break: break-all;
}

.subtitle {
    color: #a1a1aa;
    font-size: 14px;
}

.button-remit:not(:focus) {
    align-items: center;
    border-radius: .75rem;
    display: flex;
    gap: .5rem;
    padding: .5rem;
    white-space:nowrap;
    width: 200px;
    height: 64px;
    color: rgb(255, 255, 255);
    background-color: #18181b80;
    align-items: center;
}

.button-remit:focus {
    background:linear-gradient(to right,#3b82f6 ,#0ea5e980,#06b6d4);
    --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow-color: rgba(14, 165, 233, .5);
    /* --tw-shadow: var(--tw-shadow-colored); */
    color: white;
    width: 200px;
    height: 64px;
    display: flex;
    align-items: center;
    border-radius: .75rem;
    white-space:nowrap;
    
}

.font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

.input-button {
    display: flex;
    gap: .5rem;
    width: 100%;
    box-sizing: content-box;

}

.input-item {
    position: relative;
    display: flex;
    align-items: center;
}

.input-item svg{
    color: #000000;
    background: transparent;
} 

.input-remit {
    align-items: center;
    border-radius: .75rem;
    display: flex;
    gap: .5rem;
    padding: .5rem;
    width: 100%;
    background-color: transparent;
    color: white;
    
}

.input-item button svg {
    width: 20px;
    height: 20px;
    color: #111111; 
}


.enter-code {
    
    display: grid;
}

.show-card {
    display: flex;
    gap: 1.5rem;
}

.grid-card{
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 1.5rem;
    margin: 20px 0;
    box-sizing: border-box;
    /* justify-items: start; */
    /* width: 85%; */
}


.card-div-text {
    text-align: left;
    flex-grow: 1;
    font-size: 12px;
    display: grid;
    justify-content: left;
    align-items: center;
    width: 90%;
    gap: 1rem;
    padding: 8px;
    border: none;
    padding-bottom:5px;
}

.color-a1 {
    color: #a1a1aa;
    font-size: 12px;
}

.card-name {
    color: white;
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 10px;
}

.gap15 {
    gap:1.5rem;
}

.url{
    padding: 20px;
    display: inline-block;
    background-color: #18181b;
    border-radius: 5%;
    /* width: 160px; */
    box-sizing: border-box;
}

.url img {
    border-radius: 10%;
    width: 100%; 
    
}

.url button {
    width: 32px;
    height: 32px;
    position: absolute;
    bottom: 0;
    right: 5px;
}

.url button svg {
    width: 24px;
    height: 24px;
    
}


.url button:hover {
    background-color: red;
}

.icon-size{
    height: 16px;
    min-height: 1rem;
    min-width: 1rem;
    width: 16px;
    align-self: center;
    flex: none;
}

.transition-colors{
    transition-duration: .15s;
    transition-property: color, background-color, border-color,text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}

.img-btn {
    position: relative;
}

.display-area {
    display: flex;
    
}

.display-area button {
    width: 160px;
    /* height: 58px; */
    padding: .5rem;
}

.display-card {
    box-sizing: content-box;
    display: grid;
    height: 100%;
}

.card-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
}

.selectedGray {
    background-color: rgb(63,63,70) !important;
}

.w-full-col {
    display: grid;
}

.grow-1 {
    flex-grow: 1;
    justify-content: left;
    align-items: center;
}

.card-area-span {
    position: absolute;
    right: 10px;
}

.input-item-2 {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 9999px;
    max-width: 270px;
    height: 15px;
    background-color: #18181b80;
    border-radius: .75rem;
    gap: .5rem;
    align-items: flex-start;
}

.input-text {
    display: flex;
    width: 100%;
    font-size: 1rem;
    --tw-text-opacity: 1;
    color: rgb(161 161 170);
    background-color: transparent;
    border-style: none;
    align-items: center;
    height: 40px;

}

.input-button-2 {
    border-radius: 9999px;
    background-color: transparent;
    background-image: none;
    text-transform: none;
    line-height: inherit;
    padding: .25rem;
    margin: -.25rem;
    color: rgb(255 255 255);
    cursor: pointer;
    width: 40px;
    height: 40px;

}

.input-button-2 svg {
    display: block;
    align-items: center;
    stroke-width: 2;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;

}

.input-button-2:hover {
    opacity: 0.6;
}


@media (width < 1200px) {
    .show-card{
        padding: 0px;
        margin: 0;
        width: 100%;
    }
    
    .grid-card{
        padding: 0;
        margin: 0;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        width: 100%;
    }
    .url{
        background-color: transparent;
        padding: 0 ;
    }
    .url img{
    border-radius: 10%;
    width: 100%;
}
    
}

@media (width < 1024px) {
    .grid-card{
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}



    @media (width < 768px) {
  
    
    .grid-card{
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

    .url img{
    border-radius: 10%;
    width: 100%;
}
}


</style>
<style src="../assets/css/work-shop/work-shop-rwd.css" scoped></style>
