// Carousel.tsx
import React, { CSSProperties } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const styles = {
    root: {},
    scroll: {
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        scrollSnapType: 'x mandatory'
    },
    item: {
        width: '100%',
        height: '100%',
        flexShrink: 0,
        marginBottom: '50px'
    },
    itemSnapPoint: {
        scrollSnapAlign: 'start'
    },
    controls: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
        right: '0',
        bottom: '0',
        position: 'absolute'
    },
    nextPrevButton: {
        width: '50px',
        height: '50px',
        /* border: 0; */
        display: 'contents'
    },
    nextPrevButtonDisabled: { opacity: 0.3 },
    prevButtonImg: {
        width: '50px',
        height: '50px',
        cursor: 'pointer'
    },
    nextButtonImg: {
        width: '50px',
        height: '50px',
        cursor: 'pointer'
    },
    pagination: {
        display: 'flex'
    },
    paginationButton: {
        margin: '10px'
    },
    paginationButtonActive: { opacity: 0.3 },
    pageIndicator: {
        // display: 'flex',
        // justifyContent: 'center'
        left: '0px',
        bottom: '0px',
        position: 'absolute',
        // font-family: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '38px',
        color: '#C0C0C0',
    },
    pageIndicatorBold: {
        fontSize: '24px',
        color: '#303030'
    }
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
    readonly items: T[];
    readonly renderItem: (
        props: CarouselRenderItemProps<T>
    ) => React.ReactElement<CarouselItemProps>;
    readonly prevArrow: "";
    readonly nextArrow: "";
}

interface CarouselRenderItemProps<T> {
    readonly item: T;
    readonly isSnapPoint: boolean;
    readonly index: number;
}

export const Carousel = <T extends any>({
    items,
    renderItem,
    prevArrow,
    nextArrow
}: CarouselProps<T>) => {
    const {
        scrollRef,
        pages,
        activePageIndex,
        prev,
        next,
        goTo,
        snapPointIndexes
    } = useSnapCarousel();
    return (
        <div className="slider-container" style={styles.root}>
            <div style={styles.scroll} ref={scrollRef}>
                {items.map((item, i) =>
                    renderItem({
                        item,
                        isSnapPoint: snapPointIndexes.has(i),
                        index: i
                    })
                )}
            </div>
            <div style={styles.controls} aria-hidden>
                <button type="button"
                    style={{
                        ...styles.nextPrevButton,
                        ...(activePageIndex <= 0 ? styles.nextPrevButtonDisabled : {})
                    }}
                    onClick={() => prev()}
                >
                    <img src={prevArrow} alt="Prev" className="carousel-arrow prev" style={styles.prevButtonImg} />
                </button>
                {/* {pages.map((_, i) => (
                    <button
                        key={i}
                        style={{
                            ...styles.paginationButton,
                            ...(activePageIndex === i ? styles.paginationButtonActive : {})
                        }}
                        onClick={() => goTo(i)}
                    >
                        {i + 1}
                    </button>
                ))} */}
                <button type="button"
                    style={{
                        ...styles.nextPrevButton,
                        ...(activePageIndex === pages.length - 1
                            ? styles.nextPrevButtonDisabled
                            : {})
                    }}
                    onClick={() => next()}
                >
                    <img src={nextArrow} alt="Next" className="carousel-arrow next" style={styles.nextButtonImg} />
                </button>
            </div>
            <div className="page-indicator" style={styles.pageIndicator}>
                <span className="bold" style={styles.pageIndicatorBold}>{(activePageIndex < 10 ? `0${activePageIndex + 1}` : activePageIndex + 1)}</span> / {pages.length < 10 ? `0${pages.length}` : pages.length}
            </div>
        </div>
    );
};

interface CarouselItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
    // <li
    //     style={{
    //         ...styles.item,
    //         ...(isSnapPoint ? styles.itemSnapPoint : {})
    //     }}
    // >
    //     {children}
    // </li>
    <div style={{
        ...styles.item,
        ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}>
        {children}
    </div>
);
