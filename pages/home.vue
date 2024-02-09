<template>
  <div>
    <div class="w-screen h-screen bg-sch">
      <div class="grid grid-cols-4 grid-rows-3 w-full h-full gap-4 p-4">
        <div class="bg-old col-span-2 row-span-2 rounded-md drop-shadow-xl"></div>
        <div class="bg-whi col-span-2 row-span-1 rounded-md drop-shadow-xl p-4 grid grid-rows-6 grid-cols-4">
          <h1 class="c3 text-sch text-4xl select-none row-span-1 col-span-4 w-full h-full drop-shadow-xl">Good evening, {{ userName }}!</h1>
          <div class="bg-lie row-span-5 col-span-3 mr-4 rounded-lg border-4 border-sch drop-shadow-xl"></div>
          <div class="bg-lie row-span-5 col-span-1 rounded-lg border-4 border-sch drop-shadow-xl"></div>
        </div>
        <div class="bg-rot col-span-2 row-span-2 rounded-md drop-shadow-xl p-4"></div>
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
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';

const userData = ref([]);
const userName = ref('');

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

const router = useRouter();

const userId = router.currentRoute.value.query.userId;

if (userId) {
  const userDocRef = doc(firestore, 'user', userId);
  getDoc(userDocRef)
    .then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        userName.value = userData.name;
        console.log('Name:', userName.value);
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.error('Error getting document:', error);
    });
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