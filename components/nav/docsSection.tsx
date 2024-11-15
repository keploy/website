export default function Docs() {
  return (
    <>
      <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group cursor-pointer">
        <a href="https://keploy.io/docs">Docs</a>
        <span className="absolute text-[#666666] text-[3px] left-[.15rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      </div>
    </>
  );
}
