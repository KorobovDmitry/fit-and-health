<template>
  <div class="img-and-social">
    <div class="img__wrapper">
      <img
        class="img"
        src="https://cdn.imgbb.ru/community/7/74658/201602/2e5bbfb866325797fc99c79021a9b829.jpg"
        alt="training-program-img"
      />
    </div>
    <social-btns />
  </div>
</template>

<script>
import SocialBtns from '@/components/basic/SocialBtns'

export default {
  components: {
    SocialBtns
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.img-and-social {
  width: 400px;
  .img__wrapper {
    // margin-bottom: 5px;
    padding: 10px;
    width: 400px;
    // height: 342px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    overflow: hidden;
    .img {
      min-width: 380px;
      // object-fit: cover;
      border: 1px solid $blockBorder;
      border-radius: 6px;
    }
  }
  
}

</style>
