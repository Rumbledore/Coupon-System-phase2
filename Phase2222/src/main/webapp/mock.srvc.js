(function() {

	var module = angular.module("myApp");

	module.service("mockServiceHTTP", mockServiceHTTPCtor);

	function Company(compName, password, email) {
		this.compName = compName;
		this.password = password;
		this.email = email;
	}

	function mockServiceHTTPCtor($q) {

		var self = this
		this.newCompany = {}
		
		this.getCompanies = function() {
			$http.get('http://localhost:8088/Phase2222/webapi/admin/company')
			.then(
			function($q)
			{
				alert('succses')
				console.log($q)
				self.arr = $q.data
			},
			function(err)
			{
				alert(err.data)
			})
		}

		this.addCompany = function()
		{
			$http.post('http://localhost:8088/Phase2222/webapi/admin/company',
					this.newCompany)
			.then(
			function($q)
			{
				alert('company added')
			},
			function(err)
			{
				alert(err.data)
			})
		}
	}

})();