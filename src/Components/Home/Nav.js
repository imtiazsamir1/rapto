import React from "react";

const Nav = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Bashundhara (ICCB)</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>

            <li>
              <a>Subscribe</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
