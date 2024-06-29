---
title: "Multi-Head Attention for Multi-Modal Joint Vehicle Motion Forecasting."

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Jean Mercat 
- Nicole El Zoghby
- Guillaume Sandou
- Dominique Beauvois
- Guillermo Pita-Gil


date: "2020-05-31T00:00:00Z"
doi: "arXiv:1910.03650"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-05-31T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
# publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *International Conference on Robotics and Automation*
publication_short: In *ICRA*

abstract: This paper presents a novel vehicle motion forecasting method based on multi-head attention. It produces joint forecasts for all vehicles on a road scene as sequences of multi-modal probability density functions of their positions. Its architecture uses multi-head attention to account for complete interactions between all vehicles, and long short-term memory layers for encoding and forecasting. It relies solely on vehicle position tracks, does not need maneuver definitions, and does not represent the scene with a spatial grid. This allows it to be more versatile than similar model while combining many forecasting capabilities, namely joint forecast with interactions, uncertainty estimation, and multi-modality. The resulting prediction likelihood outperforms state-of-the-art models on the same dataset.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/1910.03650.pdf'
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Representation of a road scene with Gaussian mixture forecasts.'
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
