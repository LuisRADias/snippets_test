$(".fc-content-skeleton").find("td:nth-child(2)").find(".fc-event-container").find("a").each(function () {
	console.log($(this).find(".fc-content").find(".fc-title").html().split(" - "));
});
