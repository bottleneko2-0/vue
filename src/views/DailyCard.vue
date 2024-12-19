<script setup>
import { onBeforeMount, ref, onMounted, nextTick, watch } from 'vue'
import axios from 'axios'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import SidebarGrid from '../components/SidebarGrid.vue';

Fancybox.bind('[data-fancybox="daily-card"]', {});

const seriesSortTitleArr = ref([])
const seriesSortCardsArr = ref([])
const dateSortTitleArr = ref([])
const dateSortCardsArr = ref([])
const thisCategory = ref('SERIES')
const currentSection = ref('') // 紀錄目前所在內容標示

const getDailyCards = async (category) => {

    seriesSortTitleArr.value = []
    seriesSortCardsArr.value = []
    dateSortTitleArr.value = []
    dateSortCardsArr.value = []

    const { data } = await axios.get("http://localhost:3000/api/daily-card")
    console.log(data);
    
    // 取出系列
    data.forEach((item) => {
        if(!seriesSortTitleArr.value.find((title) => {
            return title == item.series
        })){
            seriesSortTitleArr.value.push(item.series)
        }
    })
    
    for(let i = 0; i < seriesSortTitleArr.value.length; i++){
        const cards = data.filter((item) => {
            return item.series == seriesSortTitleArr.value[i]
        })
        seriesSortCardsArr.value.push(cards)
    }

    const sortArr = ref([]) 
     // 取出日期
    data.forEach((item) => {
        const year = item.today.slice(0, 4)
        const month = item.today.slice(4, 6)
        const day = item.today.slice(6).length == 1 ? `0${item.today.slice(6)}` : item.today.slice(6, 8)
        const date = `${year}${month}${day}`
        
        if(!sortArr.value.find((title)=> {
            return title == date
        })){
            sortArr.value.push(date)
        }
    })
     // 取出加上.的日期
    data.forEach((item) => {
        
        const year = item.today.slice(0, 4)
        const month = item.today.slice(4, 6)
        const day = item.today.slice(6).length == 1 ? `0${item.today.slice(6)}` : item.today.slice(6, 8)
        const date = [year, month, day].join(".")
        
        if(!dateSortTitleArr.value.find((title)=> {
            return title == date
        })){
            dateSortTitleArr.value.push(date)
        }
    })
    // console.log("目前區塊標題:", dateSortTitleArr.value);
     // 取出各日期的卡片
    for(let i = 0; i < sortArr.value.length; i++){
        const cards = data.filter((item) => {
            return item.today == sortArr.value[i]
        })
        dateSortCardsArr.value.push(cards)
    }
    // console.log("目前區塊卡片:", dateSortCardsArr.value);

}

const switchCategory = (category) => {
    if(category == "SERIES"){
        thisCategory.value = "SERIES"
    }else if(category == "DATE"){
        thisCategory.value = "DATE"
    }
}

const goToSection = (target) => {
        console.log("滾動到", target);    
        document.querySelector(`[data-id="${ target }"]`).scrollIntoView({behavior: "smooth"})    
}

const observer = ref(null);

const initializeObserver = () => {
    // 斷開之前的觀察器
    if (observer.value) {
      observer.value.disconnect();
    }

    const options = {
      root: document.querySelector('.background'), 
      rootMargin: '0px',
      threshold: 0.1, // 當內容 10% 部分可見時觸發
    };
  
    const observerCallback = (entries) => {
        // 過濾出正在交叉的區塊
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length === 0) return;
        
        // 將可見的區塊按距離視口頂部的距離排序
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        
        // 選擇最靠近頂部的區塊
        const topMostEntry = visibleEntries[0];
        
        const sectionId = topMostEntry.target.getAttribute('data-id');
        currentSection.value = sectionId;
    };
  
    observer.value = new IntersectionObserver(observerCallback, options);
    const sections = document.querySelectorAll('[data-id]')
  
    sections.forEach(section => {
      observer.value.observe(section);
    });
}

// 監聽 thisCategory 的變化，重新初始化觀察器
watch(thisCategory, async (newCategory, oldCategory) => {
    await nextTick(); // 確保 DOM 已更新
    initializeObserver();
});

onMounted(async ()=> {
    await getDailyCards()
    await nextTick(); // 確保 DOM 已更新
    
    // 設置 IntersectionObserver
    initializeObserver();
})

