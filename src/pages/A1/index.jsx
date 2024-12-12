import Main from "../../components/Main";
import H1 from "../../components/H1";
import Student from "../../components/Student";

import { STUDENTS } from "./data";

function Page() {
  return (
    <Main>
      <div className="w-6/12">
        <H1 content="Bienvenue chez les A1" />
        <ul className="grid grid-cols-4 gap-4">
          {STUDENTS.map((student) => (
            <Student
              key={student}
              name={student}
              onClick={() => console.log(student)}
            / >
          ))}
        </ul>
      </div>
    </Main>
  );
}

export default Page;
