<template>
    <div class="notified p-5 ">
        <h2 class="mt-5">Get Notified Of any Updates&#33;</h2>
        <p>Subscribe To Our Newsletter To Be <br/>Notified About Promotion</p>
        <form>
            <div class="input-group w-50 m-auto pt-5 pb-5 " >
                <input type="email" class="form-control rounded-pill"  placeholder="Your email address..."/>
                <div class="input-group-postend buttonn">
                    <button class="input-group-text btn rounded-pill">SEND EMAIL</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.notified{
    background-image: url(../../../assets/HomePhotos/contactus.jpg);
    color: $WhiteColor;
    text-align: $HomeNotifiedTextAligh;
    h2,button{
        font:bold  "Roboto Slab",'Lucida Sans Typewriter',serif;
        letter-spacing: $HomeNotifiedLetterspace;
    }
    @media (max-width:520px) {
        h2{
            font-size: $HomeNotifiedFontSize;
        }
    }
    input:focus{
       box-shadow: $HomeNotifiedInput;
       border:$HomeNotifiedInput;
    }
    .buttonn{
        z-index: 1;
    }
    button{
        background-color: $DarkColor;
        color: $WhiteColor;
        transition: $transition;
        margin-left: $HomeNotifiedBtnMargin;
    }
    button:hover{
         background-color: $WhiteColor;
        color: $DarkColor;
        border-color:$DarkColor ;
    }
}
</style>