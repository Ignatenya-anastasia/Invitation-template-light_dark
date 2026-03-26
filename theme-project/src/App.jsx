import style from  './App.module.scss';
import item from '../src/assets/item.svg';
import user from '../src/assets/profile.svg';
import darkItem from '../src/assets/darkItem.svg';
import { useEffect, useState } from 'react';

function App() {
  const [colorTheme, setColorTheme] = useState('');
  const changeTheme = () => {
    localStorage.removeItem('theme')
    if(colorTheme === 'dark'){
      setColorTheme('light');
      localStorage.setItem('theme', 'light');
    } else{
      setColorTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    
    

  }

  useEffect(() => {
    const res = localStorage.getItem('theme');
    setColorTheme(res);
  
    

  }, [])
  return (
    <>
    <section className={ colorTheme === 'dark' ? style['main-sec-dark'] : style['main-sec-light']}>
      <div className={colorTheme === 'dark' ? style['container-dark'] : style['container-light']}>
        <button onClick={() => changeTheme()} className={colorTheme === 'dark' ? style['theme-btn-dark'] : style['theme-btn-light']}>{colorTheme === 'dark' ? 'LIGHT' : 'DARK'}</button>
        <div className={colorTheme === 'dark' ? style['contain-info-dark'] : style['contain-info-light']}>
          <h1>Invitation Template</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className={colorTheme === 'dark' ? style['items-dark'] : style['items-light']}>
            <img src={colorTheme === 'dark' ? item : darkItem}/>
            <p>23 Jan 2022</p>
          </div>
      </div>
          
          <button className={colorTheme === 'dark' ? style['btn-join-dark'] : style['btn-join-light']}>Join Now!</button>
          <div className={colorTheme === 'dark' ? style['user-prof-dark'] : style['user-prof-light']}>
            <div className={colorTheme === 'dark' ? style['img-block-dark'] : style['img-block-light']}>
              <img src={user} alt="" />
            </div>
            <div className={colorTheme === 'dark' ? style['user-prof-descr-dark'] : style['user-prof-descr-light']}>
              <h2>Farrukh Mumtaz</h2>
              <p>Graphic Designer Follow me on Instagram</p>
            </div>

          </div>
        
      </div>
    </section>
    </>
  )
}

export default App
