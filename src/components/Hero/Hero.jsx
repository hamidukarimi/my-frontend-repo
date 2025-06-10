const BASE_URL = import.meta.env.VITE_BASE_URL;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const stories = [
    {
      profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
      name: "Hamid Karimi",
    },
    {
      profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
      name: "Ahmad Khan",
    },
    {
      profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
      name: "Omar Ahmadi",
    },
    {
      profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
      name: "Neha Omma",
    },
    {
      profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
      name: "Ahmad Khan",
    },
  ];

  return (
    <div>
      <div className="px-5 mt-6">
        <input
          className="w-full pl-5 pr-14 py-2  rounded-lg  text-2xl bg-[#f1f2f4] border border-gray-800 outline-none"
          placeholder="Search here"
        />
      </div>

      <section className="m-4 flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-[75px]">
          <div className="flex justify-center items-center text-3xl text-gray-600 w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <p className="text-center truncate mt-1 text-gray-800 text-sm">
            Your Story
          </p>
        </div>

        {stories.map((story, index) => (
          <div key={index} className="w-[75px] ">
            <div className="w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={story.profilePicture}
              />
            </div>
            <p className="truncate mt-1 text-center text-gray-800 text-sm">
              {story.name}
            </p>
          </div>
        ))}
      </section>

      <div className="bg-placeholderColor w-full h-[203px] overflow-hidden   mt-7 mb-5">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/90/bb/25/90bb25f9ba49d000185f014a7daee676.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
