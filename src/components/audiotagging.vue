<template>

  <div style =" font-family: HoeflerText, serif;position:absolute; left:30%; width:800px;height:1000px; background-color: white">
    <img src="../assets/audiotagging/Freesound.png" width="800"/>
    <div class = "title">Audio Tagging</div>
    <div class = "section">Introduction:</div>
    <div class = "contents">
      Audio tagging is the task of labelling an audio clip with one or more labels or tags. In this post, I describe my solution (code on GitHub) to the Freesound Audio Tagging 2019 competition hosted on Kaggle.
      In this competition, participants were challenged to build an automating audio tagging system.

      <div class = "subsection">dataset</div>

      <div class = "contents">
        The dataset provided [1] consists of a curated subset and a noisy subset labelled with 80 different tags. Moreover, multiple tags can co-occur in the same clip.
        <p><b>Curated subset</b>: 4970 audio clips with duration ranging from 0.3 to 30s.</p>
        <p><b>Noisy subset</b>: 19815 audio clips with duration ranging from 1 to 15s. </p>
      </div>
      <div class = "subsection">data processing</div>
      <div class = "contents">
        <p>
          All waveforms were converted to Mel spectrograms. In spectrograms, the vertical axis represents the frequency. The bottom part of the image shows lower pitch sounds and moving upwards increasingly higher pitches are represented.
        </p>
        <img class = "image" src="../assets/audiotagging/datap.png">
        <p>
          All waveforms were converted to spectrograms with a height of 128 pixels and width depending on the length of the clip.
        </p>
      </div>
      <div class = "subsection">Augmentations</div>
      <div class = "contents">
        <p>
          Data augmentations are vital in this competition due to the small datasets,
          the curated subset is particularly small, which composed of 5000 clips for 80 classes.
          Also the pre-trained models are not allowed, models have to be trained from scratch.
        </p>
        <p>
          I've applied the following methods for augmentations,
        </p>
        <ul>
          <li>brightness & contrast </li>
          <li>random crop: 128x128, rescale: 256x256</li>
          <li>1.5x zoom</li>
          <li>random erasing</li>
          <li>Flip images (Horizontal flip |Vertical flip |Horizontal & Vertical flip)</li>
        </ul>
        <img src="../assets/audiotagging/aug_1.png" style = " width: 200px; height:200px ">
        <img src="../assets/audiotagging/aug_2.png" style = " width: 200px; height:200px; margin-left:100px ">

        <p>
          Audio clip contents change because of the image transformations. If audio clip is listened from backward,
          it comes with a completely different meaning. if audio clip is flipped vertically, in the frequency domain,
          it could be stranger.

          However, this limitation can be also used as an advantage, flipped clips labels can be considered as new tags.
          In this way, the dataset has been 4x larger with a total of 320 labels. This boosts the model performance.
        </p>
        </div>
      <div class = "subsection">Model</div>
      <div class = "contents">
        <p>
          <a href = "https://arxiv.org/abs/1812.01187" style="text-decoration: none">Xresnet18</a> as implemented in <a href = "https://github.com/fastai/fastai" style = "text-decoration: none">fastai</a> library

        </p>
        <img src="../assets/audiotagging/model.png" style = "width:500px; height: 200px"/>
      </div>
      <div class = "subsection">Loss function</div>
      <div class = "contents">

          The loss functions:
          <ul>
            <li> Binary Cross Entropy</li>
            <li> Focal Loss</li>
          </ul>

      </div>
      <div class = "subsection">Noisy data</div>
      <div class = "contents">
        <p>
          In my experiment, Noisy data does not provide me much usefulness.
          I used trained model to predict noisy labels,
          those correct predicted clips are mixing with curated data.
          These are use for further model training.
        </p>
      </div>
      <div class = "subsection">Test predictions and ensembling</div>
      <div class = "contents">
        <p>
          For test set, there are predictions for 4 image flips, in total of 320 labels, 80 labels for each
        </p>
        <ul>
          <li>Original</li>
          <li>Horizontal flip</li>
          <li>Vertical flip</li>
          <li>Horizontal & Vertical flip</li>
        </ul>
        <p>
          Average the probabilities of the four corresponding labels as exemplified,
          labels from a different flip are set to 0
        </p>
        <img src="../assets/audiotagging/ensembling.png" class = "image"/>
        <p>
          For model ensembling, I take the average of the probabilities resulting from the procedures
        </p>

      </div>
    </div>
    <div class = "section"><a href = "http://github.com/laiyingzheng" style = "text-decoration: none">Source Code</a></div>
  </div>

</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>
.title {
  font-family: HoeflerTextItalic, serif;
  text-align:center;
  font-size: 23px;
  font-weight:bold;
  padding: 16px 0 32px 0;
  border-bottom: 1px solid #DEDEDE;
  margin: 40px 0;
}

.section {
  font-family: "Times New Roman", serif;
  text-align:left;
  font-size: 16px;
  font-weight:bold;
  padding: 16px 0 10 px 0;
  margin: 40px 0;
}

.contents{

  text-align:left;
  padding: 0 0 1% 5%;
  font-size: 13px;

}
.subsection{
  font-family: HoeflerTextItalic, serif;
  text-align:left;
  font-size: 14px;
  font-weight:bold;
  padding: 5px;
  border-bottom: 1px solid #DEDEDE;
  margin: 40px 0;
}

.image {
  width:300px;
  padding: 15px 15px 15px 15px;
}

</style>