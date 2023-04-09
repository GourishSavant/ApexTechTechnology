# Getting Started with Create React App
json -server file----- db.json
Steps to run the project
	Unzip the project file and open it with visual code.
	Install all the node_module using cmd npm install.
	Install Json-server using cmd npm install json-server
	Open 2 parallel terminal.
	Run json server with cmd json-server  –watch db.json  –port 3030
	Run project with npm start

Following is brief description all the pages.
Add Scenario page ->  
	User will add the Scenario name and Scenario time which will be stored in json server.
	Reset button to clear the values of the field.
	Go back button to go to previous page.

 

All Scenario page
	Display the Json server data of all added Scenarios.
	User can correct the data using Edit symbol and delete the record using Delete symbol.
	User can increment the number of vehicles under each scenario by using the Add Vehicle symbol.
	New scenario -> will redirect to add scenario page.
	Add vehicle -> will redirect to the add vehicle page.
 

Add Vehicle page
	User can select the Scenario from dynamic dropdown which takes the data from json server.
	User must add vehicle information under the selected scenario.
 

Home Page
	Display the added vehicle data which is stored in json server.
	User can select the scenario which will display the vehicle data under the selected scenario.

