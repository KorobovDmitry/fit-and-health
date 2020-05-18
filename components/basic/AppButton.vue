<template>
  <div
    class="btn-wrapper"
    :class="[
      {'align-left': left},
      {'align-right': right},
      {'align-center': center},
      {'mt5': mt5},
      {'mt10': mt10},
      {'mt20': mt20},
      {'mb5': mb5},
      {'mb10': mb10},
      {'mb20': mb20},
      {'fill-area': fillArea}
    ]"
  >
    <button
      class="btn"
      :class="[
        {'text-uppercase': uppercase},
        {'size12px': size12px},
        {'size14px': size14px},
        {'size16px': size16px},
        {'size18px': size18px},
        {'fill-area': fillArea},
        {'btn-inverse-color': inverseColor},
        {'success-btn': successBtn},
        {'info-btn': infoBtn},
        {'warning-btn': warningBtn},
        {'danger-btn': dangerBtn}
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
    size12px: Boolean,
    size14px: Boolean,
    size16px: Boolean,
    size18px: Boolean,
    fillArea: Boolean,
    inverseColor: Boolean,
    mt5: Boolean,
    mt10: Boolean,
    mt20: Boolean,
    mb5: Boolean,
    mb10: Boolean,
    mb20: Boolean,
    successBtn: Boolean,
    infoBtn: Boolean,
    warningBtn: Boolean,
    dangerBtn: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.btn-wrapper {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  user-select: none;
}
.btn {
  padding: 10px 20px;
  background: $green;
  color: $white;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: $tr-01;
}
.btn:hover {
  box-shadow: $btnHoverShadow;
}
.btn:active {
  box-shadow: $btnActiveShadow;
}

.btn-inverse-color {
  background: $white;
  border: 1px solid $green;
  color: $green;
  font-weight: 500;
}
.btn-inverse-color:hover {
  background: $green;
  border: 1px solid transparent;
  color: $white;
  box-shadow: none;
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

.size12px {
  padding: 6px 10px;
  font-size: 12px;
}
.size14px {
  padding: 8px 14px;
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

.mt5 {
  margin-top: 5px;
}
.mt10 {
  margin-top: 10px;
}
.mt20 {
  margin-top: 20px;
}

.mb5 {
  margin-bottom: 5px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb20 {
  margin-bottom: 20px;
}

.success-btn {
  background: $green;
}
.info-btn {
  background: $blue-light;
}
.warning-btn {
  background: $yellow;
}
.danger-btn {
  background: $red;
}

</style>
