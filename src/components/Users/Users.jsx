import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackNav from '../backNav/BackNav';

const Users = () => {
  // Static user data with local profile images
  const users = [
    {
      id: 1,
      path: "/user-profile/6845d1763eff9c431ed30275",
      name: 'Hamid Karimi',
      username: 'hamidukarimi',
      avatar: `https://i.ibb.co/VWgZ1q2v/fcc38fb93f62.jpg`,
      bio: 'Full-stack Developer',
      isVerified: true,
      isOnline: true
    },
    {
      id: 2,
      path: "/user-profile/6847f90c8f6abb44ef7f43c8",
      name: 'Zakirullah Aminy',
      username: 'aminyzakir',
      avatar: 'https://i.ibb.co/4R847dWs/15e92ca7f743.png',
      bio: 'Front-End Developer',
      isVerified: false,
      isOnline: true
    },
    {
      id: 3,
      name: 'Hamas Hakimi',
      username: 'hamas_hakimi_afg',
      avatar: 'https://i.ibb.co/VcKYXbtW/Screenshot-111.png',
      bio: 'Front-End Developer',
      isVerified: true,
      isOnline: true
    },
    {
      id: 4,
      name: 'Abdul Tawab Samadzai',
      username: 'tawab_samadzai12',
      avatar: 'https://i.ibb.co/cXygBgpV/d90b56b935b4.jpg',
      bio: 'Full-stack Developer',
      isVerified: false,
      isOnline: false
    },
    {
      id: 5,
      name: 'Nasratullah Bakhtyari',
      username: 'nasratullah05',
      avatar: 'https://i.pinimg.com/736x/47/a3/9f/47a39fa42af9266c97f4b778624533c1.jpg',
      bio: 'No Bio',
      isVerified: false,
      isOnline: true
    },
    {
      id: 6,
      name: 'Faisal Mohammadi',
      username: 'mfaisal_001',
      avatar: 'https://i.pinimg.com/736x/49/d2/1e/49d21e0462c4808778bc6c9c2f724eb7.jpg',
      bio: 'UI/UX Designer',
      isVerified: false,
      isOnline: false
    },
    
    {
      id: 7,
      name: 'Abubakr Ezam',
      username: 'ezam004',
      avatar: 'https://i.ibb.co/9Hx54KCV/Screenshot-20250610-173121-Gallery.jpg',
      bio: 'No Bio',
      isVerified: false,
      isOnline: false
    },
    {
      id: 8,
      name: 'Jamshid Ahmadi',
      username: 'jahmadi107',
      avatar: 'https://i.pinimg.com/736x/24/0b/9a/240b9a88fcc0652927107d8bdf315229.jpg',
      bio: 'No Bio',
      isVerified: false,
      isOnline: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
    <BackNav pageName="Users"/>
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-black mb-2">Users</h1>
          <p className="text-gray-600">Find and Connect with our users</p>
        </motion.div>

        {/* Users Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {users.map((user) => (
            <motion.div
              key={user.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      {user.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h3 className="font-semibold text-black">{user.name}</h3>
                        {user.isVerified && (
                          <FontAwesomeIcon className='text-blue-500 text-xs ml-1' icon={faCircleCheck}/>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">@{user.username}</p>
                    </div>
                  </div>
                </div>

                {/* Bio Section - Redesigned */}
                <div className="mb-4">
                  {user.bio !== 'No Bio' ? (
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-sm text-gray-700">{user.bio}</p>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <p className="text-sm text-gray-400 italic">No bio provided</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.bio.includes('Full-stack') ? 'bg-purple-100 text-purple-800' :
                    user.bio.includes('Front-End') ? 'bg-blue-100 text-blue-800' :
                    user.bio.includes('UI/UX') ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user.bio === 'No Bio' ? 'Unknown' : user.bio.split(' ')[0]}
                  </span>
                  <span className="text-gray-500">{user.isOnline ? 'Online' : 'Offline'}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 px-5 py-3 bg-gray-50">
                <Link to={user.path}>
                  <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
                  View Profile
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Users;