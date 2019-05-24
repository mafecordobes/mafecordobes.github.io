am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end
	
	var chart = am4core.create("chartdivskill", am4plugins_wordCloud.WordCloud);
	chart.fontFamily = "Inconsolata";
	var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
	series.randomness = 0.1;
	series.rotationThreshold = 0.5;
	
	series.data = [ {
		"tag": "PHP",
		"count": "100"
	}, {
		"tag": "jQuery",
		"count": "90"
	}, {
		"tag": "UX/UI Design",
		"count": "89"
	}, {
		"tag": "e commerce",
		"count": "88"
	}, {
		"tag": "React",
		"count": "89"
	}, {
		"tag": "node.js",
		"count": "85"
	}, {
		"tag": "Git flow",
		"count": "87"
	}, {
		"tag": "Magento",
		"count": "84"
	}, {
		"tag": "MySQL",
		"count": "84"
	}, {
		"tag": "Animations",
		"count": "84"
	}, {
		"tag": "Cake",
		"count": "70"
	}, {
		"tag": "Scrum",
		"count": "84"
	}, {
		"tag": "BitBucket",
		"count": "80"
	}, {
		"tag": "Agile",
		"count": "70"
	} ];
	
	series.dataFields.word = "tag";
	series.dataFields.value = "count";
	
	series.heatRules.push({
	 "target": series.labels.template,
	 "property": "fill",
	 "min": am4core.color("#0000CC"),
	 "max": am4core.color("#CC00CC"),
	 "dataField": "value"
	});
	
	
	var hoverState = series.labels.template.states.create("hover");
	hoverState.properties.fill = am4core.color("#FFFFFF");
	
	var title = chart.titles.create();
	title.text = "Otros Conocimientos";
	title.fontSize = 20;
	title.fontWeight = "14";
	
	}); // end am4core.ready()