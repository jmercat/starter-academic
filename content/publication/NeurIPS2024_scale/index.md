---
title: "Language Models Scale Reliably with Over-Training and on Downstream Tasks"

# Authors
authors:
- Samir Yitzhak Gadre
- Georgios Smyrnis
- Vaishaal Shankar
- Suchin Gururangan
- Mitchell Wortsman
- Rulin Shao
- Jean Mercat
- Alex Fang
- Jeffrey Li
- Sedrick Keh
- Rui Xin
- Marianna Nezhurina
- Igor Vasiljevic
- Jenia Jitsev
- Alexandros G. Dimakis
- Gabriel Ilharco
- Shuran Song
- Thomas Kollar
- Yair Carmon
- Achal Dave
- Reinhard Heckel
- Niklas Muennighoff
- Ludwig Schmidt

date: "2024-03-14T00:00:00Z"
doi: "arXiv:2403.08540"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-03-14T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *arXiv*
publication_short: In *arXiv*

abstract: Scaling laws guide the development of language models, but gaps exist between scaling studies and real-world model training and evaluation. Models are often over-trained to reduce inference costs, and scaling laws predict loss rather than downstream task performance. We create a testbed of 104 models, training them with various tokens and data distributions, to study scaling in the over-trained regime. We find consistent power laws in scaling and predict downstream task performance via a power law relationship with perplexity. Our experiments are available at [https URL](https://github.com/mlfoundations/scaling).

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2403.08540.pdf'
url_code: 'https://github.com/mlfoundations/scaling'
# url_dataset: ''
# url_poster: ''
url_project: 'https://github.com/mlfoundations/scaling'
# url_slides: ''
# url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Visualization of scaling laws in over-trained models.'
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