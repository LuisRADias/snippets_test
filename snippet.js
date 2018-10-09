var lista_clientes = [];

$(".fc-content-skeleton").find("td:nth-child(2)").find(".fc-event-container").find("a").each(function () {
	lista_clientes.push($(this).find(".fc-content").find(".fc-title").html().split(" - "));
});

var lineArray = [];
lista_clientes.forEach(function (infoArray, index) {
    var line = infoArray.join(";");
    lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
});
var csvContent = lineArray.join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "agenda_dia.csv");
link.innerHTML= "Click Here to download";
document.body.appendChild(link); // Required for FF

link.click(); // This will download the data file named "my_data.csv".
