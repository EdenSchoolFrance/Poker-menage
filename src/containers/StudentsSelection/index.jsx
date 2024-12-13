import { useState } from "react";

import GoBackButton from "../../components/GoBackButton";
import H1 from "../../components/H1";
import Main from "../../components/Main";
import Student from "../../components/Student";

import { shuffleArray } from "../../utils/shuffleArray";

function Container({ studentsClass, tasks, classroom }) {
  const [selectedStudents, setSelectedStudents] = useState(
    Array.from(studentsClass),
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
    const shuffledTasks = shuffleArray([...tasks]);

    const assignments = shuffledTasks.map((task, index) => ({
      student: shuffledStudents[index],
      task: task,
    }));

    setAssignedStudents(assignments);
  }

  if (assignedStudents.length) {
    return (
      <Main>
        <div className="w-6/12">
          <GoBackButton />
          <H1 css="mb-20" content="Et les nominés sont ..." />
          <table className="border-collapse table-auto w-full mb-20">
            <thead>
              <tr>
                <th className="table-elt">#</th>
                <th className="table-elt">Nom de l'étudiant</th>
                <th className="table-elt">Tâche à réaliser</th>
              </tr>
            </thead>
            <tbody>
              {assignedStudents.map((assignedStudent, index) => (
                <tr key={assignedStudent.student}>
                  <th className="table-elt">{index + 1}</th>
                  <td className="table-elt">{assignedStudent.student}</td>
                  <td className="table-elt">{assignedStudent.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <H1 css="mb-20" content={`Bienvenue chez les ${classroom}`} />
        <ul className="grid grid-cols-4 gap-4 mb-12">
          {studentsClass.map((student) => (
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

export default Container;
