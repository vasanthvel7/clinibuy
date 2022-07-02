import { Link as GatsbyLink } from "gatsby";
import React from "react";

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
