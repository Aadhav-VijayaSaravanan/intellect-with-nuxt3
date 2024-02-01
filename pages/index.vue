<template>
  <div>
    <login @login="handleLogin"></login>
  </div>
</template>

<script>
import Home from './home';
import Login from './login';
import data from '@/data/data.json'

export default {
  components: {
    Home,
    Login
  },
  methods: {
    handleLogin(formData) {
      let { name, password } = formData;
      console.log('Form Data in AnotherPage:', name, password);
    },
  },
}
</script>


<style scoped>
@font-face {
  font-family: 'CustomFont1';
  src: url('~/assets/fonts/light.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'CustomFont2';
  src: url('~/assets/fonts/Quick.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'CustomFont3';
  src: url('~/assets/fonts/titleQuick.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.c1 {
  font-family: 'CustomFont1', monospace;
}

.c2 {
  font-family: 'CustomFont2', monospace;
}

.c3 {
  font-family: 'CustomFont3', monospace;
}
</style>
