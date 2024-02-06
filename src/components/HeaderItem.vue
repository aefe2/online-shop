<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <a class="logo" href="">MountSinai</a>
      <ul class="nav-links">
        <li class="catalog-link"><a href="">Каталог</a></li>
        <li class="cart-link"><a href="">Корзина</a></li>
        <li class="orders-link"><a href="">Заказы</a></li>
        <li class="register-link"><router-link to="/login">Авторизация</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  color: white;
  font-size: 21px;
}
header {
  //background: #222222;
  position: fixed;
  width: 100%;
}

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  backdrop-filter: blur(0.625rem);
  padding: 10px 10%;
  border-bottom: 1px solid rgb(255, 255, 255, .1);
}

li, a {
  font-weight: 500;
  color: white;
  text-decoration: none;
  list-style: none;
}

.nav-links li {
  display: inline-block;
  padding: 0 10px;
}

.nav-links li a {
  transition: all .3s ease 0s;
}

.nav-links li a:hover {
  color: #dcd8d8;
}
</style>