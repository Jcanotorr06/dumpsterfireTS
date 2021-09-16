import { IParticlesParams } from 'react-particles-js'

const ParticlesParams : IParticlesParams = {
    "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": false,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#ffda44", "#e45e49", "#ffa92f"]
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 10,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 5,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
        },
        "move": {
          "enable": true,
          "speed": 20,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
        }
      }
}

export default ParticlesParams