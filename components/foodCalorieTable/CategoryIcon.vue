<template>
  <i :class="categoryIcon"></i>
</template>

<script>
export default {
  props: {
    icon: String
  },
  computed: {
    categoryIcon () {
      switch (this.icon) {
        case 'Мясо':
          return 'ti-close'
        case 'Морепродукты':
          return 'ti-more'
        case 'Яйца, яичные продукты':
          return 'ti-more'
        case 'Молоко, молочные продукты':
          return 'ti-more'
        case 'Соя, соевые продукты':
          return 'ti-more'
        case 'Овощи, овощные продукты':
          return 'ti-info'
        case 'Зелень, травы, листья, салаты':
          return 'ti-more'
        case 'Фрукты, ягоды, сухофрукты':
          return 'ti-check'
        case 'Грибы':
          return 'ti-more'
        case 'Жиры, масла':
          return 'ti-more'
        case 'Орехи':
          return 'ti-more'
        case 'Крупы, злаки':
          return 'ti-star'
        case 'Семена':
          return 'ti-more'
        case 'Специи, пряности':
          return 'ti-pin'
        case 'Мука, продукты из муки':
          return 'ti-more'
        case 'Напитки, соки':
          return 'ti-email'
        default:
          return 'ti-more'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>