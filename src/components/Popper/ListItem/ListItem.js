import { useRef, useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Item from './Item';
import './ListItem.scss';

function ListItem({ className, classNameCol, disableTitle = false, oneRow = false, data, id = '' }) {
    const refSlideProducts = useRef();
    const [positionSlide, setPositionSlide] = useState(0);
    const [elementCount, setElementCount] = useState(0);

    const handleOnClickBtnLeft = () => {
        if (positionSlide < 0) {
            refSlideProducts.current.style.marginLeft = `calc(-15px + ${positionSlide + 100}%)`;
            setPositionSlide(positionSlide + 100);
        }
    };

    const handleOnClickBtnRight = () => {
        if (elementCount === 0) {
            var parent = document.querySelectorAll('.row.slide-row-product').length;
            var child = 0;
            var child1 = document.querySelectorAll('.row.slide-row-product>.col-md-3.col-sm-6').length;
            var child2 = document.querySelectorAll('.row.slide-row-product>.col-md-4.col-sm-4').length;
            if (child1 % 12 === 0 && child1 !== 0) child = child1 / 12;
            else if (child2 % 9 === 0 && child2 !== 0) child = child2 / 9;
            child /= parent;
            setElementCount(child);
        }
        if (elementCount > -positionSlide / 100 - 1) {
            refSlideProducts.current.style.marginLeft = `calc(-15px + ${positionSlide - 100}%)`;
            setPositionSlide(positionSlide - 100);
        }
    };

    return (
        <>
            {!disableTitle && (
                <div className={className} style={{ overflow: 'hidden' }}>
                    <h3 className="title">
                        <strong>Featured </strong> Products
                    </h3>
                    <div className="control">
                        <Button className="prev" onClick={handleOnClickBtnLeft}>
                            <div>
                                <img src={images.arow_left} alt="" />
                            </div>
                        </Button>
                        <Button className="next" onClick={handleOnClickBtnRight}>
                            <div>
                                <img src={images.arow_right} alt="" />
                            </div>
                        </Button>
                    </div>
                    <div className="row slide-row-product" ref={refSlideProducts} style={{ width: '200%' }}>
                        {data !== undefined &&
                            Object.keys(data).map(function (key) {
                                if (key < 8)
                                    return (
                                        <Item
                                            sale={'New'}
                                            className={classNameCol}
                                            oneRow={oneRow}
                                            key={key}
                                            data={data[key]}
                                            href={`/details/${data[key].product_id}`}
                                        />
                                    );
                                else return;
                            })}
                    </div>
                </div>
            )}
            {disableTitle && (
                <div className="row">
                    {data !== undefined &&
                        Object.keys(data).map(function (key) {
                            return (
                                <Item
                                    key={key}
                                    className={classNameCol}
                                    oneRow={oneRow}
                                    data={data[key]}
                                    checkCategory={id === '' ? true : data[key].category_id === id}
                                    href={`/details/${data[key].product_id}`}
                                />
                            );
                        })}
                </div>
            )}
        </>
    );
}

export default ListItem;
