export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter((student) => student.location === city)
    .map((student) => {
        const grades = newGrades.find(
            (grade) => grade.studentId === student.id
        );
        return {
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: grades ? grades.grade : 'N/A'
        };
    });
}
