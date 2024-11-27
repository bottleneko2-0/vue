<script setup>
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
import MainFooter from "@/components/MainFooter.vue";
import HeaderInput from "../components/work-shop/HeaderInput.vue";
import SideBar from "@/components/work-shop/SideBar.vue";


import router from '@/router'


// const workShopData = [
  
//   {
//     imgUrl: 'https://bottleneko.app/images/workshop/find.png',
//     title: '尋找牌組',
//     icon: 'fa-solid fa-cube',
//   },
//   {
//     imgUrl: 'https://bottleneko.app/images/workshop/report.png',
//     title: '匯出牌組',
//     icon: 'fa-solid fa-cube',
//   },
// ]



</script>

<template>
  <div class="work-shop-page-container">
    <SideBar />
    <div class="work-shop-main-content-container">
      <header class="work-shop-header">
        <HeaderInput />
      </header>
      <main class="work-shop-main">
         <div class="display-area">
                <div class="display-card" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="card-area" style="margin-right: 10px;">
                        <button class="overflow-hidden  rounded-lg border border-zinc-800 flex items-center gap-2 px-1 md:p-2 bac-1818 w-full-col">
                            <div class="grow-1 min-w-0 w-full text-left w-full-col ">
                                <span
                                    class=" truncate text-xs text-zinc-400 font-mono flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"
                                        class="size-4 flex-none svg">
                                        <path class="path" stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6">
                                        </path>
                                    </svg> OSK
                                    </span>
                                <p class="hidden md:block truncate text-zinc-200 div-text card-name">【推しの子】</p>
                            </div><span
                                class="flex-none ml-auto text-lg md:text-2xl text-white font-bold font-mono fz-24 card-area-span">7</span>
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

                <!-- <div class="modal fade" id="looking" tabindex="-1" aria-labelledby="remitLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                
                <div class="modal-header">
                    <h2 class="modal-title" id="remitLabel">尋找牌組</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                </div>
                
                <div class="modal-body">
                    <h3 data-v-41768621="" class="topic my-4"> 選擇來源
                        <span data-v-41768621="" class="subtitle">選擇你的牌組來源</span>
                    </h3>
                </div>
                <section class="mb-4">
                    <div class="input-button">
                        <button data-v-41768621="" class="button-remit"><svg data-v-41768621=""
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z">
                                </path>
                            </svg>
                            <span data-v-41768621="" class="text-sm font-mono">牌組</span>
                        </button>
                        <button data-v-41768621="" class="button-remit"><svg data-v-41768621=""
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z">
                                </path>
                            </svg>
                            <span data-v-41768621="" class="text-sm font-mono">社群</span>
                        </button>
                    </div>
                </section>
                <section class="mb-4">
                    <div class="enter-code">
                        <h3 data-v-41768621="" class="topic my-4"> 輸入代碼
                            <div data-v-41768621="" class="input-item">
                                <input data-v-41768621="" class="input-remit" type="text" placeholder="代碼">
                            </div>
                        </h3>
                    </div>
                    
                </section>
            </div>
        </div>

    </div> -->

                

                
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

                
    <!-- <div class="modal fade" id="remit" tabindex="-1" aria-labelledby="remitLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                
                <div class="modal-header">
                    <h2 class="modal-title" id="remitLabel">匯出牌組</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                </div>
                
                <div class="modal-body">
                    <h3 data-v-41768621="" class="topic my-4"> 選擇牌組
                        <span data-v-41768621="" class="subtitle">選擇你的牌組來源</span>
                    </h3>
                </div>
                <div class="input-button">
                    <button data-v-41768621="" class="button-remit"><svg data-v-41768621=""
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z">
                            </path>
                        </svg>
                        <span data-v-41768621="" class="text-sm font-mono">匯出牌組</span>
                    </button>
                    <div data-v-41768621="" class="input-item-2">
                        <input data-v-41768621="" class="input-text" type="text" placeholder="代碼">
                        <button data-v-41768621="" class="input-button-2">
                            <svg data-v-41768621="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div> -->

            </section>
        
          
        </div>
        <div class="work-shop-title">
          <h2>我的牌組</h2>
          <p>一共有7結果</p>
        </div>
       
            <section class="show-card grid-card">
               
            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
                </div>
            </a>

            <a href="#" class="url gap15 transition-colors">
                <div class="img-btn">
                    <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" class="aspect-square object-top object-cover" alt="">
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
                        <p class="card-div-text">OSK</p>
                    </div>
                    <p class="card-name" >【我推的孩子】</p>
                    <p class="color-a1">2024-11-14</p>
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
  width: 100%;
  box-sizing: border-box;
}

.work-shop-main {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}

/* .user-nav {
  max-width: 100%;
  display: flex;
  gap: 24px;
} */


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
  color: #81a19c;
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
    grid-template-columns: repeat(7,1fr);
    gap: 1.5rem;
    margin: 20px 0;
    box-sizing: border-box;
    justify-items: start;
    width: 85%;
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
    width: 160px;
}

.url img {
    border-radius: 10%;
    width: 100%; 
    position: relative;
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
    display: block;
    position: relative;
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

@media (width > 1339px) {
    .grid-card{
        grid-template-columns: repeat(7, minmax(0, 1fr));
        
    }

    .url img{
    border-radius: 10%;
    width: 100%;
}
}

@media (width < 1199px) {
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



    @media (width <767px) {
    
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
