<template>
  <div class="social-btns">
    <div class="btn" @click="likeHandler()">
      <i class="ti-heart btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.like }}</p>
    </div>
    <div class="btn" @click="dislikeHandler()">
      <i class="ti-heart-broken btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.dislike }}</p>
    </div>
    <div class="btn" @click="shareHandler()">
      <i class="ti-share btn__icon"></i>
      <p class="btn__value">{{ btnsInfo.share }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnsInfo: Object
  },
  methods: {
    likeHandler () {
      this.$emit('like')
    },
    dislikeHandler () {
      this.$emit('dislike')
    },
    shareHandler () {
      this.$emit('share')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.social-btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .btn {
    display: flex;
    margin-right: 10px;
    align-items: center;
    cursor: pointer;
    .btn__icon {
      transition: $tr-02;
    }
    .btn__value {
      margin-left: 10px;
      font-weight: 600;
      transition: $tr-02;
    }
  }
  .btn:last-child {
    margin-right: 0;
  }
  .btn:hover {
    color: $green;
  }
}

</style>