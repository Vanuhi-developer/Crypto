<template>
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="content-1">
                    <div class="contentSmall">
                        <div class="logo">
                            <div class="logo-container">
                                <NuxtImg :src="logoImgPath" width="174px" height="48px" :style="{ marginTop: '8px' }" />
                            </div>
                            <div class="textContainer">
                                <span class="subtitle">{{ locale === 'en' ? data.info_footer_en : data.info_footer_ru }}</span>

                            </div>
                        </div>
                        <div class="content-2">
                        <div class="content-box">
                            <div class="menu-headline">{{ t('connect_with_us') }}</div>
                            <div class="email-line">

                            </div>
                            <div class="email-line">
                                <div class="email">
                                    <img src="/assets/images/message-icon.webp" alt="">
                                    <span class="subtitle">
                                        <a href="#">{{ data.contact_email }}</a>
                                    </span>
                                </div>
                            </div>
                            <div class="email-line">
                                <div class="email">
                                    <img src="/assets/images/tg-icon.webp" alt="">
                                    <span class="subtitle">
                                        <a href="#">cryptoinfo_me</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                
                </div>
                <div class="content-2">
                    <div class="contact-box">
                        <div class="input-container">
                            <div class="input-wrapper">
                                <input name="email" type="text" placeholder="Subscribe to news (Enter your email)">
                            </div>
                            <button class="button">
                                <span class="subtitle">{{ t('subscribe') }}</span>

                            </button>
                        </div>
                        <div class="caption">{{ t('caption') }}</div>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useMyApi } from '~/stores/Api';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const myStore = useMyApi();
await myStore.fetchData();
const data = myStore.myData.setting;
const logoImgPath = data.logo;
</script>

<style scoped>

.light footer{
    background-color: #e6e6e6!important;

}
.light .subtitle:not(.button .subtitle), .light .menu-headline, .light a{
    color: #16141f !important;
}
.light .caption{
 color: #0000004d;;
}
.light .button span{
    color: aliceblue;
}

footer{
    font-family: Golos Text;
    background: #16141f;
    min-height: 250px;
}
.footer-container {
    align-items: flex-start;
    display: flex;
    justify-content: center;
    flex-direction: row;
    min-height: 300px;
    padding: 57px 20px 72px
}
.footer-content {
    padding: 57px 20px 72px;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20%;
    width: 100% !important;
}
.content-1{
    display: flex;
    max-width: 609px;
    width: 100%;
}
.contentSmall{
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    gap: 170px;
    height: max-content;
    justify-content: flex-start;
    width: max-content;
}
.subtitle{
    color: #d0d0d0;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.content-1, .contentSmall, .text-container{
    line-height: 22px;
    margin-top: auto;
}
.content-2{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 190px;
    justify-content: flex-start;
    max-width: 468px;
}
.content-box {
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: -moz-max-content;
    height: max-content;
    width: 100%;
}
.menu-headline {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    width: 100%;
}
.email-line {
    display: flex;
    gap: 40px;
}
.email {
    align-items: center;
    display: flex;
    gap: 10px;
}
.email img{
    width: 23px;
    height: 22px;
}
a {
    color: #d0d0d0;
    text-decoration: none;
    font-weight: 700 !important;
}
.content-2 .contact-box .input-container{
    align-items: center;
    align-items: stretch;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-start;
    min-height: 48px;
    overflow: hidden;
}
.content-2 .contact-box .input-container .input-wrapper {
    align-items: center;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 16px;
    width: 335px;
}
.content-2 .contact-box .input-container .input-wrapper input {
    background: transparent;
    border: none;
    font-size: 12px;
    height: 100%;
    padding: 8px 0;
    width: 100%;
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
    padding: 0px 35px 0px 35px;
    width: auto;
}
.caption {
    color: #ffffff4d;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 15px;
}
.textContainer{
    line-height: 22px;
    margin-top: auto;
    width: 320px;
}
@media screen and (max-width: 1400px) {
    .footer-content {
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        width: 50% !important;
    }
  
   
}
@media screen and (max-width: 924px) {
   
  .contentSmall {
    flex-direction: column ;
    gap: 30px;
  }
   
}
</style>