App.js



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './Sidebar/Sidebar/SideBar';
import ErrorPage from './components/ErrorPage';
import './App.css'
const App = () => {
  return (
    <Router>
        <Navbar />
        
        <SideBar/>
      
       

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/students" element={<Students />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      {/* </SideBar> */}
        
    </Router>
  );
};

export default App;










Navbar.js




import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  '../Acss/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
  <Link to="/about-us" className="nav-link">About Us</Link>
      <Link to="/academics" className="nav-link">Academics</Link>
      <Link to="/admissions" className="nav-link">Admissions</Link>
      <Link to="/contact-us" className="nav-link">Contact Us</Link>
      <Link to="/faculty" className="nav-link">Faculty</Link>
      <Link to="/gallery" className="nav-link">Gallery</Link>
      <Link to="/students" className="nav-link">Students</Link>
    </nav>
  );
};

export default Navbar;













Sidebar.js

[
import { NavLink } from "react-router-dom";
import { FaBars} from "react-icons/fa";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './SideBar';




const routes = [
  {
    path: "/",
    name: "Home",
 
  },
  {
    path: "/about-us",
    name: "About Us",
 
  },
  {
    path: "/academics",
    name: "Academics",
   
  },
  {
    path: "/admissions",
    name: "Admissions",
   
  },
  {
    path: "/contact-us",
    name: "Contact Us",
 
  },
  {
    path: "/faculty",
    name: "Faculty",
  
  },
  {
    path: "/gallery",
    name: "Gallery",
  
  },
  {
    path: "/students",
    name: "Students",
   
  },
];



const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
        

              width: isOpen ? "200px" : "45px",
              height: isOpen ? "auto" : "50px", marginTop:"0px", // Adjust as needed
              transition: {
                duration: 0, // Adjust duration for quicker transition
              },

            // },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
      

<div className="bars">
              <FaBars onClick={toggle} />
            </div>
</div>
          
          
     

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;













SidebarMenu.js

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
     
     
     
     
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;






]
















HomePage.js



