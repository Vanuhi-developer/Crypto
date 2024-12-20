<template>
    <div class="side-bar">
      
        <div class="head">
            <img src="/assets/images/tg-icon.webp" alt="">
            <h2 class="subtitle">{{ t('news') }}</h2>
        </div>
            <div>
                <div v-for="cards in data" :key="data.id" class="card">
                    <div class="company">
                        <div class="company-logo-wrapper">
                            <a href="#" class="share-link">
                             <NuxtImg 
                            :src="'https://api.cryptoinfo.me/'+cards.image"  class="anons_img"></NuxtImg>
                            </a>
                        </div>
                        <div class="company-name">
                        <a href="#" class="title">{{ cards.caption }}</a>
                    </div>
                    </div>
                    <div class="card-text-content">{{ cards.anons }}</div>
                    <div class="post-info-panel">
                        <div class="column">
                            <div class="data-container subtitle">{{ formatDate(cards.updated_at) }}
                            </div>
                        </div>
                        <div class="column">
                            <div class="views-container">
                                <img src="/assets/images/eye-icon.webp" alt="">
                                <div class="views-number subtitle">{{ cards.post_view }}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="button see-more" @click="changeOffset">
                        <span>{{ t('more_posts') }}</span>
                    </button>
                </div>
            </div>
        
    </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n';

import { useMyApi } from '~/stores/MyApi';
const { t, locale } = useI18n();

const myStore = useMyApi();

await myStore.fetchData1();

const data = ref([]);
const state2 = ref(10);
await myStore.fetchData2(state2); 
data.value = myStore.myPostsRight.posts;

const formatDate = (createdAt) => {
    if (!createdAt) return '';

    const date = new Date(createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};
const changeOffset = async () => {
  try {
    state2.value += 10;
    await myStore.fetchData1(state2.value);
    data.value = [...data.value, ...myStore.myPostsRight.posts];
    console.log('Data fetched successfully:', myStore.myPostsRight);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

</script>


<style scoped>
* {
    font-family: Golos Text;
}
.light .post-info-panel {
    background-color: #f7f7f7
}
.light .company-name a, .light .post-info-panel{
    color: #171520;
}
.light .card-text-content {
    color: #d0d0d0;
}
.light h2 {
    color: #171520;
}
.light .side-bar {
    background: #fff;
    border: 1px solid #ededed;
    box-shadow: 0 0 15px #0000000a;
}
.button span {
    color: #fff;
    font-family: Golos, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    width: 160px;
}
.button {
    align-items: center;
    background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 35px #0003;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: auto;
    padding: 20px 109px 20px 109px;
    font-size: 19px;
    color: #ffffff;
    font-weight: 500;}

.see-more {
    margin: 30px auto;
}
.head {
    display: flex;
    gap: 10px;
}
.head img {
    object-fit: contain;
    width: 30px;
    height: 30px;
    margin-top:22px ;
}
.card-text-content {
    font-size: 17px;
}
.side-bar {
    background: #171520;
    border-radius: 14px;
    box-shadow: 0 0 35px #00000026;
    gap: 20px;
    padding: 20px;
    width: 360px;
    display: flex;
    flex-direction: column;
}
.side-bar-title-container{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: flex-start;
}
h2 {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.card, .company {
    display: flex
;
    gap: 10px;
}
.card {
    cursor: pointer;
    flex-direction: column;
    width: 320px;
}
.company-logo-wrapper{
    border-radius: 10px;
}
.post-info-panel, .post-info-panel .column{
    align-items: center;
    display: flex
;
    flex-direction: row;
}
.post-info-panel {
    background: #ffffff05;
    border-radius: 10px;
    height: 48px;
    justify-content: space-between;
    padding: 5px 6px;
    width: 100%;
}
.share-link img {
    width:80px;
    object-fit: contain;
    border-radius: 12px;
}
.company {
    align-items: center;
    max-height: 60px;
}

.card, .company {
    display: flex;
    gap: 10px;
}
a {
    color: #fff;
    text-decoration: none;
}
.views-container{
    display: flex;
    gap: 5px;
}
.views-container img {
    object-fit: contain;
}

</style> 