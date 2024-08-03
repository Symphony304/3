// Configuración básica de Three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5); // Color de fondo

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('gameContainer').appendChild(renderer.domElement);

// Agregar luz
const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiental
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
directionalLight.position.set(5, 10, 7.5).normalize();
scene.add(directionalLight);

// Crear el cielo
const skyGeometry = new THREE.PlaneGeometry(500, 500);
const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.DoubleSide });
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
sky.position.set(0, 250, 0);
sky.rotation.x = Math.PI / 2;
scene.add(sky);

// Crear el suelo
const groundGeometry = new THREE.PlaneGeometry(500, 500);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Crear una forma de gallina detallada
const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.position.y = 1.5;

const neckGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
const neckMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const neck = new THREE.Mesh(neckGeometry, neckMaterial);
neck.position.set(0, 2, 0);

const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const headMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.set(0, 2.8, 0);

const beakGeometry = new THREE.ConeGeometry(0.2, 0.4, 32);
const beakMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
const beak = new THREE.Mesh(beakGeometry, beakMaterial);
beak.rotation.y = Math.PI;
beak.position.set(0, 2.8, 0.6);

const wingGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 32);
const wingMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const wingLeft = new THREE.Mesh(wingGeometry, wingMaterial);
wingLeft.rotation.z = Math.PI / 2;
wingLeft.position.set(-1.2, 1.5, 0);

const wingRight = new THREE.Mesh(wingGeometry, wingMaterial);
wingRight.rotation.z = Math.PI / 2;
wingRight.position.set(1.2, 1.5, 0);

// Crear patas
const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
const legMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
const legLeft = new THREE.Mesh(legGeometry, legMaterial);
legLeft.position.set(-0.5, 0.5, 0);

const legRight = new THREE.Mesh(legGeometry, legMaterial);
legRight.position.set(0.5, 0.5, 0);

// Crear pies
const footGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.5);
const footMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
const footLeft = new THREE.Mesh(footGeometry, footMaterial);
footLeft.position.set(-0.5, 0, 0.3);

const footRight = new THREE.Mesh(footGeometry, footMaterial);
footRight.position.set(0.5, 0, 0.3);

// Crear ojos
const eyeGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeLeft.position.set(-0.2, 3.0, 0.35);

const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeRight.position.set(0.2, 3.0, 0.35);

// Crear pupilas
const pupilGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const pupilMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
const pupilLeft = new THREE.Mesh(pupilGeometry, pupilMaterial);
pupilLeft.position.set(-0.2, 3.0, 0.4);

const pupilRight = new THREE.Mesh(pupilGeometry, pupilMaterial);
pupilRight.position.set(0.2, 3.0, 0.4);

// Crear cresta
const crestGeometry = new THREE.ConeGeometry(0.15, 0.3, 32);
const crestMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const crest = new THREE.Mesh(crestGeometry, crestMaterial);
crest.rotation.x = Math.PI;
crest.position.set(0, 3.3, 0);

// Crear cola
const tailGeometry = new THREE.ConeGeometry(0.3, 0.5, 32);
const tailMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const tail = new THREE.Mesh(tailGeometry, tailMaterial);
tail.rotation.x = Math.PI / 2;
tail.position.set(0, 1.0, -1.0);

// Agrupar todas las partes de la gallina
const player = new THREE.Group();
player.add(body);
player.add(neck);
player.add(head);
player.add(beak);
player.add(wingLeft);
player.add(wingRight);
player.add(legLeft);
player.add(legRight);
player.add(footLeft);
player.add(footRight);
player.add(eyeLeft);
player.add(eyeRight);
player.add(pupilLeft);
player.add(pupilRight);
player.add(crest);
player.add(tail);
scene.add(player);

// Crear enemigos
const enemies = [];
const enemyGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const enemyMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });

for (let i = 0; i < 5; i++) {
    const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
    enemy.position.set(Math.random() * 10 - 5, 0.5, Math.random() * 10 - 5);
    enemies.push(enemy);
    scene.add(enemy);
}

