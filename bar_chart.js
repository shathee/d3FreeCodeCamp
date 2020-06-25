
    // const dataset = d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', d);
    
    const req = new XMLHttpRequest();
      req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        const dataset = json;
        
        
        var gdp = dataset.data.map(function (item){
            return item[1]
        })
        
        var year = dataset.data.map(function (item){
            return item[0].substring(0, 4);
        })
        
       
        const w = 800;
        const h = 450;

        const xScale = d3.scaleLinear()
        .domain([0, d3.max(year, (d) => d)])
        .range([0, w]);
   
       const yScale = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d)])
       .range([h, 0]);
   
       const xAxis = d3.axisBottom(xScale);
       const yAxis = d3.axisLeft(yScale);
       
       


    const svg = d3.select("#content")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    console.log(gdp)
    svg.selectAll("rect")
       .data(gdp)
       .enter()
       .append("rect")
       .attr("x", (d, i) => xScale(i))
       .attr("y", (d, i) => h - d)
       .attr("width", 25)
       .attr("height", (d, i) => d)
       .attr("fill", "navy");
        

       svg.append("g")
       .attr("transform", "translate(0," + (h) + ")")
       .call(xAxis);
    
    svg.append("g")
    .attr("transform", "translate(0," + (w) + ")")
    .call(yAxis);
       


     }
    

    