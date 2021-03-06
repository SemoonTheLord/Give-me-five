export default class Student{
	/**
	 * [constructor description]
	 * @param  {[type]} firstname [description]
	 * @param  {[type]} lastname  [description]
	 * @param  {[type]}           [description]
	 * @return {[type]}           [description]
	 */
	constructor(firstname, lastname, age , photo_url){
		//partie draw infos
	    this.age 				   = age || "non défini";
	    this.phone          	   = "non défini";
	    this.email                 = "non défini";
	    //partie draw default
		this.firstname  		   = firstname || "John";
		this.lastname 			   = lastname || "Doe";
	    this.photo_url      	   = photo_url || "images/profile_default.png" ;
	    this.state 				   = "absent";
	    //partie draw score
		this.score          	   = 0;
		this.presence 	   		   = 0;
		this.absence  	  		   = 0;
		this.retard  	   		   = 0;
		this.participation		   = 0;
		this.passage	     	   = 0;
	}
}