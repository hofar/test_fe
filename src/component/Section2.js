import React, { useState, useRef } from 'react';

const Section2 = () => {
    const slides = [
        {
            title: 'What we do',
            boldText: 'Professional Brand Management',
            description:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
            title: 'What we do',
            boldText: 'Professional Brand Management',
            description:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
            title: 'What we do',
            boldText: 'Professional Brand Management',
            description:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [transitioning, setTransitioning] = useState(''); // Add transitioning state
    const sliderRef = useRef(null);

    const handleMouseDown = (event) => {
        setDragging(true);
        setStartX(event.clientX || event.touches[0].clientX);
    };

    const handleMouseMove = (event) => {
        if (!dragging) return;
        const x = event.clientX || event.touches[0].clientX;
        const distance = x - startX;
        sliderRef.current.style.transform = `translateX(${distance}px)`;
    };

    const handlePrevDrag = () => {
        if (currentSlide === 0) return;
        setCurrentSlide(currentSlide - 1);
        setDragging(true);
        setStartX(0);
    };

    const handleNextDrag = () => {
        if (currentSlide === slides.length - 1) return;
        setCurrentSlide(currentSlide + 1);
        setDragging(true);
        setStartX(window.innerWidth);
    };

    const handleMouseUp = (event) => {
        if (!dragging) return;
        const threshold = window.innerWidth / 3;
        const distance = event.clientX - startX;
        if (distance > threshold) {
            if (currentSlide !== 0) {
                setCurrentSlide(currentSlide - 1);
            }
        } else if (distance < -threshold) {
            if (currentSlide !== slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
        setDragging(false);
    };

    const goToPrevSlide = () => {
        const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
        setTransitioning('prev');
        setTimeout(() => {
            setTransitioning('');
        }, 300);
    };

    const goToNextSlide = () => {
        const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
        setTransitioning('next');
        setTimeout(() => {
            setTransitioning('');
        }, 300);
    };

    return (
        <div className="slider-container">
            <div
                className={`slider ${dragging ? 'dragging' : ''} ${transitioning}`}
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <h2>{slide.title}</h2>
                        <p className="bold">{slide.boldText}</p>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>

            <div className="slide-indicators">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>

            <button className="arrow prev" onMouseDown={handlePrevDrag} onTouchStart={handlePrevDrag}>
                &#8249;
            </button>
            <button className="arrow next" onMouseDown={handleNextDrag} onTouchStart={handleNextDrag}>
                &#8250;
            </button>
        </div>
    );
};

export default Section2;
