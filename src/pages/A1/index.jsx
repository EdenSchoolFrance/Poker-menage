import { useState } from "react"

import Main from "../../components/Main";
import H1 from "../../components/H1";
import Student from "../../components/Student";

import { STUDENTS } from "./data";

function Page() {
  const [selectedStudents, setSelectedStudents] = useState(Array.from(STUDENTS))

  function isStudentAvailable(student) {
    return selectedStudents.some(s => s === student)
  }

  function onSelectedStudent(selectedStudent) {
    let newSelectedStudents = []

    if (isStudentAvailable(selectedStudent)) {
      newSelectedStudents = selectedStudents.filter(student => student !== selectedStudent)
    } else {
      newSelectedStudents = [...selectedStudents, selectedStudent]
      console.log("Bar")
    }

    setSelectedStudents(newSelectedStudents)
  }

  return (
    <Main>
      <div className="w-6/12">
        <H1 css="mb-20" content="Bienvenue chez les A1" />
        <ul className="grid grid-cols-4 gap-4">
          {STUDENTS.map((student) => (
            <Student
              key={student}
              name={student}
              onClick={() => onSelectedStudent(student)}$
              isAvailable={isStudentAvailable(student)}
            / >
          ))}
        </ul>
      </div>
    </Main>
  );
}

export default Page;
