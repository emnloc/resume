function Loader() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="w-3/4 bg-gray-100 rounded-3xl h-2.5 overflow-hidden">
        <div className="bg-indigo-600 h-2.5 rounded-3xl progress" style={{ width: '60%' }}></div>
      </div>
    </div>
  );
}

export default Loader;
