<template>
  <div class="action-btns">
      <app-button size16px uppercase class="action-btn">Убрать с основной</app-button>

      <router-link tag="a" to="training-diary/training-program-editor">
        <app-button size16px uppercase class="action-btn">Редактировать</app-button>
      </router-link>

      <router-link tag="a" to="training-diary/training-in-progress?training-programm=4-day-split">
        <app-button size16px uppercase class="action-btn">Начать тренировку</app-button>
      </router-link>
    </div>
</template>

<script>
import AppButton from "@/components/basic/AppButton.vue";

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.action-btns {
  // border: 1px solid red;
  margin-top: 10px;
  display: flex;
  min-width: 300px;
  .action-btn:first-child {
    margin-right: auto;
  }
  .action-btn:last-child {
    margin-left: 10px;
  }
}

</style>