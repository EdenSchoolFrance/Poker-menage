function Component({ content, css }) {
  return (
    <h1 className={`text-center text-3xl font-bold text-white ${css}`}>
      {content}
    </h1>
  );
}

export default Component;
