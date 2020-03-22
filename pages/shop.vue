<template>
  <div class="container">
    <header class="header">
        <div class="left-tab">
            <div class="icons-left">
                <img src="/menu.png" alt="menu">
            </div>
            <div class="left-tab__content">
                <span>Home</span>
                <span class="active">Catalog</span>
            </div>
        </div>
        <div class="right">
            <div class="icons">
                <img src="/heart.png" alt="like">
            </div>
            <div class="icons">
                <img src="/search.png" alt="search">
            </div>
            <div class="icons">
                <img src="/down-arrow.png" alt="download">
            </div>
            <span class="filter-right">Filters</span>
        </div>
        <div class="clear"></div>
    </header>
    <section class="main-content">
        <div class="main-content__left">
            <span class="tab-active">Catalog</span>
            <span class="active-menu">Bouquets</span>
            <ul>
                <li><a href="#">Planter</a></li>
                <li><a href="#">Bouquets</a></li>
                <li><a href="#">Potted Bouquets</a></li>
                <li><a href="#">Wedding Bouquet</a></li>
                <li><a href="#">Event</a></li>
                <li><a href="#">Greeting Cards</a></li>
                <li><a href="#">Funeral train</a></li>
                <li><a href="#">Stocks</a></li>
                <li><a href="#">Novetyle</a></li>
            </ul>
        </div>
        <div class="main-content__right">
                <div class="item">
                    <img src="/first.jpg" alt="">
                    <small class="item-type">Unfogtable</small>
                    <small class="item-type__up">Unfogtable</small>
                    <div class="wrap-price">
                        <div class="price-left">
                            <span>85$</span>
                            <img src="/heart.png" alt="heart">
                        </div>
                        <div class="price-add">
                            <span>Add to cart</span>
                        </div>
                    </div>
                </div>
                <div class="filters">
                    <div class="filters-wrap">
                        <div class="filters-wrap__item">
                            <span class="active">modern</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>love</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>artistic</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>classical</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>winter</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>bright</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>luxury</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>beau</span>
                        </div>
                        <div class="filters-wrap__item">
                            <span>unique</span>
                        </div>
                    </div>
                    <div class="item-filter">
                        <img src="/first.jpg" alt="">
                        <small class="item-type">Unfogtable</small>
                        <small class="item-type__up">Unfogtable</small>
                        <div class="wrap-price">
                            <div class="price-left">
                                <span>85$</span>
                                <img src="/heart.png" alt="heart">
                            </div>
                            <div class="price-add">
                                <span>Add to cart</span>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        <div class="clear"></div>     
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style>

/****************main config****************/
html,body{
    padding: 0px;
    margin: 0px;
    background-color: #0a191e;
    color: #ffffff;
    font-family: 'Segoe UI Symbol', sans-serif;
  }
  img{
      width: 100%;
      height: auto;
  }
  .clear{
      clear: both;
  }
  /*****************main-page*******************/
  .container{
      max-width: 1600px;
      margin: 0 auto;
      text-transform: uppercase;
  }
  .header{
      padding: 20px 0px;
  }
  .main-content{
      margin-bottom: 30px;
  }
  .icons-left{
      width: 22px;
      height: 22px;
      display: inline-block;
      vertical-align: middle;
  }
  .left-tab__content{
      display: block;
      padding: 40px 0px;
  }
  .left-tab__content span.active{
      padding-left: 20px;
      color: #ffffff;
  }
  .icons{
      width: 22px;
      height: 22px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
  }
  .left-tab{
      float: left;
      width: 50%;
      text-align: left;
  }
  .right{
      float: right;
      width: 50%;
      text-align: right;
  }
  .filter-right{
      display: block;
      padding: 40px 0px;
  }
  .main-content__left{
      float: left;
      width: 30%;
      padding-top: 40px;
  }
  span.tab-active{
      font-size: 35px;
      color: #fdfdff;
      padding-bottom: 40px;
      display: block;
  }
  span.active-menu{
      font-size: 18px;
      color: #fdfdff;
      padding-bottom: 30px;
      display: block;
  }
  ul{
      list-style-type: none;
      text-align: left;
      padding: 0px;
  }
  li a{
    text-decoration: none;
    color: #56656a;
    display: block;
    padding-bottom: 20px;
    font-size: 12px;
  }
  li a:hover{
    text-decoration: none;
    color: #56656a;
  }
  .main-content__right{
      float: right;
      width: 70%;
  }
  .main-items__wrap{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
  }
  .item{
      position: relative;
      width: 433px;
      float: left;
  }
  .item-filter{
      width: 433px;
      margin-left: auto;
      position: relative;
  }
  .item-type__up {
      position:absolute;
      top: 0px;
      left: 0px;
      transform: rotate(-90deg);
  }
  .price-left img{
    width: 22px;
    height: 22px;
    margin-left: 15px;
  }
  .wrap-price{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .price-add{
    padding: 10px 50px;
    background-color: #6b010f;
    text-align: left;
    color: #ffffff;
    font-size: 12px;
    border-radius: 3px;
    width: 200px;
    position: relative;
  }
  .price-add:after{
      content: '';
      position: absolute;
      background: url('/arrow.png');
  }
  .item-type{
      display: block;
      padding: 10px 0;
  }
  .filters{
      float: right;
      width: 50%;
  }
  .filters-wrap{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
          padding-bottom: 100px;
  }
  .filters-wrap__item{
      margin-left: 15px;
      text-align: right;
      width: calc(33% - 15px);
      font-size: 12px;
      margin-bottom: 20px;
  }
  .filters-wrap__item span.active{
      color: #d8e5eb;
  }
  .filters-wrap__item span{
      color: #56656a;
      cursor: pointer;
  }

</style>