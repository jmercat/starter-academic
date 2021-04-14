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


<html lang="en">
  <head>
    <title>WebGL Demo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./webgl.css" type="text/css">
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>

  <script>
    main();

    //
    // Start here
    //
    function main() {
      const canvas = document.querySelector('#glcanvas');
      // Initialize the GL context
      const gl = canvas.getContext('webgl');

      // If we don't have a GL context, give up now
      // Only continue if WebGL is available and working

      if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
      }

      // Set clear color to black, fully opaque
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // Clear the color buffer with specified clear color
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  </script>
</html>
