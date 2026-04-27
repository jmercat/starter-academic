---
title: "Improving Test-Time Search for LLMs with Backtracking Against In-Context Value Verifiers"

authors:
- Anikait Singh
- Kushal Arora
- Sedrick Keh
- Jean Mercat
- Tatsunori Hashimoto
- Chelsea Finn
- Aviral Kumar

date: "2025-01-01T00:00:00Z"
publishDate: "2025-01-01T00:00:00Z"
# publication_types: ["1"]
publication: "Workshop on Reasoning and Planning for Large Language Models"

abstract: |-
  Solving reasoning problems is an iterative multi-step computation, where a reasoning agent progresses through a sequence of steps, with each step logically building upon the previous one to reach a desired conclusion. If the desired solution is not attained, the agent must backtrack and try reasoning chains that are quite different from previous attempts. Though prior work such as test-time search against an outcome verifier can improve performance, most search is done in parallel via Best-of-N reranking, and independently for each attempt at a problem, thus wasting a significant amount of computation in sampling multiple full solutions even beyond the point that is needed. Can we reduce the total amount of computation by sharing information and computation across multiple attempts to a given problem? In this paper, we build a novel approach combining process verifiers that predict likelihoods of success per step with preemptive backtracking to maximize performance per generated token. To do this, the PRM can be used to identify where a problematic step in a solution trace is by using the sensitivity of the predictions of the learned verifier and allowing the model to do focused resampling of the problematic portion of a solution. This approach can significantly reduce the amount of computation by leveraging partial computation from previous revisions. To further enhance the computational efficiency of inference, we introduce in-context process supervision, where the verifier is conditioned on the history of revisions that are attempted, reducing uncertainty in the verification decisions and improving the verifier's confidence with each round of backtracking. This framework for iterative backtracking, leveraging in-context process supervision, enables an effective tradeoff between inference and model performance.

featured: false

url_pdf: ""
url_code: ""
url_project: ""
url_video: ""

image:
  caption: ""
  focal_point: ""
  preview_only: false

slides: ""
---
