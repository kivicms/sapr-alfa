<template>
  <div class="text-center login-container">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Пожалуйста авторизуйтесь</h1>
      <label class="sr-only" for="inputEmail">Email</label>
      <input id="inputEmail" autofocus class="form-control" placeholder="Email" required type="email" v-model="payload.email">
      <label class="sr-only" for="inputPassword">Пароль</label>
      <input id="inputPassword" class="form-control" placeholder="Пароль" required type="password" v-model="payload.password">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="login">Войти</button>
      <p class="mt-5 mb-3 text-muted">&copy; САПР-Альфа 2021</p>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      isError: false,
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    login() {
      console.log('login')
      this.$store.dispatch('login', this.payload)
          .then(() => {
            this.$router.push('/dashboard')
          })
          .catch(error => {
            console.log('Ошибка авторизации')
            console.log(error)
          })
    },
    register() {
      this.$router.push('/register')
    },
    forgot() {
      this.$router.push('/forgot')
    }
  }
}
</script>

<style scoped>
.login-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
