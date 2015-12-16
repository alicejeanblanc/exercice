var me= {
		name:"bidule",
		last_name:"jeanblanc",
		birthday:"9/04/88",
		github:"https://github.com/alicejeanblanc/simplon",
		occupation:"web marketing",

		getFullName:function(){
			return "my name is "+this.name + " " + this.last_name; //this fait référence à l'objet me, donc avec me.name ca marche
		},
		
		getOccupation:function(){
			return this.occupation;
		},
		
		setName:function(value){
			this.name = value;
		},
		
		getField:function(newField){ 
			return this[newField];
		},
		
		setField:function(addField, valueField){
			this[addField] = valueField;
		}, 
		
		getGithub:function(){
			return this.github;
		},
		
		setGithub:function(github){
			this.github = github;
		},
		
		getInfos:function(infos){
			//return "my name is " + this.name + " " + this.last_name +" "+ "My birthday is "+this.birthday +" " + "My occupation is " + this.occupation + " " + "My Github is "+ this.github;
			return "my name is " + this.getFullName() +". " + "My occupation is " + me.getOccupation() +". "+ "My birthday is "+this.birthday +". " + "My Github is " + me.getGithub()+". ";
		},
	};

console.log('here comes my full name');
console.log(me.getFullName());
console.log(me.getOccupation());
console.log(me.getGithub());
//me.setName("bidule");
console.log(me);
me.setGithub("abc");

me.getField('name');
me.setField('name','alice');
console.log(me.getInfos());