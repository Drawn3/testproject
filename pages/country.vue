<template>
  <div class="container" >
    <div class="left">
      <ul v-for="country in manipulationCountry" :key="country.name">
        <li>{{country.name}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button"  :index="index" @click="openModal(1)">
          Регион
        </button>
        <button class="btn btn-secondary dropdown-toggle" type="button" :index="index" @click="openModal(2)">
          Валюта
        </button>
        <button class="btn btn-secondary dropdown-toggle" type="button" :index="index" @click="openModal(3)">
          Язык
        </button>
      </div>
      <button type="submit" class="btn btn-primary" @click="logout()">Выйти</button>
    </div>
    <div class="clear"></div>
    <div class="modal-window" v-bind:class="{'active': isActive}">
      <div class="wrap" v-if="index == 1">
          <div v-for="(country, index) of regions" :key="index" class="name-list">
            <input type="checkbox" v-model="checkRegion" v-bind:value="country">
            <span>{{country}}</span>
          </div>
      </div>
      <div class="wrap" v-else-if="index == 2">
          <div v-for="(country, index) of currencies" :key="index" class="name-list">
            <input type="checkbox" v-model="checkCurrencies" v-bind:value="country">
            <span>{{country}}</span>
          </div>
      </div>
      <div class="wrap" v-else>
          <div v-for="(country, index) of languages" :key="index" class="name-list">
            <input type="checkbox" v-model="checkLanguages" v-bind:value="country">
            <span>{{country}}</span>
          </div>
      </div>
      <div>
        <span class="overflow">{{watch}}</span>
      </div>
      <button type="button" class="btn btn-primary" @click="closeModal()">
        Отмена
      </button>
      <button type="button" class="btn btn-primary" @click="checkBox()">
        ОК
      </button>   
    </div>
  </div>
</template>

<script>

export default {
  components:{
  },
  data: () => {
    return {
      countries: [],
      checkRegion: [],
      checkCurrencies: [],
      checkLanguages: [],
      currenciesArray: [],
      regionArray: [],
      languagessArray: [],
      hi: [],
      watch: '',
      isActive: false,
      index: null,
    }
  },
  head(){
    return {
      title: 'Города'
    }
  },
  async asyncData({$axios}){
    try{
      const countries = await $axios.$get('https://restcountries.eu/rest/v2/all')
      return {countries}
      }catch(e){
        console.log(e)
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('authenticated/logout')
      this.$router.push('/')
      sessionStorage.clear()
    },
    checkBox(){
      this.isActive = !this.isActive
      this.watch = [...this.checkRegion,...this.checkCurrencies,...this.checkLanguages].join()
    },
    closeModal(){
       this.isActive = !this.isActive
    },
    openModal(index){
      this.isActive = !this.isActive
      this.index = index
    },
  },
  computed:{
    currencies(){
        this.countries.map((item) =>{
            return this.currenciesArray.push(item.currencies[0].name)
        })
        let result = Array.from(new Set(this.currenciesArray))
        return result 
    },
    regions(){
        this.countries.map((item) =>{
            return this.regionArray.push(item.region)
        })
        let result = Array.from(new Set(this.regionArray))
        return result 
    },
    languages(){
        this.countries.map((item) =>{
            return this.languagessArray.push(item.languages[0].name)
        })
        let result = Array.from(new Set(this.languagessArray))
        return result 
    },
    manipulationCountry(){
      if(this.checkCurrencies.length) {
         return this.countries.filter((country) => this.checkCurrencies.includes(country.currencies[0].name))
      }
      if(this.checkRegion.length) {
         return this.countries.filter((country) => this.checkRegion.includes(country.region))
      }
      if(this.checkLanguages.length) {
         return this.countries.filter((country) => this.checkLanguages.includes(country.languages[0].name))
      }
      return this.countries
    }
  },
  middleware: ['auth'],
}
</script>

<style>
.active{
  display:block !important;
}
.container{
  width: 1040px;
  margin: 30px auto;
  position: relative;
}
.overflow{
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
}
.name-list{
  display: block;
  text-align: center;
  color: #ffffff
}
.modal-window{
  display:none;
  width: 500px;
  height: 370px;
  position: absolute;
  border: 3px solid red;
  top: 0px;
  left: 0px;
  margin: 0 auto;
  bottom: 0px;
  right: 0px;
  z-index: 100;
}
.wrap{
  overflow: hidden;
  overflow-y: scroll;
  height:300px;
  background-color: gray;
  border-bottom: 1px solid red;
}
.btn{
  margin-bottom: 20px;
}
.top{
  margin-top:30px;
}
.right{
  float: right;
  width: 50%;
}
.left{
  float: left;
  width: 50%;
}
.clear{
  clear: both;
}
</style>