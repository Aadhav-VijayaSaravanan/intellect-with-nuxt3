<template>
  <div>
    <div class="w-screen h-screen bg-sch">
      <div class="grid grid-cols-4 grid-rows-3 w-full h-full gap-4 p-4">
        <div class="bg-old col-span-2 row-span-2 rounded-md drop-shadow-xl"></div>
        <div class="bg-whi col-span-2 row-span-1 rounded-md drop-shadow-xl p-4 grid grid-rows-6 grid-cols-4">
          <h1 class="c3 text-sch text-4xl select-none row-span-1 col-span-4 w-full h-full drop-shadow-xl">Good evening, Aadhav!</h1>
          <div class="bg-lie row-span-5 col-span-3 mr-4 rounded-lg border-4 border-sch drop-shadow-xl"></div>
          <div class="bg-lie row-span-5 col-span-1 rounded-lg border-4 border-sch drop-shadow-xl"></div>
        </div>
        <div class="bg-rot col-span-2 row-span-2 rounded-md drop-shadow-xl"></div>
        <div class="bg-rot rounded-md drop-shadow-xl"></div>
        <div class="bg-lie rounded-md drop-shadow-xl">
          <div class="p-4 grid grid-cols-1 grid-rows-6 w-full h-full">
            <div class="col-span-1 row-span-5"></div>
            <div class="col-span-1 row-span-1 flex items-end">
              <h1 class="c3 text-4xl text-sch">C o u r s e s</h1>
              <div class="rounded-full bg-transparent w-10 h-10 flex items-center justify-center ml-auto my-auto border-4 border-sch">
                <button class="text-sch c3 text-3xl">></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

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