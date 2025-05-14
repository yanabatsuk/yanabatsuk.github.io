document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");

    if (searchInput && searchForm) {
        searchForm.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchForm.submit()                
            }

        });
    }
});