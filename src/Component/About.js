import React from "react";

const About = ({ history, location }) => {
  const {
    movie: { name, rate },
  } = location.state;
  return (
    <div>
      About page<button onClick={() => history.push("/")}>Go Home</button>
      <button onClick={() => history.goBack()}>Go back</button>
      <h2>{name}</h2>
    </div>
  );
};

export default About;
