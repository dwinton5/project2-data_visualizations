// Data for Bar Charts came from https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html
// Sample Plotly code for reading a csv that I could not get to work due to issues with live server constantly refreshing
Plotly.d3.csv('State_Vac_Data/2015-2016_Vac_Data.csv', function(error, data){
    
    if (error) throw error;
    
    console.log(data);

// Insert Bar Chart for Vaccinations for Seniors in Deadliest States 2017-2018
    var data1 = [{
        type: 'bar',
        x: ['<em>2015-2016<em> <i>US<i>', '<em>2015-2016<em> <i>TX<i>', '<em>2015-2016<em> <i>CA<i>','<em>2015-2016<em> <i>OH<i>','<em>2015-2016<em> <i>IL<i>','<em>2015-2016<em> <i>GA<i>','<em>2016-2017<em> <i>US<i>','<em>2016-2017<em> <i>AL<i>','<em>2016-2017<em> <i>NJ<i>',
        '<em>2016-2017<em> <i>PA<i>','<em>2016-2017<em> <i>MA<i>','<em>2016-2017<em> <i>MD<i>','<em>2017-2018<em> <i>US<i>','<em>2017-2018<em> <i>MD<i>','<em>2017-2018<em> <i>MN<i>','<em>2017-2018<em> <i>AL<i>','<em>2017-2018<em> <i>TX<i>','<em>2017-2018<em> <i>NY<i>'],
        y: [63.4, 65.1, 61.1, 61.2, 59.3, 62.6, 65.3, 63, 65.5, 72.3, 59.3, 71.8, 59.6, 63.8, 66, 65.4, 52.6, 53],
        marker: {color: ['#2E7D32','#2E7D32','#2E7D32', '#2E7D32','#2E7D32','#2E7D32', '#9575CD', '#9575CD', '#9575CD', '#9575CD', '#9575CD', '#9575CD', '#9575CD', '#F44336', '#F44336', '#F44336', '#F44336', '#F44336', '#F44336', '#F44336']},
         
    }];

    var layout1 = {
        title: "<em>Flu Vaccination Averages for Seniors 2016-2018<em>",
        xaxis: { title: "<b>Seasons and States<b>"},
        yaxis: { title: "% of Seniors Vaccinated"}
    };
      
    Plotly.newPlot("vac_plot1", data1, layout1, {showLink: false});

// Insert Vaccinations Bar Chart by Age Group 2017-2018
    var data2 = [{
        type: 'bar',
        x: ['<em>6mos-17yrs<em> <i>US<i>', '<em>6mos-17yrs<em> <i>MD<i>','<em>6mos-17yrs<em> <i>MN<i>','<em>6mos-17yrs<em> <i>AL<i>','<em>6mos-17yrs<em> <i>TX<i>','<em>6mos-17yrs<em> <i>NY<i>', '<em>18-64 yrs<em> <i>US<i>','<em>18-64 yrs<em> <i>MD<i>','<em>18-64 yrs<em> <i>MN<i>',
        '<em>18-64 yrs<em> <i>AL<i>','<em>18-64 yrs<em> <i>TX<i>','<em>18-64 yrs<em> <i>NY<i>', '<em>65+ yrs<em> <i>US<i>','<em>65+ yrs<em> <i>MD<i>','<em>65+ yrs<em> <i>MN<i>','<em>65+ yrs<em> <i>AL<i>','<em>65+ yrs<em> <i>TX<i>','<em>65+ yrs<em> <i>NY<i>'],
        y: [57.9, 67.5, 61.9, 53.8, 58, 64.9, 31.1, 39.3, 38.6, 31.7, 26, 28.8, 59.6, 63.8, 66, 65.4, 52.6, 53],
        marker: {color: ['#4FC3F7','#4FC3F7','#4FC3F7', '#4FC3F7','#4FC3F7','#4FC3F7', '#0277BD', '#0277BD', '#0277BD', '#0277BD', '#0277BD', '#0277BD', '#0277BD', '#EF6C00', '#EF6C00', '#EF6C00', '#EF6C00', '#EF6C00', '#EF6C00', '#EF6C00']},
    }];

    var layout2 = {
        title: "<em>Flu Vaccinations by Age Groups 2017-2018<em>",
        xaxis: { title: "<b>Seasons and States<b>"},
        yaxis: { title: "% of Age Group Vaccinated"}
    };
      
    Plotly.newPlot("vac_plot2", data2, layout2, {showLink: false});

// Data for Age Demographic Pie Charts came from https://www.prb.org/which-us-states-are-the-oldest/
    var trace1 = {
      labels: ["Under65 (in thousands)", "Over65 (in thousands)"],
      values: [5112, 931],
      type: 'pie'
    };

    var data3 = [trace1]

    var layout3 = {
      title: "Maryland Ranked 1st Deadliest & 40th in Number of Seniors",
    };

    Plotly.newPlot("age_plot1", data3, layout3);

    var trace2 = {
        labels: ["Under65 (in thousands)", "Over65 (in thousands)"],
        values: [4712, 840],
        type: 'pie'
      };
  
    var data4 = [trace2]
  
    var layout4 = {
      title: "Minnesota Ranked 2nd Deadliest & 31st in Number of Seniors",
    };
  
    Plotly.newPlot("age_plot2", data4, layout4);

    var trace3 = {
      labels: ["Under65 (in thousands)", "Over65 (in thousands)"],
      values: [4061, 827],
      type: 'pie'
    };
  
    var data5 = [trace3]
  
    var layout5 = {
      title: "Alabama Ranked 3rd Deadliest & 21st in Number of Seniors",
    };
  
    Plotly.newPlot("age_plot3", data5, layout5);

      var trace4 = {
        labels: ["Under65 (in thousands)", "Over65 (in thousands)"],
        values: [25100, 3602],
        type: 'pie'
      };
  
      var data6 = [trace4]
  
      var layout6 = {
        title: "Texas Ranked 4th Deadliest & 48th in Number of Seniors",
      };
  
      Plotly.newPlot("age_plot4", data6, layout6);

      var trace5 = {
        labels: ["Under65 (in thousands)", "Over65 (in thousands)"],
        values: [16328, 3214],
        type: 'pie'
      };
  
      var data7 = [trace5]
  
      var layout7 = {
        title: "New YorK Ranked 5th Deadliest & 26th in Number of Seniors",
      };
  
      Plotly.newPlot("age_plot5", data7, layout7);

});



