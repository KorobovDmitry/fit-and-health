<template>
  <div class="socila-additional-info">
    <div class="btn">
      <i class="ti-eye btn__icon"></i>
      <p class="btn__value">{{ socialAdditionalInfo.views }}</p>
    </div>
    <div class="btn" @click="commentsHandler()">
      <i class="ti-comments btn__icon"></i>
      <p class="btn__value">{{ socialAdditionalInfo.comments }}</p>
    </div>
    <div class="btn" @click="favoriteHandler()">
      <i class="ti-flag-alt-2 btn__icon"></i>
      <p class="btn__value">{{ socialAdditionalInfo.addToFavorite }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    socialAdditionalInfo: Object
  },
  methods: {
    commentsHandler () {
      this.$emit('comments')
    },
    favoriteHandler () {
      this.$emit('favorite')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.socila-additional-info {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
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