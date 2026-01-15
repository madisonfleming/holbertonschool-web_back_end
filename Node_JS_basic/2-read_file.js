const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const lines = fs.readFileSync(path, 'utf8').trim().split('\n');
    const students = lines.slice(1).filter(Boolean);
    console.log(`Number of students: ${students.length}`);
    const fields = {};
    students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        fields[field] = fields[field] || [];
        fields[field].push(firstname);
    });
    Object.entries(fields).forEach(([field, names]) => {
        console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
