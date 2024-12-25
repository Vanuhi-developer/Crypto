<template>
    <div class="cards">
        <div>
            <div class="cards-container">
                <div v-for="cards in data" :key="data.id" class="card">
                    <div class="card-image-info-wrapper">
                        <NuxtImg 
                                    :src="`${LeftSideUrl}${cards.image}`"
                                    class="anons_img"
                            />

                     <div class="post-info-panel">
                            <div class="column">
                                <div class="date-container subtitle">
                                    {{ formatDate(cards.updated_at) }}
                                </div>
                            </div>
                            <div class="column">
                                <div class="views-container">
                                    <img src="/assets/images/eye-icon.webp" alt="" class="eye-icon">

                                    <div class="views-number subtitle">
                                        {{ cards.post_view }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-text-wrapper">
                        <div class="card-text-headline">
                            {{ locale === 'en' ? cards.caption_en : cards.caption_ru }} 
                        </div>
                        <div class="car_text_content">
                            {{ locale === 'en' ? cards.anons_en : cards.anons_ru }} 

                        </div>
                        <div class="card-text-footer">
                            <div class="visit-icon-wrapper">
                                <img src="/assets/images/visit-icon.webp" alt="">
                            </div>
                            <div class="links-container">
                                <div 
                                        v-for="(tag, tagIndex) in (locale === 'en' ? cards.tags_en : cards.tags_ru).split(',')" 
                                        :key="tagIndex" 
                                        class="link">
                                        {{ tag.trim() }}
                                    </div> 
                            </div>
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
const { t, locale } = useI18n();

import { useMyApi } from '~/stores/Api';

const myStore = useMyApi();
const LeftSideUrl = useRuntimeConfig().public.LEFT_SIDE_URL + 'uploads/posts/';


const data = ref([]);
const state = ref(10);
await myStore.fetchData1(state); 
data.value = myStore.myPostsData.posts;

const changeOffset = async () => {
  try {
    state.value += 10;
    await myStore.fetchData1(state.value);
    data.value = [...data.value, ...myStore.myPostsData.posts];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const formatDate = (createdAt) => {
    if (!createdAt) return '';

    const date = new Date(createdAt);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};


</script>


<style scoped>

.light .post-info-panel {
    background-color:#f7f7f7;
}
.light .card  {
    background-color: #fff;
}
.light .card-text-headline{
    color: #170332 !important;
}
.light .car_text_content {
   color:#170332;
}
.light .subtitle, .light .link{
    color: #170332;
}
.light .card[data-v-e2a594d7] {
    background: #fff;
    border: 1px solid #ededed;
    box-shadow: 0 0 15px #0000000a;
}
* {
    font-family: Golos Text;
}
.cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 865px;
    width: 100%;
}
.card {
    align-items: flex-start;
    background: #171520;
    border-radius: 16px;
    box-shadow: 0 4px 6px #0000001a;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 300px;
    justify-content: flex-start;
    margin-bottom: 30px;
    max-width: 865px;
    overflow: hidden;
    padding: 20px;
    width: 100%;
}
.card-image-info-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
}
.post-info-panel {
    align-items: center;
    display: flex;
    flex-direction: row;
    background: #ffffff05;
    border-radius: 10px;
    height: 48px;
    justify-content: space-between !important;
    padding: 5px 6px;
    width: 100%;
}
.post-info-panel, .column {
    gap: 5px;
    justify-content: flex-start;
    padding: 8px;
}
.column {
    align-items: center;
    display: flex;
    flex-direction: row;
}
.post-info-panel ,.views-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 6px;
}
.views-number {
    font-weight: 500
}

.subtitle {
    color: #d0d0d0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.card-text-wrapper {
    color: #d0d0d0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    max-width: 475px;
    width: auto;
}
.card-texts-wrapper, .card_text_headline {
    color: #fff;
    font-family: Golos, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    padding: 5px 16px 0 6px;
    text-wrap: wrap;
    -webkit-box-orient: vertical;
}
.card-texts-wrapper ,.card-text-content {
    color: #d0d0d0;
    display: -webkit-box;
    font-family: Golos, sans-serif;
    font-size: 14px !important;
    font-weight: 400;
    line-height: 20px;
    padding: 0 16px 0 6px;
    text-overflow: ellipsis;
    text-wrap: wrap;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-texts-wrapper, .card-text-footer {
    align-items: center;
    display: flex
;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    margin-top: auto;
    padding: 0 6px;
}
.card-texts-wrapper, .card-text-footer ,.links-container {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
}
.link {
    border: 1px dashed #a3a2a2;
    padding: 5px;
}
.anons_img{
    width: 300px;
    height: 200px;
    border-radius: 11px;
    -o-object-fit: cover;
    object-fit: cover;
}
.eye-icon {
    width: 16px;
    height: 14px;
    
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
</style>











