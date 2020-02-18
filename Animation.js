export default class Animation {

  /**
   * @param {int} speed
   * @param {string} init
   * @returns {Array}
   */
  static animate(speed, init) {

    return getSnapshotStrings(getParticles(init), speed, init.length);

  }

}

/**
 * Parses str and returns an array of Particle objects.
 * @param str
 * @returns {Array}
 */
function getParticles(str) {

  let particles = [];

  for (let i = 0; i < str.length; i++) {

    if (str[i] === 'L' || str[i] === 'R') {

      particles.push({
        direction: str[i],
        position: i
      });

    }

  }

  return particles;

}

/**
 * @param {object} particle
 * @param {int} speed //positions/step
 * @returns {object}
 */
function getParticleAtNextStep(particle, speed) {

  if (particle.direction === 'R') {

    particle.position += speed;

  } else {

    particle.position -= speed;

  }

  return particle;

}

/**
 * @param {array} particles
 * @param {int} speed
 * @param {int} fieldSize
 * @returns {Array}
 */
function getParticlesAtNextStep(particles, speed, fieldSize) {

  let new_particles = [];

  //get all particles at next step
  particles.map(particle => {

    let p = getParticleAtNextStep(particle, speed);

    if (p.position >= 0 && p.position < fieldSize) {

      new_particles.push(p);

    }

  });

  return new_particles;

}

/**
 * @param {array} particles
 * @param {int} fieldSize
 * @returns {string}
 */
function generateStringFromParticles(particles, fieldSize) {

  let arr = new Array(fieldSize).fill('.');

  particles.map(particle => {

    arr[particle.position] = 'x';

  });

  return arr.join('');

}

/**
 * Returns an array of strings, each string representing the positions of the particles in the field at each incremental
 * step. The length of the array will equal the number of steps until all of the particles have exited the field.
 * @param {array} particles
 * @param {int} speed
 * @param {int} fieldSize
 * @returns {Array}
 */
function getSnapshotStrings(particles, speed, fieldSize) {

  let snapshots = []; //array of strings
  let currentParticles = particles; //current snapshot (array of particles)

  while(currentParticles.length) {

    snapshots.push(generateStringFromParticles(currentParticles, fieldSize));
    currentParticles = getParticlesAtNextStep(currentParticles, speed, fieldSize);

  }

  //make last one that's empty
  snapshots.push(generateStringFromParticles([], fieldSize));

  return snapshots;

}
