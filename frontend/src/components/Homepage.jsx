/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NewsGrid from './NewsGrid'
import ProgressBar from './ProgressBar'
import Menu from './Menu'
import he from 'he'; // HTML özel karakter kodlarını işlemek için kütüphane ekle
import '../night-mode.css'

// Google Translate API'yi kullanmak için gerekli bilgiler
function Homepage() {

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState('general');
    const [language, setLanguage] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [filterCount, setFilterCount] = useState(10);
    const [nightMode, setNightMode] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&apiKey=ENTER YOUR KEY HERE`);
            const data = await response.json();
            setItems(data.articles);
          } catch (error) {
            console.error('Error fetching news:', error);
          }
        };
    
        fetchNews();
      }, [category, language]);

      const handleMenuClick = (id, value) => {
        setActive(id);
        setCategory(value);
        fetchAndShowData(value);
      };

      const fetchAndShowData = async (category) => {
        try {
          let apiUrl = '';
    
          switch (category) {
            case 'technology':
              apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ENTER YOUR KEY HERE';
              break;
            default:
              apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ENTER YOUR KEY HERE`;
          }
    
          const response = await fetch(apiUrl);
          const data = await response.json();
          setItems(data.articles);
        } catch (error) {
          console.error(`Error fetching ${category} news:`, error);
        }
      };

      const toggleNightMode = () => {
        setNightMode(prevNightMode => !prevNightMode);
        document.body.classList.toggle('night-mode');
      };




  return (
   <>
   <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <div className="radio-link-container">
        <a href="https://karnaval.com/" target="_blank" rel="noopener noreferrer" className="radio-link">Listen to Radio Stream</a>
      </div>

      <div className="switch-container">
        <button className='content' onClick={toggleNightMode}>
          <img
            src={nightMode ? 'src/images/toggle-mode.png' : '/src/images/toggle-mode.png'}
            alt={nightMode ? 'Day Mode' : 'Night Mode'}
            style={{ width: '120px', height: '80px', marginTop: '14px' }}
          />
        </button>
      </div>

      <h1 className="title">MOONEWS</h1>

      <Menu
        active={active}
        setActive={setActive}
        setCategory={setCategory}
        handleMenuClick={handleMenuClick}
      />

      
      <label>
        Filter Count:
        <input
          type="number"
          value={filterCount}
          onChange={(e) => setFilterCount(Number(e.target.value))}
        />
      </label>

      <ProgressBar />
      <NewsGrid items={items.slice(0, filterCount)} />

      <div className="">
        <a href="http://localhost:5173/register" target="_blank" rel="noopener noreferrer" className="radio-link">Register</a>
      </div>

      <div className="login-register-container">
        <Footer />
      </div>
    </div>


   </>
  )
}

export default Homepage