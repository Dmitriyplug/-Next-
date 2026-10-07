interface CoursePageProps {
    params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { courseId } = await params;
    return (
        <div>
            <h1>Курс: {courseId}</h1>
            <p>Описание курса с идентификатором {courseId}.</p>
        </div>
    );
}
