import React from "react";
import styles from "./FilterButton.module.scss";

type FilterButtonProps = {
  onClick: () => void;
  isSelected: boolean;
  children: string;
};

const FilterButton = ({ onClick, isSelected, children }: FilterButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={isSelected && styles["button--selected"]}>
      {children}
    </button>
  );
};

export default FilterButton;
