import React, { useContext } from "react";
import "./Home.css";
import img from "./home.jpg";
import { useLoggedUser } from "../../App";

export default function Home({ goToQuizes, openLogInModal }) {
  const { loggedUser } = useLoggedUser();
  console.log(loggedUser?.toString()?.length);
  console.log("dw")
  // console.log(!loggedUser);
  return (
    <div className="Home">
      <div>
        <h2 className="HomeTitle">Test your trivia with QuizApp</h2>
      </div>
      <img className="HomeImg" src={img} alt="" />
      <div className="HomeText">
        <p>Boost your brainpower with our quizzes</p>
      </div>
      {loggedUser ? (
        <button className="HomeButton" onClick={goToQuizes}>
          Start solving!!!
        </button>
      ) : (
        <button className="HomeButton" onClick={openLogInModal}>
          Start solving
        </button>
      )}
    </div>
  );
}
