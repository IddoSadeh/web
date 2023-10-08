const filterContainer = document.querySelector(".work-filter");
workItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
	if(event.target.classList.contains("filter-item")) {
		filterContainer.querySelector(".active").classList.remove("active");

		event.target.classList.add("active");
		const filterValue = event.target.getAttribute("data-filter");
		workItems.forEach((item) => {
			if (item.classList.contains(filterValue) || filterValue === 'all') {
				item.classList.remove("hide");
				item.classList.add("show");
			}
			else {
				item.classList.remove("show");
				item.classList.add("hide");
			}
		})
	}
})