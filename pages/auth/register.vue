<template>
  <div class="auth-page">
    <div class="auth-page__content-wrapper">

      <section class="auth-page__section">
        <p class="auth-page__title">Регистрация</p>
        <i class="auth-page__icon ti-user"></i>

        <form class="auth-page__form">
          <app-input-valid
            title="Email"
            placeholder=""
            :required="true"
            :error="{exist: false, message: ''}"
          />
          <br>
          <app-input-valid
            title="Пароль"
            placeholder=""
            native-type="password"
            :required="true"
            :min-length="6"
            :error="{exist: false, message: ''}"
          />
          <app-input-valid
            title="Пароль еще раз"
            placeholder=""
            native-type="password"
            :required="true"
            :min-length="6"
            :error="{exist: false, message: ''}"
          />
        </form>

        <app-button
          size16px
          uppercase
          mb20
          @click.native.prevent="createUser()"
        >Создать аккаунт</app-button>

        <p class="auth-page__question">
          Уже есть аккаунт?
          <span class="auth-page__question-action-btn" @click="toLoginPage()">Войти.</span>
        </p>
      </section>

    </div>
  </div>
</template>

<script>
import AppButton from '@/components/basic/AppButton'
import AppInputValid from '@/components/basic/AppInputValid'
export default {
  layout: 'empty',
  components: {
    AppButton,
    AppInputValid
  },
  methods: {
    toLoginPage () {
      this.$router.push('/auth/login')
    },
    async createUser () {
      try {
        const formData = {
          email: 'test',
          password: 'test'
        }
        await this.$store.dispatch('auth/createUser', formData)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
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
    // margin-top: 60px;
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
        // justify-content: center;
        // align-items: center;
        width: 100%;
        // margin-bottom: 50px;
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
