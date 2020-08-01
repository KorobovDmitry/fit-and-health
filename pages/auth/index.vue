<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <app-login-form v-if="activeForm === 'login'" />
      <app-register-form v-if="activeForm === 'register'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppLoginForm from '@/components/auth/AppLoginForm'
import AppRegisterForm from '@/components/auth/AppRegisterForm'

export default {
  name: 'auth',
  layout: 'empty',
  components: {
    AppLoginForm,
    AppRegisterForm
  },
  computed: {
    ...mapState({
       activeForm: state => state.auth.activeForm
    }),
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vars.scss';

.auth-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .auth-page__content {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-top: 60px;
    padding: 40px;
    width: 100%;
    height: 100vh;
    max-width: 1400px;
  }
}

</style>
