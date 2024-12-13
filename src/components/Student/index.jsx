function Component({ name, onClick, isAvailable }) {
  if (!isAvailable) {
    return (
      <li
        className="bg-silver text-black flex justify-center items-center py-3 cursor-pointer"
        onClick={() => onClick(name)}
      >
        {name}
      </li>
    );
  }

  return (
    <li
      className="bg-white text-lucky-point flex justify-center items-center py-3 cursor-pointer"
      onClick={() => onClick(name)}
    >
      {name}
    </li>
  );
}

export default Component;
