
// 1 - get the angular applicaiton module [= phone book]
var module = angular.module("myApp")

// 2 - register controller into the app module
//      give it a name, supply a ctor function
module.controller("MainCtrl", MainCtrlCtor)

function MainCtrlCtor( $http )
{
    var self = this
    this.newCompany = {}
    this.updateCompanyObj = {}
    this.updateCompanyID = 40
    this.removeCompanyID = 0
    this.company = new Company("iwegnwioeg", "98484415", "eryherh@gmail.com")
    
    
    this.getCompany = function(){
	    $http.get('http://localhost:8088/Phase2222/webapi/admin/company')
	    .then(
	    function(resp)
	    {
	        //alert('success5')
	        console.log(resp)
	        self.arr = resp.data
	    },
	    function(err)
	    {
	        alert('error')
	    })
    }
    
    this.createCompany = function()
    {
        $http.post('http://localhost:8088/Phase2222/webapi/admin/company',
        		this.newCompany)
        .then(
        function(resp)
        {
        	alert('company added!')
        },
        function(err)
        {
        	alert('error in adding company!')
        })    	
    }
    
    this.updateCompany = function()
    {
        $http.put('http://localhost:8088/Phase2222/webapi/admin/company/' + this.updateCompanyID,
        		this.updateCompanyObj)
        .then(
        function(resp)
        {
        	alert('company updated!')
        },
        function(err)
        {
        	console.log(err)
        	alert('error in updating company!')
        })      	
    }

    //next command
    
    this.removeCompany = function()
    {
        $http.delete('http://localhost:8088/Phase2222/webapi/admin/company/' + this.removeCompanyID)
        .then(
        function(resp)
        {
        	alert('company removed!')
        },
        function(err)
        {
        	console.log(err)
        	alert('error in removed company!')
        })      	
    }
}

function Company(compName, password, email)
{
    this.compName = compName
    this.password = password
    this.email = email
}