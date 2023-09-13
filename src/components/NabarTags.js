import React from "react";

function NavbarTags(props) {
  const { tags } = props;

  return (
    <li>
      <a href={`https://example.com/${tags}`}>{tags}</a>
    </li>
  );
}

export default NavbarTags;