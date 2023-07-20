import React from 'react';
import './ProjectDetails.css';
export const projects = [
  {
    name: "Color Game",
    id: 'colorGame',
    tags: ['Javascript'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HTML_0,
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
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL3_PDF_0],
    pdfDescriptions: ['Project Assignment Details'],
    summary: 'Shader program using OPENGL that computes some of the possible visualizations the Mandlebrot Set, a fractal in mathematics, could produce. It\'s written in GLSL meaning it runs directly on the GPU for faster computation through parallelization.',
  },
  {
    name: "Rigging & Animation",
    id: 'rigging-animation',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_0, description: "The Skeleton Class uses a hierarchical joint structure where each joint has its own local and world transformation matrices. A joint knows its parent and maintains a list of its own children. With this structure we can use a depth-first search (DFS) traversal to calculates the world transformation matrix for each joint by multiplying the parent's world matrix with the child joint's local matrix resulting in forward and inverse kinematics", controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_1, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_1, description: "Each joint is a 3-DOF(Degree of Freedom) rotational joint, allowing rotation in the the x, y, z directions. By mapping joints to their DOF pointer we can create an interactive GUI for users to control. Skinning is done by 'binding' itself to the underlying skeleton class. This can be achieved by using the Skeletal Subspace Deformation algorithm. The skin vertices' position matrices are calculated by taking a weighted average of each connected joint's world space matrix.", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_2, description: 'A Keyframe class is created to store certain poses for a skeleton object during a particular time interval. During the playback, each frame uses a cubic spline interpolation between the nearest keyframes so that joints are rendered and rotate smoothly. Interpolation guarantees that the local transformation of each joints are updated which will also trigger the skin deformation to update as well.', controls: false },
    ],
    pdfs: [],
    pdfDescriptions: [''],
    summary: 'Using OPENGL to first animate our skeletal object we consider 4 main processes: Skeleton Rigging, Kinematics, Skinning, and Lastly Keyframe Channel Animation. These are responsible for creating the skeletal framework, handling joint movements, skin deformation, and playback loop animation.',
  },
  {
    name: "Particle System",
    id: 'particle-system',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_VIDEO_0, description: 'Single starting particles are placed on a grid randomly and are a given a certain TTL (Time to live) detonation time. They are then launched in the air generating trailing particles that have a much shorter TTL. Their trajectory was chosen by using some of my favorite trajectories such as y=arcsin(x), y=x^2, y=e^x and y=0; where x >= 0. Based on a particles location it triggers a different explosion at detonation time; generating even more particles based on shape.', controls: false }
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Created a unique particle system that generates thousands of particles to simulate a firework show. This is done Using Houdinis built in Scripting language VEX and some particle displacement calculus/physics.',
  },
  {
    name: "Decarbonizing Clouds",
    id: 'decarbonizing-clouds',
    tags: ['Research'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_1, caption: 'Carbon Intensity Map of the US on a regular day where darker regions are using more non-renewable resources.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_2, caption: 'Location of Nodes we have access to. Used for running jobs geographically via Kubernetes.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_3, caption: '1 years worth of Web Scraped Carbon Intensity ISO Power-Grid data for the Nation showing trends, influctuations, and seasonal peaks.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_4, caption: '1 day of ISO Power Grid Data givng a more realistic "day in the life" visualization.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_5, caption: 'Collecting this data lead to the development of a Carbon Aware Scheduler API that would return a list of the best optimal regions to run jobs in; these regions are the ones with lowest carbon intensity. One solution we used to utilize this API was Green Grader; a reconstruction of Gradescope\'s back end that would grade the job at the cleanest region rather than a random AWS server. By manipulating the use of their run_autograder docker script we were able to intercept the submission payload in transit to the AWS server and ingest it into our database at UCSD' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_6, caption: 'Our database works almost as the heart of our system as it is responsible for storing submissions, registering workers to run jobs, and storing the updated results after being graded. Utilizing daemons that are continously running in the cloud we can listen and passively collect new submissions so as long as our code is injected into the run_autograder script. When a submission is recieved from ingestion it is sent over to the dispatcher component which will pair with a worker and get sent over to the scheduler. The scheduler will will have to take one of three choices. 1. Run the job at UCSD on docker the server. 2. Run a container on a K8s pod we have running in a region with low carbon intensity 3. Take advantage of a new innovative and sustainable phone cluster being built in our lab. This Cluster repurposes smartphones by reinstalling their binaries to act a distributed system and run jobs via docker and communicate via MQTT/RabbitMQ.' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_0, process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_1],
    pdfDescriptions: ['White Paper', 'Green Grader Technical Description'],
    summary: "The motivation behind this project is to achieve Net Zero in datacenters; meaning the amount of carbon emission datacenters cause on the earth would be 0 compared to its current 2-3%. The first research question we faced was: 'Is it possible to take an edge-cloud latency sensitive task from city A's datacenter and run it in city B's datacenter when carbon intensity is too high in city A?' If we could find a way, without disrupting the user, that could migrate latency-sensitive tasks that needed to be computed in real time (such as autonomous vehicles, cloud-hosted gaming machines, and Wireless XR/VR solutions) then we could assume it would work for regular non-latency sensitive cloud operations. The collection and analysis of power grid data across the US nation lead to the development of a carbon aware API that would help by returning the carbon intensity of a region given a longitude and langitude. This further evolved into a carbon aware scheduler returning the best optimal regions to run jobs. Our first solution utilizing this API is Green Grader, an eco-friendly autograder that re-implements GradeScope's back-end to geographically run jobs and then compare the carbon metrics of our grading solution with GradeScope's back end, which uses a random AWS server.",
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
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL1_PDF0],
    pdfDescriptions: ['Project Assignment Details'],
    summary: 'Using a DFS scene-builder graph algrorithm, the Blinn-Phong shading model, and GLSL for shading, we can render our scene (objects and their respective world-space matrices for 3D positions, materials for texture and colors, etc) and calculate local illumination simultaneously. GLSL helps by running on the GPU which gives the advantage of parallelization.',
  },
  {
    name: "Shadow Mapping",
    id: 'shadow-mapping',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_1, caption: "We first take our original scene without shadows and just the blinn-phong model; Going forward we limit our light source objects to one to avoid expensive and complex computations with multiple z-distances." },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_3, caption: 'After calculating the Z-distance (distance beween the light source and other objects) we store this information in a map and then calculate our scene again from the camera POV allowing to cast where shadows will be placed' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_2, caption: "Sometimes shadows are casted where they shouldn't be because of the limitations of the depth values that were mapped. This is known as Shadow Acne" },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_4, caption: 'We fix this by adding a bias to the sampled depth values during the comparison process bringing it closer to the light source which reduces the chance of unwanted shadows.' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_5, caption: '' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_PDF0, process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_PDF1],
    pdfDescriptions: ['Technical Description', 'Project Assignment Details'],
    summary: "This project extends on Local Illumination by incorporating a shadow component into the Blinn-Phong lighting model. Shadow mapping is a technique used for generating shadows without needing to build an optimized raytracer. It uses a two-pass algorithm where in the first pass it renders the scene from the light's perspective, creating a shadow map (or a depth buffer) and in the second pass, it renders the scene from the camera's PoV. This second pass checks if each point is in shadow by comparing its distance to the light using the shadow map acquired in the first pass."
  },
  {
    name: "Network Simulator",
    id: 'network-simulator',
    summary: 'ERSP 2020 - Presentation simulating Opera, a dynamic network topology created to reduce traffic congestion which would reduce the overall CO2 caused by datacenter operations. By building numerous network topologies to compare and simulate against Opera, we have verified Opera to sustain remarkable high-bandwidth and low latency even with straneous workloads such as streaming/uploading multiple 4k videos and training nueral networks using tensorflow with large datasets',
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
    name: "Subdivision",
    id: 'subdivision',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_1, description: 'Bezier Curves are parametric and are usedd to produce smooth curves compared to the low resolution polygons. We these curves in commercial software such as Photoshop.', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_2, description: 'Subdivison aims to achieve the same smoothness as the Bezier Curve but is done recursively and is subdivided into smaller polygons. This technique is also great for rendering smooth surface meshes such as spheres or ellipsoids.', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_0, description: 'Unlike the Bezier Curve, the B Splines allow knot vectors which help determine the influence of all the control points and represent surfaces the Bezier Curve cannot such as Circles and Ellipses. They are affine invariance (preserve properties when scaled/translated/rotated)', controls: false },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1, caption: '' },
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL4_PDF_0],
    pdfDescriptions: ['Project Write Up'],
    summary: 'Bezier Curves, B-spline Curves, Sub-Division curves',
  },
  {
    name: "Cloth Simulation",
    id: 'cloth-simulation',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_1, description: "Aerodynamic Drag is calculated by using the Drag Equation (Fd = 0.5 * ρ * V^2 * Cd * ) where ρ represents the fluid density and Cd the drag coefficent. Aerodynamic force is calculated based on the relative velocity of the air and the surface of the cloth, the respective surface area, and the drag coefficient where the resulting force is spread across all triangle vertices creating a vector field for wind. By using a dampering coefficent for each frame calculation we can mimic air resistance. At each time step the acceleration, velocity, and position of each mass point are updated based on the current forces. This is knwon as the Forward Euler integration method. ", controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_0, description: "Each vertex of a triangle represents a mass point that is connected to two other vertices acting as our spring dampers. Spring dampering is modeled using Hooke's law (F = -k * x) which states that the force exerted by a spring is proportional to its strain (the change in length divided by the rest length). The resulting stress, or force per unit area,  is calculated by taking the Young's modulus and multiplying it with the strain. When vertices move they exert forces on the spring dampers causing them to stretch or compress but not fold into each other.", controls: false },
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: " The process of simulating realistic cloth uses Houdini's scripting langauge, VEX. We use triangles to form the cloth mesh and spring dampers with Hooke's Law to provide elasticity to the mesh. Aerodynamic drag, a force that resists the motion of an object through a fluid (in this case, air), is then calculated to simulate wind.",
  },
];



