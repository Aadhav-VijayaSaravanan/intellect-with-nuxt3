<template>
  <div>
    <div class="w-screen h-screen bg-sch">
      <div class="grid grid-cols-4 grid-rows-3 w-full h-full gap-4 p-4" v-if="showMain">
        <div class="bg-old col-span-2 row-span-2 rounded-md drop-shadow-xl"></div>
        <div class="bg-whi col-span-2 row-span-1 rounded-md drop-shadow-xl p-4 grid grid-rows-6 grid-cols-4">
          <h1 class="c3 text-sch text-4xl select-none row-span-1 col-span-4 w-full h-full drop-shadow-xl">Good evening, {{ dataData }}!</h1>
          <div class="bg-lie row-span-5 col-span-3 mr-4 rounded-lg border-4 border-sch drop-shadow-xl"></div>
          <div class="bg-lie row-span-5 col-span-1 rounded-lg border-4 border-sch drop-shadow-xl"></div>
        </div>
        <div class="bg-rot col-span-2 row-span-2 rounded-md drop-shadow-xl"></div>
        <div class="bg-rot rounded-md drop-shadow-xl">
          <div class="p-4 w-full h-full flex items-end">
            <div class="h-fit w-full relative flex justify-between">
              <h1 class="c3 text-5xl text-lie select-none w-fit">E x a m s</h1>
              <div class="arrow-container rounded-full bg-lie w-10 h-10 flex items-center justify-center border-4 border-lie" style="transform: rotate(-90deg);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-rot c3 h-8 w-8">
                  <path d="M10 12.586L14.293 8.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 12.586z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-lie rounded-md drop-shadow-xl">
          <div class="p-4 w-full h-full flex items-end">
            <div class="h-fit w-full relative flex justify-between">
              <h1 class="c3 text-5xl text-sch select-none w-fit">C o u r s e s</h1>
              <div class="arrow-container rounded-full bg-sch w-10 h-10 flex items-center justify-center border-4 border-sch" style="transform: rotate(-90deg);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-lie c3 h-8 w-8">
                  <path d="M10 12.586L14.293 8.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 12.586z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <login v-if="showLogin" @loginSuccess="done"></login>
</template>

<script>
import Login from './login.vue';
import cookieData from '~/data/cookie.json';

export default {
  components: {
    Login,
  },
  data() {
    return {
      showLogin: false,
      showMain: true,
      dataData: null,
    };
  },
  methods: {
    onLoginSuccess() {
      console.log("Login successful!");
      // Handle any logic you need after successful login
    }
  },
};
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