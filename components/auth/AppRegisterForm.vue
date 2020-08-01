<template>
  <form class="register-form">
    <p class="register-form__title">Регистрация</p>
    <i class="register-form__icon ti-user"></i>

    <div>
      <p>E-mail</p>
      <input type="text" v-model="email">
    </div>
    <div>
      <p>Password</p>
      <input type="text" v-model="password">
    </div>

    {{email}} --- {{password}}


    <app-button
      size16px
      uppercase
      center
      mt20
      mb20
      @click.native.prevent="createUser()"
    >Создать аккаунт</app-button>

    <p class="register-form__question">
      Уже есть аккаунт?
      <span
        class="question__action-btn"
        @click="changeForm('login')"
      >Войти.</span>
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
      email: '',
      password: ''
    }
  },
  methods: {
    changeForm (activeForm) {
      this.$store.commit('auth/setAuthAcitveForm', activeForm)
    },
    async createUser () {
      try {
        const newUser = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('auth/createUser', newUser)
        this.$router.push('/profile')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.register-form {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  .register-form__title {
    // border: 1px solid red;
    text-align: center;
    font-size: 26px;
  }
  .register-form__icon {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }
  .register-form__question {
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
