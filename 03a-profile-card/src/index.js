import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const skills = [
  { skill: ".NET", level: "advanced", color: "red" },
  { skill: "React", level: "beginner", color: "lightBlue" },
  { skill: "Angular", level: "advanced", color: "lightGreen" },
  { skill: "JavaScript", level: "intermediate", color: "gray" },
  { skill: "Docker", level: "beginner", color: "aqua" },
  { skill: "Kubernetes", level: "beginner", color: "magenta" },
  { skill: "AWS", level: "intermediate", color: "violet" },
  { skill: "Azure", level: "advanced", color: "green" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pic01.jpg" alt="Shahid M. Zubair"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Shahid M. Zubair</h1>
      <p className="desc">
        Hi! I am a full-stack developer that designs, creates and deploys
        beautiful apps! I enjoy reading books, playing chess and listening to
        heavy metal music when I'm not busuy coding.
      </p>
    </div>
  );
}

function SkillList() {
  // return (
  //   <div className="skill-list">
  //     <Skill text=".NET" emoji="🏆" bgColor="red" />
  //     <Skill text="React" emoji="🌟" bgColor="lightBlue" />
  //     <Skill text="Angular" emoji="🌈" bgColor="lightGreen" />
  //     <Skill text="JavaScript" emoji="🌈" bgColor="gray" />
  //     <Skill text="Docker" emoji="🎓" bgColor="aqua" />
  //     <Skill text="Kubernetes" emoji="✌" bgColor="magenta" />
  //     <Skill text="AWS" emoji="🗽" bgColor="violet" />
  //     <Skill text="Azure" emoji="🌍" bgColor="green" />
  //   </div>
  // );

  return (
    <div className="skill-list">
      {skills.map((x) => {
        return <Skill text={x.skill} bgColor={x.color} level={x.level} />;
      })}
    </div>
  );
}

function Skill({ bgColor, text, level }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{text}</span>
      <span>
        {/* {level === "beginner" ? "🐕" : level === "intermediate" ? "🎓" : "🏆"} */}
        {level === "beginner" && "🐕"}
        {level === "intermediate" && "🎓"}
        {level === "advanced" && "🏆"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
