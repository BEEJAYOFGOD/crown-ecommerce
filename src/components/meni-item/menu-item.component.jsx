/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <>
      <Link to={linkUrl} className={`menu-item ${size}`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>

        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
