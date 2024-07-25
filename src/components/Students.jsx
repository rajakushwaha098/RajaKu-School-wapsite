

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
