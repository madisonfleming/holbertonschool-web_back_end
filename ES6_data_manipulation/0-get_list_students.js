export default function getListStudents() {
    const students = [];
    const stud1 = { id: 1, firstName: "Guillaume", location: "San Francisco" };
    students.push(stud1);
    const stud2 = { id: 2, firstName: "James", location: "Columbia" };
    students.push(stud2);
    const stud3 = { id: 5, firstName: "Serena", location: "San Francisco" };
    students.push(stud3);
    return students
}
