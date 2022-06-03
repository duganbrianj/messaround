import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

//this is a realtime listener

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })
    //unsubscribe from snapshots (realtime listeners)
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
        console.log('unsub from realtime listener')
    })

    return { documents, error }
}

export default getCollection