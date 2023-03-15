export default function Divider() {
  return (
    <div className="flex space-x-3 lg:w-80 lg:rotate-90">
      {/* Top */}
      <div className="w-1/2 flex items-center relative">
        <div className="bg-[#00A65B] w-full h-1 -mr-1 rounded-full"></div>
        <div className="relative w-max">
          <div className="bg-[#00A65B] w-6 h-6 rounded-full absolute top-1/2 -translate-y-1/2"></div>
          <div className="bg-[#00E37F] w-9 h-9 rounded-full"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-1/2 flex items-center relative">
        <div className="relative w-max">
          <div className="bg-[#00A65B] w-6 h-6 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></div>
          <div className="bg-[#00E37F] w-9 h-9 rounded-full"></div>
        </div>
        <div className="bg-[#00A65B] w-full h-1 -ml-1 rounded-full"></div>
      </div>
    </div>
  );
}
