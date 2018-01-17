---
layout: default
nav-state: index
---

<style>
#schedule {
	display: grid;
	grid-template-columns: 1fr 2fr 4fr 6fr 6fr 5fr
}
</style>
<div id="quick-links">
<h3><a href="syllabus.html">Course Info</a> | <a href="https://piazza.com/class/j6qyg6yrhvt4ti">Piazza</a> | <a href="syllabus.html#tutoring">Tutoring</a> | <a href="syllabus.html#hw-policy">Homework Policy</a> | <a href="syllabus.html#quiz-policy">Quiz Policy</a></h3>
</div>
<table class="table table-striped table-hover">
<thead>
<tr>
	<th>#</th>
	<th>Date</th>
	<th>Topics</th>
	<th>Slides</th>
	<th>Readings</th>
	<th>Assignments</th>
</tr>
</thead>
<tbody>

WAT?
{% for day in site.data.schedule %}

<tr>
	<td>{{ day.num | markdownify }}</td>
	<td>{{ day.date | markdownify}}</td>
	<td markdown="block">{{ day.topics | markdownify }}</td>
	<td markdown="block">{{ day.slides | markdownify }}</td>
	<td markdown="block">{{ day.readings | markdownify }}</td>
	<td markdown="block">{{ day.assignments | markdownify }}</td>
</tr>
{% endfor %}
</tbody>
</table>
