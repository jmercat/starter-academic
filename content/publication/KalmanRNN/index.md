---
title: "Kinematic Single Vehicle Trajectory Prediction Baselines and Applications with the NGSIM Dataset."

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Jean Mercat 
- Nicole El Zoghby
- Guillaume Sandou
- Dominique Beauvois
- Guillermo Pita-Gil

date: "2019-10-28T00:00:00Z"
doi: "arXiv:1908.11472"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-10-28T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *ArXiv*
# publication_short: In *ICTAM*

abstract: In the recent vehicle trajectory prediction literature, the most common baselines are briefly introduced without the necessary information to reproduce it. In this article we produce reproducible vehicle prediction results from simple models. For that purpose, the process is explicit, and the code is available. Those baseline models are a constant velocity model and a single-vehicle prediction model. They are applied on the NGSIM US-101 and I-80 datasets using only relative positions. Thus, the process can be reproduced with any database containing tracking of vehicle positions. The evaluation reports Root Mean Squared Error (RMSE), Final Displacement Error (FDE), Negative Log-Likelihood (NLL), and Miss Rate (MR). The NLL estimation needs a careful definition because several formulations that differ from the mathematical definition are used in other works. This article is meant to be used along with the published code to establish baselines for further work. An extension is proposed to replace the constant velocity assumption with a learned model using a recurrent neural network. This brings good improvements in accuracy and uncertainty estimation and opens possibilities for both complex and interpretable models.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/1908.11472.pdf'
url_code: 'https://github.com/jmercat/KalmanBaseline'
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Illustration of multiple constant velocity forecasts.'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
