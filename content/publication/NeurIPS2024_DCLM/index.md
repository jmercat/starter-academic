---
title: "DataComp-LM: In Search of the Next Generation of Training Sets for Language Models"

# Authors
authors:
- Jeffrey Li
- Alex Fang
- Georgios Smyrnis
- Maor Ivgi
- Matt Jordan
- Samir Gadre
- Hritik Bansal
- Etash Guha
- Sedrick Keh
- Kushal Arora
- Saurabh Garg
- Rui Xin
- Niklas Muennighoff
- Reinhard Heckel
- Jean Mercat
- Mayee Chen
- Suchin Gururangan
- Mitchell Wortsman
- Alon Albalak
- Yonatan Bitton
- Marianna Nezhurina
- Amro Abbas
- Cheng-Yu Hsieh
- Dhruba Ghosh
- Josh Gardner
- Maciej Kilian
- Hanlin Zhang
- Rulin Shao
- Sarah Pratt
- Sunny Sanyal
- Gabriel Ilharco
- Giannis Daras
- Kalyani Marathe
- Aaron Gokaslan
- Jieyu Zhang
- Khyathi Chandu
- Thao Nguyen
- Igor Vasiljevic
- Sham Kakade
- Shuran Song
- Sujay Sanghavi
- Fartash Faghri
- Sewoong Oh
- Luke Zettlemoyer
- Kyle Lo
- Alaaeldin El-Nouby
- Hadi Pouransari
- Alexander Toshev
- Stephanie Wang
- Dirk Groeneveld
- Luca Soldaini
- Pang Wei Koh
- Jenia Jitsev
- Thomas Kollar
- Alexandros G. Dimakis
- Yair Carmon
- Achal Dave
- Ludwig Schmidt
- Vaishaal Shankar

date: "2024-06-17T00:00:00Z"
doi: "arXiv:2406.11794"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-17T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
# publication_types: ["3"]

# Publication name and optional abbreviated publication name.
# publication: In *arXiv*
# publication_short: In *arXiv*

abstract: We introduce DataComp for Language Models (DCLM), a testbed for controlled dataset experiments aimed at improving language models. DCLM includes a standardized corpus of 240T tokens from Common Crawl, effective pretraining recipes using the OpenLM framework, and a suite of 53 downstream evaluations. We emphasize data curation strategies like deduplication, filtering, and data mixing across model scales from 412M to 7B parameters. Our baseline model, DCLM-Baseline, achieves a 64% 5-shot accuracy on MMLU, showing a significant improvement over previous open-data models while requiring less compute. Our findings underline the importance of dataset design in training language models.

# tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2406.11794.pdf'
url_code: 'https://github.com/datacomp/dclm'
# url_dataset: ''
# url_poster: ''
url_project: 'https://www.datacomp.ai'
# url_slides: ''
# url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Visualization of data curation strategies in DCLM.'
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