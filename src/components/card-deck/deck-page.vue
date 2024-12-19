<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDeckMakeStore } from "@/stores/deck-make";
import SidebarGrid from '../SidebarGrid.vue';
import RemitCard from "../Mycard/remit-card.vue";

function getUserIdFromToken(token) {
    try {
        const payload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(payload));
        console.log("Decoded Payload:", decodedPayload);
        return decodedPayload.userId || null; // 檢查是否有 userId
    } catch (error) {
        console.error("無法解析 token:", error);
        return null;
    }
}

export default {
    components: {
        RemitCard,
        SidebarGrid
    },
    data() {
        return {
            // 控制組件顯示或隱藏
            isVisible: false,
            deckData: {
                deck: []
            },  // 儲存從 API 獲得的牌組資料
            sortBy: '', // 用於設置排序條件
            togglePriceView: false, // 用於切換價格表顯示
            toggleTableView: false, // 用於切換顯示模式
            deckMakeStore: useDeckMakeStore(),
        };
    },
    computed: {
        totalPrice() {
            if (!Array.isArray(this.deckData.deck)) {
                return 0;
            }
            return this.deckData.deck.reduce((sum, card) => {
                return sum + (card.price?.number || 0); // 確保價格存在
            }, 0);
        },
        uniqueProductNames() {
            const productNames = this.deckData.deck.map(card => card.productName);
            return [...new Set(productNames)];
        },
        groupedCards() {
            if (!Array.isArray(this.deckData.deck) || this.deckData.deck.length === 0) {
                return [];
            }

            let sorted = [];
            if (this.sortBy === "level") {
                sorted = [...this.deckData.deck].sort((a, b) => a.level - b.level);
            } else if (this.sortBy === "color") {
                const colorOrder = ["red", "yellow", "green", "blue"];
                sorted = [...this.deckData.deck].sort((a, b) => colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color));
            } else if (this.sortBy === "typeTranslate") {
                const typeOrder = ["角色", "事件", "名場"];
                sorted = [...this.deckData.deck].sort((a, b) => typeOrder.indexOf(a.typeTranslate) - typeOrder.indexOf(b.typeTranslate));
            } else if (this.sortBy === "rare") {
                sorted = [...this.deckData.deck].sort((a, b) => {
                    if (a.rare.length !== b.rare.length) {
                        return a.rare.length - b.rare.length;
                    }
                    return a.rare.localeCompare(b.rare, "en");
                });
            } else if (this.sortBy === "seriesCode") {
                sorted = [...this.deckData.deck].sort((a, b) => a.seriesCode.localeCompare(b.seriesCode, "en"));
            } else {
                sorted = [...this.deckData.deck];
            }

            const grouped = sorted.reduce((acc, card) => {
                let groupKey = card[this.sortBy];
                if (!groupKey) {
                    groupKey = "角色";
                }

                if (!acc[groupKey]) {
                    acc[groupKey] = [];
                }

                acc[groupKey].push(card);
                return acc;
            }, {});

            const colorMap = {
                red: "紅色",
                yellow: "黃色",
                green: "綠色",
                blue: "藍色",
            };

            const levelLabel = (level) => `${level}等`;

            return Object.entries(grouped).map(([key, cards]) => ({
                group: this.sortBy === "color" ? colorMap[key] || key : this.sortBy === "level" ? levelLabel(key) : key,
                cards,
            }));
        }
    },
    mounted() {
        this.fetchDeckData();
    },
    methods: {
        confirmClose() {
        Swal.fire({
            title: '確定要離開嗎？',
            text: '您的資料尚未完成，確定要離開嗎？',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '離開',
            cancelButtonText: '取消',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
            // 用戶確認離開，隱藏模態框
            this.isVisible = false;
            }
        });
        },
        hideModal() {
        // 使用 Vue 的響應式來隱藏 RemitCard 和 overlay
        this.isVisible = false;
        },
        toggleVisibility() {
        this.isVisible = !this.isVisible; // 切換 isVisible 的值
        },
        goToArticlePage() {
            // 使用 Vue 的路由進行跳轉
            this.$router.push('/add-article');
        },
        toggleRemitCard() {
            this.isVisible = !this.isVisible;
        },
        async fetchDeckData() {
            const deckId = this.$route.params.deck_id;
            console.log('Deck ID:', deckId);  // 用來檢查是否能獲取到 deck_id

            try {
                const response = await axios.get(`http://localhost:3000/api/deck-page/${deckId}`);
                this.deckData = response.data;

                if (!this.deckData || !this.deckData.users || !this.deckData.users.username || !this.deckData.deck) {
                    console.error('回傳資料格式錯誤:', this.deckData);
                    Swal.fire('錯誤', '無法獲取有效的資料', 'error');
                    return;
                }

                if (!Array.isArray(this.deckData.deck)) {
                    this.deckData.deck = [];
                }
            } catch (error) {
                console.error('Error fetching deck data:', error);
                Swal.fire('錯誤', '無法獲取資料', 'error');
            }
        },
        togglePriceTableView() {
            this.togglePriceView = !this.togglePriceView;
        },
        toggleViewMode() {
            this.toggleTableView = !this.toggleTableView;
        },
        countSoulCards(cards) {
            return cards.filter(card => card.trigger.includes('soul')).length;
        },
        setSortBy(property) {
            this.sortBy = property; // 設定排序條件
        },
        async copyDeck(){
            this.deckMakeStore.selectedCards = this.deckData.deck
            this.deckMakeStore.saveLastDeckEdit();
            const cardCode = this.deckData.deck[0].seriesCode
            
            let seriesId = ''
            try {
                const response = await axios.get(`http://localhost:3000/api/series`)
                seriesId = response.data.find((series)=> {
                    if(series.code.includes(cardCode)){
                        return series
                    }
                }).id
                
            } catch (error) {
                console.log(error);
            }
            console.log(seriesId);
            
            this.$router.push(`/card-series/${ seriesId }`)
        }
    }
};
</script>


