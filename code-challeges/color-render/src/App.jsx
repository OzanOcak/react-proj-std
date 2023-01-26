const Box = ({ name, hex }) => {
  return (
    <div style={{ background: hex }} className={`h-15 w-15 ml-5 px-3 py-6`}>
      {name}
    </div>
  );
};

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

function App() {
  return (
    <div className="flex">
      {colors.map((color) => {
        return <Box name={color.name} hex={color.hex} key={color.hex} />;
      })}
    </div>
  );
}

export default App;
