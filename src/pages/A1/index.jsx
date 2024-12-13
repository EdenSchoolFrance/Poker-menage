import { NavLink } from "react-router";
import { useState } from "react";

import Main from "../../components/Main";
import H1 from "../../components/H1";
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
          <NavLink className="text-white text-lg mb-8 block" to="/">
            Revenir à l'accueil
          </NavLink>
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
        <NavLink className="text-white text-lg mb-8 flex gap-3 items-center" to="/">
          <svg
            fill="#FFF"
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
          </svg>
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
        <button
          onClick={onChooseStudents}
          className="border-2 bg-indigo-700 mx-auto block py-2 px-4 rounded-lg text-white font-bold"
        >
          Lancer le tirage au sort
        </button>
      </div>
    </Main>
  );
}

export default Page;
