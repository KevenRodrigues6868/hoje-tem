import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login(){
    const loginGoogle = async () =>{
        const provider = new GoogleAuthProvider();

        try{
            const result = await signInWithPopup(auth, provider);
            console.log("Usuário Logado:", result.user);
        }catch(error){
            console.error("Error ao logar:", error);
        }
    };

    return(
        <div>
            <h2>Login</h2>
            <button onClick={loginGoogle}> Entrar com o Google</button>
        </div>
    )
}

export default Login;