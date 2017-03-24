var btn = document.getElementById("donate");
var donorName = document.getElementById("name");
var donorAmount = document.getElementById("amount");
var donationType = document.getElementsByName("donationType")


btn.addEventListener("click", function(event) {
	if (event.target.innerText === "Donate") {
		name = donorName.value;
		amount = donorAmount.value;
	for (var i = 0; i < donationType.length; i++) {
		if (donationType[i].checked === true) {
			type = donationType[i].value;
			Donations.createDonorObject(name, amount, type)
		}
	}
	console.log(donationType);

	}
	else if (event.target.innerText === "Cancel") {
		console.log("Cancel", event);

	donorName.value = " ";
	donorAmount.value = " ";
	donationType[0].checked = false;
	donationType[1].checked = false;
	}
});