// Insert Age Demographic Pie Charts for Five Deadliest States 2017-2018
    // var md = Object.values(data3.md);
    // var mn = Object.values(data3.mn);
    // var al = Object.values(data3.al);
    // var tx = Object.values(data3.tx);
    // var ny = Object.values(data3.ny);

    // var labels = Object.keys(data3.md);
    // console.log(labels);

    // function init() {
    //   var trace = {
    //     values: md,
    //     labels: labels,
    //     type: "pie"
    //   };
    //   var data3 = [trace];
    //   var layout = {
    //     title: "Senior Demographics of Five Deadliest States 2017-2018"
    //   };
    //   Plotly.newPlot("pie", data3, layout);
    // }

    // d3.selectAll("#selectData").on("change", updatePlotly);
    // function updatePlotly() {
    //   var dropdown = d3.selectAll("#selectData");
    //   var selection = dropdown.property("value");
    //   data = [];
    //   if (selection === "dataset1") {
    //     data = md;
    //   } else if (selection === "dataset2") {
    //     data = mn;
    //   } else if (selection === "dataset3") {
    //     data = al;
    //   } else if (selection === "dataset4") {
    //     data = tx;
    //   } else if (selection === "dataset5") {
    //     data = ny;
    //   }
    //   Plotly.restyle("pie", "values", [data3]);
    // }
    // init();
