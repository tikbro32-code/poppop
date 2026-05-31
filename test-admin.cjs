const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const app = initializeApp({
  credential: applicationDefault(),
  projectId: 'bropro-6fc56'
});
const db = getFirestore(app, 'ai-studio-63041fa0-a8fb-4903-8a8d-97827d9b7290');
db.collection('test').get().then(() => console.log('Success')).catch(e => console.error(e));
