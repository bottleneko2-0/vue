<script setup></script>

<template>
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
        
        <button class="header-button" id="name-btn">
             <i class="fa-solid fa-arrow-up  " ></i><span>名稱</span>
            </button>
        <button class="header-button" id="date-btn" >
            <i class="fa-solid fa-arrow-up  " ></i><span>日期</span>
        </button>
        
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
                <!-- <div class="notice-grid">
                    <div class="notice-grid-up">
                        <h2>通知(0)</h2>
                    </div>
                    <div class="notice-grid-down">
                        <img src="https://bottleneko.app/images/status/empty.png" alt="">
                        <h2>沒東西</h2>
                        <p>你只有一無所有的時候，才能全身心地投入機會。 - 拿破崙·波拿巴</p>
                    </div>
                </div> -->
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
  <!-- <div class="page-control-space"></div> -->
</template>

<style>
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

.header-button {
    border-radius: 20px;
    padding: 8px;
    min-width: 68px;
    height: 36px;
    cursor: pointer; 
    display: flex;
    align-items: center;
    background-color: white;
}

.header-button i {
  color: #000;
  
}

.header-button:focus i {
  color: #000;
  transform:rotate(180deg);
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
@media (width < 768px) {
    .login {

        display: none;
        
}
}


</style>

<style src="@/assets/css/work-shop/page-control-rwd.css" scoped></style>
