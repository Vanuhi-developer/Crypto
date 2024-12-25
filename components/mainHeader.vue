<template>
    <div class="main-container">
        <header>
        <div class="special">
            <div class="first">
                <div class="first_section">
                    <NuxtImg :src="logoImgPath" width="140px" height="37px" :style="{ marginTop: '8px' }" />
                </div>
                <div class="second_section">
                    <nav class="nav">
                        <ul>
                            <li><NuxtLink to="/">{{ t('home') }}</NuxtLink></li>
                            <li>
                                <NuxtLink to="/">
                                    {{ locale === 'en' ? data.type1_title_en : data.type1_title_ru }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">
                                    {{ locale === 'en' ? data.type2_title_en : data.type2_title_ru }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">
                                    {{ locale === 'en' ? data.type3_title_en : data.type3_title_ru }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">
                                    {{ locale === 'en' ? data.type4_title_en : data.type4_title_ru }}
                                </NuxtLink>
                            </li>
                            <li><NuxtLink to="/">FAQ</NuxtLink></li>
                            <li><NuxtLink to="/">{{ t('about_us') }}</NuxtLink></li>
                            <li><NuxtLink to="/">{{ t('contacts') }}</NuxtLink></li>
                        </ul>
                    </nav>

                </div>
                <div class="third_section">
                    <div>
                        <div class="header__controls__desktop">
                            <div>
                                <div>
                                    <button @click="close = true">{{ t('login') }}</button>
                                </div>
                            </div>
                            
                                <button @click="toggleTheme">
                                    <nuxt-img 
                                      :src="isDarkTheme ? 'theme-light.svg':'theme-dark.svg'  " 
                                       alt="Theme Image"
                                       class="darkLight"
                                   />
                               </button>
                            <div class="language" @click="isDropdownOpen = !isDropdownOpen">
                                <div class="flag_drop">
                                    <nuxt-img :src="selectedLanguage.flag" :alt="selectedLanguage.name + ' Flag'" class="flagImg" />
                                    <img 
                                        src="/assets/images/arrow.svg"    
                                        alt="Dropdown Arrow" 
                                        class="arrow" 
                                        :class="{ rotated: isDropdownOpen }" />
                                </div>
                                <div class="language-dropdown" v-if="isDropdownOpen">
                                    <div 
                                        class="language-option" 
                                        v-for="language in languages" 
                                        :key="language.code" 
                                        @click.stop="selectLanguage(language)">
                                        <nuxt-img :src="language.flag" :alt="language.name + ' Flag'" />
                                        {{ language.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="login-block">
                        <a href="https://t.me/cryptoinfo_me">
                            <span>{{ t('join') }}</span>
                            <img src="/assets/images/tg_logo.webp" alt="" class="joinTg">
                        </a>
                    </div>
                </div>
                <div class="loginPage" v-if="close">
                    <div class="loginAnimated">
                        <form action="" class="lofinForm">
                          
                            <div class="cont">
                                <button class="close_login" @click="close = false">
                                   <nuxt-img :src="!isDarkTheme ? 'close.DslCkta_.png':'close-black.png' "alt="" class="close"/>
                                </button>
                                <h2 v-if="!register">{{ t('sign_in') }}</h2>
                                <h2 v-else="!register">{{ t('signUp') }}</h2>

                                <div class="form-group">
                                    <p v-if="!register" class="login_label">{{ t('mnemonics') }}</p>
                                    <p v-else="!register" class="login_label">{{ t('userName') }}</p>

                                    <input type="text" name="" id="" class="login_input">
                                    <div v-if="!register" class="button">{{ t('sign_in') }}</div>
                                    <div v-else = "!register" class="button">{{ t('register') }}</div>

                                </div>
                                <div class="modal_footer">
                                    <p v-if="!register">{{ t('question') }}</p>
                                    <p v-else="!register">{{ t('question_next') }}</p>

                                    <button @click.prevent="register = !register" v-if="!register" >{{ t('register') }}</button>
                                    <button @click.prevent="register = !register" v-else="!register" >{{ t('sign_in') }}</button>

                                </div>
                            </div>
                    </form>
                </div>
                   
                </div>
            </div>
        
            <div>
                <div class="main-banner-container">
                    <div class="container_middle">
                        <div class="chargeCalculate">
                            <div class="input_container" @change="calculate1">
                                <input type="text" v-model="input1Text" >
                                <div class="select_container" @click="openOption" >
                                    <nuxt-img :src="selectedCurrency.img" :alt="selectedCurrency.name" class="selectedImg currensy"/>
                                    <img src="/assets/images/arrow.svg" alt="" class="arrow_input arrow" :class="{ rotated: optionValue}">
                                </div>
                                <div class="option_list1" v-if="optionValue">
                                    <div v-for="currency in currencies" :key="currency.symbol"  class="option_item"  @click="selectCurrency(currency)">
                                        <nuxt-img :src="currency.img" :alt="currency.name" class="currensy"/>
                                        <span class="name">{{ currency.name  }}</span>
                                        <span class="currensy_symboll_1">{{ currency.symbol }}</span>
                                    </div>
                                   
                                </div>
                            </div>
                              
                            <div class="input_container" @change = "calculate2">
                                <input type="text" v-model="input2Text">
                                <div class="selected_icons" @click="openOptionList = !openOptionList">
                                    {{ selectedCurrency1 }}
                                    <img src="/assets/images/arrow.svg" alt="" class="arrow" :class="{ rotated: openOptionList}">
                                </div>
                                <div class="option__item" v-if="openOptionList">
                                    <div v-for="symbol in currencies1" :key="symbol" @click="selectCurrency1(symbol)">
                                        <span>{{ symbol }}</span>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="currensy_container">
                        <div v-for="currency in currencies" :key="currency.symbol" class="currensy_list_item">
                        <div class="currency_info">
                            <nuxt-img :src="currency.img" :alt="currency.name" class="currensy"/>
                            <div class="currensy_name_container">
                                <span >{{ currency.name }}</span>
                                <span class="currensy_symboll_1">{{ currency.symbol }}</span>
                            </div>
                            <div class="currensy_price">{{ currency.num }}</div>
                        </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        </header>
    </div>
</template>




<script setup>

import { useI18n } from 'vue-i18n';
import { useMyApi } from '~/stores/Api';
import { ref, onMounted } from 'vue';
import { watch } from 'vue';
import { useHead } from '#app';
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60  *1000));  
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`; 
}

function getCookie(name) {
  const nameEq = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) === ' ') {  
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEq) === 0) {  
      return c.substring(nameEq.length, c.length); 
    }
  }
  return null;
}
const myStore = useMyApi();
await myStore.fetchData();
const data = myStore.myData.setting;
const logoImgPath = data.logo;
const currencies = ref([]); 
const isDarkTheme = ref(false);
const openOptionList = ref(false)
const close = ref(false);
const loading = ref(false);
const error = ref(null);
const data1 = ref(null);
const input1Text = ref();
const input2Text = ref();
const optionValue = ref(false);
const register = ref(false);
const { t, locale } = useI18n();
const languages = ref([
    { code: 'en', name: 'English', flag: 'us.svg' },
    { code: 'ru', name: 'Russian', flag: 'ru.webp' },
]);
const selectedLanguage = ref(languages.value[0]);
const isDropdownOpen = ref(false);

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;
  locale.value = language.code;
  setCookie('locale', language.code, 30); 

  console.log(`Selected language: ${language.name}`);
};

const loadLocale = () => {
  const savedLocale = getCookie('locale') || 'en'; 
  const language = languages.value.find((lang) => lang.code === savedLocale);
  if (language) {
    selectedLanguage.value = language;
    locale.value = savedLocale;
  }
};
onMounted(async () => {
    loadLocale();

   const savedTheme = getCookie('theme');
   if(savedTheme) {
    isDarkTheme.value = savedTheme ==='dark';

   }else isDarkTheme.value = false;

   applyTheme();
  loading.value = true;
  const config = useRuntimeConfig();

  try {
    const response = await fetch(
        config.public.VALUTA_URL,
        {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );


    if (!response.ok) {
      throw new Error(`Failed to fetch settings: ${response.statusText}`);
    }

    data1.value = await response.json();
    console.log('API Response Data:', data1.value);

    if (!data1.value || Object.keys(data1.value).length === 0) {
      throw new Error('Empty or invalid API response');
    }
    currencies.value = [
      { name: 'Bitcoin', symbol: 'BTC', img: 'bitcoinLogo.png', num: data1.value.bitcoin.usd },
      { name: 'Monero', symbol: 'XMR', img: 'monero.webp', num: data1.value.monero.usd },
      { name: 'Litecoin', symbol: 'LTC', img: 'litecoin.webp', num: data1.value.lightcoin.usd || 'N/A' },
      { name: 'Ethereum', symbol: 'ETH', img: 'ethereum.webp', num: data1.value.ethereum.usd },
      { name: 'Tron', symbol: 'TRX', img: 'tron.webp', num: data1.value.tron.usd },
    ];
  } catch (err) {
    console.error('Fetch error:', err);
    error.value = {
      message: err.message || 'Failed to fetch settings',
      status: err.response ? err.response.status : null,
    };
  } finally {
    loading.value = false;
  }
});
const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    applyTheme();
    setCookie('theme', isDarkTheme.value ? 'dark' :'light' , 30)
};
function applyTheme() {
    const header = document.querySelector('header');
    const body = document.querySelector('body');

    if (isDarkTheme.value) {
        header.classList.add('header-light');
        body.classList.add('light')
    } else {
        header.classList.remove('header-light');
        body.classList.remove('light')

    }
}
const openOption = () => {
    optionValue.value = !optionValue.value;
}

const selectedCurrency = ref({
  name: 'Bitcoin',
  symbol: 'BTC',
  img: 'bitcoinLogo.png',
});

const selectedCurrency1 =  ref('$');
 const currencies1 = ref(['$', '₽']);
 
 const calculate1 = () => {
  const currencyName = selectedCurrency.value?.name?.toLowerCase();
  if (!currencyName) {
    console.error("Selected currency name is undefined");
    return;
  }
  const rate =
    selectedCurrency1.value === '$'
      ? data1.value[currencyName]?.usd || 0
      : data1.value[currencyName]?.rub || 0;
  input2Text.value = input1Text.value * rate;
};

const calculate2 = () => {
  const currencyName = selectedCurrency.value?.name?.toLowerCase();
  if (!currencyName) {
    console.error("Selected currency name is undefined");
    return;
  }
  const rate =
    selectedCurrency1.value === '$'
      ? data1.value[currencyName]?.usd || 0
      : data1.value[currencyName]?.rub || 0;
  input1Text.value = input2Text.value / rate;
};


    const selectCurrency = (currency) => {
    selectedCurrency.value = currency;
    optionValue.value = false;
    calculate1();
};

const selectCurrency1 = (symbol) => {
    selectedCurrency1.value = symbol;
    openOptionList.value = false;
    calculate2();
};


watch(() => locale.value, () => {
  const metaDescription = locale.value === 'en' ? data.meta_description_en : data.meta_description_ru;
  const metaKeywords = locale.value === 'en' ? data.meta_keywords_en : data.meta_keywords_ru;

  useHead({
    title: 'Criptoinfo',
    meta: [
      { name: 'description', content: metaDescription },
      { name: 'keywords', content: metaKeywords }
    ]
  });
}, { immediate: true });



</script>

<style scoped>
.darkLight {
    width: 30px;
    height: 30px;
}
.flagImg{
    width: 25px;
}
.currensy{
    width: 35px;
    height: 35px;
}
.header-light .cont {
    background-color: #fff;
}
.header-light .login_input {
    background: #0000000d;
}
.header-light .cont h2{
    color: #000;
}
.header-light .cont p{
    color: #000 !important;
}

.header-light .input_container{
    background: #0000000d;
}
.header-light .selected_icons{
    color:#959595;
}
.header-light .currensy_price, .header-light .currensy_symboll_1 {
    color: #000;
}
.option__item {
    background: #301c44;
    gap: 30px;
    right: 0;
    align-items: flex-start;
    background: #301c44;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px;
    position: absolute;
    top: calc(100% + 12px);
    width: -moz-max-content;
    width: max-content;
    z-index: 1111;
    color: #f6f7f9;
    font-size: 20px
}


.name{
    color: #fff;
    font-size: 17px !important;
    padding-left: 5px;
}
.option_list1{
    position:absolute;
    background: #301c44;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 20px;
    top: calc(100% + 15px);
    left: 13%;
    z-index: 1111;
    
}
.header-light  .option_list1 , .header-light .option__item{
    background-color: #ffffff !important;
    border: 1px solid #ededed;
    box-shadow: 0 0 15px #0000000a;
}
.option_item{
    display: flex;
    gap: 10px;
    align-items: center;
}

.selected_icons {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    color: #f3f3f3f3;
    font-size: 19px;
    margin-left: 15%;
}

.select_container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;

}


.currensy_container {
    display: grid;
    gap: 20px 60px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 25%;
}
.currensy_symboll_1{
    color: #959595 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
}

.part1{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.currency_list{
 display: flex;
 gap: 40px;
}

.currency_list_item {
    align-items: center;
    display: flex
;
    flex-direction: row;
    gap: 20px;
    min-height: 35px;
    overflow: hidden;
}
.currency_info{
    align-items: center;
    display: flex
;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
}
.currensy_name_container {
    align-items: flex-start;
    display: flex
;
    flex-direction: column;
    gap: 2px;
    justify-content: flex-start;

}
.currensy_name_container span {
    color: #d0d0d0;
    font-size: 15px;
    font-weight: 600;
}
.currensy_price{
    color: #d2d2d2;
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
}
.input_container {
    background: #ffffff1a;
    display: flex;
    border-radius: 16px;
    gap: 10px;
    height: 63px;
    width: 200px !important;
    position: relative;
}
.input_container input {
    background: transparent !important;
    border: none;
    color: #d0d0d0;
    flex-grow: 1;
    font-size: 18px;
    font-weight: 500;
    max-width: 56.5%;
    padding: 8px 0;
    margin-top: 10px;
}
.main-banner-container{
    display: flex
;
    flex-direction: column;
    gap: 40px !important;
    margin-left: 12%;
    padding-top: 5%;
}
.main-container{
    align-items: center;
}
.chargeCalculate {
    display: flex;
    gap: 20px;
}
.language {
    position: relative;
    cursor: pointer;
    user-select: none;
}

.language-dropdown {
    position: absolute;
    right: 0;
    background: #301c44;
    border-radius: 11px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    top: calc(100% + 12px);
    width: -moz-max-content;
    width: max-content;
    z-index: 1111;
    padding: 8px 15px 8px 15px;
    gap: 10px;
}

.language-option {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #d0d0d0;
    font-family: Golos Text, sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
}

.language-option:hover {
    background-color: #ffffff1a;
}

.language-option img {
    width: 20px;
    margin-right: 10px;
}
.arrow {
    transition: transform 0.3s ease;
}
.arrow.rotated {
    transform: rotate(180deg);
}
.header-light .second_section{
    padding-top: 15px;
}
.header-light {
    background: no-repeat 130% 100% / 80% 112% url(/assets/images/bg_arrow.png), no-repeat 50% / cover url(/assets/images/light.png);
}
.header-light ul {
    align-items: center;
}
.header-light nav {
    height: 25px;
    background-color: #f6f7f9;
}
.header-light a, .header-light button, .header-light span{
    color: #000;
}
.header-light .language-dropdown {
    background-color: hwb(0 100% 0%);
    
}
.header-light .language-dropdown div {
    color: #000;
}
header
{
    font-family: Golos Text, sans-serif;
    padding: 40px 0 47px;
    width: 100%;
    background: no-repeat 100% 100% / 65% url(/assets/images/wave-20.png), no-repeat 50% / cover url(/assets/images/download.jpg);
}
.first{
    display: flex;
    gap: clamp(60px, 4vw, 80px);
    justify-content: center;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav a {
    text-decoration: none;
    color: #d0d0d0;
    font-family: Golos Text, sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
ul {
    display: flex;
    list-style: none;
    gap:15px;
    
}
  
  li {
    margin: 0 10px;
  }
  .header__controls__desktop{
        align-items: center;
        display: flex;
        gap: 15px;
        color: #d0d0d0;
        font-family: Golos Text, sans-serif;
    }
    button{
        background: none;
        border: none;
        outline: none;
        color: #d0d0d0;
    }
    .language{
        background: #ffffff1a;
        border-radius: 11px;
        padding: 12px;
        position: relative;
    }
    .flag_drop{
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: flex-start;
    }
    .login-block a{
    display: flex;
    justify-content: flex-end;
    line-height: 40px;
    vertical-align: middle;
    width: 100%;
    text-decoration: none;
    color: #d0d0d0;
    font-family: Golos Text, sans-serif;
}
.joinTg{
    height: 40px;
    -o-object-fit: contain;
    object-fit: contain;
    width: auto;
}
.loginPage {
    align-items: center;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: #000;
    background-color: #0006;
    display: flex
;
    height: 100vh;
    justify-content: center;
    left: 50%;
    overflow: auto;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    z-index: 9999;
}
.loginAnimated{
    box-sizing: border-box;
    transition: all .2s
}
.loginForm {
    display: flex
;
    flex-direction: column;
    gap: 19px;
}
.lofinForm h2{
    color: #fefefe;
    font-size: 40px;
    line-height: normal;
    margin-bottom: 2rem;
    text-align: center;
}
.form-group {
    gap: 7px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%
}
.login_label {
    color: #d0d0d0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
}
.button {
    align-items: center;
    background: linear-gradient(96deg, #fb1560cc, #4a1690 87%);
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 35px #0003;
    color: #fff;
    cursor: pointer;
    display: flex
;
    font-family: Golos, sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    justify-content: center;
    line-height: normal;
    padding: 16px 90px;
    text-align: center;
}
.login_input {
    background: #ffffff1a;
    border-radius: 10px;
    border: none;
    border-radius: 16px;
    color: #d0d0d0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    padding: 15px 20px;
}
.cont {
    padding: 130px 152px;
    background: #1a1825;
    border-radius: 30px;
    box-shadow: 0 0 35px #00000026;
    position: relative
    ;
}
.modal_footer {
    align-items: center;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    gap: 5px;
    justify-content: center;
    line-height: normal;
    text-align: center;
}
.modal_footer p {
    color: #d0d0d0 !important;

}
.modal_footer button {
    font-weight: 900;
}
.close {
    width: 20px;
    height: 20px;
}
.close_login {
    background: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    height: 30px;
    margin-left: auto;
    position: absolute;
    right: 2%;
    top: 2%;
    width: 30px;
}
 .option_list {
    align-items: flex-start;
    background: #301c44;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 0px 40px 0px 40px ;
     top: 50px;
    right: 0;
    position: absolute;
    width: max-content;
    z-index: 1111;
}
.flags{
    display: flex;
    flex-direction: column;
}
.ru_en {
    display: flex;
    gap: 5px;
}
.ru_en img{
    object-fit: contain;
}
@media screen and (max-width: 1200px) {
    .nav{
        display: none;
    }
  
   
}

</style>