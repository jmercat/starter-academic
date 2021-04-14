---
title: Two dimensional lattice boltzmann fluid simulation
summary: A C++ implementation of the lattice boltzmann D2Q9 fluid simulation with immersed boundaries.
tags:
- Scientific Computing
date: "2017-10-25T00:00:00Z"

# Optional external URL for project (replaces project detail page).
# external_link: ""

image:
  caption: Kármán vortex street
  focal_point: Smart

links:
url_code: "https://github.com/jmercat/2D_LBM/"
url_video: "https://youtu.be/s7RWTfwuPZo"
---


This project is the continuation of a school project made at [ENSEIRB-MatMeca](https://enseirb-matmeca.bordeaux-inp.fr) in Fortran. I have re-written it in C++ using the [Eigen](https://eigen.tuxfamily.org/index.php?title=Main_Page) library and added a simple [Qt](https://www.qt.io/) interactive interface.

{{< youtube s7RWTfwuPZo >}}

---

<script type="text/javascript" src="{{ <body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
  main();
  
  //
  // Début ici
  //
  function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialisation du contexte WebGL
    const gl = canvas.getContext("webgl");
  
    // Continuer seulement si WebGL est disponible et fonctionnel
    if (!gl) {
      alert("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.");
      return;
    }
  
    // Définir la couleur d'effacement comme étant le noir, complètement opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Effacer le tampon de couleur avec la couleur d'effacement spécifiée
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
  }
</body> }}" defer> </script>

---
