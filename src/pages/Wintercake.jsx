// GiftCategory.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import birthdayImage from '../assets/birthday.png';
import weddingImage from '../assets/wedding.png';
import rosesImage from '../assets/roses.png';
import christmasImage from '../assets/christmas.png';
import jewelryImage from '../assets/jewelry.png';
import winterImage from '../assets/winter.png';





const Wintercake = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // احتساب ارتفاع السايد بار بناءً على عدد العناصر في القائمة
  const sidebarHeight = `${2 + 8 * data.length}px`; // افتراضي: 2rem + (8 * عدد العناصر)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0rem' }}>
        {/* Side Bar with Categories */}
       
        <aside style={{ width: '25%', padding: '20px', backgroundColor: '#24315c', color:'white', borderRadius: '1rem', height: sidebarHeight, position: 'sticky', top: '0', minHeight: '80vh', fontSize: "20px" }}>
  <ul style={{ listStyle: 'none', padding: '9', marginTop: '2rem' }}>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={birthdayImage} alt="Happy Birthday" style={{ width: '30px', marginRight: '10px' }} />     
    
     <Link to="/birthday-cake">Birthday</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={christmasImage} alt="wedding" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/christmas-cake">Christmas</Link>
    </li>
    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={weddingImage} alt="christmas" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/wedding-cake">Wedding</Link>
    </li>

    <li style={{ marginBottom: '80px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <img src={winterImage} alt="winter" style={{ width: '30px', marginRight: '10px' }} />
      <Link to="/winter-cake">Winter</Link>
    </li>
  </ul>
</aside>

        
        {/* Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {currentItems.map((item) => (
            <div key={item.id} style={{ maxWidth: '18rem', marginBottom: '2rem' }}>
              <Link to={`/product/${item.id}`}>
                <img
                  style={{ width: '100%', height: 'auto', borderRadius: '1rem', cursor: 'pointer' }}
                  src="https://ae01.alicdn.com/kf/S56a65735a53a4417b47cc1185b80d0bes/Blue-White-Winter-snowman-Merry-Christmas-Cake-Topper-for-Snowflake-Xmas-Party-Baking-Decoration-Dessert-Supplies.jpg"
                  alt={item.title}
                />
              </Link>
              <div style={{ padding: '1rem', backgroundColor: '#fffff', borderRadius: '1rem', marginTop: '1rem' }}>
                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                  <p style={{ fontSize: '1.2rem', color: '#27283d', marginBottom: '0.5rem' }}>{item.title}</p>
                </Link>
                <p style={{ fontSize: '1rem', color: '#27283d' }}>{item.userId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '0.5rem', padding: '15px', marginTop: '1rem' }}>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <li
            key={i}
            onClick={() => paginate(i + 1)}
            style={{
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid #5C5C42',
              borderRadius: '0.5rem',
              backgroundColor: i + 1 === currentPage ? '#fffff' : '#fffff',
              color: i + 1 === currentPage ? '#fffff' : '#fffff',
            }}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wintercake;
