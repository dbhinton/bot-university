import axios from "axios";

async function fetchStudents(url, setInfo) {
  const { data } = await axios.get(url);
  const students = data.students;

  students.forEach((student) => {
    student.tags = [];
  });
  setInfo(students);
}

export { fetchStudents };
