Feature: Adding new post
	
	Scenario: given both fields
		Given title: "its a new post title", body: "some text for a new post body. Checking Cucumberjs & selenium work"
		When I want to add new post with both fields
		Then it should add this post to the document
	
	Scenario: given title only
		Given title: "its a new post title" without body
		When I want to add new post with title only
		Then it should to NOT add this post and throw and error
	
	Scenario: given just body
		Given body: "i am just a body for new post. i lost my title. i feel so lonely without it ://"
		When I want to add new post without title
		Then it should to NOT add this post and throw and error
	
	Scenario: given nothing
		Given we got nothing here :D
		When I want to add new empty post 
		Then it should it should to NOT add this post and throw and error
	
	
	