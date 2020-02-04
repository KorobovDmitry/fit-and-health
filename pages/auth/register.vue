<template>
  <div class="auth-page">
    <div class="auth-page__content-wrapper">

      <section class="auth-page__section">
        <p class="auth-page__title">Регистрация</p>
        <i class="auth-page__icon ti-user"></i>

        <form class="auth-page__form">
          <!-- <app-input-valid
            title="Email"
            :error="registerError"
            @inputValueChanged="newUserEmail = $event"
          />
          <br>
          <app-input-valid
            title="Пароль"
            :error="registerError"
            @inputValueChanged="newUserPassword = $event"
          />
          <app-input-valid
            title="Пароль еще раз"
            :error="registerError"
          />
          <br>
          <app-input-valid
            title="Телефон"
            :error="registerError"
            @inputValueChanged="newUserPhone = $event"
          /> -->

          <div>
            <p>E-mail</p>
            <input type="text" required>
          </div>
          <div>
            <p>lastName</p>
            <input type="text" required>
          </div>
          <div>
            <p>firstName</p>
            <input type="text" required>
          </div>
          <div>
            <p>middleName</p>
            <input type="text" required>
          </div>
          <div>
            <p>birthday</p>
            <input type="text" required>
          </div>
          <div>
            <p>phoneNumber</p>
            <input type="text" required>
          </div>
          <div>
            <p>gender</p>
            <input type="text" required>
          </div>
          <div>
            <p>activity</p>
            <input type="text" required>
          </div>

          <app-button
            size16px
            uppercase
            center
            mt20
            mb20
            @click.native.prevent="createUser()"
          >Создать аккаунт</app-button>

          <p class="auth-page__question">
            Уже есть аккаунт?
            <span class="auth-page__question-action-btn" @click="toLoginPage()">Войти.</span>
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
      registerError: {
        exist: false,
        message: 'ошибки нет'
      },
      email: 'test',
      password: 'test',
      lastName: 'test',
      firstName: 'test',
      middleName: 'test',
      birthday: 'test',
      phoneNumber: 111,
      gender: 'test',
      activity: 'test'
    }
  },
  methods: {
    toLoginPage () {
      this.$router.push('/auth/login')
    },
    async createUser () {
      try {
        const newUser = {
          email: this.email,
          password: this.password,
          lastName: this.lastName,
          firstName: this.firstName,
          middleName: this.middleName,
          birthday: this.birthday,
          phoneNumber: this.phoneNumber,
          gender: this.gender,
          activity: this.activity
        }
        await this.$store.dispatch('auth/createUser', newUser)
        // this.$router.push('/')
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
