"use strict";

var data = [ 5, 8, 15, 19, 32, 42];

var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);

d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) {
  return x(d) + "px";
}).text(function(d) {
  return d;
});
