
// import React, { useState } from 'react';
// import event1 from "../assets/event1.jpg";
// import event2 from "../assets/event2.jpg";
// import event3 from "../assets/event3.jpg";
// import activity1 from "../assets/activity1.jpg";
// import activity2 from "../assets/activity2.jpg";
// import infera1 from "../assets/infera1.jpg";
// import infera2 from "../assets/infera2.jpg";
// import eventvideo from "../assets/eventvideo.mp4";
// import activityvideo from "../assets/activityvideo.mp4";
// import infaravideo from "../assets/infaravideo.mp4";
// import '../Acss/Gallery.css';

// const Gallery = () => {
//   const [filter, setFilter] = useState('All');

//   const galleryItems = [
//     { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event1, description: 'School Annual Day' },
//     { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event2, description: 'School Annual Day' },
//     { type: 'Event', date: '2023-05-01', mediaType: 'photo', url: event3, description: 'School Annual Day' },
//     { type: 'Event', date: '2023-05-01', mediaType: 'video', url: eventvideo, description: 'School Annual Day' },
//     { type: 'Activity', date: '2023-04-20', mediaType: 'photo', url: activity1, description: 'Science Fair' },
//     { type: 'Activity', date: '2023-04-20', mediaType: 'photo', url: activity2, description: 'Science Fair' },
//     { type: 'Activity', date: '2023-07-20', mediaType: 'video', url: activityvideo, description: 'Drama Performance' },
//     { type: 'Infrastructure', date: '2022-12-05', mediaType: 'photo', url: infera1, description: 'New Computer Lab' },
//     { type: 'Infrastructure', date: '2023-03-15', mediaType: 'photo', url: infera2, description: 'New Library' },
//     { type: 'Infrastructure', date: '2023-03-15', mediaType: 'video', url: infaravideo, description: 'New Library' },
//   ];

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredGalleryItems = galleryItems.filter(item => filter === 'All' || item.type === filter);

//   return (
//     <div className="gallery-container">
//       <h1>Gallery</h1>
      
//       <div className="filter-container">
//         <label htmlFor="filter">Filter by:</label>
//         <select id="filter" value={filter} onChange={handleFilterChange}>
//           <option value="All">All</option>
//           <option value="Event">Event</option>
//           <option value="Activity">Activity</option>
//           <option value="Infrastructure">Infrastructure</option>
//         </select>
//       </div>
      
//       <div className="gallery">
//         {filteredGalleryItems.map((item, index) => (
//           <div key={index} className="gallery-item">
//             {item.mediaType === 'photo' ? (
//               <img src={item.url} alt={item.description} />
//             ) : (
//               <video controls>
//                 <source src={item.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//             <p>{item.description}</p>
//             <p><small>{new Date(item.date).toLocaleDateString()}</small></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;






















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
