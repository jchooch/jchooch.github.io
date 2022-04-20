---
layout: default
title: "About Joe Choo-Choy"
---

<h1 class="mt-5" itemprop="name headline">{{ page.title | escape }}</h1>

<p class="lead mb-4"><b>Duke University</b></p>

<!--<script language="javascript" src="change_image.js"></script>-->

<div class="row">
  <div class="col-3">
    <!-- ok this def works -->
    <!-- <img src="{{site.photo_1}}" class="img-fluid rounded float-left" alt="countenance" id="imgClickAndChange" onclick="changeImage()"/> -->
    <!-- this does not work --> 
    <script src="/javascript/random.js" type="text/javascript"></script>
  </div>
  <div class="col">
    <p>
    
    </p>
  </div>
</div>

<ul class="nav mt-3">
  <li class="nav-item">
    <a class="btn btn-link" href="mailto:{{ site.email }}?subject=Hello" class="btn btn-link"><i class="fas fa-envelope" title="Email"></i> {{site.email}}</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="https://twitter.com/{{ site.twitter_username }}" class="btn btn-link"><i class="fab fa-fw fa-twitter-square" ></i> {{ site.twitter_username }} </a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="https://github.com/{{ site.github_username }}" class="btn btn-link"><i class="fab fa-fw fa-github" ></i>{{ site.github_username}}</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="https://www.linkedin.com/in/{{ site.linkedin_username }}" class="btn btn-link"><i class="fab fa-linkedin" ></i> {{ site.linkedin_username }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-link" href="https://en.wikipedia.org/wiki/Durham,_North_Carolina"><i class="fa fa-home"  title="Home"></i> Durham, NC, USA</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="{{ site.resume }}"><i class="far fa-user-circle"  title="resume"></i> CV</a>
  </li>
</ul>

<p>
You can also read more <a href="/about.md">about me</a>, check out my <a href="{{ site.lists_permalink }}">lists</a>, check out my <a href="{{ site.tidbytes_permalink }}">tidbytes</a>, or do something more valuable with your time. 
</p>

<!--
<h4 class="mt-5 mb-3">Professional Experience</h4>

<table class="mt-3">
      <tr>
        <td style="min-width:100px"> 0000-0000</td>
        <td> <b> Example experience. </b> </td>
      </tr>
      <tr> <td/> <td>
       Example project.
      </td> </tr>
      <tr> <td/> <td>
      Example project.
      </td> </tr>
      <tr>
        <td style="min-width:100px"> 0000-0000 </td>
        <td> <b>Example experience.</b> </td>
      </tr>
      <tr> <td/> <td>
      Example project.
      </td> </tr>
      <tr> <td/> <td>
      Example project.
      </td> </tr>
</table>
-->

<h4 class="mt-5 mb-3">Education</h4>

<table class="mt-3">
      <tr>
        <td style="min-width:100px"> 2017-2021 </td>
        <td> <b> Systems Biology B.S., Department of Computer Science, Duke University </b> </td>
      </tr>
      <tr> <td/> <td>
      Apparently it's called "higher education"...! Don't necessarily recommend it.
      </td> </tr>
</table>


<h4 class="mt-5 mb-3">Publications</h4>

|--- ||--- |
|2022||Jacobs et al. <b>Predicting connectivity of motion-processing neurons with recurrent neural networks</b>, <i>COSYNE</i>.|