import React from 'react';
import SchoolLogo from "../assets/SchoolLogo.png";
import { useEffect, useState } from "react";
import image1 from "../assetsHome/s1.jpg";
import image2 from "../assetsHome/2.jpg";
import image3 from "../assetsHome/3.jpg";
import image4 from "../assetsHome/4.jpg";
import '../Acss/HomePage.css';

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([image1, image2, image3, image4]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage(selectedImage => (selectedImage < allImages.length - 1 ? selectedImage + 1 : 0));
    }, 6000); // Slowing down the interval to 6000 milliseconds (6 seconds)
    
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className='logoandh1'>
          <img 
            src={SchoolLogo}
            alt="Greenfield Academy Logo"
            className='imgLogo'
          />
          <h1 className='HomeH1'>Welcome to Little World School</h1>
        </div>
        <p className="school-intro">
          Little World School founded in 1992 is a coeducational English medium day school affiliated with Central Board Of Secondary Education (CBSE). It offers schooling from nursery to class XII.
        </p>
      </header>

      <div className="slideshow-container">
        <img className="slideshow-image" src={allImages[selectedImage]} alt="Slideshow" />
        <div className="slideshow-buttons">
          <button
            onClick={() => {
              if (selectedImage > 0) setSelectedImage(selectedImage - 1);
            }}
          >PREV</button>
          <button
            onClick={() => {
              if (selectedImage < allImages.length - 1) setSelectedImage(selectedImage + 1);
            }}
          >NEXT</button>
        </div>
      </div>

      <div className="school-info">
        <h2>Little World School</h2>
        <p>Welcome to Little World School, where we believe in fostering a nurturing and inclusive environment that encourages curiosity, creativity, and academic excellence. Established in the heart of Tilwara, Jabalpur, Little World School has been at the forefront of educational innovation, offering a comprehensive curriculum that caters to the diverse needs of our students.</p>
        <h3>Our Mission and Vision</h3>
        <p>At Little World School, our mission is to cultivate a passion for learning and personal growth in every child. We envision a world where every student is empowered to achieve their full potential and become responsible, empathetic global citizens. Our goal is to create a vibrant learning community where education goes beyond textbooks, preparing students for the challenges and opportunities of the future.</p>
        <h3>Educational Philosophy</h3>
        <p>Our educational approach is rooted in the belief that each child is unique and learns in their own way. We provide a balanced and holistic education that emphasizes not only academic success but also the development of essential life skills. Our dedicated educators employ innovative teaching methods, integrating technology and interactive learning to engage students and make learning enjoyable.</p>
        <h3>Curriculum and Programs</h3>
        <p>Little World School offers a diverse range of programs designed to meet the needs of students at every stage of their educational journey:</p>
        <ul>
          <li><strong>Early Childhood Education:</strong> Our early years program focuses on fostering a love for learning through play-based activities and creative exploration. We aim to build a strong foundation in literacy, numeracy, and social skills.</li>
          <li><strong>Primary Education:</strong> Our primary curriculum is designed to provide a solid grounding in core subjects such as mathematics, science, language arts, and social studies. We also incorporate extracurricular activities to promote well-rounded development.</li>
          <li><strong>Secondary Education:</strong> In the secondary phase, we offer a rigorous academic program that prepares students for higher education and career paths. Our curriculum includes a wide range of subjects, including advanced sciences, humanities, and arts, allowing students to pursue their interests and passions.</li>
          <li><strong>Extracurricular Activities:</strong> We believe in the importance of extracurricular activities in developing well-rounded individuals. Our students have the opportunity to participate in a variety of clubs and activities, including sports, music, drama, and community service.</li>
        </ul>
        <h3>Facilities</h3>
        <p>Our school is equipped with state-of-the-art facilities that support an enriching learning experience:</p>
        <ul>
          <li><strong>Modern Classrooms:</strong> Designed for interactive learning, our classrooms are equipped with smart boards and multimedia resources.</li>
          <li><strong>Science and Computer Labs:</strong> Our laboratories provide hands-on learning experiences, allowing students to explore scientific concepts and technological advancements.</li>
          <li><strong>Library:</strong> Our well-stocked library offers a vast collection of books and digital resources, encouraging students to develop a love for reading and research.</li>
          <li><strong>Sports Facilities:</strong> We offer a range of sports facilities, including a playground, gymnasium, and swimming pool, to promote physical fitness and teamwork.</li>
          <li><strong>Art and Music Rooms:</strong> Dedicated spaces for art and music allow students to express their creativity and explore their artistic talents.</li>
          <li><strong>Comfortable Accommodations:</strong> For students coming from out of town, we provide secure and comfortable hostel accommodations.</li>
        </ul>
        <h3>Our Community</h3>
        <p>At Little World School, we value the partnership between students, parents, and educators. We believe that collaboration and communication are key to a successful educational experience. Our school community is inclusive and supportive, with a focus on creating a positive and engaging environment for everyone.</p>
        <h3>Join Us</h3>
        <p>We invite you to be a part of our vibrant school community. Whether you are looking for a nurturing environment for your child’s early years or a challenging and supportive setting for secondary education, Little World School is committed to helping students achieve their best. Explore our programs, meet our dedicated staff, and discover how Little World School can be the right choice for your child's educational journey.</p>
      </div>
    </div>
  );
};

export default HomePage;








AboutUs.js



import React from 'react';

