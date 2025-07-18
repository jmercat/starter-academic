---
title: "OpenThoughts: Data Recipes for Reasoning Models"

# Authors
authors:
- Etash Guha
- Ryan Marten
- Sedrick Keh
- Negin Raoof
- Georgios Smyrnis
- Hritik Bansal
- Marianna Nezhurina
- Jean Mercat
- Trung Vu
- Zayne Sprague
- Ashima Suvarna
- Benjamin Feuer
- Liangyu Chen
- Zaid Khan
- Eric Frankel
- Sachin Grover
- Caroline Choi
- Niklas Muennighoff
- Shiye Su
- Wanjia Zhao
- John Yang
- Shreyas Pimpalgaonkar
- Kartik Sharma
- Charlie Cheng-Jie Ji
- Yichuan Deng
- Sarah Pratt
- Vivek Ramanujan
- Jon Saad-Falcon
- Jeffrey Li
- Achal Dave
- Alon Albalak
- Kushal Arora
- Blake Wulfe
- Chinmay Hegde
- Greg Durrett
- Sewoong Oh
- Mohit Bansal
- Saadia Gabriel
- Aditya Grover
- Kai-Wei Chang
- Vaishaal Shankar
- Aaron Gokaslan
- Mike A. Merrill
- Tatsunori Hashimoto
- Yejin Choi
- Jenia Jitsev
- Reinhard Heckel
- Maheswaran Sathiamoorthy
- Alexandros G. Dimakis
- Ludwig Schmidt

date: "2025-06-04T00:00:00Z"
doi: "arXiv:2506.04178"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-04T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: arXiv preprint
abstract: "Reasoning models have made rapid progress on many benchmarks involving math, code, and science. Yet, there are still many open questions about the best training recipes for reasoning since state-of-the-art models often rely on proprietary datasets with little to no public information available. To address this, the goal of the OpenThoughts project is to create open-source datasets for training reasoning models. After initial explorations, our OpenThoughts2-1M dataset led to OpenThinker2-32B, the first model trained on public reasoning data to match DeepSeek-R1-Distill-32B on standard reasoning benchmarks such as AIME and LiveCodeBench. We then improve our dataset further by systematically investigating each step of our data generation pipeline with 1,000+ controlled experiments, which led to OpenThoughts3. Scaling the pipeline to 1.2M examples and using QwQ-32B as teacher yields our OpenThoughts3-7B model, which achieves state-of-the-art results: 53% on AIME 2025, 51% on LiveCodeBench 06/24-01/25, and 54% on GPQA Diamond - improvements of 15.3, 17.2, and 20.5 percentage points compared to the DeepSeek-R1-Distill-Qwen-7B. All of our datasets and models are available on https://openthoughts.ai."

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2506.04178.pdf'
url_code: 'https://openthoughts.ai'
# url_dataset: ''
# url_poster: ''
url_project: 'https://openthoughts.ai'
# url_slides: ''
# url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'OpenThoughts: Open-source reasoning datasets and models achieving state-of-the-art results.'
  focal_point: "Smart"
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