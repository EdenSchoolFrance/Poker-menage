import { NavLink } from "react-router";
import { useState } from "react";

import Main from "../../components/Main";
import H1 from "../../components/H1";
import Student from "../../components/Student";

import { STUDENTS } from "./data";

function Page() {
  const [selectedStudents, setSelectedStudents] = useState(
    Array.from(STUDENTS),
  );

  function isStudentAvailable(student) {
    return selectedStudents.some((s) => s === student);
  }

  function onSelectedStudent(selectedStudent) {
    let newSelectedStudents = [];

    if (isStudentAvailable(selectedStudent)) {
      newSelectedStudents = selectedStudents.filter(
        (student) => student !== selectedStudent,
      );
    } else {
      newSelectedStudents = [...selectedStudents, selectedStudent];
    }

    setSelectedStudents(newSelectedStudents);
  }

  function onChooseStudents() {
    console.log("===")
    console.log("Ok, let's go!")
    console.log("===")
    
    console.log(selectedStudents)
  }

  return (
    <Main>
      <div className="w-6/12">
        <NavLink className="text-white text-lg mb-8 block" to="/">
          Revenir à l'accueil
        </NavLink>
        <H1 css="mb-20" content="Bienvenue chez les A1" />
        <ul className="grid grid-cols-4 gap-4 mb-12">
          {STUDENTS.map((student) => (
            <Student
              key={student}
              name={student}
              onClick={onSelectedStudent}
              isAvailable={isStudentAvailable(student)}
            />
          ))}
        </ul>
        <button onClick={onChooseStudents} className="border-2 border-white mx-auto block py-2 px-4 rounded-lg text-white font-bold">
          Lancer le tirage au sort
        </button>
      </div>
    </Main>
  );
}

export default Page;
