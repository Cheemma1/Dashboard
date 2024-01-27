const Progress = () => {
  return (
    <div className="bg-white p-4 h-fit mt-4 ">
      <div className="flex items-center justify-between ">
        <p>Top Platform</p>
        <p className="text-green-500">See All</p>
      </div>
      <div className="flex flex-col gap-6 pt-2 pb-2">
        <div>
          <h1 className="pb-2">Book Bazzar</h1>
          <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-purple-500"></div>
          </div>
          <div className="flex items-center justify-between gap-8 pt-2">
            <p>$25,00000</p>
            <p>+15%</p>
          </div>
        </div>
        <div>
          <h1 className="pb-2">Book Bazzar</h1>
          <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500"></div>
          </div>
          <div className="flex items-center justify-between gap-8 pt-2">
            <p>$25,00000</p>
            <p>+15%</p>
          </div>
        </div>
        <div>
          <h1 className="pb-2">Book Bazzar</h1>
          <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/4 bg-orange-500"></div>
          </div>
          <div className="flex items-center justify-between gap-8 pt-2">
            <p>$25,00000</p>
            <p>+15%</p>
          </div>
        </div>
        <div className="">
          <h1 className="pb-2">Book Bazzar</h1>
          <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden ">
            <div className="absolute top-0 left-0 h-full w-1/6 bg-red-500"></div>
          </div>
          <div className="flex items-center justify-between gap-8 pt-2">
            <p>$25,00000</p>
            <p>+15%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
