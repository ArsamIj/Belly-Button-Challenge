const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


//dropdown menu
function init(){
  d3.json(url).then(data => {
    let subjectIds = data.names;
    let select = d3.select("#selDataset");
    subjectIds.forEach(id => {
      select.append("option").attr("value", id).text(id);
    });
    pull(subjectIds[0]);
  });
}

init();

//function to pull data, subject ID and charts
function pull(subjectId) {
  d3.json(url).then(data => {
    console.log(data);
    console.log(subjectId);

    DemoInfo(data, subjectId);  
    AllCharts(data, subjectId);
    gaugeChart(data, subjectId); 
  });
}

// Demographic Info
function DemoInfo(data, subjectId) {
    const metadata_arr = data.metadata;
    let resultArray = metadata_arr.filter(Object => Object.id == subjectId);
    let metadata_result = resultArray[0];

        let data_panel = d3.select("#sample-metadata");
        // Clearing the existing items in panel
        data_panel.html("");
    
        // Add key and value pair to panel
        Object.entries(metadata_result).forEach(([key, value]) => {
          data_panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
}


// Create Horizontal, Bubble, Gauge charts - 
function AllCharts(data, subjectId) {
  
  const samples_arr = data.samples;
  
  // Create variables to filter and hold samples
  let filtered_samples = samples_arr.filter(Object => Object.id == subjectId);
  let samples_first_sample = filtered_samples[0];

  //otu_ids, otu_labels and sample_values
  let otuIds = samples_first_sample.otu_ids;
  let otuLabels = samples_first_sample.otu_labels;
  let sampleValues = samples_first_sample.sample_values;

  // bar chart yticks
  let yticks = otuIds.slice(0, 10).map(id => "OTU " + id + " ").reverse();
  let barchart = [{
    x: sampleValues.slice(0, 10).reverse(),
    y: yticks,
    text: otuLabels.slice(0, 10).reverse(),
    type: "bar",
    orientation:"h",
    marker: {
      color: sampleValues.slice(0, 10).reverse(),
      colorscale: "RdBu"
    }
    }];

  let bar_layout = {
    width: 500, 
    height: 450,
    title: "Bacteria Cultures - Top 10",
  }
  // plot the data for the horizontal bar chart
  Plotly.newPlot("bar", barchart, bar_layout);

  //bubble chart
  let bubbleData = [{
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: 'markers',
    marker: {
      size: sampleValues,
      color: otuIds,
      colorscale: "YlOrRd"
    }
  }];

  //layout for the bubble chart. 
  let bubbleLayout = {
    width: 1300, 
    height: 400,
    title: 'Bacteria Cultures Per Sample',
    margins: {
      l: 0,
      r: 0,
      b: 0,
      t: 0     
    },
  };

  Plotly.newPlot("bubble", bubbleData, bubbleLayout);
}
