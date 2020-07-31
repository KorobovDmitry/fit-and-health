<template>
</template>

<script>
export default {
  name: 'auth',
  layout: 'empty',
  beforeCreate () {
    this.$router.push('/auth/login')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';
</style>
