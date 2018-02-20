// color variables
const purple = new THREE.Color( 0xFFCECE );
const yellow = new THREE.Color( 0xF7F908 );
const blue = new THREE.Color( 0x1E90FF );
const red = new THREE.Color( 0xEE0404 );
const white = new THREE.Color( 0xFFFFFF );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Set Up lighting for scene
const ambientLight = new THREE.AmbientLight( 0xFFFFFF );
const lights = [];
lights[ 0 ] = new THREE.PointLight( 0xF7F908, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xC2FEC1, 1, 0 );
lights[ 2 ] = new THREE.PointLight( 0x1E90FF, 0.5, 0 );
lights[ 3 ] = new THREE.PointLight( 0xEE0404, 1, 0 );
lights[ 4 ] = new THREE.PointLight( 0xFFFFFF, 0.2, 0 );

lights[ 0 ].position.set( -50, -50, -100 );
lights[ 1 ].position.set( 100, 200, 150 );
lights[ 2 ].position.set( -100, -100, -300 );
lights[ 3 ].position.set( -300, -200, 200);
lights[ 4 ].position.set( 300, -200, 400 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );
scene.add( lights[ 3 ] );
scene.add( lights[ 4 ] );


//Make the fun shapes!
const geometry = new THREE.SphereGeometry(5, 500, 500);

const material = new THREE.MeshStandardMaterial({
  wireframe: false,
  flatShading: true,
  metalness: 0.5,
  roughness: 0.3
});

material.color = yellow;

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

//set how far out the camera view is
camera.position.z = 15;

var increment = false;

function animate() {
    requestAnimationFrame( animate );

    if (sphere.scale.x <= -1) {
      increment = true;
    }

    if (sphere.scale.x >= 2.2) {
      increment = false;
    }

    if (increment) {
      sphere.scale.x += 0.01;
      sphere.scale.y += 0.01;
      sphere.scale.z += 0.01;
    } else if (!increment) {
      sphere.scale.x -= 0.01;
      sphere.scale.y -= 0.01;
      sphere.scale.z -= 0.01;
    }

    console.log(sphere.scale.x);
    console.log(!increment);

    renderer.render( scene, camera );
  }

  animate();
