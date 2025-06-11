// const BASE_URL = import.meta.env.VITE_BASE_URL;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// let Stories = () => {
//   const stories = [
//     {
//       profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
//       name: "Hamid Karimi",
//     },
//     {
//       profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
//       name: "Ahmad Khan",
//     },
//     {
//       profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
//       name: "Omar Ahmadi",
//     },
//     {
//       profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
//       name: "Neha Omma",
//     },
//     {
//       profilePicture: `${BASE_URL}/uploads/hameed-1748884042411.png`,
//       name: "Ahmad Khan",
//     },
//   ];

//   return (
//     <section className="m-4 flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//       <div className="w-[75px]">
//         <Link to="/create-story">
//           <div className="flex justify-center items-center text-3xl text-gray-600 w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
//             <FontAwesomeIcon icon={faPlus} />
//           </div>
//         </Link>
//         <p className="text-center truncate mt-1 text-gray-800 text-sm">
//           Your Story
//         </p>
//       </div>

//       {stories.map((story, index) => (
//         <div key={index} className="w-[75px] ">
//           <div className="w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src={story.profilePicture}
//             />
//           </div>
//           <p className="truncate mt-1 text-center text-gray-800 text-sm">
//             {story.name}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Stories;

import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // this is for only show the loged in user stories for himself
  //   useEffect(() => {
  //     const fetchStories = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(`${BASE_URL}/api/stories`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setStories(response.data);
  //   } catch (error) {
  //     console.error("Error fetching stories:", error);
  //   }
  // };

  //     fetchStories();
  //   }, []);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${BASE_URL}/api/stories/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setStories(response.data);
      } catch (err) {
        console.error("Error fetching stories:", err);
        setError("Failed to fetch stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <section className="m-4 flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className=" w-[75px] h-[75px] bg-gray-300 animate-pulse rounded-2xl flex-shrink-0"
          ></div>
        ))}
      </section>
    );
  }

  return (
    <section className="m-4 flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="w-[75px]">
        <Link to="/create-story">
          <div className="flex justify-center items-center text-3xl text-gray-600 w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </Link>
        <p className="text-center truncate mt-1 text-gray-800 text-sm">
          Your Story
        </p>
      </div>

      {[...stories].reverse().map((story) => (
        <Link to={`/stories/${story._id}`} key={story._id}>
          <div className="w-[75px]">
            <div className="w-[75px] h-[75px] bg-placeholderColor border border-black rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={story.user?.profilePicture}
                alt="profile"
              />
            </div>
            <p className="truncate mt-1 text-center text-gray-800 text-sm">
              {`${story.user?.name} ${story.user?.lastName || ""}`}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Stories;
