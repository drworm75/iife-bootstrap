var Donations = (function() {

  // Private variable to store the donation information
  var donationInfo = [];

  return {
  		getDonationInfo: function() {
  			return donationInfo;
	  	},
	  	addDonor: function(donorObject) {
	  		donationInfo.push(donorObject);
			console.log("donatonIndo", donationInfo);
		}

  	};

})(); 