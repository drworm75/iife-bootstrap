var btn = document.getElementById("donate");
var donorName = document.getElementById("name");
var donorAmount = document.getElementById("amount");
var donationType = document.getElementsByName("donationType")
var tableDiv = document.getElementById("table-div");
var donorEmail = document.getElementById("email")

function writeToDom() {
	currentList = Donations.getDonationInfo();
	var tableBuilder = "";
	
	tableBuilder += `<div class="col-md-6 table-responsive">`
  	tableBuilder +=	`<table class="table table-striped">`
	tableBuilder +=	`<tr>`
	tableBuilder +=	`<th>Name</th>`
	tableBuilder +=	`<th>Email</th>`
	tableBuilder +=	`<th>Pledge</th>` 
	tableBuilder +=	`<th>Type</th>`
	tableBuilder +=	`</tr>`
	for (var i = 0; i < currentList.length; i++) {
		tableBuilder +=	`<tr>`
		tableBuilder +=	`<td>${currentList[i].Name}</td>`
		tableBuilder +=	`<td>${currentList[i].Email}</td>`
		tableBuilder +=	`<td>${currentList[i].Amount}</td>` 
		tableBuilder +=	`<td>${currentList[i].Type}</td>`
		tableBuilder +=	`</tr>`
	}
	tableBuilder +=	`</table>`    		
  	tableBuilder +=	`</table>`
	tableBuilder += `</div>`
	tableDiv.innerHTML = tableBuilder;
}


btn.addEventListener("click", function(event) {
	if (event.target.innerText === "Donate") {
			donorObject = {}
			donorObject["Name"] = donorName.value;
			donorObject["Email"] = donorEmail.value;
			donorObject["Amount"] = donorAmount.value;
	for (var i = 0; i < donationType.length; i++) {
		if (donationType[i].checked === true) {
			donorObject["Type"]  = donationType[i].value;
			Donations.addDonor(donorObject);
		}
	}

	writeToDom();
	clearFields();


	}
	else if (event.target.innerText === "Cancel") {
		clearFields()

	}
});

function clearFields() {
	donorName.value = " ";
	donorEmail.value = " ";
	donorAmount.value = " ";
	donationType[0].checked = false;
	donationType[1].checked = false;
}''



