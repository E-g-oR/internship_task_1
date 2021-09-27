Feature: Adding new post
	
	Scenario Outline: add or reject adding of new post
		Given title: "<title>", body: "<body>"
		When I want to add new post
		Then I should be told "<result>"
	
	Examples:
	|	title						|	body						|	result	|
	|	ГЕРОЙ НАШЕГО ВРЕМЕНИ	|	Михаил Лермонтов		|	added		|
	|	title without body	|								|	rejected	|
	|								|	body without title	|	rejected	|
	|								|								|	rejected	|



