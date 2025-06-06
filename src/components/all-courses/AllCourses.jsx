import React, { useState, useEffect } from "react";
import Header from "../header/Header";

const AllCourses = () => {
  const [courses, setCourses] = useState([
    


    {
      id: 0,
      image: "https://i.pinimg.com/236x/8b/33/79/8b337967a987f068e43f705aef7e7397.jpg",
      type: "DEVELOPMENT",
      price: "$50",
      
      title: "Full-Stack Development",
      lessons: "28",
      description:
        "Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet. Lorem ispum doler sit amet Lorem ispum doler sit amet.",
      time_span: "3 weeks",
      lectures: "7 Lessons",
      video_lessons: "10 hours",
      members: "715",
      bg_image: "https://i.pinimg.com/474x/ca/d9/4d/cad94d6b730143f7f7121b4dca4db64f.jpg",
      teacher_image: "https://i.pinimg.com/236x/b9/c5/2c/b9c52ca45be6fe69008466f749622afe.jpg",
      teacher_name: "Sarah Smith",
      teacher_position: "Front-End Developer",
      about_course:
        "In this tutorial, we will learn the basics of Photoshop, including layers, tools, filters, and adjustments.",
      views: 3200,
      duration: "30:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/c2/f7/7e/c2f77efb45b24fbb962168efcb5d978b.jpg",
        nextV_video_1: "./upskill.mp4",
        nextV_title_1: "Lorem ispum doler set amet",
        nextV_views_1: 640,
        nextV_duration_1: "23:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/77/bd/a0/77bda08ae60ab3d149d4a3240ebfe909.jpg",
        nextV_video_2: "./ed-vid.mp4",
        nextV_title_2: "Lorem ispum doler set amet lorem ispum",
        nextV_views_2: 418,
        nextV_duration_2: "18:20",
  
        nextV_image_3: "https://i.pinimg.com/236x/d3/cb/a9/d3cba9fd654118ba4fbeb65b8185a3f2.jpg",
        nextV_video_3: "./vid-4.mp4",
        nextV_title_3: "Lorem ispum doler set amet sign",
        nextV_views_3: 316,
        nextV_duration_3: "18:00",
  
        nextV_image_4: "https://i.pinimg.com/736x/44/7e/d8/447ed81c533368eae199f110c53526e7.jpg",
        nextV_video_4: "./vid-1.mp4",
        nextV_title_4: "Lorem ispum doler set amet sign is lorem ket",
        nextV_views_4: 532,
        nextV_duration_4: "30:00"
      }
    },
    {
      id: 1,
      image: "https://i.pinimg.com/236x/5f/3e/4b/5f3e4b25629a1241119592e1e1377974.jpg",
      type: "DATA SCIENCE",
      price: "$70",
      title: "Data Science Bootcamp",
      lessons: "32",
      description:
        "Dive into data analysis, statistics, and machine learning with this comprehensive bootcamp. Learn Python, R, and data visualization.",
      time_span: "4 weeks",
      lectures: "8 Lessons",
      video_lessons: "12 hours",
      members: "820",
      bg_image: "https://i.pinimg.com/474x/fd/b5/1b/fdb51b460c25718a325aa5ef8bc871c2.jpg",
      teacher_image: "https://i.pinimg.com/236x/6d/01/52/6d0152c284f49dca88587008e5192c50.jpg",
      teacher_name: "Alice Johnson",
      teacher_position: "Data Analyst",
      about_course:
        "This course covers data wrangling, visualization, and predictive analytics, equipping you with essential skills for a data-driven career.",
      views: 4100,
      duration: "45:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/67/ce/5e/67ce5e64265d78fadd34d587d3b8c3ea.jpg",
        nextV_video_1: "./data1.mp4",
        nextV_title_1: "Introduction to Data Science",
        nextV_views_1: 520,
        nextV_duration_1: "20:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/8c/b8/6c/8cb86cd5141182a060483f5f83d9c66c.jpg",
        nextV_video_2: "./data2.mp4",
        nextV_title_2: "Data Cleaning Techniques",
        nextV_views_2: 430,
        nextV_duration_2: "25:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/df/b4/4a/dfb44a0cd05e27503c0c3787523bb4ca.jpg",
        nextV_video_3: "./data3.mp4",
        nextV_title_3: "Exploratory Data Analysis",
        nextV_views_3: 310,
        nextV_duration_3: "18:30",
  
        nextV_image_4: "https://i.pinimg.com/736x/4b/e6/76/4be676bb64e54e467f131d3130251cae.jpg",
        nextV_video_4: "./data4.mp4",
        nextV_title_4: "Introduction to Machine Learning",
        nextV_views_4: 480,
        nextV_duration_4: "22:15"
      }
    },
    {
      id: 2,
      image: "https://i.pinimg.com/236x/2d/98/12/2d9812b228eaf0802b5d5b890cce63eb.jpg",
      type: "DESIGN",
      price: "$60",
      title: "UI/UX Design Fundamentals",
      lessons: "24",
      description:
        "Learn the principles of user interface and user experience design, including wireframing, prototyping, and user testing.",
      time_span: "3 weeks",
      lectures: "6 Lessons",
      video_lessons: "8 hours",
      members: "650",
      bg_image: "https://i.pinimg.com/236x/ee/b8/ef/eeb8efcc984d4efd0c35e36cd625b520.jpg",
      teacher_image: "https://i.pinimg.com/236x/f1/d6/0c/f1d60c7fb3ce2bcf7ad420276377957f.jpg",
      teacher_name: "Ahmad Khan",
      teacher_position: "UI/UX Designer",
      about_course:
        "Explore design thinking and practical design tools to create engaging and intuitive user experiences.",
      views: 3500,
      duration: "40:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/7d/fb/08/7dfb08b3b99a358e122c83e48bc782dd.jpg",
        nextV_video_1: "./design1.mp4",
        nextV_title_1: "Basics of Wireframing",
        nextV_views_1: 400,
        nextV_duration_1: "15:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/cb/2e/97/cb2e97f63daa8513e7031d1be58e8832.jpg",
        nextV_video_2: "./design2.mp4",
        nextV_title_2: "Prototyping Techniques",
        nextV_views_2: 380,
        nextV_duration_2: "17:30",
  
        nextV_image_3: "https://i.pinimg.com/236x/47/ff/7f/47ff7f3140d3806c708494c41d4d07b2.jpg",
        nextV_video_3: "./design3.mp4",
        nextV_title_3: "User Testing Methods",
        nextV_views_3: 350,
        nextV_duration_3: "16:00",
  
        nextV_image_4: "https://i.pinimg.com/474x/ed/9a/12/ed9a12519974f51a7d2308ac8d570b3f.jpg",
        nextV_video_4: "./design4.mp4",
        nextV_title_4: "Design Tools Overview",
        nextV_views_4: 420,
        nextV_duration_4: "18:45"
      }
    },
    {
      id: 3,
      image: "https://i.pinimg.com/236x/6d/fa/2e/6dfa2e7fbd65c6fe08c1cf4306c1288b.jpg",
      type: "DEVELOPMENT",
      price: "$80",
      title: "Mobile App Development",
      lessons: "30",
      description:
        "Master the art of mobile app development for Android and iOS using modern frameworks and best practices.",
      time_span: "5 weeks",
      lectures: "9 Lessons",
      video_lessons: "15 hours",
      members: "970",
      bg_image: "https://i.pinimg.com/236x/9d/81/06/9d8106f763ac08e59341e72e79543f7a.jpg",
      teacher_image: "https://i.pinimg.com/236x/71/d6/b2/71d6b259bfcd5e836425dd0ada237a20.jpg",
      teacher_name: "Zainab Ommah",
      teacher_position: "Mobile Developer",
      about_course:
        "Gain hands-on experience building responsive and robust mobile applications with cross-platform tools.",
      views: 5000,
      duration: "55:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/736x/4a/e0/45/4ae045732fac31718fe9ba94c27390e4.jpg",
        nextV_video_1: "./mobile1.mp4",
        nextV_title_1: "Setting Up Development Environment",
        nextV_views_1: 600,
        nextV_duration_1: "22:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg",
        nextV_video_2: "./mobile2.mp4",
        nextV_title_2: "Building User Interfaces",
        nextV_views_2: 550,
        nextV_duration_2: "24:00",
  
        nextV_image_3: "https://i.pinimg.com/736x/9d/88/eb/9d88eb738d6bde91c555b01f40ef3168.jpg",
        nextV_video_3: "./mobile3.mp4",
        nextV_title_3: "Integrating APIs",
        nextV_views_3: 530,
        nextV_duration_3: "20:30",
  
        nextV_image_4: "https://i.pinimg.com/236x/e6/15/c8/e615c81451fe2d12fe34c3c3af12b7ff.jpg",
        nextV_video_4: "./mobile4.mp4",
        nextV_title_4: "Publishing Your App",
        nextV_views_4: 580,
        nextV_duration_4: "23:15"
      }
    },
    {
      id: 4,
      image: "https://i.pinimg.com/474x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg",
      type: "MARKETING",
      price: "$55",
      title: "Digital Marketing Essentials",
      lessons: "20",
      description:
        "Learn SEO, social media marketing, content strategy, and more to boost your digital presence.",
      time_span: "4 weeks",
      lectures: "5 Lessons",
      video_lessons: "9 hours",
      members: "730",
      bg_image: "https://i.pinimg.com/474x/39/45/29/394529ecb4f5fcc9ff0b7ef26d049ab9.jpg",
      teacher_image: "https://i.pinimg.com/236x/18/1e/52/181e52c7ceaf545ca1c103a97efa3593.jpg",
      teacher_name: "Sana Al-Katib",
      teacher_position: "Digital Marketer",
      about_course:
        "Understand the core principles of digital marketing and implement effective strategies for online growth.",
      views: 3900,
      duration: "42:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/96/82/1c/96821ca7269fc63c19e1a13510eb458a.jpg",
        nextV_video_1: "./marketing1.mp4",
        nextV_title_1: "SEO Fundamentals",
        nextV_views_1: 450,
        nextV_duration_1: "18:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
        nextV_video_2: "./marketing2.mp4",
        nextV_title_2: "Social Media Strategies",
        nextV_views_2: 470,
        nextV_duration_2: "20:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/d1/bc/5d/d1bc5d90a161cb0a1fb37023203b1f25.jpg",
        nextV_video_3: "./marketing3.mp4",
        nextV_title_3: "Content Marketing Tips",
        nextV_views_3: 420,
        nextV_duration_3: "19:30",
  
        nextV_image_4: "https://i.pinimg.com/236x/92/a7/49/92a74903fdf70860a8d0a21778022ccf.jpg",
        nextV_video_4: "./marketing4.mp4",
        nextV_title_4: "Analytics and Metrics",
        nextV_views_4: 460,
        nextV_duration_4: "21:00"
      }
    },
    {
      id: 5,
      image: "https://i.pinimg.com/474x/ab/a9/41/aba94111afe833e42a9dd5905dbeb565.jpg",
      type: "AI & ML",
      price: "$90",
      title: "Machine Learning A-Z",
      lessons: "35",
      description:
        "Explore the fundamentals and advanced techniques of machine learning with practical examples and projects.",
      time_span: "6 weeks",
      lectures: "10 Lessons",
      video_lessons: "18 hours",
      members: "1050",
      bg_image: "https://i.pinimg.com/236x/3b/79/d1/3b79d11f974a61b66f5b762525e663e2.jpg",
      teacher_image: "https://i.pinimg.com/236x/44/15/57/441557cb12f2d439695026f98ff161d7.jpg",
      teacher_name: "Omar Zaid",
      teacher_position: "Machine Learning Engineer",
      about_course:
        "Cover regression, classification, clustering, and deep learning through hands-on projects and real-world scenarios.",
      views: 6200,
      duration: "60:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/50/1d/c2/501dc26b1706f1bd822ee66f5754720c.jpg",
        nextV_video_1: "./ml1.mp4",
        nextV_title_1: "Introduction to ML",
        nextV_views_1: 700,
        nextV_duration_1: "25:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/ca/c5/8a/cac58a7330243b5907c8ee1b397d9db0.jpg",
        nextV_video_2: "./ml2.mp4",
        nextV_title_2: "Supervised Learning",
        nextV_views_2: 680,
        nextV_duration_2: "27:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/0e/c2/94/0ec294ac6fc6e583ad648f9aefd01666.jpg",
        nextV_video_3: "./ml3.mp4",
        nextV_title_3: "Unsupervised Learning",
        nextV_views_3: 650,
        nextV_duration_3: "26:30",
  
        nextV_image_4: "https://i.pinimg.com/236x/fd/22/27/fd22270b02ab43eaffc61b72e3dd4010.jpg",
        nextV_video_4: "./ml4.mp4",
        nextV_title_4: "Deep Learning Overview",
        nextV_views_4: 720,
        nextV_duration_4: "28:15"
      }
    },
    {
      id: 6,
      image: "https://i.pinimg.com/474x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg",
      type: "SECURITY",
      price: "$65",
      title: "Cybersecurity for Beginners",
      lessons: "22",
      description:
        "Learn about cybersecurity fundamentals, network security, and how to protect systems against cyber threats.",
      time_span: "4 weeks",
      lectures: "7 Lessons",
      video_lessons: "10 hours",
      members: "810",
      bg_image: "https://i.pinimg.com/474x/e8/95/3f/e8953f47117873e0f55a22e79c8188ed.jpg",
      teacher_image: "https://i.pinimg.com/236x/67/88/fb/6788fbcf6759c9c207cbc761f52d63e4.jpg",
      teacher_name: "Franklin Reed",
      teacher_position: "Cybersecurity Specialist",
      about_course:
        "This course provides an introduction to cybersecurity principles and practical measures to secure digital assets.",
      views: 4700,
      duration: "38:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/736x/c1/fb/d9/c1fbd995398674b8c2e6d7b8eb2d1d8d.jpg",
        nextV_video_1: "./cyber1.mp4",
        nextV_title_1: "Cybersecurity Basics",
        nextV_views_1: 480,
        nextV_duration_1: "19:00",
  
        nextV_image_2: "https://i.pinimg.com/736x/cd/45/2e/cd452efc1cafe7c3d9eaca4ecf0ce375.jpg",
        nextV_video_2: "./cyber2.mp4",
        nextV_title_2: "Network Security Fundamentals",
        nextV_views_2: 460,
        nextV_duration_2: "20:15",
  
        nextV_image_3: "https://i.pinimg.com/736x/ea/06/8a/ea068a2fb7720f1ffcfe86bf7fcdcd3a.jpg",
        nextV_video_3: "./cyber3.mp4",
        nextV_title_3: "Ethical Hacking Introduction",
        nextV_views_3: 450,
        nextV_duration_3: "18:45",
  
        nextV_image_4: "https://i.pinimg.com/236x/1d/72/a2/1d72a2ecc5710dcabf7c0e95e3bccb16.jpg",
        nextV_video_4: "./cyber4.mp4",
        nextV_title_4: "Protecting Your Data",
        nextV_views_4: 490,
        nextV_duration_4: "20:00"
      }
    },
    {
      id: 7,
      image: "https://i.pinimg.com/236x/66/d1/68/66d168f451f1576955219acfc2a890d6.jpg",
      type: "CLOUD",
      price: "$75",
      title: "Cloud Computing Mastery",
      lessons: "28",
      description:
        "Understand cloud infrastructure, services, and deployment models to build scalable cloud applications.",
      time_span: "5 weeks",
      lectures: "8 Lessons",
      video_lessons: "14 hours",
      members: "920",
      bg_image: "https://i.pinimg.com/236x/f9/2c/15/f92c15d097d2c8220d9b3a212ea8fd5c.jpg",
      teacher_image: "https://i.pinimg.com/474x/2a/84/5e/2a845e0081e234deb9428da79be47ee7.jpg",
      teacher_name: "George Miller",
      teacher_position: "Cloud Architect",
      about_course:
        "Learn about AWS, Azure, and Google Cloud through practical labs and real-world examples.",
      views: 5400,
      duration: "50:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/58/45/f9/5845f9a1033236717a2900d60deddcd1.jpg",
        nextV_video_1: "./cloud1.mp4",
        nextV_title_1: "Introduction to Cloud Computing",
        nextV_views_1: 510,
        nextV_duration_1: "21:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/18/33/33/183333428e6bc9316d05614c7c7e3308.jpg",
        nextV_video_2: "./cloud2.mp4",
        nextV_title_2: "Understanding IaaS & PaaS",
        nextV_views_2: 500,
        nextV_duration_2: "22:30",
  
        nextV_image_3: "https://i.pinimg.com/736x/76/9f/e3/769fe3636cd9c8f4042b5aaf157a4d81.jpg",
        nextV_video_3: "./cloud3.mp4",
        nextV_title_3: "Deploying Cloud Solutions",
        nextV_views_3: 480,
        nextV_duration_3: "20:45",
  
        nextV_image_4: "https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg",
        nextV_video_4: "./cloud4.mp4",
        nextV_title_4: "Cloud Security Best Practices",
        nextV_views_4: 520,
        nextV_duration_4: "23:00"
      }
    },
    {
      id: 8,
      image: "https://i.pinimg.com/236x/b7/c1/2d/b7c12df79530834f6704c4d750a14eb2.jpg",
      type: "GAME DEVELOPMENT",
      price: "$85",
      title: "Game Development with Unity",
      lessons: "26",
      description:
        "Learn game development fundamentals using Unity, including game physics, animation, and scripting.",
      time_span: "5 weeks",
      lectures: "7 Lessons",
      video_lessons: "13 hours",
      members: "880",
      bg_image: "https://i.pinimg.com/236x/1f/5e/8a/1f5e8aab9a1ea0670f2f594288339d6b.jpg",
      teacher_image: "https://i.pinimg.com/236x/1d/3d/5a/1d3d5a32cf8ad773b86d92a20ec8429d.jpg",
      teacher_name: "Hannah Lee",
      teacher_position: "Game Developer",
      about_course:
        "Create immersive games by learning Unity's interface, C# scripting, and best practices in game design.",
      views: 4800,
      duration: "48:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/b6/e4/d9/b6e4d90e6549f56768d01ab6c5c0fcd8.jpg",
        nextV_video_1: "./unity1.mp4",
        nextV_title_1: "Unity Basics",
        nextV_views_1: 560,
        nextV_duration_1: "19:30",
  
        nextV_image_2: "https://i.pinimg.com/236x/e3/f6/f2/e3f6f2122ff4134e77c555e2db159746.jpg",
        nextV_video_2: "./unity2.mp4",
        nextV_title_2: "Game Physics",
        nextV_views_2: 540,
        nextV_duration_2: "20:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/5d/d6/41/5dd641a3e2969d9efa2fa0bcedef376b.jpg",
        nextV_video_3: "./unity3.mp4",
        nextV_title_3: "Animation Techniques",
        nextV_views_3: 520,
        nextV_duration_3: "21:15",
  
        nextV_image_4: "https://i.pinimg.com/236x/36/c0/68/36c0686c6c36ede53138e0f345b42fa6.jpg",
        nextV_video_4: "./unity4.mp4",
        nextV_title_4: "Scripting in C#",
        nextV_views_4: 550,
        nextV_duration_4: "22:00"
      }
    },
    {
      id: 9,
      image: "https://i.pinimg.com/236x/b6/e5/18/b6e5187153e58267d57789dd6c097d0f.jpg",
      type: "BLOCKCHAIN",
      price: "$95",
      title: "Blockchain Basics",
      lessons: "18",
      description:
        "Understand the fundamentals of blockchain technology, smart contracts, and decentralized applications.",
      time_span: "3 weeks",
      lectures: "5 Lessons",
      video_lessons: "7 hours",
      members: "640",
      bg_image: "https://i.pinimg.com/236x/b6/b5/1d/b6b51de14a73e96c42505f28575c7c5d.jpg",
      teacher_image: "https://i.pinimg.com/474x/7f/34/13/7f34132cc0e2602af0ace76ec5968f72.jpg",
      teacher_name: "Ian Roberts",
      teacher_position: "Blockchain Developer",
      about_course:
        "Get introduced to blockchain concepts, cryptocurrency, and building your first smart contract.",
      views: 3300,
      duration: "35:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/ae/13/28/ae1328e595575928c994009a083b8bb4.jpg",
        nextV_video_1: "./blockchain1.mp4",
        nextV_title_1: "What is Blockchain?",
        nextV_views_1: 400,
        nextV_duration_1: "16:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/01/14/b6/0114b612d66b093689d49c6f2b3b39b3.jpg",
        nextV_video_2: "./blockchain2.mp4",
        nextV_title_2: "Smart Contracts 101",
        nextV_views_2: 380,
        nextV_duration_2: "15:30",
  
        nextV_image_3: "https://i.pinimg.com/236x/81/78/4e/81784e304f80f3f9801d17335717ea13.jpg",
        nextV_video_3: "./blockchain3.mp4",
        nextV_title_3: "Decentralized Applications",
        nextV_views_3: 360,
        nextV_duration_3: "14:45",
  
        nextV_image_4: "https://i.pinimg.com/736x/7c/8a/5c/7c8a5cc61e919dc25eb1a794460b735d.jpg",
        nextV_video_4: "./blockchain4.mp4",
        nextV_title_4: "Cryptocurrency Basics",
        nextV_views_4: 410,
        nextV_duration_4: "17:00"
      }
    },
    {
      id: 10,
      image: "https://i.pinimg.com/236x/d3/d5/a3/d3d5a3e259ee8ca212d85f07e92c16cd.jpg",
      type: "DESIGN",
      price: "$50",
      title: "Graphic Design for Beginners",
      lessons: "20",
      description:
        "Learn the basics of graphic design including typography, color theory, and layout principles.",
      time_span: "4 weeks",
      lectures: "6 Lessons",
      video_lessons: "9 hours",
      members: "710",
      bg_image: "https://i.pinimg.com/236x/e4/1f/8b/e41f8bd30ac7bfc251e170578b5c5bcf.jpg",
      teacher_image: "https://i.pinimg.com/236x/93/2e/d1/932ed110ff0f585f972e27d0da54d51c.jpg",
      teacher_name: "Julia Carter",
      teacher_position: "Graphic Designer",
      about_course:
        "This course introduces design fundamentals and creative techniques for stunning visuals.",
      views: 3600,
      duration: "40:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/c3/ad/2c/c3ad2ce01791503e44f2c0267785874d.jpg",
        nextV_video_1: "./graphic1.mp4",
        nextV_title_1: "Design Principles",
        nextV_views_1: 430,
        nextV_duration_1: "17:30",
  
        nextV_image_2: "https://i.pinimg.com/474x/a7/1d/0d/a71d0d6f8b9bf7b6b9d7aa8ed7bffb07.jpg",
        nextV_video_2: "./graphic2.mp4",
        nextV_title_2: "Typography Basics",
        nextV_views_2: 410,
        nextV_duration_2: "16:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/ab/0d/f1/ab0df1db822c7a9f6b3e110e8f3912df.jpg",
        nextV_video_3: "./graphic3.mp4",
        nextV_title_3: "Color Theory",
        nextV_views_3: 390,
        nextV_duration_3: "15:45",
  
        nextV_image_4: "https://i.pinimg.com/236x/2a/f8/23/2af82302666219e4e8f25287a266979d.jpg",
        nextV_video_4: "./graphic4.mp4",
        nextV_title_4: "Layout and Composition",
        nextV_views_4: 420,
        nextV_duration_4: "18:00"
      }
    },
    {
      id: 11,
      image: "https://i.pinimg.com/236x/90/40/cb/9040cb3f92de015456cf13caddc33a0b.jpg",
      type: "MANAGEMENT",
      price: "$65",
      title: "Project Management Professional",
      lessons: "25",
      description:
        "Master project management techniques, methodologies, and tools to effectively lead projects.",
      time_span: "5 weeks",
      lectures: "7 Lessons",
      video_lessons: "11 hours",
      members: "780",
      bg_image: "https://i.pinimg.com/236x/f8/a5/ca/f8a5ca61e7721d73da6a80f226e5aa40.jpg",
      teacher_image: "https://i.pinimg.com/236x/8c/dc/1b/8cdc1b3ecd021d43e8ae4d7513121b2f.jpg",
      teacher_name: "Kevin Brooks",
      teacher_position: "Project Manager",
      about_course:
        "Learn agile, waterfall, and other project management frameworks through practical case studies.",
      views: 4100,
      duration: "44:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/236x/9e/a5/e5/9ea5e5255688e5a7a3a9c6226d36139c.jpg",
        nextV_video_1: "./pm1.mp4",
        nextV_title_1: "Project Initiation",
        nextV_views_1: 450,
        nextV_duration_1: "18:00",
  
        nextV_image_2: "https://i.pinimg.com/236x/01/c7/77/01c77745d903f0c95e824be985cd89b8.jpg",
        nextV_video_2: "./pm2.mp4",
        nextV_title_2: "Planning and Scheduling",
        nextV_views_2: 430,
        nextV_duration_2: "20:00",
  
        nextV_image_3: "https://i.pinimg.com/474x/74/14/cf/7414cf3cc4965aba73c0eb659660a914.jpg",
        nextV_video_3: "./pm3.mp4",
        nextV_title_3: "Risk Management",
        nextV_views_3: 410,
        nextV_duration_3: "19:30",
  
        nextV_image_4: "https://i.pinimg.com/236x/61/b5/bb/61b5bba67571a6030c481568b691028c.jpg",
        nextV_video_4: "./pm4.mp4",
        nextV_title_4: "Project Closure",
        nextV_views_4: 440,
        nextV_duration_4: "21:00"
      }
    },
    {
      id: 12,
      image: "https://i.pinimg.com/236x/c9/c1/d3/c9c1d3545dfdffe9ae2589805acb0021.jpg",
      type: "TESTING",
      price: "$55",
      title: "Software Testing and QA",
      lessons: "21",
      description:
        "Learn the principles of software testing, quality assurance methodologies, and automation testing tools.",
      time_span: "4 weeks",
      lectures: "6 Lessons",
      video_lessons: "10 hours",
      members: "690",
      bg_image: "https://i.pinimg.com/236x/91/6b/a0/916ba07a93514ddc527a344522ce2119.jpg",
      teacher_image: "https://i.pinimg.com/236x/9f/7c/2b/9f7c2b12e2fb7559228590ad5a22deac.jpg",
      teacher_name: "Lisa Nguyen",
      teacher_position: "QA Engineer",
      about_course:
        "This course covers manual and automated testing techniques to ensure high-quality software delivery.",
      views: 3700,
      duration: "39:00",
      playVideos: {
        nextV_image_1: "https://i.pinimg.com/736x/d7/fc/ca/d7fcca8d0be31a34aca70dfe5df696b3.jpg",
        nextV_video_1: "./testing1.mp4",
        nextV_title_1: "Introduction to Software Testing",
        nextV_views_1: 420,
        nextV_duration_1: "16:30",
  
        nextV_image_2: "https://i.pinimg.com/236x/29/c6/ad/29c6ad700ffa6c4cb1ca93f0ddecc5af.jpg",
        nextV_video_2: "./testing2.mp4",
        nextV_title_2: "Manual Testing Techniques",
        nextV_views_2: 400,
        nextV_duration_2: "17:00",
  
        nextV_image_3: "https://i.pinimg.com/236x/3e/08/47/3e084784c138383bd45d3ce761b7a92e.jpg",
        nextV_video_3: "./testing3.mp4",
        nextV_title_3: "Automation Testing Tools",
        nextV_views_3: 390,
        nextV_duration_3: "16:00",
  
        nextV_image_4: "https://i.pinimg.com/736x/11/23/3e/11233e5927e348180968310ea5a18df6.jpg",
        nextV_video_4: "./testing4.mp4",
        nextV_title_4: "QA Best Practices",
        nextV_views_4: 410,
        nextV_duration_4: "18:00"
      }
    }
    // add more courses as needed...
  ]);

  // For toggling bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleToggleFavorite = (card) => {
    const isBookmarked = bookmarks.some((book) => book.id === card.id);
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((book) => book.id !== card.id);
    } else {
      updatedBookmarks = [...bookmarks, card];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  // New state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses by title (you can extend this logic to search in other fields)
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="px-5">
        <p className="text-3xl text-center mt-20 mb-3">
          Find your dream course here
        </p>

        
          <input
            className="w-full p-5  my-10  py-2 mt-5 rounded-[30px] text-white text-xl bg-bodyColor border border-ourOrange outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
       

        {searchQuery && filteredCourses.length === 0 && (
          <p className="text-center text-white text-xl">No courses found.</p>
        )}

        {(searchQuery ? filteredCourses : courses).map((course) => (
          <Course
            key={course.id}
            image={course.image}
            type={course.type}
            price={course.price}
            title={course.title}
            lessons={course.lessons}
            description={course.description}
            time_span={course.time_span}
            lectures={course.lectures}
            video_lessons={course.video_lessons}
            members={course.members}
            bg_image={course.bg_image}
            teacher_image={course.teacher_image}
            teacher_name={course.teacher_name}
            teacher_position={course.teacher_position}
            about_course={course.about_course}
            views={course.views}
            duration={course.duration}
            handleBookmark={() => handleToggleFavorite(course)}
            nextV_image_1={course?.playVideos?.nextV_image_1}
            nextV_video_1={course?.playVideos?.nextV_video_1}
            nextV_title_1={course?.playVideos?.nextV_title_1}
            nextV_views_1={course?.playVideos?.nextV_views_1}
            nextV_duration_1={course?.playVideos?.nextV_duration_1}
            nextV_image_2={course?.playVideos?.nextV_image_2}
            nextV_video_2={course?.playVideos?.nextV_video_2}
            nextV_title_2={course?.playVideos?.nextV_title_2}
            nextV_views_2={course?.playVideos?.nextV_views_2}
            nextV_duration_2={course?.playVideos?.nextV_duration_2}
            nextV_image_3={course?.playVideos?.nextV_image_3}
            nextV_video_3={course?.playVideos?.nextV_video_3}
            nextV_title_3={course?.playVideos?.nextV_title_3}
            nextV_views_3={course?.playVideos?.nextV_views_3}
            nextV_duration_3={course?.playVideos?.nextV_duration_3}
            nextV_image_4={course?.playVideos?.nextV_image_4}
            nextV_video_4={course?.playVideos?.nextV_video_4}
            nextV_title_4={course?.playVideos?.nextV_title_4}
            nextV_views_4={course?.playVideos?.nextV_views_4}
            nextV_duration_4={course?.playVideos?.nextV_duration_4}
          />
        ))}
      </div>
    </>
  );
};

export default AllCourses;
