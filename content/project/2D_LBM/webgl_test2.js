// Création du contexte WebGL
const canvas = document.querySelector('#glcanvas');
var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

// Vertex shader program
const vertex_shader_2D = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
`;

// Fragment shader program
const fragment_shader_2D = `
  void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
  }
`;

// Création d'un programme
var programme = createProgramFromSources(gl, vertex_shader_2D, fragment_shader_2D);
gl.useProgram(programme);
// Création d'un pointeur pour les données de vertex
var emplacementPosition = gl.getAttribLocation(programme, "a_position");

// Crée un tampon et ajoute un rectangle avec des données en espace de projection déjà préparées
// (un rectangle = 2 triangles)
var tampon = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0]),
    gl.STATIC_DRAW);
gl.enableVertexAttribArray(emplacementPosition);
gl.vertexAttribPointer(emplacementPosition, 2, gl.FLOAT, false, 0, 0);

// appel de rendu
gl.drawArrays(gl.TRIANGLES, 0, 6);