// Crear recolectables
const collectibles = [];
const collectibleGeometry = new THREE.TetrahedronGeometry(0.5);
const collectibleMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });

for (let i = 0; i < 5; i++) {
    const collectible = new THREE.Mesh(collectibleGeometry, collectibleMaterial);
    collectible.position.set(Math.random() * 10 - 5, 0.5, Math.random() * 10 - 5);
    collectibles.push(collectible);
    scene.add(collectible);
}

camera.position.set(0, 3, 5);  // Posicionar la cámara un poco más arriba y atrás

// Movimiento del jugador
const keys = {
    forward: false,
    backward: false,
    left: false,
    right: false
};

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            keys.forward = true;
            break;
        case 'ArrowDown':
            keys.backward = true;
            break;
        case 'ArrowLeft':
            keys.left = true;
            break;
        case 'ArrowRight':
            keys.right = true;
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            keys.forward = false;
            break;
        case 'ArrowDown':
            keys.backward = false;
            break;
        case 'ArrowLeft':
            keys.left = false;
            break;
        case 'ArrowRight':
            keys.right = false;
            break;
    }
});

function movePlayer() {
    if (keys.forward) player.position.z -= 0.1;
    if (keys.backward) player.position.z += 0.1;
    if (keys.left) player.position.x -= 0.1;
    if (keys.right) player.position.x += 0.1;
}

function followPlayer(enemy) {
    const speed = 0.1; // Aumentar la velocidad de los enemigos
    const dx = player.position.x - enemy.position.x;
    const dz = player.position.z - enemy.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);

    if (distance > 0.1) {  // Evitar que el enemigo entre dentro del jugador
        enemy.position.x += (dx / distance) * speed;
        enemy.position.z += (dz / distance) * speed;
    }
}

function updateCamera() {
    camera.position.x = player.position.x;
    camera.position.z = player.position.z + 5;
    camera.position.y = player.position.y + 3;  // Ajustar la altura de la cámara
    camera.lookAt(player.position);
}

function checkCollisions() {
    enemies.forEach((enemy) => {
        const distance = player.position.distanceTo(enemy.position);
        if (distance < 1) {
            console.log('Colisión con enemigo!');
            disassemblePlayer();
        }
    });
}

function disassemblePlayer() {
    player.children.forEach((part) => {
        const velocity = 2; // Velocidad de dispersión
        part.position.x += (Math.random() - 0.5) * velocity;
        part.position.y += (Math.random() - 0.5) * velocity;
        part.position.z += (Math.random() - 0.5) * velocity;
        part.rotation.x += (Math.random() - 0.5) * Math.PI;
        part.rotation.y += (Math.random() - 0.5) * Math.PI;
        part.rotation.z += (Math.random() - 0.5) * Math.PI;
    });
}

// Animación de las piernas
let legSpeed = 0.3;
function animateLegs() {
    const time = Date.now() * 0.005;
    const legMovement = Math.sin(time) * legSpeed;
    legLeft.rotation.x = legMovement;
    legRight.rotation.x = -legMovement;
}

function animate() {
    requestAnimationFrame(animate);

    // Movimiento del jugador
    movePlayer();

    // Movimiento de los enemigos
    enemies.forEach(followPlayer);

    // Actualización de la cámara
    updateCamera();

    // Comprobar colisiones
    checkCollisions();

    // Detección de colisiones con recolectables
    collectibles.forEach((collectible, index) => {
        if (player.position.distanceTo(collectible.position) < 1) {
            scene.remove(collectible);
            collectibles.splice(index, 1);
            console.log('Recolectable recogido!');
        }
    });

    // Animación de las piernas solo si el jugador se está moviendo
    if (keys.forward || keys.backward || keys.left || keys.right) {
        animateLegs();
    } else {
        legLeft.rotation.x = 0;
        legRight.rotation.x = 0;
    }

    renderer.render(scene, camera);
}

animate();
