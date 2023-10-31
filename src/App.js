import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "tayeb hanen",
      bio: "As a mechanical engineer, I apply my passion for innovation and my strong expertise to design solutions that drive technology to new horizons.",
      imgSrc: "https://storage.letudiant.fr/fme/job_card/188/tmp/ingenieur-mecanique-230411112324.jpg",
      profession: "mechanical engineer",
    },
    shows: false,
    intervalId: null,
    secondsSinceMount: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { shows, person, secondsSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {secondsSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
