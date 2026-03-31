
import PlayPng from '../../assets/play.png';
import Group from '../../assets/Group 5.png';
import BannerImg from  '../../assets/banner.png';




const Banner = () => {
      return (
    <div className="relative py-21 w-3/4 mx-auto flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">

          <div className="inline-flex  items-center gap-2 bg-purple-700/10 border
           border-purple-500/30 text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
            <img src={Group} alt="" />
             New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
           Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-lg text-gray-500 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products

          </p>

          <div className="flex flex-wrap  gap-4 pt-4">

            <button className="bg-linear-to-r font-bold from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-white">
              Explore Products
              </button>


            <button className=" hover:bg-purple-700 transition-all px-6 py-4 rounded-full font-bold text-purple-700
              flex items-center gap-3 group border hover:text-white">
              <span className="group-hover:translate-x-1 transition"> 
                <img src={PlayPng} alt="" />
              </span>
             Watch Demo
            </button>
          </div>

          
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-lg "
             src={BannerImg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Banner;