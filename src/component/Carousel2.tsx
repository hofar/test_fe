// Carousel2.tsx
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
        marginBottom: '50px',
        textAlign: 'center'
    },
    itemSnapPoint: {
        scrollSnapAlign: 'start'
    },
    controls: {
        left: '0px',
        right: '0px',
        bottom: '0px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    nextPrevButton: {
        width: '50px',
        height: '50px',
        // display: 'contents',
        // position: 'absolute',
        bottom: '0',
        border: '0',
        padding: '0',
        background: 'unset'
    },
    nextPrevButtonDisabled: { opacity: 0.3 },
    prevButtonImg: {
        width: '19px',
        height: 'auto',
        cursor: 'pointer'
    },
    nextButtonImg: {
        width: '19px',
        height: 'auto',
        cursor: 'pointer'
    },
    pagination: {
        display: 'flex'
    },
    paginationButton: {
        margin: '10px',
        background: '#DAF3FC',
        border: '0',
        borderRadius: '50%',
        width: '8px',
        height: '8px',
        padding: '0px',
        alignSelf: 'center'
    },
    paginationButtonActive: {
        //  opacity: 0.3,
        border: '2px solid #3D46A2'
    },
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
    },
    boxPagination: {
        width: '100%',
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
} satisfies Record<string, CSSProperties>;

interface Carousel2Props<T> {
    readonly items: T[];
    readonly renderItem: (
        props: Carousel2RenderItemProps<T>
    ) => React.ReactElement<Carousel2ItemProps>;
    readonly prevArrow: "";
    readonly nextArrow: "";
}

interface Carousel2RenderItemProps<T> {
    readonly item: T;
    readonly isSnapPoint: boolean;
    readonly index: number;
}

export const Carousel2 = <T extends any>({
    items,
    renderItem,
    prevArrow,
    nextArrow
}: Carousel2Props<T>) => {
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
                <div style={styles.boxPagination}>
                    {pages.map((_, i) => (
                        <button type="button"
                            key={i}
                            style={{
                                ...styles.paginationButton,
                                ...(activePageIndex === i ? styles.paginationButtonActive : {})
                            }}
                            onClick={() => goTo(i)}
                        >
                            {/* {i + 1} */}
                        </button>
                    ))}
                </div>
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
        </div>
    );
};

interface Carousel2ItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React.ReactNode;
}

export const Carousel2Item = ({ isSnapPoint, children }: Carousel2ItemProps) => (
    <div style={{
        ...styles.item,
        ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}>
        {children}
    </div>
);
