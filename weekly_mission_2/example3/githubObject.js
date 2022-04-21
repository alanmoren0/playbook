class github{
	contructor(repo,issue,pullrequest){
		this.repo=repo
		this.issue=issue
		this.pullrequest=pullrequest
	}

	getRepo(){
		return this.repo
	}

	getIssue(){
		return this.issue
	}

	getPull(){
		return this.pullrequest
	}

}

class repo{
	constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
		this.name=name
		this.author=author
		this.language=language
		this.numberOfCommits=numberOfCommits
		this.stars=stars
		this.forks=forks
		this.issues_open=issues_open
		this.issues_close=issues_close
	}

	getTotalIssues(){
 	  	return this.issues_open + this.issues_close
 	}
 	getGeneralInfo(){
   		return `This repository ${this.name} was created by ${this.author}`
 	}
}

class issue{
	constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdate){
		this.title=title
		this.repositoryNameAssociated=repositoryNameAssociated
		this.status=status
		this.numberOfComments=numberOfComments
		this.labels=labels
		this.author=author
		this.dateCreated=dateCreated
		this.lastUpdate=lastUpdate
	}

	getTitleAndAuthor(){
		return this.title+this.author
	}
	getGeneralInfo(){
		return `This issue ${this.title} was created by ${this.author}`
	}
}


class pullRequest{

	constructor(title,author,branchName,dateCreated,status,repositoryNameAssociated){
		this.title=title
		this.author=author
		this.branchName=branchName
		this.dateCreated=dateCreated
		this.status=status
		this.repositoryNameAssociated=repositoryNameAssociated
	}

	getStatus(){
		return this.status
	}
	getTitleAndAuthor(){
		return this.title+this.author
	}
}

repositorio=new repo('repo pro','alan_moren0','javascript',100,200,300,10,20)

console.log(repositorio)
console.log(repositorio.getTotalIssues())
console.log(repositorio.getGeneralInfo())

problema=new issue('problemon','repo pro','active',20,5,'alan_moren0','21-02-22','22-02-22')
console.log(problema)
console.log(problema.getTitleAndAuthor())
console.log(problema.getGeneralInfo())

pull=new pullRequest('solicitud pull','alan_moren0','front landing','21-02-22','request','repo pro')
console.log(pull)
console.log(pull.getStatus())
console.log(pull.getTitleAndAuthor())
