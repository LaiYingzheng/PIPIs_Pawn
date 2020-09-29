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
      <div class = "subsection">Model</div>
      <div class = "subsection">Loss function — BCE++</div>
      <div class = "subsection">Implementation details</div>
      <div class = "subsection">Noisy data</div>
      <div class = "subsection">Test predictions and ensembling</div>

    </div>
    <div class = "section">Demonstration: </div>
    <div class = "section">Source Code:</div>
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