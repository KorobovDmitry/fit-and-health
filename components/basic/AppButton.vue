<template>
  <div
    class="btn-wrapper"
    :class="[
      {'align-left': left},
      {'align-right': right},
      {'align-center': center},
      {'mt10': mt10},
      {'mt20': mt20},
      {'mb10': mb10},
      {'mb20': mb20},
    ]"
  >
    <button
      class="btn"
      :class="[
        {'text-uppercase': uppercase},
        {'size14px': size14px},
        {'size16px': size16px},
        {'size18px': size18px},
        {'fill-area': fillArea}
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    left: Boolean,
    right: Boolean,
    center: Boolean,
    uppercase: Boolean,
    size14px: Boolean,
    size16px: Boolean,
    size18px: Boolean,
    fillArea: Boolean,
    mt10: Boolean,
    mt20: Boolean,
    mb10: Boolean,
    mb20: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.btn-wrapper {
  border: 1px solid red;
  display: flex;
  align-items: center;
  // user-select: none;
}
.btn {
  padding: 10px 20px;
  background: $green;
  color: $white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  outline: none;
  user-select: none;
  transition: $tr-01;
}
.btn:hover {
  box-shadow: $btnHoverShadow;
}
.btn:active {
  box-shadow: $btnActiveShadow;
}

.align-left {
  justify-content: flex-start;
  margin-right: auto;
}
.align-right {
  justify-content: flex-end;
  margin-left: auto;
}
.align-center {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.fill-area {
  width: 100%;
}

.text-uppercase {
  text-transform: uppercase;
}

.size14px {
  padding: 8px 16px;
  font-size: 14px;
}
.size16px {
  padding: 10px 20px;
  font-size: 16px;
}
.size18px {
  padding: 14px 24px;
  font-size: 18px;
}

.mt10 {
  margin-top: 10px;
}
.mt20 {
  margin-top: 20px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb20 {
  margin-bottom: 20px;
}

</style>
