var lista_clientes = [];

var dia = 3;

$(".fc-content-skeleton").find("td:nth-child(" + dia + ")").find(".fc-event-container").find("a").each(function () {
	lista_clientes.push($(this).find(".fc-content").find(".fc-title").html().split(" - "));
});

var lineArray = [];
lista_clientes.forEach(function (infoArray, index) {
    var line = infoArray.join(";");
    lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
});
var csvContent = lineArray.join("\n");

$("#exportar_agenda").remove();

if (csvContent) {
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.style.display = "none";
	link.setAttribute("id", "exportar_agenda");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "agenda_renato_" + moment().format("YYYY-MM-DD") + ".csv");
	link.innerHTML= "Click Here to download";
	document.body.appendChild(link);
	link.click();
}
else {
	alert("N\xE3o h\xE1 clientes agendados para este dia");
}
