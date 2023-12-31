const projects = [
  {
    name: "Color Game",
    id: 'colorGame',
    tags: ['Javascript'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HTML_0,
  },
  {
    name: "Decarbonizing Clouds",
    id: 'decarbonizing-clouds',
    tags: ['Research'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_1, caption: 'Carbon Intensity Map of the US on a regular day where darker regions are using more non-renewable resources.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_2, caption: 'Location of Nodes we have access to through the National Research Platform (NRP). Used for running jobs geographically via Kubernetes.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_3, caption: "1 year's worth of Web Scraped Carbon Intensity ISO Power-Grid data for the Nation showing trends, fluctuations, and seasonal peaks."},
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_4, caption: '1 day of ISO Power Grid Data giving a more realistic "day in the life" visualization.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_5, caption: 'Green Grader chooses to grade jobs at in cleanest region utilizing the carbon aware scheduler API; Gradescope runs their work on an arbitrary AWS server. By manipulating the use of their run_autograder docker script we were able to intercept the submission payload in transit to the AWS server and ingest it into our database at UCSD' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_6, caption: 'The database works as the heart of our system as it is responsible for storing submissions, registering workers to run jobs, and storing the updated results after being graded. Utilizing daemons that are continuously running in the cloud we can listen and passively collect new student submissions so as long as our code is injected into the run_autograder script. When a submission is received from ingestion it is sent over to the dispatcher component which will pair with a worker and get sent over to the scheduler. The scheduler will then have to make one of three choices. 1. Run the job at our UCSD server using docker. 2. Run a docker container in a K8s pod that is currently running in a region with low carbon intensity 3. Take advantage of a new innovative and sustainable "junkyard" phone cluster being built in our research cohort. This cluster repurposes smartphones by reinstalling their binaries to act as a distributed system and run jobs via docker and communicate via MQTT/RabbitMQ.' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_0, process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_1],
    pdfDescriptions: ['White Paper', 'Green Grader Technical Description'],
    summary: "The motivation behind this project is to achieve Net Zero in data centers; meaning the amount of carbon emission data centers cause on the earth would be 0 compared to its current 2-3%. Faced with the following research question: 'Is it possible to take an edge-cloud latency sensitive task from city A's datacenter and run it in city B's datacenter when carbon intensity is too high in city A?' If we could find a way, without disrupting the user, that could migrate latency-sensitive tasks that needed to be computed in real-time, then we can assume it would work for all regular non-latency sensitive cloud operations. A few examples of applications that rely on an edge-cloud latency-sensitive connection are autonomous vehicles, cloud-hosted gaming machines, and 5G Wireless XR/VR solutions. Here, carbon intensity measures the CO2 impact from ISO power grids; calculating carbon intensity takes into account both the 'dirty' emissions from fossil fuels and  'clean' emissions from renewable sources. Collecting and analyzing this data lead to the development of a carbon-aware API that would return the carbon intensity of a region given longitude and latitude which further evolved into a carbon-aware scheduler for returning the best optimal regions to run jobs. The first solution utilizing this API is Green Grader, an eco-friendly autograder that re-implements GradeScope's back-end to geographically run jobs and then compares the carbon metrics of our grading solution with GradeScope's, which uses a random AWS server.",
  },
  {
    name: "Rigging & Animation",
    id: 'rigging-animation',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_0, description: "The Skeleton Class uses a hierarchical joint structure where each joint has its own local and world transformation matrices. A joint knows its parent and maintains a list of its own children. With this structure, we can use a depth-first search (DFS) traversal on an N-ary tree to calculate the world transformation matrix for each joint by multiplying the parent's world matrix with the child joint's local matrix. This results in the process of forward and inverse kinematics", controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_1, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_1, description: "Each joint is a 3-DOF(Degree of Freedom) rotational joint, allowing rotation in the x, y, and z directions. By mapping joints to their DOF pointer we can create an interactive GUI for users to control. Skinning is done by 'binding' itself to the underlying skeleton class. This can be achieved by using the Skeletal Subspace Deformation algorithm. The skin vertices' position matrices are calculated by taking a weighted sum average of each connected joint's world space matrix.", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_2, description: 'A Keyframe class is created to store certain poses for a skeleton object during a particular time interval. During the playback, each frame uses a cubic spline interpolation between the nearest keyframes so that joints are rendered and rotated smoothly. Interpolation guarantees that the local transformation of each joint is updated which will also trigger the skin deformation to update as well.', controls: false },
    ],
    pdfs: [],
    pdfDescriptions: [''],
    summary: 'To create an animation playback using OpenGL we consider 4 main processes: Skeleton Rigging, Kinematics, Skinning, and Lastly Keyframe Channel Animation. These are responsible for creating the skeletal framework, handling joint movements, skin deformation, and playback loop animation.',
  },
  {
    name: "Network Simulator",
    id: 'network-simulator',
    summary: 'ERSP 2020 - Presentation simulating Opera, a dynamic network topology created to reduce traffic congestion which would reduce the overall CO2 caused by data center operations. By building numerous network topologies to compare and simulate against Opera, we have verified Opera to sustain remarkable high-bandwidth and low latency even with strenuous workloads such as streaming/uploading multiple 4k videos and training neural networks using TensorFlow with large datasets', 
    tags: ['Research', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_IMAGE_0,
    media: [
      { type: 'image', src: '', caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_VIDEO_0, description: '', controls: true }
    ],
    pdfs: [
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_0,
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_1,
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_2
    ],
    pdfDescriptions: ["Motivation", "Research Proposal", " Research Final Poster"],
  },
  {
    name: "Cloth Simulation",
    id: 'cloth-simulation',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_0, description: "Young's modulus measures the stiffness of a material by calculating the strain under stress ->  stress = Y * strain; where Y represents the constant for Young's modulus. Holding cloth up by its two end vertices causes a vertical strain as gravity pulls the cloth downward. The cloth will try to resist using the resistance coefficient by Young's. The higher Young's is the more resistance. When vertices move they exert forces on the springs causing them to stretch or compress but not fold into each other.", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_1, description: "Aerodynamic Drag is calculated by using the Drag Equation (Fd = 0.5 * ρ * V^2 * Cd * ) where ρ represents the fluid density and Cd the drag coefficent. Aerodynamic force is calculated based on the relative velocity of the air and the surface of the cloth, the respective surface area, and the drag coefficient where the resulting force is spread over all of the triangle vertices on the mesh grid. This creates a wind vector field on our cloth's surface. By using a dampering coefficent for each frame calculation we can mimic air resistance. During each time step the acceleration, velocity, and position of each mass point is updated based on the current active forces. This is known as the Forward Euler integration method. ", controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_1, caption: 'Pin 0 and pin 20 (the two top end points) are pinned and hold the cloth; gravity tries its hardest to pull the grid down. We can see: Each spring damper numbered in blue and the cloth\'s wind surface caused by the aerodynamic drag.' },

      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_2,  description: "When the fluid (air) interacts with the cloth it creates a vector field on the cloth's surface in the direction of the wind's velocity. You can change the viscosity (thickness of the fluid) by tweaking the fluid density coefficient, rho, affecting the aerodynamic drag. Using a denser fluid creates more resistance to the cloth's motion increasing the aerodynamic drag.", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_3,  description: "When our wind has 0 velocity in all XYZ directions, the cloth will simply fall and be held by the damping system. The vector field shows no wind simulating on the surface.", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_4,  description: "Under rigorous weather conditions, the damping system is able to hold itself together without folding into itself", controls: false },      

    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: " Simulating realistic cloth using Houdini's scripting language, Vex. Using a grid of triangles to form the cloth mesh, we can attach a spring damper to each connecting vertex simulating elasticity with Hooke's law; more so a generalized version, Young's Modulus. Then Aerodynamic drag, the force that resists the motion of an object through a fluid, is simulated by creating a vector field on the cloth's surface.",
  },
  {
    name: "Local Illumination",
    id: 'local-illumination',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_3, caption: 'In the original Phong model, the specular component is calculated using the reflection vector and the viewing direction. The angle between these two vectors is used to determine the intensity of the specular highlight.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_4, caption: 'Blinn-Phong, on the other hand, introduces the concept of a half-vector. The half-vector is the unit vector that lies exactly halfway between the light source vector and the view vector. The specular term is then calculated using the angle between the half-vector and the normal vector. This results in a more realistic specular highlight.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_5, caption: 'Ambient light is the base color of an object without light; it provides little illumination across the scene.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_6, caption: "Diffuse light Produces the primary color of an object under lighting. We calculate this by taking the dot product of light direction and surface normal further to be scaled by the color of the lights and objects." },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_8, caption: 'Here we can see both ambient and diffuse in action without the emission or specular component active.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_7, caption: 'Specular light is what provides the shine highlighting onto object. We calculate this by raising the dot product of the surface normal and half-vector to the power of the shininess factor ( a material constant).' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_1, caption: 'Now we can see this all together using the formal definition: I = Iambient + Idiffuse + Ispecular + Iemission, where emission is the scalar that represents the amount of light an individual light object produces.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_2, caption: '' }
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Using a DFS scene-builder graph algorithm, the Blinn-Phong shading model, and GLSL for shading, we can render our scene (objects and their respective world-space matrices for 3D positions, materials for texture and colors, etc) and calculate local illumination simultaneously. GLSL helps by running on the GPU which gives the advantage of parallelization.',
  },
  {
    name: "Shadow Mapping",
    id: 'shadow-mapping',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_1, caption: "We first take our original scene without shadows and just the blinn-phong model; Going forward we limit our light source objects to one to avoid expensive and complex computations with multiple z-distances." },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_3, caption: 'After calculating the Z-distance (distance between the light source and other objects) we store this information in a map and then calculate our scene again from the camera POV allowing to cast where shadows will be placed' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_2, caption: "Sometimes shadows are cast where they shouldn't be because of the limitations of the depth values that were mapped. This is known as Shadow Acne" },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_4, caption: 'We fix this by adding a bias to the sampled depth values during the comparison process bringing it closer to the light source which reduces the chance of unwanted shadows.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_5, caption: '' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_PDF0],
    pdfDescriptions: ['Technical Description'],
    summary: "This project extends Local Illumination by incorporating a shadow component into the Blinn-Phong lighting model. Shadow mapping is a technique used for generating shadows without needing to build an optimized raytracer. It uses a two-pass algorithm where in the first pass it renders the scene from the light's perspective, creating a shadow map (or a depth buffer) and in the second pass, it renders the scene from the camera's PoV. This second pass checks if each point is in shadow by comparing its distance to the light using the shadow map acquired in the first pass."
  },
  {
    name: "Fragment Shader",
    id: 'fragment-shader',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_2,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_2, description: '', controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_0, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_1, description: '', controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_0, description: '', controls: false },
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Shader program using OpenGL that computes some of the possible visualizations the Mandelbrot Set, a fractal in mathematics, could produce. It\'s written in GLSL meaning it runs directly on the GPU for faster computation through parallelization.',
  },
  {
    name: "Particle System",
    id: 'particle-system',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_VIDEO_0, description: 'Single starting particles are placed on a grid randomly and are a given a certain TTL (Time to live) detonation time. They are then launched in the air generating trailing particles that have a much shorter TTL. Their trajectory was chosen by using some of my favorite graphs such as y=arcsin(x), y=x^2, y=e^x and y=0; where x >= 0. Based on the location of a particle it triggers a different explosion at detonation time; generating even more particles based on shape. The explosion particles gain velocity in their respective direction', controls: false }
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Created a unique particle system that generates thousands of particles to simulate a firework show. This is done Using Houdinis built-in Scripting language VEX and some particle displacement calculus/physics.',
  },
  {
    name: "Parametric Curves",
    id: 'subdivision',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_1, description: 'Bezier Curves are parametric and are to produce smooth curves compared to the low-resolution polygons. We use these curves in commercial software such as Photoshop.', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_2, description: 'Subdivison aims to achieve the same smoothness as the Bezier Curve but is done recursively and is subdivided into smaller polygons. This technique is also great for rendering smooth surface meshes such as spheres or ellipsoids.', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_0, description: 'Unlike the Bezier Curve, the B Splines allow knot vectors which help determine the influence of all the control points and are able to represent surfaces the Bezier Curve cannot such as Circles and Ellipses; they are also affine invariance (preserve properties when scaled/translated/rotated).', controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1, caption: 'Here we see the same curve under Bezier Conditions compared to the B-Spline full spiral.' },
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Bezier, B-spline, and Sub-Division Curves',
  },
]

export default projects;
