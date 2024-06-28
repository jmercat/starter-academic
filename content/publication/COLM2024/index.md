---
title: "Linearizing Large Language Models"

# Authors
authors:
- Jean Mercat
- Igor Vasiljevic
- Sedrick Keh
- Kushal Arora
- Achal Dave
- Adrien Gaidon
- Thomas Kollar

date: "2024-05-14T00:00:00Z"
doi: "arXiv:2405.06640"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-05-14T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *COLM* (under review)
publication_short: In *COLM*

abstract: We propose Scalable UPtraining for Recurrent Attention (SUPRA), a method to uptrain existing large pre-trained transformers into Recurrent Neural Networks (RNNs) with minimal compute. This approach leverages pre-trained transformers' strong performance while significantly reducing training costs. SUPRA demonstrates competitive performance on benchmarks but shows limitations in in-context learning and long-context tasks. Our code and models are available at [https URL](https://github.com/TRI-ML/linear_open_lm).

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2405.06640.pdf'
url_code: 'https://github.com/TRI-ML/linear_open_lm'
# url_dataset: ''
# url_poster: ''
url_project: 'https://github.com/TRI-ML/linear_open_lm'
# url_slides: ''
# url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Graphical representation of SUPRA linearization strategy.'
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