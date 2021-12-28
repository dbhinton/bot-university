import React from "react";
import Student from "./Student";

export default function AllStudents({
  students,
  getAverage,
  studentTagCreator,
}) {
  return (
    <>
      {students.map((student) => {
        return (
          <>
            <Student
              key={"student" + student.id.toString()}
              img={student.pic}
              firstName={student.firstName.toUpperCase()}
              lastName={student.lastName.toUpperCase()}
              email={student.email}
              company={student.company}
              skill={student.skill}
              average={getAverage(student.grades)}
              grades={student.grades}
              student={student}
              studentTagCreator={studentTagCreator}
            />
          </>
        );
      })}
    </>
  );
}
