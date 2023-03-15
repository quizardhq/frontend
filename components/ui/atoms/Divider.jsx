export default function Divider() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full lg:w-max lg:h-80 lg:my-auto lg:mx-10">
      {/* Top */}
      <div className="w-full flex lg:flex-col items-center relative">
        <div className="bg-[#00A65B] w-full lg:w-1 h-1 lg:h-full -mr-1 lg:mr-0 lg:-mb-1 rounded-full"></div>
        <div className="relative w-max">
          <div className="bg-[#00A65B] w-6 h-6 rounded-full absolute top-1/2 lg:top-0 lg:left-1/2 -translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2"></div>
          <div className="bg-[#00E37F] w-9 h-9 rounded-full"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex lg:flex-col items-center relative">
        <div className="relative w-max">
          <div className="bg-[#00A65B] w-6 h-6 rounded-full absolute right-0 lg:right-1/2 bottom-1/2 lg:bottom-0 translate-y-1/2 lg:translate-y-0 lg:translate-x-1/2"></div>
          <div className="bg-[#00E37F] w-9 h-9 rounded-full"></div>
        </div>
        <div className="bg-[#00A65B] w-full lg:w-1 h-1 lg:h-full -ml-1 lg:ml-0 lg:-mt-1 rounded-full"></div>
      </div>
    </div>
  );
}