import  '../Acss/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      
      <section>
        <h2>Our History</h2>
        <p>Our school was established in [1992], with the vision of providing quality education to students in our community. Over the years, we have grown from a small institution to one of the leading schools in the region, known for our academic excellence and holistic development approach.</p>
        <p>From its inception, the school has been committed to fostering a culture of continuous improvement and innovation. Our milestones include:</p>
        <ul>
          <li><strong>1992:</strong> Opening of the primary school.</li>
          <li><strong>1998:</strong> Expansion to include secondary education.</li>
          <li><strong>2005:</strong> Introduction of the International Baccalaureate (IB) program.</li>
          <li><strong>2010:</strong> Establishment of partnerships with international schools for student exchange programs.</li>
        </ul>
      </section>

      <section>
        <h2>Our Vision</h2>
        <p>We envision a world where every student has access to the highest quality education, empowering them to achieve their full potential and become responsible, compassionate global citizens.</p>
        <p>Our vision is grounded in the belief that education is the key to unlocking the potential within each individual, fostering a love of learning, and preparing students to thrive in a rapidly changing world.</p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>Our mission is to nurture and inspire each student to develop their unique talents, skills, and abilities through a comprehensive and balanced curriculum that fosters intellectual, physical, emotional, and social growth.</p>
        <p>We are dedicated to creating a learning environment that is inclusive, supportive, and challenging. Our curriculum is designed to promote critical thinking, creativity, and collaboration, equipping students with the skills they need for lifelong success.</p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We believe in honesty and transparency in all our actions.</li>
          <li><strong>Excellence:</strong> We strive for the highest standards in education and personal development.</li>
          <li><strong>Respect:</strong> We foster a culture of respect and inclusion for all members of our community.</li>
          <li><strong>Responsibility:</strong> We encourage students to take responsibility for their learning and actions.</li>
          <li><strong>Innovation:</strong> We embrace new ideas and approaches to enhance learning and teaching.</li>
        </ul>
        <p>These values guide everything we do and are reflected in our policies, practices, and interactions with students, parents, and the wider community.</p>
      </section>

      <section>
        <h2>Message from the Principal</h2>
        <p>Welcome to our school! We are committed to providing a safe and supportive environment where every student can thrive. Our dedicated staff works tirelessly to create engaging and meaningful learning experiences that prepare our students for future success. I am proud to be part of this vibrant community and look forward to working together to achieve our shared goals.</p>
        <p>Sincerely,</p>
        <p>[Principal's Rajesh kumar]</p>
        <p>As we continue to grow and evolve, we remain steadfast in our commitment to educational excellence and the holistic development of each student. Our door is always open, and we encourage open communication and collaboration with our families and community members.</p>
      </section>

      <section>
        <h2>Our Infrastructure and Facilities</h2>
        <p>Our campus is equipped with state-of-the-art facilities to support our students' learning and development. Some of the key features include:</p>
        <ul>
          <li>Modern classrooms with interactive whiteboards and multimedia capabilities.</li>
          <li>A well-stocked library with a vast collection of books, periodicals, and digital resources.</li>
          <li>Science and computer laboratories that provide hands-on learning experiences.</li>
          <li>Sports facilities, including a playground, gymnasium, and swimming pool.</li>
          <li>Art and music rooms that encourage creativity and self-expression.</li>
          <li>Comfortable and secure hostel accommodations for outstation students.</li>
        </ul>
        <p>We also offer a range of extracurricular activities, from sports and arts to clubs and societies, ensuring that our students have ample opportunities to explore their interests and develop new skills outside the classroom.</p>
      </section>
    </div>
  );
}

export default AboutUs;














Academics.js





import React from 'react';
// import './Academics.css';
import  '../Acss/./Academics.css'

