<script setup>
    import { doc, onSnapshot, updateDoc } from "firebase/firestore";

    // Server Side
    const { data } = useFetch('/api/animal');

    // Client Side
    onMounted(async () => {
        const { firestore } = useFirebase();
        const docRef = doc(firestore, 'user', 'user1');
        
        onSnapshot(docRef, (snap) => {
            data.value = snap.data();
        });
    });

    /*idk function async () => {
        const { firestore } = useFirebase();
        const docRef = doc(firestore, 'user', 'user1');

        await updateDoc(docRef, {
            name: 'I da king of', 
        });
    }*/
</script>


<template>
  <div>
    <login @login="handleLogin"></login>
  </div>
</template>

<script>
import Home from './home';
import Login from './login';
import data from '@/data/data.json'
import cookie from '@/data/cookie.json'

export default {
  components: {
    Home,
    Login
  },
  methods: {
    handleLogin(formData) {
      let { name, password } = formData;
      console.log('Form Data in AnotherPage:', name, password);

      if (!cookie.name){
        cookie.name = name;
      };
      if (!cookie.password){
        cookie.password = password;
      };
      console.log(cookie.name, cookie.password);
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
