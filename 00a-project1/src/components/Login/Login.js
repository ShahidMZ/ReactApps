import "./Login.scss";
import Input from "../Input/Input";

export default function Login({
  title,
  showError,
  setUsername,
  setPassword,
  handleSubmit,
}) {
  return (
    <>
      <header className="app-header">
        <h1>{title}</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <Input func={setUsername} type={"text"}>
              Username:{" "}
            </Input>
            <Input func={setPassword} type={"password"}>
              Password:{" "}
            </Input>
            <div className="submit-button">
              <button>Login</button>
            </div>
            {showError && <p className="error">Worng username or password!</p>}
          </form>
        </div>
      </header>
    </>
  );
}
