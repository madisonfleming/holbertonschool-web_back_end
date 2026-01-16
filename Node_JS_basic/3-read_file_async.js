const fs = require('fs').promises;

module.exports = async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data.trim().split('\n').slice(1).filter(Boolean);
    let output = `Number of students: ${students.length}`;

    const fields = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      fields[field] = fields[field] || [];
      fields[field].push(firstname);
    });
    Object.entries(fields).forEach(([field, names]) => {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    });
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
