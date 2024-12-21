<script setup>
import { onMounted } from 'vue'
import NavLoginBtn from './NavLoginBtn.vue';

onMounted(() => {
  import ("@/assets/js/login-homepage/css-control.js")
  import ("@/assets/js/login-homepage/swiper")
  import ("@/assets/js/login-homepage/fancybox")
})



</script>

<template>
    <div class="All">
      <div class="container">
        <!-- 通知與登入 -->
        <div class="icons">
          <div class="search-bar">
            <div class="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" class="search-bar-input search-bar-input-hidden" placeholder="我想找找...?">
            <div class="xmark-icon xmark-icon-hidden">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div class="icon"><i class="fa-regular fa-bell"></i></div>
          <!-- <div class="login" id="login">
            <span><i class="fa-regular fa-user"></i></span>
            <span>登入</span>
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </div> -->
        </div>
        <NavLoginBtn />
      </div>

      <div class="aa">
        <div class="card1">
          <!-- first swiper -->
          <div class="swiper first-swiper-container">
            <div class="swiper-wrapper first-swiper-wrapper" id="">
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/開拓嘉年華.jpeg" alt="">
                  <p>2023 高速領域-開拓嘉年華 </p>
                </a>
              </div>
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/三周年.jpg" alt="">
                  <p>貓罐子三週年</p>
                </a>
              </div>
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/全新英雄榜.png" alt="">
                  <p>全新英雄榜登場</p>
                </a>
              </div>
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/新手教學.png" alt="">
                  <p>V2 初來乍到 新手教學</p>
                </a>
              </div>
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/社群文章教學.png" alt="">
                  <p>貓罐子 社群文章 教學</p>
                </a>
              </div>
              <div class="swiper-slide first-swiper-slide">
                <a href="#">
                  <img src="@/assets/img/login-homepage/常見效果文與中文對照表.jpg" alt="">
                  <p>常見效果文與中文對照表</p>
                </a>
              </div>
            </div>
          </div>
          <!-- first swiper -->
        </div>
        <h2 class="title">
          每日卡
          <a href="#" class="title-a">
            <svg
              data-v-0ed588ef=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="size-5 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <span data-v-0ed588ef="" class="text">回顧歷史紀錄</span>
          </a>
        </h2>
        <div class="card2">
          <h2>プレミアムブースター リコリス・リコイル</h2>
          <span class="card2-top-span">▼2024/11/15（金）発売</span>

          <!-- second swiper -->
          <div class="swiper second-swiper-container">
            <div class="swiper-wrapper second-swiper-wrapper">
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt01.png" data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt01.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt02.png" data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt02.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt03.png" data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt03.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt04.png" data-caption="ブースターパック 「Re:ゼロから始める異世界生活」Vol.3 - ▼2024/11/22（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt04.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt05.png" data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt05.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt06.png" data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt06.png" alt="">
                </a>
              </div>
              <div class="swiper-slide second-swiper-slide">
                <a href="#" data-fancybox="card-list" data-src="./src/assets/img/login-homepage/default-card/20241114_yt07.png" data-caption="プレミアムブースター リコリス・リコイル - ▼2024/11/15（金）発売" >
                  <img src="@/assets/img/login-homepage/default-card/20241114_yt07.png" alt="">
                </a>
              </div>
            </div>
          </div>
          <!-- second swiper -->

          
          <span class="card2-bottom-span">2024-11-14</span>
        </div>
        <h2 class="title">發燒影片</h2>
        <div class="card3">
          <!-- third swiper -->
          <div class="swiper third-swiper-container">
            <div class="swiper-wrapper third-swiper-wrapper">
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/bottleneko v2.1.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>貓罐子 v2.1 網站功能展示</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>貓罐子管理員</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/感謝祭.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>貓罐子 二週年感謝祭</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>貓罐子管理員</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/スパイファミリーの画像イメージ.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【WS】【弦暇之諭】 Weiß Schwarz雜談#62 スパイファミリー SPY×FAMILY 間諜家家酒牌組分享</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>高速領域</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/bottleneko v2.1.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【WS】【弦暇之諭】 Weiß Schwarz雜談#61 ウマ娘 プリティーダービー 賽馬娘牌組分享</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>高速領域</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/リコリスの画像ファイル.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【WS】【弦暇之諭】 Weiß Schwarz雜談#54 リコリス・リコイル Lycoris Recoil 莉可麗絲牌組分享</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>高速領域</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/判定チュートリアル.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【Weiβ Schwarz 教學】獲得/給予判定標誌「CX的效果可不只有CX可以用」#38</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>くろう-KUROU-</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/遊び方.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【Weiβ Schwarz 教學】(1) 認識卡片/牌組構成規則｜WS教學#1</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>くろう-KUROU-</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="swiper-slide third-swiper-slide">
                <a href="#">
                  <div class="third-swiper-slide-content">
                    <div class="third-swiper-slide-content-img">
                      <img src="@/assets/img/login-homepage/video-img/カードセットメイカーアプリ画像.jpg" alt="">
                    </div>
                    <div class="third-swiper-slide-content-info" >
                      <h2>【Weiβ Schwarz 教學】貓罐子組牌器「彩蛋居然是牌組卡表大放送!?」｜WS教學#12</h2>
                      <div class="third-swiper-slide-content-info-text">
                        <img src="@/assets/img/login-homepage/video-img/管理員LOGO.png" alt="">
                        <div class="third-swiper-slide-content-info-text-box">
                          <p>くろう-KUROU-</p>
                          <p>2023-08-31</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- third swiper -->
        </div>

        <h2 class="title">
          <a href="#" class="title-a2">BCF2024全国決勝大会</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>


        <h2 class="title">
          <a href="#" class="title-a2">2023 高速領域-開拓嘉年華</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2> 
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">最新商品</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2> 
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">第一線最新文章</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">新系列來啦！</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">歡迎新創作者加入！</a>
        </h2>
        <section></section>

        <h2 class="title">
          <a href="#" class="title-a2">WGP2023 全国決勝大会</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">タイトルカップ in WGP2023</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">トリオサバイバル in WGP2023</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">ネオスタンダード in WGP2023</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <h2 class="title">
          <a href="#" class="title-a2">"日本WS官方" 專欄</a>
          <a href="#" class="title-a3">
            閱讀更多 
            <svg data-v-0ed588ef="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </h2>
        <section class="show-card">
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
                  <div>
                      <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
                  </div>
                  <div class="card-text">
                      <div class="flex">
                          <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                              <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                              </path>
                              <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                              </path>
                          </svg>
                          <p class="color-a1">OSK</p>
                      </div>
                      <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                      <p class="color-a1">2023-12-08</p>
                  </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
          <a href="#" class="url transition-colors">
              <div>
                  <img src="https://jasonxddd.me:9000/series-cover/osk_176×176.jpg" alt="">
              </div>
              <div class="card-text">
                  <div class="flex">
                      <svg data-v-09f2b439="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="icon-size flex-none color-a1">
                          <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z">
                          </path>
                          <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z">
                          </path>
                      </svg>
                      <p class="color-a1">OSK</p>
                  </div>
                  <p class="font-size20 color-white padding-bottom" >【我推的孩子】</p>
                  <p class="color-a1">2023-12-08</p>
              </div>
          </a>
      </section>

        <footer class="hero-member-footer">
          <div class="work-shop-footer">
            <div class="work-shop-footer-flexbox">
              <div class="work-shop-footer-flexbox-left">
                <ul class="work-shop-footer-flexbox-left-item">
                  <li class="work-shop-footer-flexbox-left-item-title">簡介</li>
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
                  <li class="work-shop-footer-flexbox-left-item-title">資源</li>
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
                      id="footer-logout"
                    >
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

      <!-- fix -->
      <!-- fix -->
    </div>
</template>

<style scoped>
@import "@/assets/css/login-homepage/Login Homepage.css";
</style>