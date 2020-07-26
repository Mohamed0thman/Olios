import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ReactImageMagnify from "react-image-magnify";

import CustomButton from "../custom-button/custom-button.component";
import Recomended from "../recomended/recomended.component";

import { addItemToCart, removeItem } from "../../redux/cart/cart-action";

import "./product.styles.scss";

const Product = ({ item, collection, addItemToCart }) => {
  const {
    name,
    imageUrl,
    price,
    type,
    url,
    recomended,
    like,
    discount,
    Piece,
  } = item;
  const [scaleImage, setScaleImage] = useState(1);
  const finalPrice = Math.ceil(price - price * (discount / 100));
  const [addToItems, setAddToItems] = useState({
    ...item,
    finalPrice: finalPrice,
    quantity: 1,
  });
  console.log(addToItems);

  const items = collection.map((collections) =>
    collections.items.filter(
      (item) => item.recomended === recomended && item.name !== name
    )
  );

  const handelChangeQuantity = (event) => {
    const { name, value } = event.target;
    setAddToItems({ ...addToItems, [name]: parseInt(value) });
    console.log(addToItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setAddToItems({ ...addToItems, finalPrice: finalPrice });
    addItemToCart(addToItems);
    console.log(addToItems);
  };

  const handelChangeAddScale = () => {
    setScaleImage(scaleImage < 4 ? scaleImage + 1 : scaleImage);
  };
  const handelChangeMinusScale = () => {
    setScaleImage(scaleImage === 1 ? scaleImage : scaleImage - 1);
  };

  return (
    <div className="product">
      <div className="left">
        <div className="heart">
          <span className="heart-num">{like}</span>
          <span className="icon-heart-outlined heart-icon"></span>
        </div>
        <div className="image-container">
          <ReactImageMagnify
            className={` image  image--${scaleImage}`}
            enlargedImagePosition="over"
            imageClassName="small-image"
            enlargedImageClassName="big-image"
            {...{
              smallImage: {
                alt: name,
                isFluidWidth: true,
                src: imageUrl,
                imageStyle: {},
              },
              largeImage: {
                src: imageUrl,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>

        <div className="add-and-minus">
          <span
            className="icon-add-outline"
            onClick={handelChangeAddScale}
          ></span>
          <span
            className="icon-minus-outline"
            onClick={handelChangeMinusScale}
          ></span>
        </div>
      </div>
      <div className="right">
        <div className="up">
          <div className="header">
            <h2>PRODUCT</h2>

            <Link to={`/shop/${url}`} className="link">
              <span className="type">{type}</span>
              <span className={`icon-${url} icon`}></span>
            </Link>
          </div>
          <div className="text">
            <h2>
              <span className="name"> {name.toUpperCase()}</span> -{" "}
              <span className="type">{type.toUpperCase()}</span>
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              earum ut velit placeat quibusdam tempore, repellat sapiente rem
              nem
            </p>
            <div>
              <div className="control">
                <div className="control__right">
                  <span className="title">COST</span>
                  <div className="price">
                    <span className="final-price">${finalPrice}</span>
                    <span className="old-price">${price}</span>
                  </div>
                </div>
                <div className="control__left">
                  <div className="title">QUANTITY</div>
                  <form onSubmit={handleSubmit} className="form">
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={1}
                      min={1}
                      max={Piece}
                      onChange={handelChangeQuantity}
                    ></input>
                    <CustomButton isAddTo="is-add-to" type="submit">
                      ADD TO CARD
                    </CustomButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down">
          <h3 className="title">RECOMENDED</h3>

          {items.map((item, index) => (
            <Recomended key={index} items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