</script>
<template>
    <div class="overflow-hidden bg-black root-container">
        <SidebarGrid />
        <div>
            <header class="z-10 h-16 md:mt-2 md:mr-2 header-bg md:rounded-t-2xl">
                <nav class="header-container">
                    <button class="flex-none p-1 text-white rounded-full bg-black/50 default-transition hover:bg-zinc-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                    </button>
                    <button class="flex-none hidden p-1 text-white rounded-full md:block bg-black/50 default-transition hover:bg-zinc-800/50 disabled:opacity-30" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                    <div class="w-full min-w-0 text-lg font-bold text-white md:text-2xl">
                        <h2 class="text-2xl font-bold truncate">每日卡歷史回顧</h2>
                    </div>
                    <div class="z-10 notice">
                        <input type="checkbox" id="notice-jump">
                        <label for="notice-jump" class="inline-flex items-center p-1 text-center text-white rounded-full default-transition hover:bg-zinc-800/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="stroke-2 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                        </label>
                        <div class="z-10 notice-grid">
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
                    <div class="items-center gap-1 text-white rounded-full login-btn bg-black/50 default-transition hover:bg-zinc-800/50">
                        <div class="flex flex-col items-center gap-1 p-1 rounded-full">
                            <div class="flex-none rounded-full size-6 bg-black/70">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="m-1 text-zinc-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                                </svg>
                            </div>
                        </div>
                        <span class="text-sm flex-none max-w-[8rem] truncate">登入</span>
                        <div class="p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="background">
                <main class="relative content-container bg-base z-1">
                    <div class="px-4 content scroll-smooth scrollbar md:px-6">
                        <section class="main-container">
                            <input type="checkbox" id="list-switch">
                            <label for="list-switch" class="list-switch cursor-pointer w-[6.5rem] h-fit p-1 bg-zinc-600/80 text-zinc-200 default-transition rounded-full mb-2.5 fixed">
                                <span class="hide">Close</span><svg data-v-896c8a0b="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="rotate-180 stroke-2 size-6 default-transition"><path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path></svg>
                            </label>
                            <ul v-if="thisCategory == 'SERIES'" class="date-list default-transition w-[6.5rem] bg-zinc-600/80 rounded-xl fixed">
                                <li v-for="(title, index) in seriesSortTitleArr" :key="title" @click.prevent="goToSection(title)" >
                                    <a :href="`#${title}`" class="date line-clamp-1" :class="{ active: currentSection === title }">{{ title }}</a>
                                </li>
                            </ul>
                            <ul v-if="thisCategory == 'DATE'" class="date-list default-transition w-[6.5rem] bg-zinc-600/80 rounded-xl fixed">
                                <li v-for="(title, index) in dateSortTitleArr" :key="title" @click.prevent="goToSection(title)" >
                                    <a :href="`#${title}`" class="date line-clamp-1" :class="{ active: currentSection === title }">{{ title }}</a>
                                </li>
                            </ul>
                            <div class="content-block absolute -top-2 z-1 mt-2 flex flex-col gap-4 md:gap-6 default-transition ml-[calc(6.5rem+1rem)]">
                                <div id="tab-ghost" :class="{'tab-ghost-series': thisCategory == 'SERIES' , 'tab-ghost-date': thisCategory == 'DATE' }" class="absolute rounded-lg shadow will-change-auto bg-gradient-to-r from-lime-500 to-cyan-500 shadow-sky-500/50" data-flip-id="auto-2"></div>
                                <nav class="relative flex flex-wrap items-center gap-2 rounded-lg">
                                    <button id="tab-series" class="flex items-center gap-2 py-1 pl-1 pr-2 text-white rounded-lg will-change-auto" @click="switchCategory('SERIES')" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none stroke-2 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path>
                                        </svg>
                                        <span class="text-sm font-bold select-none whitespace-nowrap">系列</span>
                                    </button>
                                    <button id="tab-today" class="flex items-center gap-2 py-1 pl-1 pr-2 text-white rounded-lg will-change-auto" data-flip-id="auto-1" style="translate: none; rotate: none; scale: none;" @click="switchCategory('DATE')" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none stroke-2 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path>
                                        </svg>
                                        <span class="text-sm font-bold select-none whitespace-nowrap">日期</span>
                                    </button>
                                    <h3 data-v-896c8a0b="" class="font-bold text-red-500">＊僅顯示最近30天的資料內容</h3>
                                </nav>
                                <section v-if="thisCategory == 'SERIES'" class="relative py-0 grid-container z-1" v-for="(title, i) in seriesSortTitleArr" :key="title" :data-id="title" ref="section">
                                    <h3 id="2024.11.08" class="text-xl font-bold text-white col-span-full">{{ title }}</h3>
                                    <div class="card" v-for="card in seriesSortCardsArr[i]" >
                                        <img :src="card.image" class="select-none daily-card rounded-xl" data-fancybox="daily-card" :data-src="card.image" :data-caption="`${card.series} - ${card.sell}`" >
                                    </div>
                                </section>
                                <section v-if="thisCategory == 'DATE'" class="relative py-0 grid-container z-1" v-for="(title, i) in dateSortTitleArr" :key="title" :data-id="title" ref="section">
                                    <h3 id="2024.11.08" class="text-xl font-bold text-white col-span-full">{{ title }}</h3>
                                    <div class="card" v-for="card in dateSortCardsArr[i]" >
                                        <img :src="card.image" class="select-none daily-card rounded-xl" data-fancybox="daily-card" :data-src="card.image" :data-caption="`${card.series} - ${card.sell}`" >
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/base.css';

