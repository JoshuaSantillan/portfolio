import * as THREE from 'three';

// create new geometry buffer
this.geometry = new THREE.BufferGeometry();

// vec3 Attributes for particles
this.geometry.addAttribute('position',      new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
this.geometry.addAttribute('positionStart', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
this.geometry.addAttribute('velocity',      new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
this.geometry.addAttribute('acceleration',  new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
this.geometry.addAttribute('color',         new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
this.geometry.addAttribute('endColor',      new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));



//scalar attributes
this.geometry.addAttribute('startTime',     new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));
this.geometry.addAttribute('size',          new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));
this.geometry.addAttribute('TTL',      new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));



// Create System
this.particleSystem = new THREE.Points(this.geometry, this.material);
this.particleSystem.frustumCulled = false;
this.add(this.particleSystem);


// Update Velocity if not set leave at 0
velocity = options.velocity !== undefined ? velocity.copy(options.velocity) : velocity.set(0, 0, 0);
const velocityAttribute = this.geometry.getAttribute('velocity')
velocityAttribute.array[i * 3 + 0] = velocity.x;
velocityAttribute.array[i * 3 + 1] = velocity.y;
velocityAttribute.array[i * 3 + 2] = velocity.z;