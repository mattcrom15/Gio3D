//content
var ScreenWidth = [window.innerWidth, window.innerHeight];



//countdown
var cdownElement = document.querySelector('.ten');
function countdown(){
    var max = 600;
    var cdown = setInterval(function(){

    if (max ==10){
        cdownElement.innerHTML = 10;
        clearInterval();

    } else{
        cdownElement.innerHTML = --max;

    }

    },1);

};


// mouse 
var cursorX;
var cursorY;

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}


//canvas 
var canvasElement = document.getElementById('c');
//new three js scene
var scene = new THREE.Scene();
var clock = new THREE.Clock();
//create camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight;
// camera.updateProjectionMatrix();
//create renderer
var renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

// window.addEventListener('resize',()=>{
//     renderer.setSize(window.innerWidth,window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectMatrix();
// })


// //axis
scene.add(new THREE.AxesHelper(500));

//enviroment

var envmap_cubetext = new THREE.CubeTextureLoader();
envmap_cubetext.setPath( 'static/img/cubemap/' );

var textureCube = envmap_cubetext.load( [
	'px.png', 'nx.png',
	'py.png', 'ny.png',
	'pz.png', 'nz.png'
] );

//boat texture

var texture = new THREE.TextureLoader().load('static/img/texture.png');
texture.flipY = false;

var MeshMaterial = new THREE.MeshPhysicalMaterial({
    map: texture,
    emissive: '#fff',
    emissiveMap: texture,
    emissiveIntensity: 0.7,
    roughness: 1,
    envMap:textureCube,
    envMapIntensity: 2,


});


var Loader = new THREE.GLTFLoader();

var animation_mesh = Loader.load('meshes/baked_animation.glb',
function ( gltf ) {
    anim_mesh = gltf.scene
    anim_mesh.castShadow = true;
    anim_mesh.receiveShadow = true;
    scene.add( anim_mesh );
    anim = new THREE.AnimationMixer(anim_mesh);
    gltf.animations.forEach((clip) => {
        anim.clipAction(clip).play();
    });
    anim_mesh.traverse((mesh)=>{
        if (mesh.isMesh) mesh.material = MeshMaterial;
    });

},
// called while loading is progressing
function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
function ( error ) {

    console.log( 'An error happened' );

}
)

//directional light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3,100 );
directionalLight.rotation.x = -30 /2;
directionalLight.rotation.y = 30 /2;
directionalLight.castShadow = true
scene.add( directionalLight);
// ground plane

const geometry = new THREE.PlaneGeometry( 10, 10);
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI / 2;
plane.position.y = -0.12;
plane.receiveShadow = true;
scene.add( plane );

//camera setup
camera.position.z = 0;
camera.position.y = 5;
camera.rotation.x = -0.3;

//orbit camera
controls = new THREE.OrbitControls (camera, renderer.domElement);
    
// controls


function animate() {
    requestAnimationFrame( animate );
    controls.update()
    var delta = clock.getDelta();
    if (anim) anim.update(delta);
    renderer.render( scene, camera );




}
    



    
animate();