
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

