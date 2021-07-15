import { auth, firebase } from '../../services/Firebase'

export default async function SignWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)

    return result;
}