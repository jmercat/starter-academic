---
title: "A Systematic Study of Data Modalities and Strategies for Co-training Large Behavior Models for Robot Manipulation"

authors:
- Fanqi Lin
- Kushal Arora
- Jean Mercat
- Haruki Nishimura
- Paarth Shah
- Chen Xu
- Mengchao Zhang
- Mark Zolotas
- Maya Angeles
- Owen Pfannenstiehl
- Andrew Beaulieu
- Jose Barreiros

date: "2026-02-01T00:00:00Z"
doi: "arXiv:2602.01067"
publishDate: "2026-02-01T00:00:00Z"
# publication_types: ["1"]
publication: "In *Robotics: Science and Systems*"
publication_short: In *RSS*

abstract: |-
  Large behavior models have shown strong dexterous manipulation capabilities by extending imitation learning to large-scale training on multi-task robot data, yet their generalization remains limited by the insufficient robot data coverage. To expand this coverage without costly additional data collection, recent work relies on co-training: jointly learning from target robot data and heterogeneous data modalities. However, how different co-training data modalities and strategies affect policy performance remains poorly understood. We present a large-scale empirical study examining five co-training data modalities: standard vision-language data, dense language annotations for robot trajectories, cross-embodiment robot data, human videos, and discrete robot action tokens across single- and multi-phase training strategies. Our study leverages 4,000 hours of robot and human manipulation data and 50M vision-language samples to train vision-language-action policies. We evaluate 89 policies over 58,000 simulation rollouts and 2,835 real-world rollouts. Our results show that co-training with forms of vision-language and cross-embodiment robot data substantially improves generalization to distribution shifts, unseen tasks, and language following, while discrete action token variants yield no significant benefits. Combining effective modalities produces cumulative gains and enables rapid adaptation to unseen long-horizon dexterous tasks via fine-tuning. Training exclusively on robot data degrades the visiolinguistic understanding of the vision-language model backbone, while co-training with effective modalities restores these capabilities. Explicitly conditioning action generation on chain-of-thought traces learned from co-training data does not improve performance in our simulation benchmark. Together, these results provide practical guidance for building scalable generalist robot policies.

featured: false

url_pdf: "https://arxiv.org/pdf/2602.01067.pdf"
url_code: ""
url_project: ""
url_video: ""

image:
  caption: ""
  focal_point: ""
  preview_only: false

slides: ""
---
