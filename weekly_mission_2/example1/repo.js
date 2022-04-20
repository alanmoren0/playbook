const repo = {
	name: "LaunchX",
 	author: "El mc carlo",
 	language: "JavaScript",
 	numberOfCommits: 100,
 	stars: 199,
 	forks: 299,
 	issues_open: 10,
 	issues_close: 10,
 	getTotalIssues: function(){
 	  	return this.issues_open + this.issues_close
 	},
 	getGeneralInfo: function(){
   		return `This repository ${this.name} was created by ${this.author}`
 	}
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue={
	title:'repo pro',
	repositoryNameAssociated:'LaunchX',
	status:'active',
	numberOfComments:'20',
	labels:'4',
	author:'el mc carlo',
	dateCreated:'11-04-25',
	lastUpdate:'12-06-25',
	getTitleAndAuthor: function(){
		return this.title+this.author
	},
	getGeneralInfo: function(){
		return `This issue ${this.title} was created by ${this.author}`
	}
}

console.log("titulo del issue: "+issue.title)
console.log('author: '+ issue.author)
console.log(issue.getGeneralInfo())

const pullRequest={
	title:'dejame hacer el pull',
	branchName:'Front landing page',
	dateCreated:'11-23-22',
	status:'active',
	repositoryNameAssociated:'LaunchX',
	getStatus: function(){
		return this.status
	},
	getTitleAndAuthor: function(){
		return this.title+this.author
	}
}

console.log("titulo del pull request: "+pullRequest.title)
console.log('Branch names: '+ pullRequest.branchName)
console.log(pullRequest.getStatus())