import React from "react";

import Link from "next/link";

import styles from "./styles.module.css";

import SubmitInput from "@/components/molecules/SubmitInput/SubmitInput";

/**
 * @module Footer
 *
 * @description
 * The `Footer` component represents the footer section of the webpage. It renders a list of elements, where each element may include a title, subtitle, a list of links, and an optional submit input field. The component maps through the `elements` prop and dynamically displays each section accordingly.
 *
 * @component
 * @param {Object} props - Properties passed to the Footer component.
 * @param {Array} props.elements - Array of elements to be rendered in the footer. Each element contains:
 *   - `id` {string} - Unique identifier for the element.
 *   - `title` {string} - The title of the section.
 *   - `subtitle` {string} (optional) - A subtitle for the section.
 *   - `links` {Array} (optional) - List of links or buttons with `name` and `path`/`action`.
 *   - `submitInput` {Object} (optional) - Contains `submit` function and `placeholder` for a submit input.
 *
 * @returns {React.Component} Footer component with dynamic sections.
 */

const Footer = ({ elements }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {elements.map(({ id, title, subtitle, links, submitInput }) => (
          <section key={id} className={styles["element-container"]}>
            <h3 className={styles.title}>{title}</h3>

            {subtitle ? (
              <p className={styles.text} style={{ cursor: "default" }}>
                {subtitle}
              </p>
            ) : null}

            {links ? (
              <ul className={styles.list}>
                {links.map(({ name, path, action }) => (
                  <li key={name}>
                    {path ? (
                      <Link className={styles.text} href={path}>
                        {name}
                      </Link>
                    ) : (
                      <button className={styles.text} onClick={action}>
                        {name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}

            {submitInput ? (
              <SubmitInput
                onSubmit={submitInput.submit}
                placeholder={submitInput.placeholder}
              />
            ) : null}
          </section>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
