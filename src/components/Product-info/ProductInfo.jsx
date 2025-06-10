import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // to get post id from URL
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../header/Navbar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BackNav from "../backNav/BackNav";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductInfo = () => {
  const { id } = useParams(); // get post ID from URL like /product/:id
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/users/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError("Failed to load post data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) 
    return (
      <div className="loading_page">
        <div className="spinner"></div>
      </div>
    );
  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!post) return <p className="p-4">Post not found.</p>;

  return (
    <>
      <BackNav pageName={post.name} />
      <div className="p-4">
        {/* product image */}
        <div className="w-full h-[365px] bg-placeholderColor">
          {post.imagePath && (
            <img
              src={post.imagePath || "https://i.pinimg.com/736x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg"}
              alt={post.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <p className="text-[25px] font-bold mt-3">{post.name}</p>
        <p>{post.description}</p>

        <div className="text-[14px] mt-2 flex items-center">
          {/* Show stars based on rating if you have */}
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < 5 ? "text-yellow-500" : "text-gray-300"} // example fixed 5 stars
            />
          ))}
          <div className="flex justify-between w-full">
            <span className="ml-1">5.0</span> {/* You can replace with post.rating if available */}
            <span className="font-bold">380 sold</span> {/* Replace with dynamic if available */}
          </div>
        </div>

        <p className="text-[23px] font-bold mt-3">${post.price}</p>

        <div className="flex justify-center gap-5 my-6">
          <button className="w-[160px] h-[45px] font-bold border border-black rounded-md hover:text-[#222] transition">
            Add to cart
          </button>
          <button className="w-[160px] h-[45px] font-bold bg-black hover:bg-[#222] transition text-white border border-black rounded-md">
            Buy now
          </button>
        </div>

        <p className="text-[23px] font-semibold">Reviews</p>

        {/* Example static review — you can replace or extend with real reviews */}
        <div className="my-2">
          <p className="text-[17px]">Ahmad Khan</p>
          <div className="text-[10px]">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
            ))}
          </div>

          <p className="text-[12px] mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
