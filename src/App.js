function App() {
  return (
    <div className="bg-slate-800 h-screen flex justify-center items-center flex-col">
      <h1 className="text-6xl text-slate-500 font-bold">
        Increment/Decrement counter
        <span className="block text-center mt-12 text-3xl font-semibold">
          using React & Redux
        </span>
      </h1>

      <div className="flex items-center justify-center gap-2 bg-slate-500 mt-14 p-[0.4rem] rounded">
        <button
          className="px-8 py-4 flex items-center justify-center text-blue-900 text-4xl font-bold hover:bg-slate-700 hover:text-slate-200 rounded"
          title="Decrement"
        >
          -
        </button>
        <input
          type="text"
          className="py-4 bg-slate-300 flex items-center justify-center rounded text-4xl font-semibold text-slate-700 w-fit max-w-[5rem] text-center border-none outline-none"
          value="0"
        />
        <button
          className="px-8 py-4 flex items-center justify-center text-blue-900 text-4xl font-bold hover:bg-slate-700 hover:text-slate-200 rounded"
          title="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
