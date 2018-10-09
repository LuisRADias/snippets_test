var lista_clientes = [];

$(".fc-content-skeleton").find("td:nth-child(2)").find(".fc-event-container").find("a").each(function () {
	lista_clientes.push($(this).find(".fc-content").find(".fc-title").html().split(" - "));
});

lista_clientes.forEach(function(rowArray){
   let row = rowArray.join(",");
   csvContent += row + "\r\n";
});

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
