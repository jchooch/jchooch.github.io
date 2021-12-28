---
layout: default
title: "Joe Choo-Choy"
---

<!--- Comment out markdown like this FYI --->

<h1 class="mt-5" itemprop="name headline">{{ page.title | escape }}</h1>

<p class="lead mb-4"><b>Duke University</b></p>

<div class="row">
  <div class="col-3">
    <img src="{{site.photo}}" class="img-fluid rounded float-left" alt="countenance"/>
  </div>
  <div class="col">
<p>
Hello. This is a description of me.
</p>
    
  </div>
</div>

<ul class="nav mt-3">
  <li class="nav-item">
    <a class="btn btn-link" href="mailto:{{ site.email }}?subject=Hello" class="btn btn-link"><i class="fas fa-envelope" title="Email"></i> {{site.email}}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="{{ site.url }}" class="btn btn-link"><i class="fas fa-mouse-pointer" title="homepage"></i> {{ site.url }} </a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="https://twitter.com/{{ site.twitter_username }}" class="btn btn-link"><i class="fab fa-fw fa-twitter-square" ></i> {{ site.twitter_username }} </a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="https://github.com/{{ site.github_username }}" class="btn btn-link"><i class="fab fa-fw fa-github" ></i>{{ site.github_username}}</a>
  </li>
  <!--
  <li class="nav-item">
    <a class="btn btn-link" href="https://www.linkedin.com/in/{{ site.linkedin_username }}" class="btn btn-link"><i class="fab fa-linkedin" ></i> {{ site.linkedin_username }}</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="skype:{{ site.skype_username }}" class="btn btn-link"><i class="fab fa-skype" aria-hidden="true"></i> {{ site.skype_username }} </a>
  </li>
  <li class="nav-item">
    <a class="nav-item btn btn-link" href="{{ site.google_scholar }}" class="btn btn-link"><i class="ai ai-google-scholar ai-1x"  title="Google Scholar"></i> google scholar</a>
  </li>
  -->
  <li class="nav-item">
    <a class="nav-link btn btn-link" href="https://en.wikipedia.org/wiki/Lausanne"><i class="fa fa-home"  title="Home"></i> Lausanne, Switzerland</a>
  </li>
  <li class="nav-item">
    <a class="nav-link btn btn-link" href="https://en.wikipedia.org/wiki/United_Kingdom"><i class="fas fa-passport"  title="Nationality"></i> British</a>
  </li>
  <li class="nav-item">
    <a class="btn btn-link" href="{{ site.resume }}"><i class="far fa-user-circle"  title="resume"></i> CV</a>
  </li>
  <!--
  <div class="noprint">
    <li class="nav-item">
      <a class="btn btn-link" href="javascript:window.print()"><i class="fas fa-download" title="download this page"></i> Download this page</a>
    </li>
  </div>
  -->
</ul>


<h4 class="mt-5 mb-3">Professional Experience</h4>

<table class="mt-3">
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b>Experience 5, Location 5</b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 2;  
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 3.
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b>Experience 4, Location 4</b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1.
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b> Experience 3, Location 3 </b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 2.
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b> Experience 2, Location 2 </b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 2;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 3;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 4.
      </td> </tr>

      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b> Experience 1, Location 1 </b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1.
      </td> </tr>

</table>


<h4 class="mt-5 mb-3">Education</h4>

<table class="mt-3">

      <tr>
        <td style="min-width:70px"> 2015-19 </td>
        <td> <b>Doctorate in Something at Somewhere, Someplace</b> </td>
      </tr>
      <tr> <td/> <td>
      Project/Achievement 1;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 2;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 3;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 4;
      </td> </tr>
      <tr> <td/> <td>
      Project/Achievement 5.
      </td> </tr>

      <tr>
        <td style="min-width:70px"> 2009 </td>
        <td> <b> MSc Advanced Computing at Imperial College London, UK </b> </td>
      </tr>
      <tr> <td/> <td>
I was trained on the theoretical aspects of computer science such as compilers, logic, computer vision, type systems, etc. My final project aimed at developing a distributed, multi-core CPU and GPU (CUDA) computation of large Markov models on a distributed network, was awarded distinction and was published as <a href="http://eprints.maths.manchester.ac.uk/1533/">GPU-enabled steady-state solution of large Markov models</a> at NSMC’10;
      </td> </tr>

      <tr>
        <td style="min-width:70px"> 2007 </td>
        <td> <b> BSc Systems Engineering and Computer Science at University of Minho, Portugal </b> </td>
      </tr>
      <tr> <td/> <td>
Between 2005 and 2006 I was an ERASMUS exchange student at the University of Maribor in Slovenia. I finished the degree with A (best 10%);
      </td> </tr>

</table>


<h4 class="mt-5 mb-3">Publications</h4>

Here's a list of my most relevant publications. In the following, I was the first author and publications were peer-reviewed, unless mentioned otherwise. Conference journals/proceedings required a presentation at the venue as well. For a more exhaustive list, see my [Google Scholar]({{ site.google_scholar }}) profile.

|--- ||--- |
|2027||In preparation: Sketchy Methods for Ill-Considered Objectives, Journal of Modesty, United Kingdom.|
|1998||[Birth Certificate](https://en.wikipedia.org/wiki/Birth_certificate), British Birth Registry, United Kingdom.|


<div class="noprint">
<h4 class="mt-5 mb-3">Posts</h4>

When time allows, I post about HPC or ML projects I was involved in, or publications and discussions I find interesting.

<p>
  <table class="mt-3">
  {% for post in site.posts %}
      <tr>
      <td class="align-top">
        {%- assign date_format = site.minima.date_format | default: "%Y" -%}
        {{ post.date | date: date_format }}
      </td>
      <td><span style="display:inline-block; width:0.2cm;"></span></td>
      <td class="align-top">
      <a href="{{ post.url }}">{{ post.title }}</a>
      </td>
      </tr>
  {% endfor %}
  </table>
</p>

<p>
I also maintain a <a href="{{ site.resources_permalink }}">resources page</a> where I keep track of several HPC and ML ebooks available online, used as reference on my posts. 
</p>

<h4 class="mt-5 mb-3">Misc</h4>

<p>
I've been playing waterpolo for most of my life, the last 12 years with <a href="https://lausannenatation.ch/section/waterpolo/">Lausanne Natation</a> and <a href="https://uk.teamunify.com/SubTabGeneric.jsp?_stabid_=153844/">Cambridge City</a> clubs. I enjoy cooking and winter sports - particularly skiing - and I am a cryptocurrency enthusiast. As a general rule, I prefer not to be addressed by my academic title or surname, so addressing me simply by my first name (<i>"Hi Bruno"</i>) is perfectly fine :)
</p>
</div> <!-- noprint -->