const ImageWithCaption = ({ src, caption }) => (
  <div className="image-with-caption">
    <img src={src} alt={caption} />
    <p>{caption}</p>
  </div>
);

const VideoComponent = ({ src, controls }) => (
  <div className="video-container">
    <video
      autoPlay={!controls}
      muted={!controls}
      playsInline
      loop={!controls}
      controls={controls}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const PDFLink = ({ src, description }) => (
  <div className="project-pdf">
    <a href={src} target="_blank" rel="noopener noreferrer">
      {description}
    </a>
  </div>
);
const checkMediaType = (project) => {
  if (project.media && project.media.length > 0) {
    return project.media.map((media, index) => {
      if (media.type === 'image') {
        return (
          <div key={index}>
            <ImageWithCaption src={media.src} />
            <p>{media.caption}</p>
          </div>
        );
      } else if (media.type === 'video') {
        if (media.description) {
          return (
            <div key={index}>
              <VideoComponent src={media.src} controls={media.controls} />
              <p>{media.description}</p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <VideoComponent src={media.src} controls={media.controls} />
              <p>{media.caption}</p>
            </div>
          );
        }
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
};

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details text-white">
      <h1 className='title-color'>{project.name}</h1>

      <div className="project-summary">
        <p>{project.summary}</p>
      </div>
      <div className='project-pdfs'>
      {project.pdfs && project.pdfs.map((pdf, index) => (
        <PDFLink key={index} src={pdf} description={project.pdfDescriptions[index]} />
      ))}
  </div>
      <div className="project-media video-container">
        {checkMediaType(project)}

      </div>
    </div>

  );
};


export default ProjectDetails;
