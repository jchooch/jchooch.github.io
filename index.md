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
        <td style="min-width:70px"> 2019-present</td>
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
        <td style="min-width:70px"> 2015-19 </td>
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
        <td style="min-width:70px"> 2015-18 </td>
        <td> <b>Teaching Assistant at École polytechnique fédérale de Lausanne ‐ EPFL, Switzerland</b> </td>
      </tr>
      <tr> <td/> <td>
During my PhD, I performed 400h of teaching assistant duties for the courses of <a href="https://edu.epfl.ch/coursebook/en/unsupervised-reinforcement-learning-in-neural-networks-CS-434">unsupervised and reinforcement learning</a>, <a href="https://edu.epfl.ch/coursebook/en/project-in-informatics-CS-116">project in neuroinformatics</a> and <a href="https://edu.epfl.ch/coursebook/en/in-silico-neuroscience-BIOENG-450#:~:text=%22In%20silico%20Neuroscience%22%20introduces%20masters,management%2C%20modelling%20and%20computing%20technologies.">in silico neuroscience</a>, preparing exams, coursework, and tutorials;
      </td> </tr>
      <tr>
        <td style="min-width:70px"> 2011-15 </td>
        <td> <b> Research Engineer at Blue Brain Project, EPFL, Switzerland </b> </td>
      </tr>
      <tr> <td/> <td>
Aiming at scaling up the largest ever digital reconstruction of a detailed mammal neocortex, I designed and developed several algorithms for efficient computation and storage on BlueGene/P, Bluegene/Q and SGI supercomputers. To name a few, parallel/distributed volumetric spatial decomposition, load balancing, spatial indexing, sorting, I/O, sparse matrix transpose, and graph navigation;
      </td> </tr>
      <tr> <td/> <td>
My work led to the first ever digital reconstruction of detailed brain model at the scale of the mouse brain (80M neurons), and is the underlying technology supporting the lab's landmark <a href="http://www.cell.com/abstract/S0092-8674(15)01191-5">Cell paper</a>;
      </td> </tr>

      <tr>
        <td style="min-width:70px"> 2009-11 </td>
        <td> <b> Junior IT architect at Noble Group, London, UK </b> </td>
      </tr>
      <tr> <td/> <td>
As part of an international traineeship, I did three rotational placements on different headquarters where I performed the following duties:
      </td> </tr>
      <tr> <td/> <td>
(1) Network design and configuration for a backup data centre for EU Power & Gas trading infrastructure, London, UK;
      </td> </tr>
      <tr> <td/> <td>
(2) Network configuration and infrastructure design for a port and warehouse for coffee and soy beans, Santos, Brazil;
      </td> </tr>
      <tr> <td/> <td>
(3) Implementation of a web-based software for metals and coffee trading, New York, USA;
      </td> </tr>

      <tr>
        <td style="min-width:70px"> 2007-08 </td>
        <td> <b> Analyst Programmer at MSCI real estate, London, UK </b> </td>
      </tr>
      <tr> <td/> <td>
My first full-time job, where I consolidated my knowledge of algorithms, programming and end-to-end development of software systems. I developed a web app, a windows app, and a search engine on C++, C# and ASP (.NET) that would allow efficient storage and gathering of analytics on financial data;
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
