
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
