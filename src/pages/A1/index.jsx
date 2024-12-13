import { NavLink } from "react-router";
import { useState } from "react";

import GoBackButton from "../../components/GoBackButton"
import H1 from "../../components/H1";
import Main from "../../components/Main";
import Student from "../../components/Student";

import { shuffleArray } from "../../utils/shuffleArray";

import { STUDENTS, TASKS } from "./data";

function Page() {
  const [selectedStudents, setSelectedStudents] = useState(
    Array.from(STUDENTS),
  );
  const [assignedStudents, setAssignedStudents] = useState([]);

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
    const shuffledStudents = shuffleArray([...selectedStudents]);
    const shuffledTasks = shuffleArray([...TASKS]);

    const assignments = shuffledTasks.map((task, index) => ({
      student: shuffledStudents[index],
      task: task,
    }));

    console.log("Les étudiants sélectionnés sont : ", assignments);
    setAssignedStudents(assignments);
  }

  if (assignedStudents.length) {
    return (
      <Main>
        <div className="w-6/12">
          <GoBackButton />
          <H1 css="mb-20" content="Et les nominés sont ..." />
          <ul>
            {assignedStudents.map((assignedStudent) => (
              <li key={assignedStudent.student}>
                Qui ? {assignedStudent.student}
                <br />
                Quoi ? {assignedStudent.task}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setAssignedStudents([])}
            className="border-2 border-white mx-auto block py-2 px-4 rounded-lg text-white font-bold"
          >
            Modifier les participants
          </button>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="w-6/12">
        <GoBackButton />
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
        <button
          onClick={onChooseStudents}
          className="border-2 border-supernova bg-lucky-point mx-auto block py-4 px-6 rounded-lg text-white font-bold"
        >
          Lancer le tirage au sort
        </button>
      </div>
    </Main>
  );
}

export default Page;
