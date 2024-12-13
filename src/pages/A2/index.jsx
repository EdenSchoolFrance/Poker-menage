import StudentsSelection from "../../containers/StudentsSelection";

import { A2_STUDENTS } from "../../data/students";
import { TASKS } from "../../data/tasks";

function Page() {
  return (
    <StudentsSelection
      classroom="A2"
      studentsClass={A2_STUDENTS}
      tasks={TASKS}
    />
  );
}

export default Page;
