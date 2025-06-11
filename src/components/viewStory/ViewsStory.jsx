import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react"; // modern close icon

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ViewStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/stories/${id}`);
        setStory(response.data);
      } catch (err) {
        setError("Failed to load story.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!story) return <p className="p-4">Story not found.</p>;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-all">
      {/* Header (User info and close button) */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <div className="text-white flex items-center gap-2">
          <img
            src={story.user?.profilePicture}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
          <div>
            <p className="font-semibold">{`${story.user?.name} ${story.user?.lastName}` || "Unknown User"}</p>
            <p className="text-xs text-gray-300">
              {new Date(story.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
        >
          <X size={24} />
        </button>
      </div>

      {/* Story Image */}
      {story.imagePath && (
        <img
          src={story.imagePath}
          alt="Story"
          className="max-w-[95%] max-h-[90%] rounded-xl object-cover shadow-lg"
        />
      )}
    </div>
  );
};

export default ViewStory;