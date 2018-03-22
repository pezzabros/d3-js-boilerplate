import 'bootstrap';
import _ from 'lodash';
import './style.css';
import Icon from './assets/icon.png';
import * as d3 from "d3";

function init(){
  var body = d3.select("body");
  var div = body.append("div");

  var sampleSVG = div.append("svg")
        .attr("width", 100)
        .attr("height", 100);

  sampleSVG.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 40)
      .attr("cx", 50)
      .attr("cy", 50)
      .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});
}

init();
