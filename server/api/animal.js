import { firestore } from '../utils/firebase';

export default defineEventHandler(async event => { 
    const ref = firestore.doc(`user/user1`);
    const snapshot = await ref.get();
    const data = snapshot.data();
    return data;
})