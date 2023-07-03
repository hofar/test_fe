import './App.css';
import React, { useRef } from 'react';
import { Carousel, CarouselItem } from './component/Carousel';
import { Carousel2, Carousel2Item } from './component/Carousel2';
import logo from './assets/image/logo.png';
import logoWhite from './assets/image/logo-white.png';
import prev from './assets/image/prev.png';
import next from './assets/image/next.png';
import prev2 from './assets/image/arrow-prev2.png';
import next2 from './assets/image/arrow-next2.png';
import coreValueImg from './assets/image/our-core-value.png';
import scrollImg from './assets/image/Scroll.png';
import exhaustImg from './assets/image/Exhaust.png';
import speedImprovementImg from './assets/image/Speed-Improvement.png';
import accesoriesImg from './assets/image/Accesories.png';

function App() {
  const slides = [
    {
      id: 1,
      title: 'What we do',
      boldText: 'Professional Brand Management',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 2,
      title: 'What we do',
      boldText: 'Professional Brand Management',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 3,
      title: 'What we do',
      boldText: 'Professional Brand Management',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];

  const slides2 = [
    {
      id: 1,
      title: 'Exhaust',
      src: exhaustImg,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
    },
    {
      id: 2,
      title: 'Speed Improvement',
      src: speedImprovementImg,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
    },
    {
      id: 3,
      title: 'Accesories',
      src: accesoriesImg,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
    }
  ];

  const sectionRef = useRef(null);

  const scrollToSection2 = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Bagian 1: Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        {/* Menu dengan gaya hamburger */}
        <nav className="menu">
          <input type="checkbox" className="menu-toggle" id="menu-toggle" title="Toggle menu" />
          <label htmlFor="menu-toggle" className="menu-btn">
            <span className="menu-icon"></span>
          </label>
          <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        {/* ... */}
      </header>

      {/* Bagian 2: Section 1 */}
      <section id="section1" className="section1">
        <div className="box">
          <h1>Discover Your Wonder</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <button type="button" className="btnScroll" onClick={scrollToSection2}>
          <img src={scrollImg} alt="Scroll" className="scroll-arrow" />
        </button>
      </section>

      {/* Bagian 3: Section 2 */}
      <section ref={sectionRef} id="section2" className="section2">
        {/* Warna latar belakang */}
        {/* ... */}
        {/* Slide dengan indikator angka dan tombol panah */}
        {/* Menambahkan komponen Section2 */}
        {/* <Section2 /> */}
        <Carousel
          items={slides}
          renderItem={({ item, isSnapPoint, index }) => (
            <CarouselItem key={index} isSnapPoint={isSnapPoint}>
              {/* <img src={item.src} width="250" height="250" alt="" /> */}
              <h2>{item.title}</h2>
              <p className="bold">{item.boldText}</p>
              <p>{item.description}</p>
            </CarouselItem>
          )}
          prevArrow={prev}
          nextArrow={next}
        />
        {/* ... */}
      </section>

      {/* Bagian 4: Section 3 */}
      <section id="section3" className="section3">
        {/* Warna latar belakang */}
        {/* ... */}
        <h2>Our Core Values</h2>
        <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.</p>
        <ul>
          {/* Daftar elemen */}
          {/* ... */}
        </ul>
        <p>Paragraf tambahan</p>
        {/* Gambar di bagian bawah */}
        <img src={coreValueImg} alt="Core Value" className="core-values-image" />
        {/* ... */}
      </section>

      {/* Bagian 5: Section 4 */}
      <section id="section4" className="section4">
        <div className="box">
          {/* Warna latar belakang */}
          {/* ... */}
          <h3>OUR SPECIALITY</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
          {/* Slide dengan indikator bullet dan tombol panah */}
          <Carousel2
            items={slides2}
            renderItem={({ item, isSnapPoint, index }) => (
              <Carousel2Item key={index} isSnapPoint={isSnapPoint}>
                <img src={item.src} width="121" height="121" alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Carousel2Item>
            )}
            prevArrow={prev2}
            nextArrow={next2}
          />
          {/* ... */}
        </div>
      </section>

      {/* Bagian 6: Section 5 */}
      <section id="section5" className="section5">
        <div className="background-image">
          {/* Gambar latar belakang */}
        </div>
        <img src={logoWhite} alt="Company Logo" className="company-logo" />
        {/* Dropdown dengan teks "TECHNOLOGY DEPARTMENT" */}
        {/* ... */}
        <p>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
        <nav className="footer-menu">
          {/* Menu footer yang dapat diklik */}
          {/* ... */}
          <a href="#">Who We Are</a>
          <a href="#">Our Values</a>
          <a href="#">The Perks</a>
        </nav>
      </section>
    </div>
  );
}

export default App;
