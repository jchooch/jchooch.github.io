---
layout: default
title: "Joe Choo-Choy"
---

<h1 class="mt-5" itemprop="name headline">{{ page.title | escape }}</h1>

<p class="lead mb-4"><b>Duke University</b></p>

<!--<script language="javascript" src="change_image.js"></script>-->

<div class="row">
  <div class="col-3">
    <img src="{{site.photo_1}}" class="img-fluid rounded float-left" alt="countenance" id="imgClickAndChange" onclick="changeImage()"/>
    <!--<script src="/random.js" type="text/javascript"></script>-->
  </div>
  <div class="col">
    <p>
    Hello!
    </p>
    <p>
      Are you lost? I am...
    </p>
    <p>
    In particular, I'm often confused by:
    </p>
    <p>
      Neuroscience | Biology | Evolution | Psychology
    </p>
    <p>
      Artificial Intelligence | Machine Learning | Statistics
    </p>
    <p>
      Cognitive Science | Philosophy | <a href="https://www.effectivealtruism.org/">Effective Altruism</a>
    </p>
    <p>
      This site is a work-in-progress.
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
      Apparently it's called "higher education"... Lol!
      </td> </tr>

</table>


<h4 class="mt-5 mb-3">Publications</h4>

|--- ||--- |
|2022||Jacobs et al. <b>Predicting connectivity of motion-processing neurons with recurrent neural networks</b>, <i>COSYNE</i>.|

<!--
<div class="noprint">
<h4 class="mt-5 mb-3">Posts</h4>

<p>
  <table class="mt-3">
  {% for post in site.posts %}
      <tr>
      <td class="align-top">
        {%- assign date_format = site.minima.date_format | default: "%Y" -%}
        {{ post.date | date: date_format }}
      </td>
      <td><span style="display:inline-block; width:0.3cm;"></span></td>
      <td class="align-top">
      <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      </tr>
  {% endfor %}
  </table>
</p>
-->

<h4 class="mt-5 mb-3">Misc</h4>

<p>
You can also check out my <a href="{{ site.lists_permalink }}">lists</a> and <a href="{{ site.tidbytes_permalink }}">tidbytes</a>.
</p>

<p size="10" style="color:palevioletred;"><i>Nullius in verba</i></p>

<p size="6" style="color:grey">This blog's design was inspired by that of <a href="https://brunomaga.github.io/">Bruno Magalhaes</a>.</p>
