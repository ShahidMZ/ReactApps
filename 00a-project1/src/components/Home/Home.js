/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuItem from "../Sidebar/MenuItem/MenuItem";
import SecondaryMenuItem from "../Sidebar/SecondaryMenuItem/SecondaryMenuItem";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.scss";

const menuItems = [
  [
    0,
    "Home",
    "fa-regular fa-house fa-xl",
    [
      //   [0, "Derps", "fa-regular fa-envelope fa-xl"],
      //   [1, "Times", "fa-regular fa-clock fa-xl"],
      //   [2, "Hate", "fa-regular fa-cloud fa-xl"],
      //   [3, "Beat", "fa-regular fa-hand fa-xl"],
    ],
  ],
  [
    1,
    "User Management System",
    "fa-solid fa-users-line fa-xl",
    [
      [0, "New User Request", "fa-regular fa-envelope fa-xl"],
      [1, "Edit User Request", "fa-regular fa-clock fa-xl"],
      [2, "User Management Report", "fa-regular fa-cloud fa-xl"],
      [3, "Software Master", "fa-regular fa-hand fa-xl"],
    ],
  ],
  [
    2,
    "SAP Management",
    "fa-solid fa-briefcase fa-xl",
    [
      [0, "New SAP Request", "fa-regular fa-envelope fa-xl"],
      [1, "Modify SAP Request", "fa-regular fa-clock fa-xl"],
      [2, "Extend SAP Request", "fa-regular fa-clock fa-xl"],
      [3, "SAP Report", "fa-regular fa-cloud fa-xl"],
      [4, "Customer Master", "fa-regular fa-hand fa-xl"],
      [5, "Vendor Master", "fa-regular fa-hand fa-xl"],
      [6, "Services Master", "fa-regular fa-hand fa-xl"],
    ],
  ],
  [
    3,
    "Gate Entry Management",
    "fa-solid fa-archway fa-xl",
    [
      [0, "Gate Inward Request", "fa-regular fa-envelope fa-xl"],
      [1, "Gate Outward Stock Transfer Request", "fa-regular fa-clock fa-xl"],
      [2, "Gate Outward Sub-Contracting Request", "fa-regular fa-clock fa-xl"],
      [3, "Gate Outward Invoice Request", "fa-regular fa-clock fa-xl"],
      [4, "Gate Entry Report", "fa-regular fa-cloud fa-xl"],
    ],
  ],
  [
    4,
    "New Product Development",
    "fa-brands fa-themeco fa-xl",
    [
      [0, "Product Basket", "fa-regular fa-envelope fa-xl"],
      [1, "NPD Request", "fa-regular fa-clock fa-xl"],
      [2, "NPD Dashboard", "fa-regular fa-cloud fa-xl"],
    ],
  ],
  [
    5,
    "Document Management",
    "fa-regular fa-map fa-xl",
    [
      [0, "New Document Request", "fa-regular fa-envelope fa-xl"],
      [1, "Document Transfer Request", "fa-regular fa-clock fa-xl"],
      [2, "Document Destruction Request", "fa-regular fa-clock fa-xl"],
      [3, "DMS Report", "fa-regular fa-cloud fa-xl"],
    ],
  ],
  [6, "Security Management", "fa-solid fa-fingerprint fa-xl", []],
  [7, "Visitor Management", "fa-solid fa-building-shield fa-xl", []],
  [8, "IT Management", "fa-solid fa-computer fa-xl", []],
  [9, "HRMS", "fa-solid fa-address-book fa-xl", []],
  [10, "Access Management", "fa-solid fa-key fa-xl", []],
  [11, "Settings", "fa-solid fa-gear fa-xl", []],
];

export default function Home({ handleLogout }) {
  return (
    <div className="home">
      <section className="topNav">
        <h2>React Project 1</h2>
        <div>
          <a className="topMenu">Profile</a>
          <a className="topMenu logout" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </section>
      <section className="container">
        <Sidebar>
          {menuItems.map((item) => (
            <MenuItem key={item[0]} text={item[1]} icon={item[2]}>
              {item[3].map((secondaryItem) => (
                <SecondaryMenuItem
                  key={secondaryItem[0]}
                  text={secondaryItem[1]}
                  icon={secondaryItem[2]}
                ></SecondaryMenuItem>
              ))}
            </MenuItem>
          ))}
        </Sidebar>
        <div className="main"></div>
      </section>
    </div>
  );
}
