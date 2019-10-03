import React from "react";


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



  render() {
    return (
      <div>
        <h1>Clicky Game</h1>
        <div>
          {this.state.pics.map(img => {
            return (
              <img src={img.src}></img>
            )
          })}
        </div>
      </div>
    )
  }

}

export default App;
