var info=[
    {title:"Ahmedabad" ,location:{lat: 23.022505  ,lng: 72.571362},id:0},
    {title:"surat",location:{lat:21.17024, lng:72.831061},id:1},
    {title:"Gandhinagar",location:{lat: 23.215635 ,lng:72.636941},id:2},
    {title:"vadodara",location:{lat:22.307159 ,lng:73.181219},id:3}


]
var model=function(){

var self=this;
this.top_nav_heading=ko.observable("GUJARAT LOCATIONS");
this.placeArray=ko.observableArray([]);


for (var i=0;i<info.length;i++)	{

this.placeArray().push(info[i]);
console.log(this,1);
}
 // this.placeArray()[0].title="asasaa"
//this function will be used for closing the side-nav
this.close=function() {   

	document.querySelector(".container").classList.toggle("slides");
	document.querySelector("#map").classList.toggle("marg");

}
 
 

 // this value will change as input text changes
 this.input_place=ko.observable("");
 console.log(this,2);
  console.log(self,21);

 this.validation=function(){
             console.log(self,31);
            
 	    for (i=0;i<self.placeArray().length;i++){
 	    	var j=self.placeArray()[i].title;
 	    	console.log( self.placeArray()[i].title,i);
 	    	if(self.input_place()===j){
                
               self.input_place("ok");

                self.placeArray()[i].title="ok";
                 
 	    		break;





 	    	}

            else{
                   
            }
 	    
 	    	
 	    
 	    }// end of for loop
 	   
   
	 
};
 
} // end of view model
ko.applyBindings(new model());
  

 function ashish(){
       document.querySelector("#map").innerHTML="<div class='ee'>FAILED TO FETCH  RESOURCE</div>";
    }