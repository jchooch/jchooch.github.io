---
layout: default
title: "Joe Choo-Choy"
---

<h1 class="mt-5" itemprop="name headline">{{ page.title | escape }}</h1>

<p class="lead mb-4"><b>Duke University</b></p>

<div class="row">
  <div class="col-3">
    <img src="{{site.photo}}" class="img-fluid rounded float-left" alt="countenance"/>
  </div>
  <div class="col">
    <p>
    Hello, there!
    </p>
    <p>
    Are you lost?
    </p>
    <p>
    I am...
    </p>
    <p>
    Lost in *SCIENCE*, that is...!
    </p>
    <p>
    But no... I really am lost.
    </p>
    <p>
    In neuroscience and biology and computer science.
    </p>
    <p>
    Also in philosophy and <a href="https://www.effectivealtruism.org/">effective altruism</a>.
    </p>
    <p>
    ... Please send help.
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
        <td style="min-width:70px"> 0000-0000</td>
        <td> <b> AI Researcher at Microsoft Research, Cambridge, UK </b> </td>
      </tr>
      <tr> <td/> <td>
       I design computer vision models for object recognition and classification of information written on glass for <a href="https://www.microsoft.com/en-us/research/project/project-silica/">Project Silica</a>.  I also perform full-stack development of large data pipelines and scalable Machine Learning models on the cloud (AzureML), in order to handle the large amount of super-high resolution input data.
      </td> </tr>
      <tr> <td/> <td>
Previously, as an AI resident, I improved the CPU load balancing of email servers, based on an ML system that learnt time series from email usage patterns, using DNNs, RNNs, Encoder-Decoders, Bayesian linear regression (closed-form solution) and Bayesian neural nets (Variational Inference); 
      </td> </tr>
      <tr> <td/> <td>
I also built a recommendation system using Graph Neural Nets to learn from related nodes on on very large (trillion edges) Meetings/Documents/Users/Emails graphs;
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b>PhD candidate at École polytechnique fédérale de Lausanne ‐ EPFL, Switzerland</b> </td>
      </tr>
      <tr> <td/> <td>
I researched, conceptualized, implementated and published new methods for the asynchronous variable-step simulation
of detailed spiking neural networks on large networks of highly-heterogeneous compute nodes. My main contribution was the first ever fully-asynchronous execution model (with async. computation, communication and IO), demonstrated on our use case and yielding a much faster execution and a higher numerical accuracy and stability;
      </td> </tr>
      <tr> <td/> <td>
I programmed in C and C++ on top of an asynchronous runtime system with global memory addressing (HPX) and implemented all the simulation logic (fixed and variable timestep interpolation) and the underlying HPC algorithms such as distributed task scheduling, multicore parallelism, concurrency, threading, dynamic load-balancing, vectorization and cache optimizations on four distinct Intel and compute AMD clusters. 
      </td> </tr>
      <tr> <td/> <td>
Most of my work was implemented and validated on the <a href="https://neuron.yale.edu/neuron/">NEURON</a> and <a href="https://github.com/BlueBrain/CoreNeuron">CoreNeuron</a> open-source simulators, and has been executed full steam on several supercomputers with thousands of compute nodes processing terabytes of data.
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 0000-0000 </td>
        <td> <b>Teaching Assistant at École polytechnique fédérale de Lausanne ‐ EPFL, Switzerland</b> </td>
      </tr>
      <tr> <td/> <td>
During my PhD, I performed 400h of teaching assistant duties for the courses of <a href="https://edu.epfl.ch/coursebook/en/unsupervised-reinforcement-learning-in-neural-networks-CS-434">unsupervised and reinforcement learning</a>, <a href="https://edu.epfl.ch/coursebook/en/project-in-informatics-CS-116">project in neuroinformatics</a> and <a href="https://edu.epfl.ch/coursebook/en/in-silico-neuroscience-BIOENG-450#:~:text=%22In%20silico%20Neuroscience%22%20introduces%20masters,management%2C%20modelling%20and%20computing%20technologies.">in silico neuroscience</a>, preparing exams, coursework, and tutorials;
      </td> </tr>

</table>
-->

<h4 class="mt-5 mb-3">Education</h4>

<table class="mt-3">
      <tr>
        <td style="min-width:100px"> 0000-0000 </td>
        <td> <b> Round Two? </b> </td>
      </tr>
      <tr> <td/> <td>
      Description.
      </td> </tr>
      <tr>
        <td style="min-width:100px"> 2017-2021 </td>
        <td> <b> Systems Biology B.S., Department of Computer Science, Duke University </b> </td>
      </tr>
      <tr> <td/> <td>
      Absolutely awful. Don't recommend it.
      </td> </tr>

</table>


<h4 class="mt-5 mb-3">Publications</h4>

|--- ||--- |
|0000||[Wikipedia](https://www.wikipedia.org/).|
|1998||Birth certificate, United Kingdom.|
|    ||(Didn't actually write this, but performed necessary work.)|
|    ||(Well, I didn't really do the <i>work</i>, but I was generally present when the work was done.)|


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
You can also check out my <a href="{{ site.resources_permalink }}">resources page</a> or <a href="{{ site.jots_permalink }}">Joe's jots</a>. 
</p>

<p>
Personal, random information. 
</p>
</div> <!-- noprint -->