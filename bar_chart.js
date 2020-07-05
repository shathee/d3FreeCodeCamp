
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
            // return item[0].substring(0, 4);
            return item[0];
        })
        
       
        const w = 800;
        const h = 450;



    //    const xScale = d3.scaleTime()
    //     .domain([new Date(d3.min(year)), new Date(d3.max(year))])
    //     .range([0, w]);

        const xScale = d3.scaleTime()
        .domain([ 1945, 2020])
        .range([0, 800]);
   
       const yScale = d3.scaleLinear()
       .domain([d3.min(gdp), d3.max(gdp)])
       .range([450, 0]);
        
    //    var linearScale = d3.scaleLinear().
    //    domain([0, d3.max(gdp, (d) => d)]).
    //    range([0, h]);
     
    //    scaledGDP = gdp.map(function (item) {
    //      return linearScale(item);
    //    });

    //    const xAxis = d3.axisBottom().scale(xScale);
       const xAxis = d3.axisBottom(xScale);
       const yAxis = d3.axisLeft(yScale);
       
      
       console.log(yScale(5000))  


    const svg = d3.select("#content")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(gdp)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i*10)
       .attr("y", (d, i) => h-d)
       .attr("width", 8)
       .attr("height", (d, i) => yScale(d))
       .attr("transform", "translate(0, 400)")
       .attr("fill", "navy").attr('transform', 'translate(60, 0)');
        

       svg.append("g")
       .attr("transform", "translate(0, 450)")
       .call(xAxis);
    
        svg.append("g")
        .attr("transform", "translate(450, 0)")
        .call(yAxis);
       


     }
    

    