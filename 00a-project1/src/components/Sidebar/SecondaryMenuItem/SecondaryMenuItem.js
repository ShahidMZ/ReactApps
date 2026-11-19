/* eslint-disable jsx-a11y/anchor-is-valid */
export default function SecondaryMenuItem({ text, icon }) {
  return (
    <>
      <li>
        <a href="#">
          <i className={icon}></i>
          <span>{text}</span>
        </a>
      </li>
    </>
  );
}
