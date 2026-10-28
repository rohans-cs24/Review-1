# Literature Survey: UWF Fundus DR and DME (2024–2026)

**Topic:** Deep Learning-Based Detection of Referable Diabetic Retinopathy and Macular Edema Using Ultra-Widefield Fundus Imaging

# Sakshi

## 1. DeepUWF: An Automated Ultra-Wide-Field Fundus Screening System via Deep Learning

*Zhang et al., IEEE Journal of Biomedical and Health Informatics, 2021*

- **Methodology used:** Two-part deep-learning system comprising an abnormal-fundus screening subsystem and a disease-diagnosis subsystem for retinal tear/detachment, diabetic retinopathy, and pathological myopia.
- **Dataset(s) used:** 2,644 ultra-widefield (UWF) fundus images.
- **Advantages:** Works directly on UWF images and supports screening followed by disease diagnosis.
- **Limitations:** Small dataset; diabetic macular edema (DME) is not addressed.
- **Results obtained:** Reported as a promising tool for fundus health screening and workflow improvement.
- **Download:** [DOI: 10.1109/JBHI.2020.3046771](https://doi.org/10.1109/JBHI.2020.3046771)

## 2. Diabetic Retinopathy Detection Using Prognosis of Microaneurysm and Early Diagnosis System for NPDR Based on Deep Learning

*IEEE Access, Volume 8, pp. 104292–104302, 2020*

- **Methodology used:** GPU-accelerated CNN with semantic segmentation to identify microaneurysms, classify fundus images as normal or affected, and grade non-proliferative diabetic retinopathy (NPDR).
- **Dataset(s) used:** Colour fundus images; consult the full paper for dataset details.
- **Advantages:** Targets microaneurysms, an early sign of diabetic retinopathy, and aims for high-performance, low-latency inference.
- **Limitations:** Focuses on NPDR grading; does not address UWF images, DME detection, or image-quality assessment.
- **Results obtained:** Reported improvements in the efficiency and accuracy of NPDR prediction.
- **Download:** [IEEE Xplore — Document 9091167](https://ieeexplore.ieee.org/document/9091167)

## 3. Diabetic Retinopathy Diagnosis From Fundus Images Using Stacked Generalization of Deep Models

*Kaushik et al., IEEE Access, Volume 9, pp. 108276–108292, 2021*

- **Methodology used:** Gray-world colour-constancy normalization, evaluated using PSNR/MSE, followed by stacked generalization of three custom CNNs with a meta-learner.
- **Dataset(s) used:** Colour fundus images; refer to the full paper for detailed dataset information.
- **Advantages:** Combines illumination normalization with ensemble learning to improve classification performance.
- **Limitations:** Uses conventional fundus photographs rather than UWF images; accuracy decreases for multiclass grading.
- **Results obtained:** Test accuracy of 97.92% for binary classification and 87.45% for multiclass classification.
- **Download:** [DOI: 10.1109/ACCESS.2021.3101142](https://doi.org/10.1109/ACCESS.2021.3101142)

## 4. Deep Learning Techniques for Diabetic Retinopathy Classification: A Survey

*Atwany, Sahyoun, and Yaqub, IEEE Access, Volume 10, pp. 28642–28655, 2022*

- **Methodology used:** Review of supervised, self-supervised, and Vision Transformer approaches for retinal fundus classification and detection of referable, non-referable, and proliferative diabetic retinopathy.
- **Dataset(s) used:** Reviews public retinal fundus datasets for detection, classification, and segmentation.
- **Advantages:** Consolidates information about datasets, classification approaches, and learning paradigms in diabetic retinopathy research.
- **Limitations:** Review paper without a newly proposed model; primarily focuses on conventional fundus images.
- **Results obtained:** Identifies research gaps and open challenges in diabetic retinopathy detection and classification.
- **Download:** [DOI: 10.1109/ACCESS.2022.3157632](https://doi.org/10.1109/ACCESS.2022.3157632)

## 5. Vision Transformer Model for Predicting the Severity of Diabetic Retinopathy in Fundus Photography-Based Retina Images

*Nazih et al., IEEE Access, Volume 11, pp. 117546–117561, 2023*

- **Methodology used:** Vision Transformer (ViT) pipeline optimized using AdamW, with class-imbalance handling through F1-based tuning, augmentation, class weights, label smoothing, and focal loss. Compared against ResNet50, InceptionV3, and VGG19.
- **Dataset(s) used:** FGADR (Fine-Grained Annotated Diabetic Retinopathy) fundus dataset.
- **Advantages:** Captures global image context and outperforms the reported CNN and baseline ViT models.
- **Limitations:** Uses a single dataset; ViTs require substantial data; evaluates conventional fundus images rather than UWF images.
- **Results obtained:** F1-score of 0.825, accuracy of 0.825, AUC of 0.964, and specificity of 0.956.
- **Download:** [DOI: 10.1109/ACCESS.2023.3326528](https://doi.org/10.1109/ACCESS.2023.3326528)

---

# Rohan

## 1. Efficient Deep Learning Approaches for Processing Ultra-Widefield Retinal Imaging

*Kim et al., 2025, arXiv preprint*

- **Methodology used:** Ensemble of three EfficientNet-B0 models with augmentation (center crop, flips, rotation, colour jitter) and soft voting. Designed to train and run on a CPU.
- **Dataset(s) used:** MICCAI UWF4DR challenge data for referable diabetic retinopathy (DR) and DME tasks.
- **Advantages:** Lightweight and GPU-independent, making it suitable for low-resource clinics.
- **Limitations:** The ensemble roughly doubles inference time. The dataset is small, and the team placed ninth in the challenge.
- **Results obtained:** Ensemble AUROC of 0.9662 for referable DR and 0.9584 for DME.
- **Download:** [arXiv PDF](https://arxiv.org/pdf/2503.18151) · [Abstract](https://arxiv.org/abs/2503.18151)

## 2. Exploring Deep Learning and Ultra-Widefield Imaging for Diabetic Retinopathy and Macular Edema

*Jimenez-Lizcano et al., March 2026, arXiv preprint*

- **Methodology used:** Benchmarks MobileNetV2, ResNet18, ViT-B/16, and the RETFound foundation model on RGB and frequency-domain (DFT) inputs. Includes feature-level fusion with an MLP and Grad-CAM explainability.
- **Dataset(s) used:** UWF4DR challenge dataset with a 64/16/20 split, comprising approximately 251 images for referable DR and 212 for DME.
- **Advantages:** Covers image quality, referable DR, and DME; includes public code and explainability.
- **Limitations:** Uses a single dataset, focuses on binary classification tasks, and has very small test sets.
- **Results obtained:** RGB fusion achieved 100% on referable DR, AUROC of 96.8% on DME, and AUROC of 96.4% on image-quality assessment. The 100% result requires caution because the test set contains only 50 images.
- **Download:** [arXiv HTML](https://arxiv.org/html/2603.08235v1) · [arXiv PDF](https://arxiv.org/pdf/2603.08235) · [GitHub repository](https://github.com/BiDAlab/UWF4DR-Benchmark)

## 3. Deep Learning Ensemble for Predicting Diabetic Macular Edema Onset Using Ultra-Wide Field Color Fundus Image

*Qin et al., Springer LNCS, 2025; free arXiv version*

- **Methodology used:** Ensemble of ResNet, DenseNet, EfficientNet, and VGG models to predict center-involved DME onset within 12 months. Compares plurality voting, averaging, and label fusion.
- **Dataset(s) used:** DIAMOND challenge synthetic UWF color fundus images derived from DeepDRiD, comprising 204 images (154 training and 50 validation), plus one real patient.
- **Advantages:** Predicts future DME onset rather than only detecting existing disease and explores generalization across imaging devices.
- **Limitations:** Trained primarily on synthetic data, with modest performance. DenseNet-121 alone (AUC 0.7617) outperformed the final ensemble.
- **Results obtained:** Final ensemble AUC of 0.7017 and F1-score of 0.6512.
- **Download:** [arXiv HTML](https://arxiv.org/html/2410.06483v2) · [arXiv PDF](https://arxiv.org/pdf/2410.06483v2) · [Springer chapter](https://link.springer.com/chapter/10.1007/978-3-031-86651-7_6)

## 4. Automated Multimodal Severity Assessment of Diabetic Retinopathy Using Ultra-Widefield Color Fundus Photography and Clinical Tabular Data

*Rezaei et al., Biomedical Signal Processing and Control, 2025*

- **Methodology used:** Multimodal deep-learning framework combining UWF colour fundus photographs with 76 clinical features, including demographic, biochemical, and clinical parameters. Uses patient-level data splitting.
- **Dataset(s) used:** UWF images from the CLARUS 500 device and clinical data from the EVIRED project. External validation uses BRSET and mBRSET.
- **Advantages:** Fusion model outperformed image-only and clinical-data-only models. External validation evaluates generalization, while patient-level splitting reduces data leakage.
- **Limitations:** Multiclass accuracy is 63.4%; the improvement over image-only classification is modest. EVIRED data is private, and clinical features must be available during screening. Does not address DME.
- **Results obtained:** Multiclass accuracy of 63.4% and kappa of 0.807. Accuracy improved by 2.1 percentage points and kappa by 0.022 over the image-only classifier.
- **Download:** [ScienceDirect — Open access](https://www.sciencedirect.com/science/article/pii/S174680942501184X) · [DOI: 10.1016/j.bspc.2025.108673](https://doi.org/10.1016/j.bspc.2025.108673)

## 5. Many-MobileNet: Multi-Model Augmentation for Robust Retinal Disease Classification

*Wang et al., December 2024, arXiv preprint*

- **Methodology used:** Combines three nnMobileNet models (two lightweight and one medium-sized) with squeeze-and-excitation blocks. Each model uses different augmentation, and predictions are combined by voting.
- **Dataset(s) used:** UWF4DR image-quality assessment dataset containing 434 images: 205 ungradable and 229 gradable.
- **Advantages:** Efficient and robust on small datasets. Image-quality assessment can serve as the first stage of a UWF screening pipeline.
- **Limitations:** Focuses on image quality rather than DR or DME detection. Fusion increases inference time and did not improve validation performance.
- **Results obtained:** Third place in the challenge, with AUROC of 0.9525, AUPRC of 0.9683, sensitivity of 0.8983, and specificity of 0.925.
- **Download:** [arXiv PDF](https://arxiv.org/pdf/2412.02825) · [Abstract](https://arxiv.org/abs/2412.02825) · [GitHub repository](https://github.com/Retinal-Research/NN-MOBILENET)

---

## Datasets

| Dataset | Used in | Access |
|---|---|---|
| UWF4DR (MICCAI 2024) | Rohan papers 1, 2, and 5 | [CodaLab challenge](https://codalab.lisn.upsaclay.fr/competitions/18605) · [Zenodo record 10992021](https://zenodo.org/records/10992021) |
| DeepDRiD | Rohan paper 3 | [GitHub: DeepDRiD](https://github.com/deepdrdoc/DeepDRiD) |
| EVIRED UWF-CFP and clinical data | Rohan paper 4 | Private dataset; BRSET and mBRSET are used for external validation |
