<template>
  <div class="auth-page">
    <div class="auth-page__content-wrapper">
      <section class="auth-page__section">
        <p class="auth-page__title">Авторизация</p>
        <i class="auth-page__icon ti-unlock"></i>

        <form class="auth-page__form">
          <app-input-text-valid
            title="Email"
            placeholder=""
            :error="emailError"
            @inputValueChanged="loginEmail = $event"
            @blur="$v.loginEmail.$touch()"
          />
          <app-input-text-valid
            title="Пароль"
            placeholder=""
            native-type="password"
            :error="passwordError"
            @inputValueChanged="loginPassword = $event"
          />

          <app-button
            size16px
            uppercase
            center
            mt20
            mb20
            @click.native.prevent="login()"
          >Войти</app-button>
          <p class="auth-page__question">
            Забыли пароль?
            <span class="auth-page__question-action-btn" @click="forgotPassword()">Восстановить.</span>
          </p>

          <p class="auth-page__question">
            Нет аккаунта?
            <span class="auth-page__question-action-btn" @click="toRegisterPage()">Зарегистрироваться.</span>
          </p>
        </form>

      </section>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import AppInputTextValid from '@/components/basic/AppInputTextValid'

export default {
  layout: 'empty',
  components: {
    AppButton,
    AppInputTextValid
  },
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  computed: {
    emailError () {
      return this.$store.getters['auth/getLoginEmailError']
    },
    passwordError () {
      return this.$store.getters['auth/getLoginPasswordError']
    }
  },
  methods: {
    toRegisterPage () {
      this.$router.push('/auth/register')
    },
    redirectToIndexPage () {
      this.$router.push('/')
    },
    async login () {
      // добавить валидацию перед диспатчем
      try {
        const formData = {
          email: this.loginEmail,
          password: this.loginPassword
        }
        await this.$store.dispatch('auth/login', formData)
        this.redirectToIndexPage()
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

.auth-page {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .auth-page__content-wrapper {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: 100%;
    height: 100vh;
    max-width: 1400px;
    .auth-page__section {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 400px;
      .auth-page__title {
        // border: 1px solid red;
        text-align: center;
        font-size: 26px;
      }
      .auth-page__icon {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 60px;
      }
      .auth-page__form {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .auth-page__question {
        margin-top: 10px;
        align-self: center;
        font-size: 14px;
        user-select: none;
      }
      .auth-page__question-action-btn {
        margin-left: 10px;
        color: $green;
        cursor: pointer;
      }
    }
  }
}

</style>
