import { firestore } from '../utils/firebase';

export default defineEventHandler(async event => { 
    const collectionRef = firestore.collection('user');
    const snapshot = await collectionRef.get();
    const data = snapshot.docs.map(doc => doc.data());
    return data;
})
