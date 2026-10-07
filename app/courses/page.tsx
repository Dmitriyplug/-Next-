import Link from 'next/link';

interface Course {
    id: string;
    title: string;
}

export default function CoursesPage() {
    const courses: Course[] = [
        { id: 'nextjs-basics', title: 'Основы Next.js' },
        { id: 'typescript-pro', title: 'TypeScript для профи' },
        { id: 'react-deep', title: 'React: глубокое погружение' },
    ];

    return (
        <div>
            <h1>Курсы</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <Link href={`/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
