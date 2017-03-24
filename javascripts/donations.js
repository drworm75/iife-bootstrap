var Donations = (function() {

  // Private variable to store the donation information
  var donationInfo = [];

  return {
  		getDonationInfo: function() {
  			return donationInfo;
	  	},
	  	createDonorObject: function(donorName, donorEmail, donorAmount, donationType) {
	  		donorObject = {}
			donorObject["Name"] = donorName;
			donorObject["Email"] = donorEmail;
			donorObject["Amount"] = donorAmount;
			donorObject["Type"] = donationType;
			donationInfo.push(donorObject);
			console.log(donationInfo);
		}

  	};

})(); 