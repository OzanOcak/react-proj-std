import { useState } from "react";

const Box = ({ cname, setBg }) => {
  // props = {cname}

  return (
    <button
      style={{ background: cname }}
      className={`px-5 py-2 mr-3 border-2 rounded-md`}
      onClick={() => setBg(cname)}
    >
      {cname}
    </button>
  );
};
const colors = [
  { id: "1", name: "blue" },
  { id: "2", name: "red" },
  { id: "3", name: "green" },
  { id: "4", name: "purple" },
];
const App = () => {
  const [bg, setBg] = useState("");
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ background: bg }}
    >
      {colors.map((color) => (
        <Box key={color.id} cname={color.name} setBg={setBg} />
      ))}
    </div>
  );
};

export default App;
