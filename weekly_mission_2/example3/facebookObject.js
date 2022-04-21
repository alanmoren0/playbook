class facebook{
	constructor(user,post,biography){
		this.user=user
		this.post=post
		this.biography=biography
	}

	getUser(){
		return this.user
	}

	getPost(){
		return this.post
	}

	getBiohraphy(){
		return this.biography
	}
}

class user{
	constructor(user,userName,email,phoneNumber,presentation,city,jobPlace,scholarity,relationships){
		this.user=user
		this.userName=userName
		this.email=email
		this.phoneNumber=phoneNumber
		this.presentation=presentation
		this.city=city
		this.jobPlace=jobPlace
		this.scholarity=scholarity
		this.relationships=relationships
	}
}

class post{
	constructor(user,description,tags,reactions,comment,shares){
		this.user=user
		this.description=description
		this.tags=tags
		this.reactions=reactions
		this.comment=comment
		this.shares=shares	
	}
	
}

class biography{
	constructor(userName,friends,publications,pictures){
		this.userName=userName
		this.friends=friends
		this.publications=publications
		this.pictures=pictures
	}
}

usuario=new user('alan moreno','alan_moren0','correo@.com','1234567890','persona triste','apolotingo','chidojob','universidad chida','solo solin solito')
//console.log(usuario)

publicacion=new post('alan_moren0','me caí xdddd','#dolio','triste','ha se cayo',43)
//console.log(publicacion)


biografia=new biography('alan_moren0',34,12,43)
//console.log(biografia)

face=new facebook(usuario,publicacion,biografia)

console.log(face.getUser())
console.log(face.getPost())
console.log(face.getBiohraphy())