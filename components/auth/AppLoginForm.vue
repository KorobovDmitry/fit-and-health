<template>
  <form class="login-form">
    <p class="login-form__title">Авторизация</p>
    <i class="login-form__icon ti-unlock"></i>
    <br>
    <input type="text" v-model="loginEmail">
    <br>
    <br>
    <input type="text" v-model="loginPassword">

    <app-button size16px uppercase center mt20 mb20 @click.native.prevent="login()">Войти</app-button>
    <p class="login-form__question">
      Забыли пароль?
      <span
        class="question__action-btn"
        @click="forgotPassword()"
      >Восстановить.</span>
    </p>

    <p class="login-form__question">Нет аккаунта?<span
      class="question__action-btn"
      @click="changeForm('register')"
    >Зарегистрироваться.</span>
    </p>
  </form>
</template>

<script>
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppButton
  },
  data () {
    return {
      loginEmail: 'test',
      loginPassword: 'test'
    }
  },
  methods: {
    changeForm (activeForm) {
      this.$store.commit('auth/setAuthAcitveForm', activeForm)
    },
    async login () {
      // добавить валидацию перед диспатчем
      try {
        const formData = {
          email: this.loginEmail,
          password: this.loginPassword
        }
        await this.$store.dispatch('auth/login', formData)
        this.$router.push('/profile')
      } catch (e) {
        console.log(e)
      }
    },
    forgotPassword () {
      console.log('forgotPassword')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.login-form {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  .login-form__title {
    // border: 1px solid red;
    text-align: center;
    font-size: 26px;
  }
  .login-form__icon {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }
  .login-form__question {
    margin-top: 10px;
    align-self: center;
    font-size: 14px;
    user-select: none;
    .question__action-btn {
      margin-left: 10px;
      color: $green;
      cursor: pointer;
    }
  }
}

</style>
