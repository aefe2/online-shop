<script setup lang="ts">

</script>

<template>
  <section>
    <div class="form-box">
      <div class="form-value">
        <form action="">
          <h2>Регистрация</h2>
          <div class="inputbox">
            <ion-icon name="id-card-outline"></ion-icon>
            <input type="text" required>
            <label for="">ФИО</label>
          </div>
          <div class="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="text" required>
            <label for="">Email</label>
          </div>
          <div class="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required>
            <label for="">Пароль</label>
          </div>
          <button>Войти</button>
          <div class="register">
            <p>Уже есть аккаунт? <router-link to="/login">Авторизация</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </section>
  <component src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" :is="'script'"></component>
  <component src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" :is="'script'"></component>
</template>

<style scoped>
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

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: url('@/assets/img/background.jpg') no-repeat;
  background-position: center;
  background-size: cover;
}

.form-box {
  position: relative;
  padding: 40px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 2em;
  color: #fff;
  text-align: center;
}

.inputbox {
  position: relative;
  margin: 30px 0;
  width: 310px;
  border-bottom: 2px solid #fff;
}

.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: .5s;
}

input:focus ~ label,
input:valid ~ label {
  top: -5px;
}

.inputbox input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color: #fff;
}

.inputbox ion-icon {
  position: absolute;
  right: 8px;
  color: #fff;
  font-size: 1.2em;
  top: 20px;
}

.forget label input {
  margin-right: 3px;

}

.forget label a {
  color: #fff;
  text-decoration: none;
}

.forget label a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
}

button:hover {
  background: #cbc6c6;
  transition: all .3s ease 0s;
}

.register {
  font-size: .9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}

.register p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.register p a:hover {
  text-decoration: underline;
}
</style>