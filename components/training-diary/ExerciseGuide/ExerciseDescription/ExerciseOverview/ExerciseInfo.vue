<template>
  <div class="exercise-info">
    <div class="exercises-info__item">
      <p class="item__title">Группа мышц:</p>
      <p class="item__value">Квадрицепсы</p>
    </div>
    <div class="exercises-info__item">
      <p class="item__title">Тип упражнения:</p>
      <p class="item__value">Базовое</p>
    </div>
    <div class="exercises-info__item">
      <p class="item__title">Дополнительные мышцы:</p>
      <p class="item__value">Абдукторы, Аддукторы, Бедра, Икры</p>
    </div>
    <div class="exercises-info__item">
      <p class="item__title">Вид упражнения:</p>
      <p class="item__value">Плиометрическое</p>
    </div>
    <div class="exercises-info__item">
      <p class="item__title">Оборудование:</p>
      <p class="item__value">Другое</p>
    </div>
    <div class="exercises-info__item">
      <p class="item__title">Уровень сложности:</p>
      <p class="item__value">
        <i class="ti-crown"></i>
        <i class="ti-crown"></i>
        <i class="ti-crown"></i>
        <i class="ti-crown"></i>
        <i class="ti-crown"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.exercise-info {
  flex: 1 1 auto;
  padding: 10px 20px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .exercises-info__item {
    display: flex;
    margin-bottom: 10px;
    .item__title {
      font-weight: 500;
    }
    .item__value {
      margin-left: 10px;
    }
  }
  .exercises-info__item:last-child {
    margin-bottom: 0;
  }
}

</style>