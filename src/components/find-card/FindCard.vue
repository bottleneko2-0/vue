<template>
    <section data-v-502f6c5f="" data-v-57e635bc="" class="fixed top-0 left-0 w-screen h-screen z-[100] grid overflow-y-auto overflow-x-hidden md:overflow-hidden backdrop-blur place-content-center">
        <div data-v-502f6c5f="" class="bg-base w-screen md:rounded-xl relative h-mobile-full overflow-auto flex flex-col md:w-[50vw] md:!h-[80vh]">
            <header data-v-502f6c5f="" class="pt-4 px-4 sticky top-0 z-20 flex items-start pb-2 bg-zinc-900 border-b border-zinc-800">
                <h2 data-v-502f6c5f="" class="grow-1 w-full text-white">尋找牌組</h2>
                <div data-v-502f6c5f="" class="flex-none flex gap-2 justify-end">
                    <button data-v-502f6c5f="" class="flex-none p-1 rounded-full bg-black/70 hover:bg-white hover:text-black text-white">
                        <svg data-v-502f6c5f="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </header>
            <div data-v-502f6c5f="" class="pane-content px-4 w-full h-full overflow-x-hidden">
                <div data-v-c3ac02c2="" data-v-57e635bc="" class="h-full flex flex-col gap-2 pb-4 text-white divide-y divide-white/10 min-h-[20rem]" query="[object Object]">
                    <section data-v-c3ac02c2="" class="mb-4">
                        <h3 data-v-c3ac02c2="" class="topic my-4"> 選擇來源 <br>
                            <span data-v-c3ac02c2="" class="subtitle">選擇你的牌組代碼來源</span>
                        </h3>
                        <div data-v-c3ac02c2="" class="grid grid-cols-2 md:grid-cols-4 gap-2">
                            <button data-v-c3ac02c2="" class="item default-transition active bg-blue">
                                <svg data-v-c3ac02c2="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>
                                <span data-v-c3ac02c2="">牌組</span>
                            </button>
                            <button data-v-c3ac02c2="" class="item default-transition">
                                <svg data-v-c3ac02c2="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path></svg>
                                <span data-v-c3ac02c2="">社群</span>
                            </button>
                        </div>
                    </section>
                    <section data-v-c3ac02c2="" class="mb-4">
                        <h3 data-v-c3ac02c2="" class="topic my-4"> 輸入代碼 </h3>
                        <div data-v-c3ac02c2="" class="grid grid-cols-1 gap-2">
                            <div data-v-c3ac02c2="" class="item default-transition">
                                <input data-v-c3ac02c2="" class="w-full p-0 bg-transparent border-none focus:ring-0 placeholder:text-zinc-500" type="text" placeholder="代碼">
                            </div>
                        </div>
                        <div data-v-c3ac02c2="" class="mt-8 flex justify-center">
                            <button data-v-c3ac02c2="" class="item md:!w-[20rem] justify-center default-transition gray">
                                <svg data-v-c3ac02c2="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="icon size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>
                                <span data-v-c3ac02c2=""> 設定完成 </span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <footer data-v-502f6c5f="" class="mt-auto w-full pb-4">
            </footer>
        </div>
    </section>
</template>

<style scoped>
@import '@/assets/base.css';

.subtitle{
    color: rgb(161 161 170);
    display: block;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
    margin-top: 5px;
}

.item{
    align-items: center;
    border-radius: .75rem;
    display: flex;
    gap: .5rem;
    padding: .5rem;
    width: 100%;
    border: 2px solid #27272a;
    background-color: #151516;
}

.bg-blue{
    background-image: linear-gradient(to right, #3b82f6 var(--tw-gradient-from-position), #06b6d4 var(--tw-gradient-to-position));
}

.gray:hover{
    background-color: #27272a;
}

.backdrop-blur {
    --tw-backdrop-blur: blur(8px);
}

.bg-base{
    background-color: #121212;
}

</style>

