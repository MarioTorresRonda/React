import Link from 'next/link' 

export default function HomePage() {
    return <>
        <h1> The News Page </h1>
        <ul>
            <li> <Link href="/news/NEXTJS"> NextJS Is A Great Framework </Link> </li>
            <li> <Link href="/news/prueba"> Something Else </Link> </li>
        </ul>
    </>
}