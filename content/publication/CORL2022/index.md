---
title: "RAP: Risk-Aware Prediction for Robust Planning."

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Haruki Nishimura
- Jean Mercat 
- Blake Wulfe
- Rowan McAllister
- Adrien Gaidon

date: "2022-12-01T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-12-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
# publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Conference on Robot Learning.*
publication_short: In *CoRL*

abstract: Robust planning in interactive scenarios requires predicting the uncertain future to make risk-aware decisions. Unfortunately, due to long-tail safety-critical events, the risk is often under-estimated by finite-sampling approximations of probabilistic motion forecasts. This can lead to overconfident and unsafe robot behavior, even with robust planners. Instead of assuming full prediction coverage that robust planners require, we propose to make prediction itself risk-aware. We introduce a new prediction objective to learn a risk-biased distribution over trajectories, so that risk evaluation simplifies to an expected cost estimation under this biased distribution. This reduces the sample complexity of the risk estimation during online planning, which is needed for safe real-time performance. Evaluation results in a didactic simulation environment and on a real-world dataset demonstrate the effectiveness of our approach. The code and a demo are available.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# url_pdf: ''
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''
url_pdf: 'https://arxiv.org/pdf/2210.01368.pdf'
url_code: 'https://github.com/TRI-ML/RAP'
url_video: 'https://youtu.be/56LzTZfwY2Q?t=44'


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Consider an autonomous vehicle planning to drive ahead along the arrow. In this example, the biker has 95% chance to turn right and 5% chance to cross the road. Should 95% of the samples from a trajectory forecasting model point towards turning right? How to estimate the risk for the autonomous vehicle? How to capture the dangerous events?'
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

<iframe width="560" height="315" src="https://www.youtube.com/embed/56LzTZfwY2Q?start=44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---
<style>
#wrap { width: 850px; height: 1040px; padding: 0; overflow: hidden; }
#frame { width: 1500px; height: 2080px; border: 1px solid black; }
#frame { zoom: 0.5; -moz-transform: scale(0.5); -moz-transform-origin: 0 0; }
</style>

<div id="wrap">
<iframe
  id="frame"
  src="https://tri-ml-risk-biased-prediction.hf.space"
></iframe>
</div>

---
