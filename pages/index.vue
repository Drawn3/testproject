<template>
  <div class="container-form">
    <form @submit.prevent="loginUser" class="form-wrap">
      <div class="form-group">
        <label for="Login">Логин</label>
        <input type="text" class="form-control" id="Login" v-model="login">
      </div>
      <div class="form-group">
        <label for="Password">Пароль</label>
        <input type="password" class="form-control" id="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
    </form>
  </div>
</template>

<script>

export default {
  components: {   
  },
  data () {
    return {
      login:'',
      password:''
    }
  },
  head(){
    return {
      title: 'Главная'
    }
  },
  methods: {
    loginUser(){
      const {login, password} = this
      if(login !== '' && password !== ''){
        this.$store.dispatch('authenticated/login',{
            login: login,
            password: password
        })
        sessionStorage.setItem('login', login)
        sessionStorage.setItem('password', password)
        this.$router.push('/country')
      }else{
        alert('Введите данные')
      }
    },
  }
}
</script>

<style>
html,body{
  padding: 0px;
  margin: 0px;
}
.container-form{
   display: flex;
   justify-content:center;
   align-items:center;
   height: 210px;
   max-width: 400px;
   position: absolute;
   top: calc(50% - 105px);
   left:0;
   right:0;
   margin: 0 auto;
 }
.form-wrap{
  width: 400px;
}
</style>
