import { useState, useEffect } from "react";
// import Students from './Components/AllStudents'

import { Container } from "react-bootstrap";
import AllStudents from "../components/AllStudents";
import NameSearch from "../components/NameSearch";
import TagSearch from "../components/TagSearch";
import { fetchStudents } from "../utils/studentsApi";

function Home() {
  const [studentInfo, setStudentInfo] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentTag, setStudentTag] = useState("");

  useEffect(() => {
    fetchStudents(
      "https://api.hatchways.io/assessment/students",
      setStudentInfo
    );
  }, []);

  function nameSearch(nameString) {
    if (nameString && nameString.toLowerCase) {
      nameString = nameString.toLowerCase();
    }
    let filteredNames = [];
    studentInfo.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

      if (!nameString || fullName.includes(nameString)) {
        filteredNames.push(student);
      }
    });
    return filteredNames;
  }

  function studentTagCreator(student, addedTag) {
    student.tags.push(addedTag);

    const studentIndex = studentInfo.findIndex((stu) => stu.id === student.id);
    const updatedstudentInfo = [
      ...studentInfo.slice(0, studentIndex),
      student,
      ...studentInfo.slice(studentIndex + 1),
    ];
    setStudentInfo(updatedstudentInfo);
  }

  function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }
    let arrAverage = sum / arr.length;
    return arrAverage;
  }

  function tagSearch(tagInput) {
    if (tagInput && tagInput.toLowerCase()) {
      tagInput = tagInput.toLowerCase();
    }

    let studentTagsArr = [];
    studentInfo.forEach((student) => {
      let tagExists = false;
      student.tags.forEach((t) => {
        if (t.toLowerCase().includes(tagInput)) {
          tagExists = true;
        }
      });
      if (!tagInput || tagExists) {
        studentTagsArr.push(student);
      }
    });
    return studentTagsArr;
  }

  const studentsFilteredByName = nameSearch(studentName);
  const tagsFilteredByStudent = tagSearch(studentTag);
  const mergedFilter = [];

  studentsFilteredByName.forEach((student) => {
    if (tagsFilteredByStudent.includes(student)) {
      mergedFilter.push(student);
    }
  });

  return (
    <>
      <Container className='my-2'>
        <h1>Bot University</h1>
        <NameSearch nameSearch={setStudentName} />
        <TagSearch tagSearch={setStudentTag} />

        <AllStudents
          students={mergedFilter}
          getAverage={getAverage}
          studentTagCreator={studentTagCreator}
        />
      </Container>
    </>
  );
}

export default Home;
