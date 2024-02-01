<template>
  <div>
    <div class="h-screen w-screen flex flex-row overflow-x-hidden">
      <div class="flex-auto w-1/5 h-screen bg-sch p-4">
        <div class="w-full h-full bg-old rounded"></div>
      </div>
      <div class="flex flex-col h-screen w-full bg-sch">
        <div class="flex-auto w-full h-1/5 p-4">
          <div class="w-full h-full bg-old rounded"></div>
        </div>
        <div class="flex-auto w-full h-3/5 p-4">
          <div class="w-full h-full bg-old rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>



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