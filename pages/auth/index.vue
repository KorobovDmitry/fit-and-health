<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <app-login-form
        v-if="loginForm"
        @changeForm="loginForm = false"
      />
      <app-register-form
        v-if="!loginForm"
        @changeForm="loginForm = true"
      />
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
  data () {
    return {
      loginForm: true
    }
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
