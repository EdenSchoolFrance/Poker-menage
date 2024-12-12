import Main from "../../components/Main";
import H1 from "../../components/H1";

import { STUDENTS } from "./data"

function Page() {
  return (
    <Main>
      <div className=" w-6/12">
        <H1 content="Bienvenue chez les A1" />
        <ul className="grid grid-cols-4 gap-4">
          {
            STUDENTS.map(student => <li key={student} className="bg-slate-700 text-yellow-300 flex justify-center items-center py-3">{student}</li>)
          }
        </ul>
      </div>
    </Main>
  );
}

export default Page;
