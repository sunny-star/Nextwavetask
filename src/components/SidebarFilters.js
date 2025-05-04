// src/components/SidebarFilters.js
import React from 'react';
import styles from '../styles/SidebarFilters.module.css';

const filterSections = [
    { title: "CUSTOMIZABLE" },
    { title: "IDEAL FOR", options: ["All"] },
    { title: "OCCASION", options: ["All"] },
    { title: "WORK", options: ["All"] },
    { title: "FABRIC", options: ["All"] },
    { title: "SEGMENT", options: ["All"] },
    { title: "SUITABLE FOR", options: ["All"] },
    { title: "RAW MATERIALS", options: ["All"] },
    { title: "PATTERN", options: ["All"] }
];

const SidebarFilters = ({ visible }) => {
    if (!visible) return null;
    return (
        <aside className={styles.sidebar}>
            {filterSections.map((section, idx) => (
                <div key={idx} className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <input type="checkbox" disabled={section.options} />
                        <span>{section.title}</span>
                    </div>
                    {section.options && (
                        <select className={styles.dropdown}>
                            {section.options.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                    )}
                </div>
            ))}
        </aside>
    );
};

export default SidebarFilters;
