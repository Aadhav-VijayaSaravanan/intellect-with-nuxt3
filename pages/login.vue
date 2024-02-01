<template>
  <div class="flex items-center justify-center w-screen h-screen bg-sch select-none">
    <div class="grid w-2/6 grid-cols-2 border-8 border-rot rounded h-3/4 grid-rows-7 select-none">
      <div class="flex items-center col-span-2 row-span-2">
        <h1 class="p-4 m-4 text-whi text-8xl c3 select-none">Login</h1>
      </div>
      <form @submit.prevent="handleSubmit" class="col-span-2 row-span-4">
        <div class="flex items-start justify-center col-span-2 row-span-1 mb-8">
          <input
            v-model="name"
            type="text"
            class="p-4 border-y-8 border-rot w-full outline-none bg-transparent text-whi c2"
            placeholder="Name"
          />
        </div>
        <div class="flex items-center justify-end col-span-2 row-span-1 mb-8">
          <input
            v-model="password"
            type="password"
            class="p-4 border-y-8 border-rot w-full outline-none bg-transparent text-whi c2"
            placeholder="Password"
          />
        </div>
        <div class="flex items-end justify-center col-span-2 row-span-1">
          <button
            class="p-4 border-y-8 border-rot w-full outline-none bg-transparent text-whi c3 cursor-pointer hover:text-sch hover:border-transparent hover:bg-old transition ease-in-out text-xl duration-300"
            type="submit"
          >
            S u b m i t
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Emit an event with the form data
      this.$emit('login', {
        name: this.name,
        password: this.password,
      });
    },
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
