
 function gaugeChart(data, subjectId) {

  const metadata_arr = data.metadata;
  let filtered_metadata = metadata_arr.filter(Object => Object.id == subjectId);
  let metadata_first_sample = filtered_metadata[0];
  console.log(metadata_first_sample);

  //washing frequency variable
  let washing_freq = parseFloat(metadata_first_sample.wfreq);

  let data_gauge = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: washing_freq,
      title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
          bar: {color: 'white'},
          axis: { range: [null, 9] },
          steps: [
              {range: [0, 2], color: "red"},
              {range: [2, 4], color: "orange"},
              {range: [4, 6], color: "yellow"},
              {range: [6, 8], color: "lightgreen"},
              {range: [8, 10], color: "green"}
          ],
      },
  }
  ];

  // Layout
  let gaugeLayout = { 
      width: 500, 
      height: 400,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0   
      }
    };

  Plotly.newPlot("gauge", data_gauge, gaugeLayout);
}