import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/FilterSortBar.module.css";

const SORT_OPTIONS = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH"
];

const FilterSortBar = ({
    itemCount,
    onToggleFilters,
    filtersVisible,
    sort,
    setSort
}) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    // Close menu on outside click
    useEffect(() => {
        const handler = e => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        if (open) document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    return (
        <div className={styles.bar}>
            <div className={styles.left}>
                <span className={styles.itemCount}>{itemCount} ITEMS</span>
                <button className={styles.hideFilter} onClick={onToggleFilters}>
                    {filtersVisible ? "⟨ HIDE FILTER" : "⟩ SHOW FILTER"}
                </button>
            </div>
            <div className={styles.right} ref={menuRef}>
                <button
                    className={styles.sortButton}
                    onClick={() => setOpen(o => !o)}
                >
                    <span className={styles.sortText}>{sort}</span>
                    <span className={styles.arrow}>▼</span>
                </button>
                {open && (
                    <div className={styles.menu}>
                        {SORT_OPTIONS.map(option => (
                            <div
                                key={option}
                                className={
                                    styles.menuItem +
                                    (option === sort ? " " + styles.selected : "")
                                }
                                onClick={() => {
                                    setSort(option);
                                    setOpen(false);
                                }}
                            >
                                {option === sort && <span className={styles.check}>✔</span>}
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSortBar;
