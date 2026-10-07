import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <h1>Главная</h1>
            <ul>
                <li><Link href="/about">О нас</Link></li>
                <li><Link href="/blog">Блог</Link></li>
                <li><Link href="/courses">Курсы</Link></li>
            </ul>
        </main>
    );
}
