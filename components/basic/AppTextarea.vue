<template>
  <div class="textarea">
    <p class="textarea__title">Короткое описание</p>
    <textarea class="textarea__value-field">Текст внутри textarea</textarea>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.textarea {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // margin-bottom: 10px;
  flex: 1 1 auto;
  .textarea__title {
    // border: 1px solid red;
    padding: 0 10px;
    margin-bottom: 5px;
    min-width: 200px;
    font-size: 14px;
    font-weight: 500;
  }
  .textarea__value-field {
    flex: 1 1 auto;
    padding: 5px 10px;
    min-height: 80px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    color: $black;
    font-family: $fontMontserrat;
    font-size: 14px;
    resize: none;
    outline: none;
    transition: $tr-02;
  }
  .textarea__value-field:focus {
    border: 1px solid $green;
  }
}

</style>