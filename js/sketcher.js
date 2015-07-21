
$(document).ready(function(){

newGrid(16, 16);


});

function addGrid(columnsTotal, rowsTotal){

	for (var rowLooper = 0; rowLooper < rowsTotal; rowLooper++){
		$('table').append("<tr></tr>");
	}


	for (var columnLooper = 0; columnLooper < columnsTotal; columnLooper++){
		$("tr").append("<td></td>");
	}

}

function newGrid(columnsDesired, rowsDesired){
	totalDrawingAreaWidth = 960;
	totalDrawingAreaHeight = 400;
	boxWidth = (totalDrawingAreaWidth - 4 * columnsDesired)/ columnsDesired; /* account for border lines around rows */
	boxHeight = (totalDrawingAreaHeight - 4 * rowsDesired)/ rowsDesired; /* account for border lines around rows */

	console.log("box height = " + boxHeight);
	console.log("total height = " + rowsDesired * (4 + boxHeight));

	addGrid(columnsDesired,rowsDesired);
	$('td').height(boxHeight + "px");
	$("td").width(boxWidth + "px");


	$('td').hover(
		function(){
			$(this).css("background-color","#008800");
		}
	)
}


function newSketch(){
	console.log("new Sketch button pressed");
	var columnsInputted = prompt("Enter number of columns", 16);
	console.log("Columns inputted = " + columnsInputted );
	var rowsInputted = prompt("Enter number of rows", 16);
	console.log("Rows inputted = " + rowsInputted );

	$('td').remove();
	$('tr').remove();

	newGrid(columnsInputted, rowsInputted);
}


