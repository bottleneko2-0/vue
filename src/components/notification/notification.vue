<template>
    <div class="notice-wrapper">
        <div class="z-10 notice">
            <input type="checkbox" id="notice-jump">
            <label for="notice-jump" class="inline-flex items-center p-1 text-center text-white rounded-full default-transition hover:bg-zinc-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="stroke-2 size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                </svg>
                <span v-if="unreadCount > 0" data-v-3e737e76="" class="absolute -top-1 -right-1 text-xs rounded-full px-1 bg-red-500 text-white pb-[2px]">{{ unreadCount }}</span>
            </label>
            
            <div class="z-10 notice-grid">
                <div class="notice-grid-up">
                    <h2>通知({{ unreadCount }})</h2>
                </div>
                <div class="notice-grid-down-1" v-if="notices.length > 0">
                    <a v-for="notice in notices" :key="notice.id" 
                    @click="markAsRead(notice.id, notice.post_code)"
                    :class="[
                        'notice-item', 
                        notice.is_read ? 'read' : 'unread',                      
                        'cursor-pointer p-4 text-white flex items-center gap-2 hover:bg-zinc-500/20'
                    ]">                        
                        <div class="flex-none w-[3rem] h-[3rem] rounded-full bg-zinc-500/50 grid place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path>
                            </svg>
                        </div>
                        <div class="select-none">
                            <h3 class="font-bold line-clamp-2 break-all">{{ notice.title }}</h3>
                            <p class="text-sm text-zinc-400">您的牌組有新留言． <br>
                                <span class="font-mono text-xs">{{ formattedTime(notice.created_at) }}</span>
                            </p>
                        </div>
                        <button class="flex-none text-white ml-auto rounded-full p-1 bg-zinc-500/20 default-transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </button>
                    </a>
                </div>
                <div class="notice-grid-down" v-else>
                    <img src="@/assets/img/logo-use/no-data.png" alt="no-data">
                    <h2>沒東西</h2>
                    <p>你只有一無所有的時候，才能全身心地投入機會。 - 拿破崙·波拿巴</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import axios from 'axios';

export  default {
    data() {
        return {
            unreadCount: "",
            notices: [],
        };
    },
    mounted(){
        this.fetchNotices();
    },
    computed: {
        formattedTime() {
            return (createdAt) => {
                if (!createdAt) return "未知時間";
                return dayjs(createdAt).format("YYYY-MM-DD");
            };
        },
    },
    methods: {
        async markAsRead(noticeId, postCode) {
            try {
        // 先找到通知
                const notice = this.notices.find(n => n.id === noticeId);

                // 如果通知已經是已讀狀態，直接返回，不再執行減少未讀計數
                if (notice && notice.is_read) {
                    console.log("This notice is already read.");
                    return;
                }

                // 向後端發送請求，標記為已讀
                const response = await axios.post('http://localhost:3000/api/mark-as-read', { noticeId }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.data.is_read) {
                    // 成功標記為已讀，更新通知狀態
                    if (notice) {
                        notice.is_read = true;
                    }
                    // 減少未讀計數
                    this.unreadCount -= 1;

                    this.goToPost(postCode);
                }
            } catch (error) {
                console.error('Error marking as read:', error);
            }        
        },
        goToPost(postCode) {
            console.log('Navigating to post_code:', postCode);
            this.$router.push(`/social/${ postCode }`);
        },
        async fetchNotices() {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch('http://localhost:3000/api/notices', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log(data);
                this.notices = (data.notices || []).sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                // 初始加載時，設定正確的未讀通知數量
                this.unreadCount = data.unreadCount || 0;

            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        }
    },
}

</script>

<style>
@import '@/assets/base.css';

.notice-item.read{
    background-color: #1f1f22;
}

.notice-item.unread {
    background-color: #29343e;     
}

.notice-grid-down-1{
    border-radius: 0px 0px 10px 10px;
    height: 100%;
    overflow-y: scroll;   
}

.notice-grid-down-1::-webkit-scrollbar {
    display: none; /* 隱藏滾動條 */
}

.notice-wrapper{
    display: flex;
    justify-content: flex-end;
    margin-right: 136px;
    margin-top: 16px;
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
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-70%);
    opacity: 0;
    transition: opacity 0.3s ease, height 0.3s ease, transform 0.3s ease;
    z-index: 999;
    width: 350px;
    height: 700px;
}

#notice-jump:checked ~ .notice-grid{
    opacity: 1;
}

#notice-jump{
    display: none;
}

.notice-grid-up{
    background-color: #27272a;
    padding: 24px 16px 8px 16px;
    border-radius: 10px 10px 0px 0px;
    position: sticky;
}

.notice-grid-down {
    background-color: #1f1f22;    
    border-radius: 0px 0px 10px 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notice-grid-down img{
    /* width: 240px; */
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
</style>