.root-container {
    display: grid;
    grid-template-areas:
        "sidebar navbar navbar"
        "sidebar main-view date-list";
    grid-template-columns: 270px 1fr;
    grid-template-rows: 4rem 1fr;
    height: 100vh;
}

.default-transition {
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}

header {
    width: calc(100% - 270px);
    position: fixed;
    top: 0;
    right: 0;
}

.header-container {
    grid-area: navbar;
    height: 100%;
    padding: 1rem 1.5rem;
    margin-top: .5rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 1;
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

/* .notice:hover .notice-txt {
    opacity: 1;
} */

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
    z-index: 999;
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

.login-btn{
    display: flex;
    align-items: center;
}

.login-btn > p{
    color: white;
    font-size: 16px;
}

.login-btn:hover{
    background-color: #2a2727;
}

.background {
    height: calc(100vh - 1rem);
    width: calc(100% - .5rem);
    border-radius: 1rem;
    background-color: rgb(18, 18, 18);
    margin: 0.5rem 0.5rem 0.5rem 0;
    overflow: hidden;
}

.content-container {
    display: flex;
    flex-direction: column;
    grid-area: main-view;
}

.content {
    margin-top: calc(64px + .5rem);
    overflow: auto;
}

.scrollbar {
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
}

.main-container {
    height: calc(100vh - 1rem - 64px);
    position: relative;
    z-index: 1;
}

#list-switch, .list-switch {
    display: none;
}

.date-list {
    grid-area: date-list;
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    top: 5rem;
}

.date-list li {
    cursor: pointer;
    background-color: (82, 82, 91, .8);
    text-align: center;
    padding: .5rem;
}

.date {
    text-decoration: none;
    font-size: .875rem;
    font-weight: 700;
    line-height: 1.25rem;
    color: rgb(228 228 231);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

.date.active {
    color: #67e8f9;
}

.tab-ghost-series {
    translate: none; 
    rotate: none; 
    scale: none; 
    padding: 0px; 
    grid-area: 1 / 1 / 1 / 1; 
    transition: none; 
    position: absolute; 
    width: 72px; 
    height: 32px; 
    top: 0px; 
    left: 0px; 
    transform: translate3d(0px, 0px, 0px);
}

.tab-ghost-date {
    translate: none; 
    rotate: none; 
    scale: none; 
    padding: 0px; 
    grid-area: 1 / 1 / 1 / 1; 
    transition: none; 
    position: absolute; 
    width: 72px; 
    height: 32px; 
    top: 0px; 
    left: 0px; 
    transform: translate3d(80px, 0px, 0px);
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

.list-item:hover {
    color: rgb(161 161 170);
}

@media screen and (min-width: 1440px) {
    .grid-container {
        grid-template-columns: repeat(7, minmax(0, 1fr));
    }
}

@media screen and (width < 1200px) {
    .root-container {
        display: grid;
        grid-template-areas:
            "navbar"
            "main-view";
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr;
        height: 100vh;
    }

    header {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
    }
    
    .header-container {
        margin-top: 0;
    }

    .notice {
        display: none;
    }

    .login-btn {
        display: none;
    }

    .background {
        width: 100%;
        margin: 0;
        border-radius: 0;
        background-color: #121212;
    }

    .content-container {
        padding-top: 0;
        height: 100vh;
    }

    .list-switch {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: .25rem;
        top: 4.5rem;
    }

    #list-switch:checked ~ .list-switch {
        text-align: center;
        width: fit-content;
        position: absolute;
        top: 0;
        left: -.5rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    #list-switch:checked ~ .list-switch .hide {
        display: none;
    }

    #list-switch:checked ~ .list-switch > svg {
        transform: rotate(0deg);
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    #list-switch:checked ~ .date-list {
        position: relative;
        top: -2.5rem;
        left: -7rem;
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    #list-switch:checked ~ .content-block {
        margin-left: 0;
    }

    #list-switch:checked ~ .content-block nav {
        margin-left: 2rem;
    }

    #list-switch:checked ~ .content-block #tab-ghost {
        left: 2rem;
    }

    .date-list {
        top: 7rem;
    }
}

@media screen and (width < 1024px) {
    .grid-container {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media screen and (width < 768px) {
    .grid-container {
        gap: 1rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>