import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/Head'
import Layout from '../../components/Layout'
export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title>First Blog</title>
            </Head>
            <h1>First Post</h1>
            <Image src="/images/profile.jpg" height={144} width={144}/>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}