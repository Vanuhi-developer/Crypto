<template>
    <div>
        <mainHeader/>
        <div class="card-section">
            <div class="card-section-container container">
                <leftPartMain/>
                <rightPartMain/>
            </div>
            
        </div>
        <footerPage/>
    </div>
     

</template>

<script setup>

</script>

<style scoped>

body{
    margin: auto !important;
    font-family: Golos Text, sans-serif;
}
.card-section{
    color: aliceblue;
    background: radial-gradient(50.31% 45.06% at 10.16% 91.73%, rgba(251, 21, 96, .08) 0, transparent 100%), radial-gradient(59.34% 35.83% at 93.49% 46.73%, rgba(111, 17, 237, .2) 25.5%, transparent 100%), linear-gradient(98deg, #16141f 19.74%, #100f16);
    scrollbar-width: none;
}
.card-section-container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    padding: 80px 89px 15px 200px;
    gap: 107px;
}
.light .card-section-container {
    background-color: #fff !important;
}
@media screen and (max-width: 1400px) {
    .card-section-container{
        flex-direction: column;
        gap: 15px;
    }
  
    
}

</style>