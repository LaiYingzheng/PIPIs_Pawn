<template>

  <div style = " font-family: HoeflerText, serif;position:absolute; left:30%; width:800px;height:1000px; background-color: white">
    <head>
      <title> Yingzheng Lai</title>
    </head>
    <div style = "width:800px; background-color: transparent; margin-left:-50px">
      <img src="../assets/view.png" alt="Mountains" width="900px">
    </div>
    <div style = "width:800px; height: 100px; background-color: white">
      <h1 style = " font-family: serif ;text-align: left; margin-top:-15px;">Yingzheng Lai</h1>
      <div style = "text-align:left; text-transform: uppercase;letter-spacing: 1.2;">
        📍 Montreal
        <strike style = "padding-left: 15px"> Toronto </strike>
        <strike style = "padding-left: 15px"> Philadelphia </strike>
        <strike style = "padding-left: 15px"> Stockholm </strike>
        <strike style = "padding-left: 15px"> Hangzhou </strike>
        <strike style = "padding-left: 15px"> Fuzhou </strike>
      </div>
      </div>
    <!-- end Header -->
    <div class = "section">Experience</div>
    <div class="role penn">
        <div class="colorstripe"></div>
        <div class="roledesc">
          <p><em>UPenn, 2019  → Current</em></p>
          <p>Philadelphia,US</p>
          <p>Master of Computer &amp; Information System</p>
          <a href = "" style = "text-decoration:none"> NLP &amp; Robotic Motion Planing</a>
        </div>
        <div class="timeline">2019 » </div>
        <div class="cb"></div>
      </div>
    <!-- end role -->
    <div class="role mcgill">
      <div class="colorstripe"></div>
      <div class="roledesc">
        <p><em>McGill, 2014  → 2018</em></p>
        <p>Montreal,Canada</p>
        <p>Bachelor of Engineering </p>
        <p>College level math &amp; physics,Mechanical Engineering principles</p>
      </div>
      <div class="timeline">2019 » </div>
      <div class="cb"></div>
    </div>
    <!-- end role -->
    <div class="role tuya">
      <div class="colorstripe"></div>
      <div class="roledesc">
        <p><em>Tuya, 2016</em></p>
        <p>Hangzhou,China</p>
        <p>Frontend Developer internship </p>
        <p>Mobile software design</p>
      </div>
      <div class="timeline">2019 » </div>
      <div class="cb"></div>
    </div>
    <!-- end role -->
    <div class="role huawei">
      <div class="colorstripe"></div>
      <div class="roledesc">
        <p><em>Huawei, 2015</em></p>
        <p>Stockholm,Sweden</p>
        <p>Internship </p>
        <p>Project plan, web redesign</p>
      </div>
      <div class="timeline">2019 » </div>
      <div class="cb"></div>
    </div>
    <!-- end role -->
    <div class ="section">Projects</div>

      <a href = '/#/audiotag' target="_blank">
        <img class = " halfleft photo" src="../assets/audiotagging/Freesound.png">
      </a>
    <a href = '/#/audiotag' target="_blank">
      <img class = " halfright photo" src="../assets/lyft/av.jpg">
    </a>
<!--    <div class="halfright photo"> </div>-->
    <!-- end Project -->
    <div class = "cb"></div>
    <div class="blocktitleleft">Say hey →</div>
    <div class="blocktitleright">
      <a href = 'https://www.instagram.com/old_pipi' target="_blank"><img src="../assets/icons/ins.png" height="30px" width="30px"/></a>
      <a href = 'https://github.com/laiyingzheng' style="padding-left:10px" target="_blank"><img src="../assets/icons/github.png" height="30px" width="30px"/></a>
      <a href = 'https://medium.com/@w.yingzheng.lai' style="padding-left:10px" target="_blank"><img src="../assets/icons/medium.png" height="30px" width="30px"/></a>
    </div>
    <!-- end Footer -->
  </div>

</template>

<script>
export default {
  name: "HOME",
  components: {

  }
}
</script>

<style scoped>
.section {
  font-family: HoeflerTextItalic, serif;
  text-align:left;
  font-size: 16px;
  padding: 16px 0 32px 0;
  border-bottom: 1px solid #DEDEDE;
  margin: 40px 0;
}
.cb {
  clear:both;
}

.role {
  margin:16px 0 15px 0;

}

.colorstripe {
  width:2px;
  float:left;
  height:120px;
  border-radius:16px;
  position: relative;
  margin-right:16px;
}
.roledesc {
  float:left;
  text-align: left;
  line-height: 20px;
  font-size:13px;
  letter-spacing: 1;
  margin-left:5px;
  margin-top: -10px;
}
.roledesc em {
  font-family: HoeflerTextItalic, serif;
  font-weight:500;
  font-style: normal;
  display:block;
}
.roledesc br {
  display:block;
  padding:4px 0;
  border:1px solid orange;
  height:1px;
}
.timeline {
  float: right;
  padding: 4px 0px;
  font-family: Light, sans-serif;
  font-weight: 200;
  font-size: 24px;
  text-align: right;
  letter-spacing: 0;
  margin:44px 0 0 0;
  display:none;
}
.tuya .colorstripe {
  background-image: url(../assets/googlestripe.png);
  background-position: center center;
  background-size:cover;
  background-repeat: no-repeat;
}
.penn .colorstripe {
  background: rgb(150,52,156);
  background:linear-gradient(180deg, rgba(150,177,210,1) 50%, rgba(227,28,58,1) 50%);
}
.penn .timeline {
  opacity:0.3;
}
.mcgill .colorstripe {
  background: rgb(150,52,156);
  background:linear-gradient(180deg, rgba(255,211,25,1) 50%, rgba(227,28,58,1) 50%);
}
.tuya .colorstripe {
  background-color:#1DB954;
}
.huawei .colorstripe {
  background-color:red;
}
.mcgill .timeline {
  opacity:0.24;
}

.halfleft {
  position:relative;
  display:block;
  background-color:#F2F2F2;
  float:left;
  width:45%;
  border-radius: 4px;
  border: 1px solid black;
  margin:0 0 44px 0;

}

.halfright {
  position:relative;
  display: block;
  width:45%;
  background-color:#F2F2F2;
  float:right;
  border-radius: 4px;
  margin:0 0 44px 0;
}


.photo{
  height:150px;
  width:350px;
  margin: 10 10 10 10;
  background-position: center center;
  background-size: cover;
  border: 1px solid #dedede;
  border-radius: 11px;
  box-shadow: 5px 10px 8px #888888;
}


.blocktitleleft {
  font-family: BOLD;
  text-transform: uppercase;
  font-size:0.6em;
  letter-spacing: 1.2px;
  float:left;
  display:block;
  position:relative;
  margin:0 0 44px 0;
}

.blocktitleright {

  text-transform: uppercase;
  font-size:0.6em;
  letter-spacing: 1.2px;
  opacity:.7;
  float:right;
  display:block;
  position:relative;
  margin:0 0 0 0;
}


</style>