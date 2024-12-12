import { NavLink } from "react-router";

import Main from "../../components/Main"
import H1 from "../../components/H1"

function Page() {
  return (
    <Main>
      <div>
        <H1 content="Choisis ta classe" />
        <ul className="flex gap-4">
          <li className="border-2 border-white w-2/4 h-10">
            <NavLink
              className="nav-link"
              to="/a1"
            >
              A1
            </NavLink>
          </li>
          <li className="border-2 border-white w-2/4 h-10">
            <NavLink
              className="nav-link"
              to="/a2"
            >
              A2
            </NavLink>
          </li>
        </ul>
      </div>
    </Main>
  );
}

export default Page;
