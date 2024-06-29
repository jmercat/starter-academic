---
title: "Mamba-7B"
date: 2024-06-28
description: "A 7B parameter model with the Mamba architecture, trained on the RefinedWeb dataset."
url_project: 'https://huggingface.co/TRI-ML/mamba-7b-rw'
url_code: 'https://github.com/TRI-ML/linear_open_lm'
---

# Mamba-7B

This is a 7B parameter model with the Mamba architecture, trained on multiple epochs (1.2T tokens) of the RefinedWeb dataset. Mamba is a state-space model that does not use self-attention unlike the standard transformer architecture. It has shown strong performance on various natural language benchmarks. To date, the largest publicly released pure-Mamba pretrain is Mamba-2.8B. We follow their training recipe and release our version of Mamba-7B.

This model was trained as a baseline for our paper [Linearizing Large Language Models](https://arxiv.org/abs/2405.06640).

## Model Details

**Developed by:** Toyota Research Institute  
**Model Type:** Auto-regressive language model based on the Mamba architecture  
**Dataset:** Trained on 1.2T tokens of RefinedWeb  
**Tokenizer:** EleutherAI/gpt-neox-20b  
**Library:** OpenLM  
**License:** Apache License, Version 2.0  

| Parameters | Hidden Size | Layers | Vocab Size | Sequence Length |
|------------|-------------|--------|------------|-----------------|
| 7B         | 4096        | 64     | 50432      | 2048            |

## Training Details

Mamba-7B was trained using AWS SageMaker on 128 H100 80GB GPUs. Training began in March 2024 and lasted three weeks.

| Hyperparameter  | Value  |
|-----------------|--------|
| Precision       | bfloat16 |
| Optimizer       | AdamW  |
| Learning rate   | 3e-4   |
| LR cooldown end | 1e-5   |
| Warmup steps    | 2000   |
| Z-loss          | 1e-4   |
| Batch size      | 2M     |

## Usage

This model was trained using OpenLM. The weights have been converted to be compatible with HuggingFace.

```python
from transformers import AutoTokenizer, AutoModelForCausalLM
tokenizer = AutoTokenizer.from_pretrained("tri-ml/mamba-7b-rw")
model = AutoModelForCausalLM.from_pretrained("tri-ml/mamba-7b-rw")

inputs = tokenizer(["The Toyota Supra"], return_tensors="pt")
gen_kwargs = {"max_new_tokens": 50, "top_p": 0.8, "temperature": 0.8, "do_sample": True, "repetition_penalty": 1.1}
output = model.generate(inputs['input_ids'], **gen_kwargs)
output = tokenizer.decode(output[0].tolist(), skip_special_tokens=True)
print(output)
# The Toyota Supra is a sports car that has been in production since 1978. The car was discontinued in 2002, but it has recently been revived and will be available again in 2020. The Supra has always been known for its powerful engines and agile handling.
```

## Performance Evaluation

Our evaluations were done using the Eleuther LM Eval Harness repo.

Below we report the performance of Mamba 7B compared to other base models.

| Model              | HellaSwag | PIQA  | Winogrande | ARC-E | ARC-C | MMLU (5-shot) |
|--------------------|-----------|-------|------------|-------|-------|---------------|
| Mamba-1.4B         | 59.0      | 73.9  | 61.4       | 65.5  | 32.9  | 25.2          |
| Mamba-2.8B         | 71.0      | 78.1  | 65.9       | 68.2  | 41.7  | 26.2          |
| RWKV5-1.7T-7B      | 73.0      | 78.6  | 72.9       | 75.8  | 45.6  | 34.9          |
| Llama2-7B          | 76.0      | 79.1  | 69.1       | 76.3  | 46.3  | 45.9          |
| Gemma-7B           | 80.7      | 81.9  | 73.7       | 81.1  | 53.2  | 62.9          |
| Mistral-7B         | 81.0      | 82.1  | 74.0       | 80.9  | 53.8  | 62.4          |
| Mamba-7B           | 77.9      | 81.0  | 71.8       | 77.5  | 46.7  | 33.3          |

## How to Cite

If you use this model, please cite our paper on Linearizing Large Language Models.

```
@article{Mercat2024Linearizing,
  title={Linearizing Large Language Models},
  author={Jean Mercat and Igor Vasiljevic and Sedrick Keh and Kushal Arora and Achal Dave and Adrien Gaidon and Thomas Kollar},
  journal={arXiv preprint arXiv:2405.06640},
  year={2024}
}
```

## Citations

**Mamba**

```
@article{mamba,
  title={Mamba: Linear-Time Sequence Modeling with Selective State Spaces},
  author={Gu, Albert and Dao, Tri},
  journal={arXiv preprint arXiv:2312.00752},
  year={2023}
}
```

**OpenLM**

```
@misc{open_lm,
  author = {Gururangan, Suchin and Wortsman, Mitchell and Gadre, Samir Yitzhak and Dave, Achal and Kilian, Maciej and Shi, Weijia and Mercat, Jean and Smyrnis, Georgios and Ilharco, Gabriel and Jordan, Matt and Heckel, Reinhard and Dimakis, Alex and Farhadi, Ali and Shankar, Vaishaal and Schmidt, Ludwig},
  title = {{open_lm}:  a minimal but performative language modeling (LM) repository},
  year = {2023},
  note = {GitHub repository},
  url = {https://github.com/mlfoundations/open_lm/}
}
```