import "./Input.scss";

export default function Input({ func, type, placeholder, children }) {
  return (
    <div className="inputContainer">
      <label>{children}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(x) => func(x.target.value)}
      ></input>
    </div>
  );
}
