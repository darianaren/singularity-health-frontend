import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

/**
 * @module Portal
 *
 * @description
 * Portal component for rendering elements outside of the parent DOM hierarchy.
 *
 * This component is used to render children into a DOM node that exists outside
 * the DOM hierarchy of the parent component. It's particularly useful for rendering
 * elements that should not be bound by the parent's styling and layout,
 * such as modals, toasts, and tooltips.
 *
 * @component
 * @param {Object} props - The props for the component.
 *   @property {React.ReactNode} props.children - The child elements to be rendered into the portal.
 *   @property {string} [props.portalId='portal-root'] - The ID of the DOM element to render into.
 *
 * @returns {React.ReactPortal | null} A React portal rendering the children or null if container element is not found.
 *
 */

const Portal = ({ children, portalId }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let element = document.getElementById(portalId);

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", portalId);
      document.body.appendChild(element);
    }

    setContainer(element);

    return () => {
      if (element?.parentElement) {
        element.parentElement.removeChild(element);
      }
    };
  }, [portalId]);

  return container ? createPortal(children, container) : null;
};

Portal.defaultProps = {
  portalId: "portal-root"
};

export default Portal;
