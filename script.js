window.onload=function(){
readData();
   

}
function readData(){
	fetch("https://ravisankarmemerocks.github.io/SYMB/data.json")
    .then(function(resp){return resp.json()})
     .then(function(data){
    	console.log(data);
    	var paraone=data.data.sectiononecontent;
    	console.log(paraone);

    	var location=data.data.sectiononecontact.location;
    	console.log(location);

    	var phone=data.data.sectiononecontact.phone;
    	console.log(phone);
    	
    	var pername=data.data.sectiononecontact.pername;
    	console.log(pername);
    	
    	var email=data.data.sectiononecontact.email;
    	console.log(email);
    	
    	var website=data.data.sectiononecontact.website;
    	console.log(website);

    	var paratwo=data.data.sectiontwocontent;
    	console.log(paratwo);
	    
	    document.getElementById('para1').innerHTML=paraone.toLocaleString('en');
	    document.getElementById('location').innerHTML=" "+location.toLocaleString('en');
	    document.getElementById('phone').innerHTML=" "+phone.toLocaleString('en');
	    document.getElementById('name').innerHTML=" "+pername.toLocaleString('en');
	    document.getElementById('email').innerHTML=" "+email.toLocaleString('en');
	    document.getElementById('website').innerHTML=" "+website.toLocaleString('en');
	    document.getElementById('card1').innerHTML=paratwo.toLocaleString('en');
	    document.getElementById('card2').innerHTML=paratwo.toLocaleString('en');
	    document.getElementById('card3').innerHTML=paratwo.toLocaleString('en');
        
	   })
    .catch(function(){
    	console.log("error!");
    })
    setTimeout(readData,43200000);//updates every 12hrs
}
