<template>
  <div class="social-btns">
      <div class="social-btn">
        <i class="ti-heart social-btn__icon"></i>
        <p class="social-btn__amount">28</p>
      </div>
      <div class="social-btn">
        <i class="ti-heart-broken"></i>
        <p class="social-btn__amount">8</p>
      </div>
      <div class="social-btn">
        <i class="ti-share"></i>
        <p class="social-btn__amount">56</p>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.social-btns {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
    padding: 10px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    .social-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      .social-btn__icon {
        font-size: 14px;
      }
      .social-btn__amount {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
</style>