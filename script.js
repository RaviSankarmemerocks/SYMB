window.onload=function(){
readData();
   

}
function readData(){
	fetch("./data.json")
    .then(function(resp){return resp.json()})
     .then(function(data){
    	console.log(data);
	   })
    .catch(function(){
    	console.log("error!");
    })
    setTimeout(readData,43200000);//updates every 12hrs
}
