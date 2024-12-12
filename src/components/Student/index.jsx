function Component({ name, onClick, isAvailable }) {
  if (!isAvailable) {
    return (
      <li
        className="bg-zinc-300 text-black flex justify-center items-center py-3 cursor-pointer"
        onClick={() => onClick(name)}
      >
        {name}
      </li>
    );
  }

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
