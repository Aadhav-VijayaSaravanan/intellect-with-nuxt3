<template>
  <div class="flex items-center justify-center min-h-screen bg-sch select-none">
    <div class="grid w-full md:w-2/3 lg:w-2/5 grid-cols-1 md:grid-cols-1 rounded h-3/4 md:h-auto grid-rows-7 select-none bg-rot drop-shadow-2xl">
      <div class="flex items-center col-span-2 md:col-span-1 row-span-2">
        <h1 class="p-4 m-4 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl c3 select-none">Login</h1>
      </div>
      <form @submit.prevent="handleSubmit" class="col-span-2 md:col-span-1 row-span-4 mx-4 md:mx-7 h-full">
        <div class="flex items-start justify-center col-span-2 row-span-1 mb-4 md:mb-8">
          <input
            v-model="name"
            type="text"
            class="p-4 border-rot w-full outline-none bg-old text-sch c3 drop-shadow-xl m-2 rounded text-xl"
            placeholder="Name"
            id="input1"
          />
        </div>
        <div class="flex items-center justify-end col-span-2 row-span-1 mb-4 md:mb-8">
          <input
            v-model="password"
            type="password"
            class="p-4 border-rot w-full outline-none bg-old text-sch c3 drop-shadow-3xl m-2 rounded text-xl"
            placeholder="Password"
            id="input2"
            ref="input1"
          />
        </div>
        <div class="col-span-2 row-span-1"></div>
        <div class="flex items-end justify-center col-span-2 row-span-1">
          <button
            class="p-4 m-2 rounded w-full md:w-full xl:w-full outline-none c3 cursor-pointer transition ease-in text-xl md:text-2xl lg:text-3xl duration-300 drop-shadow-2xl"
            id="button1"
            type="submit"
            ref="input2"
          >
            S u b m i t
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import cookieData from '~/data/cookie.json';

const name = ref('');
const password = ref('');
const userData = ref([]);

const { firestore } = useFirebase();
const collectionRef = collection(firestore, 'user');

onSnapshot(collectionRef, (querySnapshot) => {
  const users = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    user.id = doc.id;
    users.push(user);
  });
  userData.value = users;
});

const handleSubmit = async () => {
  const enteredName = name.value;
  const enteredPassword = password.value;

  const userRef = userData.value.find(user => user.name === enteredName && user.password === enteredPassword);

  if (userRef) {
    console.log('Authentication successful');
    console.log('Document ID:', userRef.id);
    console.log('User data:', userRef);

    // Update authentication status
    try {
      await updateDoc(doc(firestore, 'user', userRef.id), {
        auth: true
      });
      console.log('Authentication status updated successfully');
      setTimeout(() => {
        window.location.href = '/home';
      }, 1000);
    } catch (error) {
      console.error('Error updating authentication status:', error);
    }
  } else {
    console.log('Authentication failed');
  }
};

</script>


<style scoped>

#button1{
  background-color: #223843;
  color: #D8B4A0;
}

::placeholder {
  font-family: CustomFont3;
  color: #223843;
  font-weight:light;
  opacity: 0.6;
  
}
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
