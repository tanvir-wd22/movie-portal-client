const Spinner = () => {
  return (
    <div className="flex justify-center items-center my-6">
      <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </div>
  );
};

export default Spinner;