const Academics = () => {
  return (
    <div className="academics">
      <h1>Academics</h1>
      
      <section>
        <h2>Curriculum Offered</h2>
        <p>Our school offers a comprehensive curriculum designed to cater to the educational needs of students at different stages of their academic journey. We provide the following levels of education:</p>
        <ul>
          <li><strong>Primary Education:</strong> Grades 1 to 5, focusing on foundational skills in literacy, numeracy, and basic sciences.</li>
          <li><strong>Secondary Education:</strong> Grades 6 to 10, offering a broad range of subjects that prepare students for higher education and personal development.</li>
          <li><strong>Senior Secondary Education:</strong> Grades 11 and 12, with specialized streams in Science, Commerce, and Humanities to prepare students for university and career paths.</li>
        </ul>
      </section>

      <section>
        <h2>Subjects Taught</h2>
        <p>We offer a diverse range of subjects to ensure a well-rounded education. The subjects taught at different levels include:</p>
        <h3>Primary Level (Grades 1-5)</h3>
        <ul>
          <li>English Language</li>
          <li>Mathematics</li>
          <li>Science (General)</li>
          <li>Social Studies</li>
          <li>Art and Craft</li>
          <li>Physical Education</li>
          <li>Music</li>
          <li>Computer Science</li>
        </ul>
        
        <h3>Secondary Level (Grades 6-10)</h3>
        <ul>
          <li>English Language and Literature</li>
          <li>Mathematics</li>
          <li>Science (Physics, Chemistry, Biology)</li>
          <li>History and Geography</li>
          <li>Second Language (French/Spanish/German)</li>
          <li>Art and Design</li>
          <li>Physical Education</li>
          <li>Information Technology</li>
          <li>Environmental Studies</li>
        </ul>
        
        <h3>Senior Secondary Level (Grades 11-12)</h3>
        <p>Students can choose from the following streams and subjects:</p>
        <h4>Science Stream</h4>
        <ul>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Biology</li>
          <li>Mathematics</li>
          <li>Computer Science</li>
          <li>Environmental Science</li>
        </ul>
        
        <h4>Commerce Stream</h4>
        <ul>
          <li>Accountancy</li>
          <li>Business Studies</li>
          <li>Economics</li>
          <li>Mathematics</li>
          <li>Informatics Practices</li>
        </ul>
        
        <h4>Humanities Stream</h4>
        <ul>
          <li>History</li>
          <li>Geography</li>
          <li>Political Science</li>
          <li>Psychology</li>
          <li>Sociology</li>
          <li>Economics</li>
        </ul>
      </section>

      <section>
        <h2>Teaching Methodologies and Educational Resources</h2>
        <p>We employ a variety of teaching methodologies to cater to the diverse learning needs of our students. Our approach includes:</p>
        <ul>
          <li><strong>Interactive Learning:</strong> Engaging students through discussions, group activities, and hands-on projects.</li>
          <li><strong>Technology Integration:</strong> Utilizing digital tools and resources such as smart boards, tablets, and online learning platforms to enhance the learning experience.</li>
          <li><strong>Experiential Learning:</strong> Providing real-world experiences through field trips, lab experiments, and internships.</li>
          <li><strong>Individualized Instruction:</strong> Tailoring teaching methods to meet the unique needs of each student, including special education support and enrichment programs.</li>
          <li><strong>Continuous Assessment:</strong> Monitoring student progress through regular quizzes, assignments, and feedback sessions to ensure continuous improvement.</li>
        </ul>
        <p>Our educational resources include a well-stocked library, modern science and computer laboratories, art and music studios, and sports facilities. We also have a dedicated team of counselors and academic advisors to support students' academic and personal growth.</p>
      </section>
    </div>
  );
}

export default Academics;















ContactUs.js

import React from 'react';

import  '../Acss/./ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      
      <section className="contact-details">
        <h2>School Address</h2>
        <p>Little World School</p>
        <p>Tilwara, Jabalpur</p>
        <p>272, Near T.V. Tower, Katanga, Jabalpur</p>

        <h2>Contact Numbers</h2>
        <p>0761-2673623</p>
        <p>0761-2403449</p>

        <h2>Email</h2>
        <p><a href="mailto:lws.jbp@gmail.com">lws.jbp@gmail.com</a></p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form
          action="https://formspree.io/f/xeqdgwnq"
          method="POST"
          className="contact-inputs"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="username" placeholder="Username" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required autoComplete="off"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58711.929180240695!2d79.79877772167971!3d23.115554299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f4cdafc8ad%3A0xe342b24bc1742fef!2sLittle%20World%20School%20Tilwara!5e0!3m2!1sen!2sin!4v1721789242228!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
























Faculty.js


