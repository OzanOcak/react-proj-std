export default function Button({ children, handleClick }) {
  return (
    <button
      placeholder="add todo..."
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-500"
    >
      {children}
    </button>
  );
}
