<template>
</template>

<script>
export default {
  layout: 'empty',
  middleware: ['userAuth'],
  beforeCreate () {
    this.$router.push('/auth/login')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
</style>