<template>
    <SidebarGrid/> 
    <div class="container">
        <div class="bg-container">
            <main>
            <div  v-if="isVisible"  >
                <RemitCard v-if="isVisible" />
            </div>
                <div class="bg-black">
                    <header>
                        <div class="pagebtn-area">
                            <button class="page-btn">
                                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                            </button>
                            <button class="page-btn next-btn">
                                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                            </button>
                            <h2>{{ deckData.deck_name }}</h2>
                        </div>
                        <div class="btn-area">
                            <button class="social-btn-item social-btn1">
                                <svg data-v-262b8d44="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path></svg>
                                <div class="description-item description1">分享</div>
                            </button>
                            <button class="social-btn-item social-btn2" @click="copyDeck" >
                                <svg data-v-262b8d44="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"></path></svg>
                                <div class="description-item description2">複製牌組</div>
                            </button>
                            <button class="social-btn-item social-btn3" @click="toggleRemitCard" >
                                <svg data-v-262b8d44="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>
                                <div class="description-item description7">匯出牌組</div>
                            </button>
                            <button class="social-btn-item social-btn3" @click="goToArticlePage">
                                <svg data-v-f57a085e="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path></svg>
                                <div class="description-item description3">發布文章</div>
                            </button>
                            <button class="social-btn-item social-btn3">
                                <svg data-v-f57a085e="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2 red"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg>
                                <div class="description-item description4">刪除牌組</div>
                            </button>
                            <button class="social-btn-item social-btn3">
                                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                                <div class="description-item description5">通知</div>
                            </button>
                            <button class="user-btn">
                                <div class="btn-img">
                                    <img src="/src/img/麻衣.png" alt="">
                                </div>                    
                                <span>XXXX</span>
                                <svg data-v-3e737e76="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                            </button>
                            <button class="social-btn-item social-btn5">
                                <svg data-v-262b8d44="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>
                                <!-- <div class="description-item description5">複製牌組</div> -->
                                <!-- <div class="description-item description6">匯出牌組</div> -->
                            </button>
                        </div>
                    </header>
                </div>
                <section class="carddeck-information">
                    <div class="information-container">
                        <div class="carddeck-img">
                            <img :src="deckData.deck_cover"  alt="">
                        </div>
                        <div class="carddeck-data">
                            <p class="user-number">
                            <svg data-v-b086c574="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
                            </svg>{{ deckData.deck_id }}</p>
                            <div class="carddeck-name">
                                <h1>{{ deckData.deck_name }}</h1>
                            </div>
                            <div class="data-container" >
                                <div class="user-link"   v-if="deckData && deckData.users && deckData.users.username">
                                    <div class="user-img" v-if="deckData.users.picture">
                                        <img :src="deckData.users.picture" alt="">
                                    </div>
                                    <span class="date-container">
                                        <a href="#">{{deckData.users.username}}</a>
                                        發布於
                                        <span>{{ deckData.build_time.slice(0, 10) }}</span>
                                    </span>
                                </div>
                                <span class="data-item" v-if="deckData && Array.isArray(deckData.deck)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none" data-v-5634e853=""><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"></path></svg>&nbsp;
                                    總數{{deckData.deck.length}}張
                                </span>
                                <span class="data-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none" data-v-5634e853=""><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path></svg>&nbsp;
                                    總價
                                    <span>{{ totalPrice }}円</span>
                                </span>
                                <span class="data-item"   v-if="deckData.deck && deckData.deck.length > 0">
                                    <svg data-v-5634e853="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 md:size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"></path></svg>&nbsp;
                                    系列包含
                                    <a v-for="(product, index) in uniqueProductNames" :key="index" href="#">{{ product }}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main-container">
                    <div class="main-container-bg"></div>
                    <div class="article-area">
                        <div class="text-container">
                            <div class="article-title">
                                <svg data-v-5634e853="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-white/50 size-8"><path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd"></path></svg>
                                <span>內容描述</span>
                            </div>
                            <div class="article-content">
                                <p>{{deckData.deck_description}}</p>
                            </div>
                        </div>
                        
                    </div>
                    <nav class="toolbar">
                        <div class="toolbar-area1">
                            <button class="tool-btn1" @click="setSortBy('typeTranslate')"
                            :class="{'active': sortBy === 'typeTranslate'}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
                                <span>類型</span>
                            </button>
                            <button class="tool-btn1" @click="setSortBy('color')"
                            :class="{'active': sortBy === 'color'}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
                                <span>顏色</span>
                            </button>
                            <button class="tool-btn1" @click="setSortBy('level')"
                            :class="{'active': sortBy === 'level'}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
                                <span>等級</span>
                            </button>
                            <button class="tool-btn1" style="min-width: 86px" @click="setSortBy('rare')"
                            :class="{'active': sortBy === 'rare'}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
                                <span>稀有度</span>
                            </button>
                            <button class="tool-btn1" @click="setSortBy('seriesCode')"
                            :class="{'active': sortBy === 'seriesCode'}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none size-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>
                                <span>商品</span>
                            </button>
                        </div>
                        <div class="toolbar-area2">
                            <button class="func-btn func-btn4" @click="togglePriceTableView"
                            :style="{ backgroundColor: togglePriceView ? '#060608' : '#06b6d4' }">
                                <svg data-v-5634e853="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
                                </svg>
                                <div class="func-text func-text4">開啟價格</div>
                            </button>
                            <button class="func-btn func-btn5" @click="toggleTableView = true"
                            :style="{ backgroundColor: toggleTableView ? '#06b6d4' : '' }">
                                <svg data-v-5634e853="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"></path></svg>
                                <div class="func-text func-text5">表格顯示</div>
                            </button>
                            <button class="func-btn func-btn6" @click="toggleTableView = false"
                            :style="{ backgroundColor: !toggleTableView ? '#06b6d4' : '' }">
                                <svg data-v-5634e853="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"></path></svg>
                                <div class="func-text func-text6">卡片資訊</div>
                            </button>
                        </div>
                    </nav>

                    <div class="card-info">
                        <div class="row" v-if="groupedCards && groupedCards.length" v-for="group in groupedCards" :key="group.group || '未分類'">
                            <div class="card-info-header">
                                <h2 class="group-title">{{ group.group || '未分類' }} - {{ group.cards.length || 0 }}</h2>
                                <div class="group-count" data-v-1d946842="">
                                    <img data-v-1d946842="" src="https://bottleneko.app/soul.gif" class="size-4">
                                    <span data-v-1d946842="" class="font-mono flex-none">{{ countSoulCards(group.cards) }}</span>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="col-Info" v-for="card in group.cards" :key="card.index">
                                    <p class="price-row" v-if="!togglePriceView">
                                        <svg data-v-27aeb5c1="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="currency-icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                        </svg>
                                        <span data-v-27aeb5c1="" class="price-row-text">{{ card.price.number }}</span>
                                        <span data-v-27aeb5c1="" class="price-row-text">{{ card.rare }}</span>
                                    </p>

                                    <div class="card-info-image">
                                        <img :src="card.cover">
                                        <div class="card-inner-info">
                                            <div class="card-inner-info-header">
                                                <p>{{ card.id }}</p>
                                                <p>{{ card.rare }}</p>
                                            </div>
                                            <h3>{{ card.title }}</h3>
                                            <div class="details" v-if="!toggleTableView">
                                                <div><span>類型</span>{{ card.typeTranslate }}</div>
                                                <div><span>魂傷</span>{{ card.soul }}</div>
                                                <div><span>等級</span>{{ card.level }}</div>
                                                <div><span>攻擊</span>{{ card.attack }}</div>
                                                <div><span>費用</span>{{ card.cost }}</div>
                                            </div>
                                            <div class="price-download" v-if="!toggleTableView">
                                                <p> ${{ card.price.number }} </p>
                                            <button><svg data-v-69cfbdbc="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-7 text-white stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"></path></svg></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav class="footer-nav">
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7 link-svg"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        <span class="link-word">首頁</span>
                    </a>
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7 link-svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"></path></svg>
                        <span class="link-word">系列卡表</span>
                    </a>
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7 link-svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                        <span class="link-word">我的牌組</span>
                    </a>
                    <a class="nav-link social-icon" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7 link-svg"><path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z"></path><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd"></path></svg>
                        <span class="link-word">社群</span>
                    </a>
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="flex-none w-7 h-7 link-svg"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg>
                        <span class="link-word">通知</span>
                    </a>
                    <a class="nav-link" href="#">
                        <img src="/src/img/麻衣.png" alt="">
                        <div class="link-word">工作坊</div>
                    </a>
                </nav>
    
                <div class="deck-container">
                    <div class="deck-img">
                        <img src="/src/img/麻衣.png" alt="">
                    </div>
                    <div class="deck-content">
                        <div class="line"></div>
                        <div class="total-cards">
                            <h2>刪除 DG/S02-027R</h2>
                            <span>牌組製作，共84張卡</span>
                        </div>
                        <div class="deckbtn-area">
                            <button class="deck-btn">
                                <i class="fa-regular fa-circle-up"></i>
                            </button>
                            <div class="pay-btn">
                                <svg width="24px" height="24px" data-v-c2dbc95b="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
                                <span>00000 ¥</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>

    .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 99;
    
}
    .price-row{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        color: #c9a83d;
        gap: .25rem;
        margin-top: 30px;
        font-size: 16px;
    }

    .currency-icon{
        width: 20px;
        height: 20px;
        stroke: #c9a83d;
    }

    .tool-btn1.active{
        background: linear-gradient(45deg, #7dca31, #21b8c8);
    }

    .card-row{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
    box-sizing: border-box;

    }

    .card-info-header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    margin-top: 3rem;
    }

    .group-count{
    display: flex;
    align-items: center;
    gap: 4px; 
    background-color: #1e1e1e;
    border-radius: 9999px;
    padding: 4px 8px;
    color: white;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    margin-left: 1rem;
    }

    .group-title{
    color: white;
    display: block;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    }

    .row {
        display: flex;
        flex-direction: column;
    }

    .card-image {
    /* display: flex; */
    position: relative;
    object-fit: cover;
    border-radius:10px ;
    overflow: hidden;
    margin: 5px;
    box-sizing: border-box;
    cursor: pointer;
    }

    .col-Sheet, .col-Info {
    width: calc((100% - 10px)/4);
    }

    .card-image img {
    width: 100%;
    height: auto;
    display: block;
    }

    .card-image div {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;
    gap:5px;
    padding: 20px 5px 10px 10px;
    box-sizing: border-box;
    color: white;
    background-image: linear-gradient(transparent, #0009 40%, #000000bf);
    }

    .card-image div p {
    margin: 0;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    }

    .card-image div h3 {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap; 
    max-width: calc(100% - 40px); 
    overflow: hidden;
    text-overflow: ellipsis;
    }

    .card-image button {
    position: absolute;
    background: transparent;
    bottom: 10px;
    right: 5px;
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
    }

    .card-image:hover div {
    display: none;
    }

    .card-image:hover button {
    border: none;
    background: rgba(0, 0, 0, 0.697);
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    }
    
    
    /* card-info */

    .card-info {
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 250px;
    display: flex;
    flex-direction: column;
    }

    .card-info-image {
    display:flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 5px;
    background-color: #121212;
    cursor: pointer;
    }

    .card-info-image img {
    width: 100%;
    height: auto;
    display: block;
    }

    .card-inner-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px; 
    }

    .card-inner-info-header,.price-download {
    display: flex;
    justify-content: space-between;
    color: white;
    text-align: center;
    }

    .card-inner-info-header p,.price-download p {
    color:#71717A;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    margin: 0;
    }

    .card-inner-info-header p:last-child {
    color: #63DDEE;
    }

    .card-inner-info h3 {
    margin:0;
    color: white;
    font-weight: bold;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    }

    .details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #121212;
    color: white;
    gap:10px;
    }

    .details div {
    width: calc((100% - 10px)/2);
    }

    .details span{
    margin-right: 5px;
    /* background-color: #CA8A04; */
    border-radius: 7px;
    padding: 2px;
    }

    .bg-red {
    background-color: #ef4444;
    }

    .bg-blue {
    background-color: #3b82f6;
    }

    .bg-green {
    background-color: #22c55e;
    }

    .bg-yellow {
    background-color: #eab308;
    }

    .bg-purple {
    background-color: #a855f7;
    }

    .price-download {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    .price-download p {
    color: #F59E0B;
    }

    .price-download button {
    width: 35px;
    height:35px;
    background-color: #ffffff34;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .price-download button:hover {
    background-color: #000000;
    }


    .send-btn span
    .cancel-btn span{
        font-size: .75rem;
        font-weight: 700;
        line-height: 1;
        width: 32px;
        height: 16px;
    }

    .send-btn svg,
    .cancel-btn svg{
        width: 16px;
        height: 16px;
    }

    .cancel-btn{
        background-color: rgb(217 119 6);
    }

    .send-btn, .cancel-btn{
        cursor: pointer;
        /* width: 60px; */
        height: 24px;
        border: none;
    }

    .items-center {
        align-items: center;
    }

    .flex {
        display: flex;
    }

    .rounded-full {
        border-radius: 10px;
    }

    .bg-white {
        --tw-bg-opacity: 1;
        background-color: #fff;
        background-color: rgb(255 255 255);
    }

    .py-1 {
        padding-bottom: .25rem;
        padding-top: .25rem;
    }

    pl-1 {
        padding-left: .25rem;
    }

    .pr-2{
        padding-right: 0.5rem;
    }

    .text-zinc-800{
        color: rgb(39 39 42);
    }

    textarea {
        color: white !important;
        text-align: left !important;
        border-color: #6b7280;
        border-radius: 0;
        border-width: 1px;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .w-full {
        width: 100%;
    }

    .border-none {
        border-style: none;
    }   

    .bg-transparent {
        background-color: transparent;
    }

    .p-0{
        padding: 0;
    }

    .rounded-xl{
        border-radius: .75rem;
    }

    .bg-black\/30 {
    background-color: rgba(0, 0, 0, .3);
    }

    .p-1 {
        padding: 0.25rem;
    }
    .delete svg{
        stroke: red;
    }

    .delete span{
        color: red;
    }

    .edit span{
        color: rgb(212 212 216);
    }

    .dot-menu a{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .875rem;
        line-height: 1.25rem;
        padding-bottom: .5rem;
        padding-top: .5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
    }

    .dot-menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: rgb(63, 63, 63);
        border-radius: .375rem;
        position: absolute;
        margin-top: 24px;
        right: 0;
        top: 0;
        --tw-ring-opacity: 0.05;
        overflow-y: auto;
        /* z-index: 10 !important; */
        min-width: 100% ;
        padding: .2rem;
    }

    .bg-gray{
        padding: .08rem;
        background-color: rgb(113 113 122);
        border-radius: 100%;
    }    

    .fill-red-500{
        fill:rgb(249, 101, 101);
        stroke:rgb(249, 101, 101);
    }

    .message-section{
        width: 95%;
        height: 60vh;
    }

    .message-scroll{
        overflow-y: scroll;
        height: 100%;
    }

    .message-scroll::-webkit-scrollbar {
        display: none; 
    }

    .message-count{
        color: white;
        font-weight: 700;
        text-align: right !important;
        margin-top: .5rem;
        margin-bottom: .5rem;
        display: block;
        width: 95%;
    }

    .read-more span{
        color: white;
        font-size: 16px;
    }

    .read-more svg{
        height: 1.5rem;
        min-height: 1.5rem;
        min-width: 1.5rem;
        width: 1.5rem;
        color: white;
    }

    .read-more{
        padding-bottom: .5rem;
        padding-top: .5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-image: linear-gradient(to right, #3b82f6, #06b6d4);
        border-radius: .75rem;
        gap: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        border: none;

    }

    .message-bad-like svg{
        height: 1.25rem;
        min-height: 1.25rem;
        min-width: 1.25rem;
        width: 1.25rem;
        color: white;
    }

    .message-bad-like{
        padding: .25rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        border: none

    }

    .message-like svg{
        height: 1.25rem;
        min-height: 1.25rem;
        min-width: 1.25rem;
        width: 1.25rem;
    }

    .message-like{
        color: white;
        padding: .25rem;
        display: flex;
        align-items: center;
        margin-left: auto;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .message-btn-area{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: .25rem;
    }

    .text-white{
        color: white;
    }

    .dot button{
        background-color: transparent;
        border: none;
        color: hsla(0, 0%, 100%, .5)
    }

    .dot svg{
        height: 1.25rem;
        min-height: 1.25rem;
        min-width: 1.25rem;
        width: 1.25rem;
    }
    .dot{
        margin-left: auto;
        position: relative;
    }

    .message-header{
        display: flex;
        gap: .5rem;
        align-items: flex-start;
    }

    .message-user-name div{
        color: rgb(161 161 170);
        font-size: 12px;
        line-height: 1rem;
    }

    .message-user-name h4{
        color: #32c9ff;
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.25rem;
    }

    .message-user-name{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }

    .message-body{
        display: flex;
        flex-direction: column;
        background-color: rgba(24, 24, 27, .5);
        background-color: #1E2E48;
        border-radius: 10px;
        gap: .5rem;
        padding: .5rem;
        width: 95%;
        box-sizing: border-box;
    }

    .message-list-info{
        display: flex;
        min-width: 100%;
        margin: auto;
        gap: 8px;
    }

    .message-list{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        
    }


    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    .container {
        width: 86%;
        display: flex;
        position: relative;
        left: 270px;
        top: -40px;
    }
    main::-webkit-scrollbar {
    width: 0px;  /* 隱藏滾動條 */
    background: transparent;  /* 滾動條的背景設為透明 */
}
    .sidebar-container {
        background-color: #000000;
        min-width: 270px;
        position: fixed;
    }



    .sidebar{
        width: 238px;
        height: 100vh;
        background-color: black;
        padding: 16px;
    }

    .sidebar-head{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    .icon{
        width: 40px;
        height: 40px;
    }

    .icon-text{
        width: 85px;
        height: 35px;
    }

    .sidebar-menu{
        margin-top: 20px;
        padding: 0px;
    }

    .sidebar-menu > li{
        display: flex;
        align-items: center;
        width: 238px;
        height: 40px;
        margin-bottom: 5px;
    }

    .w-7{
        width: 1.75rem;
    }

    .h-7{
        height: 1.75rem;
    }

    .sidebar-menu li h2{
        color: #a1a1aa; 
        font-weight: 700;
        font-size: 16px;
    }

    .sidebar-menu a {
        display: flex;
        align-items: center; 
        text-decoration: none;
        color: #a1a1aa;
        gap: 10px;
    }

    .sidebar-menu a:hover h2{
        color: white; 
    }

    .sidebar-menu a:hover svg {
        stroke: white; 
    }

    .translate-btn{
        display: flex;
        align-items: center;
        width: 238px;
        height: 40px;
        gap: 8px;
        border-radius: 10px;
        border: none;
        background: linear-gradient(45deg, #a855f7, #ec4899); 
        color: white;
        margin-top: 20px;
        cursor: pointer;
        position: relative;
    }

    .translate-btn::after{
        content: "";
        position: absolute;
        border-top: 1px solid #3f3f46;
        top: 50px;
        left: 0;
        right: 0;
        width: 100%;
    }

    .sidebar p {
        color: #a1a1aa;
        font-size: 16px;
        margin-top: 30px;
    }

    .bg-black {
        background-color: #000000;
        width: calc(100% - 270px);
        height: 72px;
        position: fixed;
        top:0;
        z-index: 5;
        left: 270px;
    }

    header {
        background: linear-gradient(to right, #E7B00A, #EA6532);
        border-radius: 20px 20px 0 0;
        position: absolute;
        top: 8px;
        width:100%;
        height: 64px;
        display: flex;
        align-items: center;
    }

    .pagebtn-area {
        position: relative;
        width: 50%;
        height: 64px;
        display: flex;
        align-items: center;
        margin-left: 24px;
        gap: 8px;
    }


    .page-btn {
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: rgb(70, 67, 67);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .page-btn svg {
        width: 24px;
        height: 24px;
        stroke: white;
    }


    .pagebtn-area h2 {
        font-size: 24px;
        font-weight: 900;
        color: white;
        white-space: nowrap; /* 強制單行顯示 */
        overflow: hidden; /* 隱藏超出部分 */
        text-overflow: ellipsis;
    }

    .next-btn {
        opacity: 0.3;
    }

    .btn-area {
        position: absolute;
        right: 28px;
        display: flex;
        gap:8px;
        width: 311px;
    }



    .social-btn-item {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background-color: rgba(0,0,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .social-btn-item svg {
        width: 24px !important;
        height: 24px !important;
        stroke: white;
    }
    .social-btn-item .red {
        width: 24px !important;
        height: 24px !important;
        stroke: red;
    }
    .social-btn5 {
        display: none;
    }

    .description-item {
        height: 25px;
        background-color: #121212;
        color: white;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px 0 8px;
        opacity: 0;
        visibility: hidden;
        transition:ease 0.3s;
        position:absolute;
        right:105px;
        top:35px;
    }


    .description1 {
        right:286px;
    }

    .description2 {
        right:235px;
    }

    .description3 {
        right:155px;
    }

    .description4 {
        right:131px;
    }

    .description5 {
        right: 91px;
    }

    .description7 {
        right: 193px;
    }

    .description6 {
        right: -20px;
        top: 61px;
    }

    .social-btn1:hover,
    .social-btn2:hover,
    .social-btn3:hover,
    .social-btn4:hover,
    .social-btn5:hover{
        background-color: #121212;
        opacity: 0.6;
    }

    .social-btn1:hover .description1,
    .social-btn2:hover .description2,
    .social-btn3:hover .description3,
    .social-btn3:hover .description4,
    .social-btn3:hover .description5,
    .social-btn3:hover .description7,
    .social-btn4:hover .description4{
        opacity: 1;
        visibility: visible;
    }

    .social-btn5:hover .description5,
    .social-btn5:hover .description6 {
        opacity: 1;
        visibility: visible;
    }

    .user-btn {
        width: 92px;
        height: 32px;
        border: none;
        background-color: #121212;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        gap:8px;
        cursor: pointer;
    }

    .user-btn:hover {
        background-color: #87462D;
    }


    .btn-img img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    .user-btn span {
        color: white;
    }

    .user-btn svg {
        width: 16px;
        height: 16px;
        stroke: white;
    }

    /* -- */


    .bg-container {
        width:100%;
        padding-bottom: 1rem; 
    }

    main {
        position: relative;
        height: auto;
        overflow: hidden;
        overflow-y: scroll;
        scroll-behavior: smooth;
        border-radius: 20px 20px 0 0;
        
    }


    .carddeck-information {
        width:100%;
        height: 450px;
        padding: 0 1.5rem 2rem;
        background: linear-gradient(to right, #DAA613, #DF6230);
        display: flex;
    }

    .information-container {
        margin-top:200px;
        width: 100%;
        box-sizing: border-box;
        gap: 32px;
        display: flex;
    }

    .carddeck-img {
        min-width: 240px;
        height: 240px;
        border-radius: 10px;
        overflow: hidden;
    }

    .carddeck-img img{
        width: 240px;
    }

    .carddeck-data {
        margin-top:18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .user-number {
        font-size: 12px;
        color: white;
        display: flex;
        align-items: center;
    }

    .user-number svg {
        width: 24px;
        height: 24px;
        stroke: white;
    }

    .carddeck-name {
        width: 60%;
        display: flex;
    }

    .carddeck-name h1 {
        /* width: 70%; */
        min-height: 138px;
        font-size: 70px;
        font-weight: bold;
        color: white;
        white-space: nowrap; /* 強制單行顯示 */
        /* overflow: hidden; 隱藏超出部分 */
        text-overflow: ellipsis;
    }

    .data-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        color: white;
        gap: 16px;
    }

    .user-link {
        display: flex;
        align-items: center;
        gap: 3px;
    }

    .user-img{
        width: 28px;
        height: 28px;
    }

    .user-img img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }


    .date-container a,.data-item a{
        text-decoration: none;
        margin-left: 5px;
         pointer-events: none;
    }

    .data-item {
        display: flex;
        align-items: center;
    }

    span svg {
        width: 24px;
        height: 24px;
    }
    /* -- */

    .main-container {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: visible;
        position: relative;
    }

    .main-container-bg{
        background: linear-gradient(rgba(59, 130, 246, 0.44) 100px, transparent 500px) ;
        width: 100%;
        height: 500px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .article-area {
        display: flex;
    }

    .text-container {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        background: linear-gradient(to bottom, #1E2D48, #1A2232);;
        margin: 32px 24px;
        border-radius: 10px;
        z-index: 2;
    }

    .article-title {
        width: 50%;
        display: flex;
        align-items: center;
        gap:8px;
    }

    .article-title svg {
        width: 32px;
        height: 32px;
        color: #8F96A3;
    }

    .article-title span {
        font-size: 16px;
        font-weight: 900;
        color: #8F96A3;
    }

    .article-content {
        margin-top: 16px;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
        display: block;
        white-space: normal;
        overflow-wrap: break-word;
    }


    .message-area {
        width: 40%;
        height: 40px;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        position: relative;
        margin-top: 36px;
        margin-left: 16px;
        flex-direction: column;
    }

    .user-message {
        width: 100%;
        display: flex;
        gap: 8px;
        margin: auto;
    }

    .message {
        box-sizing: border-box;
        width: 85%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: #1E2E48;
        border-radius: 10px;
        padding: 8px;
    }

    .message:hover {
        background-color: black;
    }

    .message-user-img img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .message svg {
        width: 28px;
        height: 28px;
        stroke: white;
    }

    .enter-message {
        width: 100%;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        font-size: 16px;
        transform: translate(-5px,1px);
        color: white;
    }

    .enter-message:focus {
        outline: none;
    }

    .enter-messgae::placeholder {
        color: #4f4f50;
    }

    .message button {
        width: 32px;
        height: 32px;
        background-color: #3F3F46;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .message button svg {
        width: 24px;
        height: 24px;
    }

    .toolbar {
        width: 100%;
        display: flex;
        margin-left: 24px;
        position: absolute; 
        top: 200px;  
        z-index: 1;
        /* display: none; */
    }

    .toolbar-area1 {
        width: 50%;
        display: flex;
        gap: 20px;
        /* display: none; */
    }

    .tool-btn1 {
        box-sizing: border-box;
        min-width: 72px;
        height: 32px;
        display: flex;
        align-items: center;
        border: none;
        background-color: #090909;
        cursor: pointer;
        color: white;
        border-radius: 5px;
    }

    .tool-btn1 span {
        margin-left: 8px;
        color: white;
        font-size: 14px;
        font-weight: 900;
        width: 100%;
    }

    .tool-btn1:hover {
        background-color: #1C1C1E;
    }

    .tool-btn1 svg {
        width: 24px;
        height: 24px;
    }

    .func-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background-color: #060608;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .func-btn svg{
        width: 24px;
        height: 24px;
        color:white;
    }


    .func-text {
        width: 70px;
        height: 25px;
        background-color: #121212;
        color: white;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 8px 0 8px;
        opacity: 0;
        visibility: hidden;
        transition:ease 0.3s;
        position:absolute;
        right: 20px;
        top: 50px;
    }

    .toolbar-area2 {
        display: flex;
        gap: 20px;
        position: absolute;
        right: 50px;
        /* display: none; */
    }


    .func-text1 {
        width: 90px;
        right:-40px;
    }

    .func-text2 {
        right:-30px;
    }

    .func-text3 {
        right:-30px;
    }

    .func-text4 {
        right:-32px;
    }

    .func-text5 {
        right:-30px;
    }

    .func-text6 {
        right:-25px;
    }

    .func-btn1:hover .func-text1,
    .func-btn2:hover .func-text2,
    .func-btn3:hover .func-text3,
    .func-btn4:hover .func-text4,
    .func-btn5:hover .func-text5,
    .func-btn6:hover .func-text6{
        opacity: 1;
        visibility: visible;
    }

    .footer-nav {
        width: 100%;
        height: 66px;
        display: flex;
        
        position: fixed;
        bottom: 0;
        display: none;    
    }

    .nav-link {
        width: 16.66%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nav-link img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .link-svg {
        width: 28px;
        height: 28px;
        stroke: #b1afaf;
    }

    .link-word{
        font-size: 9px;
        margin-top: 8px;
        color: #b1afaf;
    }


    .nav-link:hover svg{
        stroke: white;
    }

    .nav-link:hover span {
        color: white;
    }

    .social-icon svg{
        stroke: white;
    }

    .social-icon span {
        color: white;
    }


    .deck-container {
        width: 99%;
        padding-right: 8px;
        height: 56px;
        position: fixed;
        bottom: 66px;
        display: flex;
        display: none;
    }

    .deck-img {
        overflow: hidden;
        border-radius: 10px;
        transform: translateX(8px);
        z-index: 1;
    }

    .deck-img img {
        width: 56px;
        height: 56px;
        object-fit: cover;
        display: none;
    }


    .deck-content {
        width: 92%;
        height: 56px;
        background-color: rgba(86, 68, 10, 0.9);
        display: flex;
        padding-left: 8px;
        border-radius: 0 10px 10px 0;
        align-items: center;
        position: relative;
        display: none;
    }

    .line {
        position: absolute;
        bottom: 52px;
        width: 96%;
        border-top:4px solid;
        border-image: linear-gradient(to right, rgb(234, 179, 8) 0%, rgb(234, 179, 8) 89.0476%, rgb(34, 197, 94) 94.0476%, rgb(34, 197, 94) 95%) 5 / 1 / 0 stretch;
    }

    .total-cards {
        width: 80%;
        padding-top: 8px;
        padding-left: 8px;
    }

    .total-cards h2 {
        font-size: 15px;
        font-weight: 00;
        color: #fff;
        margin-bottom: 2px;
    }

    .total-cards span {
        font-size: 13px;
        color: #dad7d7;
        font-weight: 700;
    }

    .deckbtn-area {
        display: flex;
        align-items: center;
        width: 20%;
        position: relative;
        padding-left: 8px;
    }

    .deck-btn {
        all: unset;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #F0F0F0;
        background-color: rgba(86, 68, 10, 0.9);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 120px;
        cursor: pointer;
    }

    .deck-btn:hover {
        background-color: #42ebeb;
    }

    .deck-btn i::before {
        font-size: 24px;
    }

    .pay-btn {
        padding-left: 5px;
        position: absolute;
        right: 8px;
        width: 86px;
        min-width: 94px;
        height: 32px;
        background-color: #DAA61E;
        display: flex;
        align-items: center;
        color: #dad7d7;
        border-radius: 20px;
        cursor: pointer;
    }

    .pay-btn:hover {
        background-color: #e27637;
    }

    .pay-btn span {
        font-size: 14px;
        margin-left: 5px;
    }

    @media screen and (min-width: 1400px) {
        .col-Sheet, .col-Info {
            width: calc((100% - 10px) / 5);
        }

    }

    @media screen and (max-width: 1199px) {
        .social-btn1:hover .description1,
        .social-btn2:hover .description2,
        .social-btn3:hover .description3,
        .social-btn3:hover .description4,
        .social-btn3:hover .description5,
        .social-btn3:hover .description7,
        .social-btn4:hover .description4{
        visibility: hidden;
    }
    .social-btn-item{
        width: auto;
    }
    .btn-area{
        width: auto;
    }
    .container{
        left: 0;
        top: 0;
        width: 100%;
    }
        .toolbar {
            position: absolute;
            top: 300px;
        }

        .card-info{
            margin-top: 50px;
        }

        .tool-btn1 span{
            width: 100%;
        }

        .col-Sheet, .col-Info {
            width: calc((100% - 10px) / 3);
        }

        textarea {
            color: white !important;
            text-align: left !important;
        }

        .message-area{
            align-items: center !important;
        }

        .sidebar-container {
            background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.9), transparent);
        }

        .bg-container {
            margin-left: 0;
            width: 100%;
            padding-bottom: 0px !important;
            
        }
        
        main {
            margin-top: 0;
            width: 100%;
            /* scroll-behavior: smooth; */
            height: 100vh;
            overflow-y: auto;
            
        }

        .bg-black {
            border-radius: 0;
            position: absolute;
            top: 0;
            width: 100%;
            left: 0;
        }

        header {
            border-radius: 0;
            height: 72px;
            position: fixed;
            top: 0;
            width: 100%;
        }
        

        .next-btn {
            display: none;
        }

        .pagebtn-area h2 {
            display: none;
        }
        .social-btn2, 
        .social-btn3,
        .social-btn4 {
            display: block;
        }

        
        .user-btn{
            display: none;
        }

        .carddeck-information {
            width: 100%;
            height: 615px;
            padding: 0;
        }

        .information-container{
            margin-top: 0;
            width: 100%;
            gap:0;
            flex-direction: column;
            padding: 5rem 0 0 0;
        }
        

        .carddeck-img {
            width: 288px;
            height: 288px;
            object-fit: cover;
            margin:0 auto;
        }

        .carddeck-img img {
            width: 288px;
        }

        .carddeck-name {
            width: 100%;
            height: 40px;
            overflow: visible;
        }

        .carddeck-name h1 {
            width: 100%;
            font-size: 30px;
            height: 20px;
            white-space:unset; /* 強制單行顯示 */
            overflow: visible; /* 隱藏超出部分 */
            text-overflow:unset;
        }

        .carddeck-data {
            width: 100%;
            margin:18px 8px 0 8px;
            height: 200px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .data-container {
            width: 100%;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: start;
            font-size: 14px;
            gap: 5px;
            transform: translateY(10px);
        }

        .main-container {
            /* top: 623px; */
            height: 100%;
        }
        
        .article-area {
            width: 100%;
            height: 50vh;
            flex-direction: column;
        }

        .text-container {
            width: 95%;
            height: 50%;
            margin:16px auto;
            padding: 8px;
            margin: 1rem auto;
            border-radius: 10px;
        }
        
        .message-area {
            width: 100%;
            height: 40px;
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .user-message {
            width: 95%;
            display: flex;
            gap: 8px;
            margin: auto;
        }
        

        .message {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            background-color: #1E2E48;
            border-radius: 10px;
            padding: 8px;
        }

        .message-count {
            color: white;
            font-weight: bold;
            display: block;
            width: 90%;
            text-align: right;
        }

        .footer-nav {
            display: flex;
        }

        .deck-container {
            display: flex;
        }

        .func-btn1 {
            display: none;
        }
    }

    @media screen and (max-width: 800px) {
        .toolbar {
            width: 100%;
        }
        
        .toolbar-area1 {
            gap: 8px;
        }
        
        .toolbar-area2 {
            gap: 8px;

        } 
    }

    @media screen and (max-width: 768px) {
        .col-Sheet, .col-Info {
            width: calc((100% - 10px) / 2);
        }
        .container {
            all: unset !important; /* 這會取消所有屬性 */
  }
    }

    @media screen and (max-width: 410px) {
        .carddeck-name h1 {
            white-space:nowrap; /* 強制單行顯示 */
            overflow: hidden; /* 隱藏超出部分 */
            text-overflow:ellipsis;
        }
    }

</style>