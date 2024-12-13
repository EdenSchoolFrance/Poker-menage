import StudentsSelection from "../../containers/StudentsSelection";

import { A1_STUDENTS } from "../../data/students";
import { TASKS } from "../../data/tasks";

function Page() {
  return (
    <StudentsSelection
      classroom="A1"
      studentsClass={A1_STUDENTS}
      tasks={TASKS}
    />
  );
}

export default Page;