import React from 'react';
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";
import teacher5 from "../assets/teacher5.jpg";
import teacher6 from "../assets/teacher6.jpg";
import '../Acss/Faculty.css'; // Import the CSS file

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Jane Doe',
      position: 'Principal',
      image: teacher1,
      qualifications: 'Ph.D. in Education, M.Ed., B.Ed.',
      experience: '20 years of experience in educational leadership and administration.',
      bio: 'Dr. Jane Doe has been leading our school with a vision for excellence in education. She is committed to fostering a nurturing and inclusive learning environment for all students.'
    },
    {
      name: 'Mr. John Smith',
      position: 'Vice Principal',
      image: teacher2,
      qualifications: 'M.A. in Educational Management, B.A. in English',
      experience: '15 years of experience in teaching and school administration.',
      bio: 'Mr. John Smith focuses on curriculum development and teacher training. He has a passion for innovative teaching methods and student engagement.'
    },
    {
      name: 'Mrs. Emily Johnson',
      position: 'Science Teacher',
      image: teacher3,
      qualifications: 'M.Sc. in Chemistry, B.Ed.',
      experience: '10 years of teaching experience in secondary education.',
      bio: 'Mrs. Emily Johnson is dedicated to inspiring students through hands-on experiments and real-world applications of scientific concepts.'
    },
    {
      name: 'Ms. Sarah Brown',
      position: 'Mathematics Teacher',
      image: teacher4,
      qualifications: 'M.Sc. in Mathematics, B.Ed.',
      experience: '8 years of teaching experience in high school mathematics.',
      bio: 'Ms. Sarah Brown uses interactive and student-centered teaching techniques to make mathematics accessible and enjoyable for all students.'
    },
    {
      name: 'Mr. Michael Lee',
      position: 'History Teacher',
      image: teacher5,
      qualifications: 'M.A. in History, B.Ed.',
      experience: '12 years of teaching experience in middle and high school history.',
      bio: 'Mr. Michael Lee brings history to life through engaging stories, multimedia resources, and critical thinking exercises.'
    },
    {
      name: 'Mrs. Linda Wilson',
      position: 'Administrative Officer',
      image: teacher6,
      qualifications: 'B.A. in Business Administration',
      experience: '5 years of experience in school administration and operations.',
      bio: 'Mrs. Linda Wilson ensures the smooth running of school operations, from admissions to daily logistics, with a focus on efficiency and service.'
    }
  ];

  return (
    <div className="faculty-container">
      <h1>Faculty</h1>
      {facultyMembers.map((member, index) => (
        <section key={index} className="faculty-member">
          <img src={member.image} alt={`${member.name}`} className="faculty-image" loading="lazy"/>
          <div className="faculty-info">
            <h2>{member.name}</h2>
            <p><strong>Position:</strong> {member.position}</p>
            <p><strong>Qualifications:</strong> {member.qualifications}</p>
            <p><strong>Experience:</strong> {member.experience}</p>
            <p><strong>Bio:</strong> {member.bio}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Faculty;
















Gallery.js





import React, { useState } from 'react';
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import activity1 from "../assets/activity1.jpg";
import activity2 from "../assets/activity2.jpg";
import infera1 from "../assets/infera1.jpg";
import infera2 from "../assets/infera2.jpg";
import eventvideo from "../assets/eventvideo.mp4";
import activityvideo from "../assets/activityvideo.mp4";
import infaravideo from "../assets/infaravideo.mp4";
import '../Acss/Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event1, description: 'School Annual Day' },
    { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event2, description: 'School Annual Day' },
    { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event3, description: 'School Annual Day' },
    { type: 'Event', date: '2023-05-01', mediaType: 'video', url: eventvideo, description: 'School Annual Day' },
    { type: 'Activity', date: '2023-04-20', mediaType: 'photo', url: activity1, description: 'Science Fair' },
    { type: 'Activity', date: '2023-04-20', mediaType: 'photo', url: activity2, description: 'Science Fair' },
    { type: 'Activity', date: '2023-07-20', mediaType: 'video', url: activityvideo, description: 'Drama Performance' },
    { type: 'Infrastructure', date: '2022-12-05', mediaType: 'photo', url: infera1, description: 'New Computer Lab' },
    { type: 'Infrastructure', date: '2023-03-15', mediaType: 'photo', url: infera2, description: 'New Library' },
    { type: 'Infrastructure', date: '2023-03-15', mediaType: 'video', url: infaravideo, description: 'New Library' },
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredGalleryItems = galleryItems.filter(item => filter === 'All' || item.type === filter);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Event">Event</option>
          <option value="Activity">Activity</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
      </div>
      
      <div className="gallery">
        {filteredGalleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            {item.mediaType === 'photo' ? (
              <img src={item.url} alt={item.description} loading="lazy" />
            ) : (
              <video controls preload="none">
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{item.description}</p>
            <p><small>{new Date(item.date).toLocaleDateString()}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;















Students.js





import React from 'react';
// import './Students.css';
// import '../Acss/Students.css';
import  '../Acss/./Students.css';


const Students = () => {
  const activities = [
    {
      title: 'Extracurricular Activities',
      description: 'We offer a wide range of extracurricular activities to help students develop new skills and interests outside of the academic curriculum. These activities include sports, arts, music, drama, and various special interest clubs.',
      items: [
        'Sports (Football, Basketball, Cricket, Swimming)',
        'Music (Choir, Instrumental Classes)',
        'Drama (School Plays, Drama Club)',
        'Arts (Painting, Sculpture, Photography)',
        'Special Interest Clubs (Robotics, Debate, Environmental Club)'
      ]
    },
    {
      title: 'Clubs and Societies',
      description: 'Our school hosts various clubs and societies that encourage students to explore their passions and work collaboratively with their peers. Each club is overseen by a faculty advisor and student leaders.',
      items: [
        'Science Club',
        'Literature Club',
        'Math Club',
        'History Society',
        'Technology Club'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Achievements',
      description: 'Our students consistently perform well in academics, securing top ranks in board exams and winning numerous scholarships and awards.',
      items: [
        'Top ranks in state and national level exams',
        'Winners of various academic competitions',
        'Recipients of prestigious scholarships'
      ]
    },
    {
      title: 'Sports Achievements',
      description: 'Our school teams have won several championships in various sports, demonstrating exceptional teamwork and athleticism.',
      items: [
        'State-level champions in football and basketball',
        'Winners of inter-school swimming competitions',
        'Individual awards in track and field events'
      ]
    },
    {
      title: 'Cultural Achievements',
      description: 'Our students excel in cultural activities, showcasing their talents in music, dance, drama, and art.',
      items: [
        'Winners of regional music and dance competitions',
        'Best play awards in drama festivals',
        'Art exhibits in local galleries'
      ]
    }
  ];

  const leadershipOpportunities = [
    {
      title: 'Student Council',
      description: 'The Student Council is an elected body that represents the student community and works closely with the school administration to organize events, address student concerns, and promote school spirit.',
      items: [
        'President',
        'Vice President',
        'Secretary',
        'Treasurer',
        'Class Representatives'
      ]
    },
    {
      title: 'Leadership Programs',
      description: 'We offer various leadership programs to help students develop essential leadership skills, including public speaking, team management, and project planning.',
      items: [
        'Leadership workshops and seminars',
        'Peer mentoring programs',
        'Community service projects'
      ]
    }
  ];

  return (
    <div className="students-container">
      <h1>Students</h1>

      {activities.map((activity, index) => (
        <section key={index}>
          <h2>{activity.title}</h2>
          <p>{activity.description}</p>
          <ul>
            {activity.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      {achievements.map((achievement, index) => (
        <section key={index}>
          <h2>{achievement.title}</h2>
          <p>{achievement.description}</p>
          <ul>
            {achievement.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      {leadershipOpportunities.map((opportunity, index) => (
        <section key={index}>
          <h2>{opportunity.title}</h2>
          <p>{opportunity.description}</p>
          <ul>
            {opportunity.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Students;
