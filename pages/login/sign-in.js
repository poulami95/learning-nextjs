import Head from "next/head"
import loginStyles from "../../styles/login.module.css"

export default function Signin(){
    return(<div>
            <Head>
                <title>Sign In</title>
            </Head>
            <div className={loginStyles.container}>
            <p>
                Sign In Will Happen here
            </p>
            </div>
           </div>  
    ) 
}