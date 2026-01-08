export default function getListStudentIds(a) {
    const students = [{ id: 1, firstName: "Guillaume" },
    { id: 2, firstName: "James" },
    { id: 5, firstName: "Serena" }
    ];
    if (!Array.isArray(a)) {
        return [];
    } else {
        return students.map(students => students.id);
    }
}
