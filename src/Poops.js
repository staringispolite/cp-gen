import * as React from "react";

const layers = {};
const layerKeys = {
  BACKGROUNDS: "backgrounds",
  BACK_ACCESSORIES: "back_accessories",
  BODIES: "bodies",
  FACES: "faces",
  FRONT_ACCESSORIES: "front_accessories",
};

layers[layerKeys.BACKGROUNDS] = [
  {
    name: "orange",
    minRoll: 90,
    url: "layers/backgrounds/orange.png"
  }, {
    name: "green",
    minRoll: 70,
    url: "layers/backgrounds/green.png"
  }, {
    name: "default",
    minRoll: 0,
    url: "layers/backgrounds/blue.png"
  },
];

layers[layerKeys.BACK_ACCESSORIES] = [
  {
    name: "rainbow",
    minRoll: 95,
    url: "layers/back_accessories/rainbow.png"
  }, {
    name: "flame",
    minRoll: 90,
    url: "layers/back_accessories/flame.png"
  }, {
    name: "wings",
    minRoll: 70,
    url: "layers/back_accessories/wings.png"
  }, {
    name: "default",
    minRoll: 0,
    url: "layers/back_accessories/none.png"
  },
];

layers[layerKeys.BODIES] = [
  {
    name: "alien",
    minRoll: 90,
    url: "layers/base/alien.png"
  }, {
    name: "black",
    minRoll: 80,
    url: "layers/base/black.png"
  }, {
    name: "brown",
    minRoll: 0,
    url: "layers/base/brown.png"
  },
];

layers[layerKeys.FACES] = [
  {
    name: "dead",
    minRoll: 90,
    url: "layers/face/dead.png"
  }, {
    name: "sad_sweat",
    minRoll: 70,
    url: "layers/face/sad_sweat.png"
  }, {
    name: "smile1",
    minRoll: 0,
    url: "layers/face/smile1.png"
  },
];

layers[layerKeys.FRONT_ACCESSORIES] = [
  {
    name: "sprinkles",
    minRoll: 90,
    url: "layers/front_accessories/sprinkles.png"
  }, {
    name: "hat",
    minRoll: 80,
    url: "layers/front_accessories/hat.png"
  }, {
    name: "grass",
    minRoll: 70,
    url: "layers/front_accessories/grass.png"
  }, {
    name: "default",
    minRoll: 0,
    url: "layers/front_accessories/none.png"
  },
];

function randomLayer(layerKey) {
  const foregrounds = layers[layerKey];
  let chosenForeground = null;
  let randomRoll = Math.random() * 100;

  for (let i = 0; i < foregrounds.length; i++) {
    let foreground = foregrounds[i];
    if (randomRoll >= foreground.minRoll) {
      chosenForeground = foreground.url;
      break;
    }
  }

  return chosenForeground;
}

class Poop extends React.Component {
  render() {
    const background = randomLayer(layerKeys.BACKGROUNDS);
    const back_accessory = randomLayer(layerKeys.BACK_ACCESSORIES);
    const body = randomLayer(layerKeys.BODIES);
    const face = randomLayer(layerKeys.FACES);
    const front_accessory = randomLayer(layerKeys.FRONT_ACCESSORIES);

    return (
      <div class="cryptopoop">
        <span>Poop {this.props.id}</span>
        <div class="cp-stack">
          <img class="cp-thumb cp-layer cp-background" src={background} alt="background"/>
          <img class="cp-thumb cp-layer cp-back-accessory" src={back_accessory} alt="back_accessory"/>
          <img class="cp-thumb cp-layer cp-body" src={body} alt="body"/>
          <img class="cp-thumb cp-layer cp-face" src={face} alt="face"/>
          <img class="cp-thumb cp-layer cp-front-accessory" src={front_accessory} alt="front_accessory"/>
        </div>
      </div>
    );
  }
}

export default Poop;
