---
title: "Social Attention for Autonomous Decision-Making in Dense Traffic."

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Edouard Leurent
- Jean Mercat

date: "2019-11-27T00:00:00Z"
doi: "arXiv:1911.12250"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-11-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *NeurIPS Autonomous Driving Workshop*
publication_short: In *NeurIPS*

abstract: We study the design of learning architectures for behavioural planning in a dense traffic setting. Such architectures should deal with a varying number of nearby vehicles, be invariant to the ordering chosen to describe them, while staying accurate and compact. We observe that the two most popular representations in the literature do not fit these criteria, and perform badly on an complex negotiation task. We propose an attention-based architecture that satisfies all these properties and explicitly accounts for the existing interactions between the traffic participants. We show that this architecture leads to significant performance gains, and is able to capture interactions patterns that can be visualised and qualitatively interpreted. Videos and code are available at this [https URL](https://eleurent.github.io/social-attention/).

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/1911.12250.pdf'
url_code: 'https://github.com/eleurent/rl-agents'
# url_dataset: ''
# url_poster: ''
url_project: 'https://eleurent.github.io/social-attention/'
# url_slides: ''
# url_source: ''
url_video: 'https://eleurent.github.io/social-attention/assets/1_episode.mp4'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Representation of the attention mechanism used by the Q-learning neural network to make driving decisions.'
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
