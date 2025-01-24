function toggleDropdown(dropdownId, imageClass) {
	var dropdown = document.getElementById(dropdownId);
	var image = document.querySelector("." + imageClass + " img");
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
		image.style.transform = "rotate(90deg)";
	} else {
		dropdown.style.display = "none";
		image.style.transform = "rotate(0deg)";
	}
}
// kolom 1
document.querySelector(".pijltjes1_1").addEventListener("click", function () {
	toggleDropdown("dropdown1_1", "pijltjes1_1");
});

document.querySelector(".pijltjes1_2").addEventListener("click", function () {
	toggleDropdown("dropdown1_2", "pijltjes1_2");
});
document.querySelector(".pijltjes1_3").addEventListener("click", function () {
	toggleDropdown("dropdown1_3", "pijltjes1_3");
});
// kolom 2
document.querySelector(".pijltjes2_1").addEventListener("click", function () {
	toggleDropdown("dropdown2_1", "pijltjes2_1");
});
document.querySelector(".pijltjes2_2").addEventListener("click", function () {
	toggleDropdown("dropdown2_2", "pijltjes2_2");
});

document.querySelector(".pijltjes2_3").addEventListener("click", function () {
	toggleDropdown("dropdown2_3", "pijltjes2_3");
});
document.querySelector(".pijltjes2_4").addEventListener("click", function () {
	toggleDropdown("dropdown2_4", "pijltjes2_4");
});
// kolom 3
document.querySelector(".pijltjes3_1").addEventListener("click", function () {
	toggleDropdown("dropdown3_1", "pijltjes3_1");
});
document.querySelector(".pijltjes3_2").addEventListener("click", function () {
	toggleDropdown("dropdown3_2", "pijltjes3_2");
});
document.querySelector(".pijltjes3_3").addEventListener("click", function () {
	toggleDropdown("dropdown3_3", "pijltjes3_3");
});
document.querySelector(".pijltjes3_4").addEventListener("click", function () {
	toggleDropdown("dropdown3_4", "pijltjes3_4");
});
document.querySelector(".pijltjes3_5").addEventListener("click", function () {
	toggleDropdown("dropdown3_5", "pijltjes3_5");
});
document.querySelector(".pijltjes3_6").addEventListener("click", function () {
	toggleDropdown("dropdown3_6", "pijltjes3_6");
});
document.querySelector(".pijltjes3_6").addEventListener("click", function () {
	toggleDropdown("dropdown3_6", "pijltjes3_6");
});
document.querySelector(".pijltjes3_7").addEventListener("click", function () {
	toggleDropdown("dropdown3_7", "pijltjes3_7");
});
