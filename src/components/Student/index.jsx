function Component({ name, onClick }) {
  return (
    <li
      className="bg-slate-700 text-yellow-300 flex justify-center items-center py-3 cursor-pointer"
      onClick={() => onClick(name)}
    >
      {name}
    </li>
  );
}

export default Component;
