/* eslint-disable jsx-a11y/anchor-is-valid */
export default function MenuItem({ text, icon, children }) {
  return (
    <>
      <li>
        <a href="#">
          <i className={icon}></i>
          <span>{text}</span>
        </a>
        <ul className="nav-flyout">{children}</ul>
      </li>
    </>
  );
}
