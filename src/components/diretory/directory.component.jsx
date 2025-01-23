/* eslint-disable no-unused-vars */
import { useState } from "react";
import MenuItem from "../meni-item/menu-item.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
  // cghcjyhjfg
  const sections = useSelector(selectDirectorySections);
  return (
    <>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </>
  );
};

export default Directory;
