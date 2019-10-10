import React from "react";
import "./style.css"

class App extends React.Component {
  state = {
    wins: 0,
    losses: 0,
    score: 0,
    clicked: [],
    pics: [
      { name: "balloons", src: require("./images/balloons.jpg") },
      { name: "bigsplash", src: require("./images/bigsplash.jpg") },
      { name: "butterflies", src: require("./images/butterflies.jpg") },
      { name: "candy", src: require("./images/candy.jpg") },
      { name: "dots", src: require("./images/dots.jpg") },
      { name: "flower", src: require("./images/flower.jpg") },
      { name: "ink", src: require("./images/ink.jpg") },
      { name: "paint", src: require("./images/paint.jpg") },
      { name: "pencils", src: require("./images/pencils.jpg") },
      { name: "ray", src: require("./images/ray.jpg") },
      { name: "splashes", src: require("./images/splashes.jpg") },
      { name: "world", src: require("./images/world.jpg") }

    ]
  }

  handleClick = (name) => {
    

    if (this.state.clicked.includes(name)) {
      this.setState({ losses: this.state.losses + 1, score: 0, clicked: [] })
    }
    else {
      this.state.clicked.push(name)
      const newPics = this.state.pics.sort((a, b) => .5 - Math.random())
      this.setState({ pics: newPics, score:this.state.score+1 })

      // if 
        // (this.state.cliked(=this.state.length (this.setState({ wins: this.state.wins +1}

      
        }


  }



  render() {
    return (
      <div>
        <h1>Clicky Game</h1>
        <h2>Score: {this.state.score} </h2>
        <h2>Wins: {this.state.wins} </h2>
        <h2>Losses: {this.state.losses} </h2>
        <div>
          {this.state.pics.map(img => {
            return (
              <img src={img.src} alt={img.name}
                onClick={() => this.handleClick(img.name)}
              ></img>
            )
          })}
        </div>
      </div>
    )
  }

}

export default App;
