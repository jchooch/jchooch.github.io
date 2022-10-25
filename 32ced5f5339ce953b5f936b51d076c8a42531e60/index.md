---
layout: default
title: "Joe Choo-Choy"
---

<h1 class="mt-5" itemprop="name headline">{{ page.title | escape }}</h1>

<p class="lead mb-4"><b>Duke University</b></p>

<!--<script language="javascript" src="change_image.js"></script>-->

<div class="row">
  <div class="col-3">
    <!-- <img src="{{site.photo_1}}" class="img-fluid rounded float-left" alt="countenance" id="imgClickAndChange" onclick="changeImage()"/> -->
    <script src="/javascript/random.js" type="text/javascript"></script>
  </div>
  <div class="col">
    <p>
    Hello!
    </p>
    <p>
      Are you lost? I am...
    </p>
    <p>
    <a href="{{ site.about_permalink }}">About</a><br>
    <a href="{{ site.lists_permalink }}">Lists</a><br>
    <a href="{{ site.tracking_permalink }}">Tracking</a><br>
    <a href="{{ site.tidbytes_permalink }}">Tidbytes</a><br>
    <a href="{{ site.blog_permalink }}">Blog</a><br>
    <a href="{{ site.quotations_permalink }}">Quotations</a><br>
    <a href="{{ site.resources_permalink }}">Resources</a><br>
    <a href="https://www.effectivealtruism.org/">Effective Altruism</a><br>
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
    <a class="nav-link btn btn-link" href="https://en.wikipedia.org/wiki/Durham,_North_Carolina"><i class="fa fa-home"  title="Home"></i> London, UK</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="{{ site.resume }}"><i class="far fa-user-circle"  title="resume"></i> CV</a>
  </li>
</ul>

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

<p size="4" style="color:grey">This blog's design was inspired by that of <a href="https://brunomaga.github.io/">Bruno Magalhaes</a>.</p>
