---
title: "Dynamics-Aware Comparison of Learned Reward Functions"

# Authors
authors:
- Blake Wulfe
- Logan Ellis
- Jean Mercat
- Rowan McAllister
- Adrien Gaidon
- Ashwin Balakrishna

date: "2022-01-24T00:00:00Z"
doi: "arXiv:2201.10081"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-01-24T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
# publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Evaluating learned reward functions can be challenging due to their reliance on the policy search algorithm used to optimize them. We propose Dynamics-Aware Reward Distance (DARD), a new pseudometric that leverages a transition model of the environment to transform reward functions for more reliable comparisons. DARD is invariant to reward shaping and only evaluates reward functions on transitions close to their training distribution. Our experiments in simulated physical domains demonstrate that DARD provides accurate reward comparisons without policy optimization and outperforms baseline methods.

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2201.10081.pdf'
url_code: 'https://sites.google.com/view/dard-paper'
# url_dataset: ''
# url_poster: ''
url_project: 'https://sites.google.com/view/dard-paper'
# url_slides: ''
# url_source: ''
url_video: 'https://sites.google.com/view/dard-paper'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Visualization of DARD transformation applied to a transition in a simple MDP.'
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