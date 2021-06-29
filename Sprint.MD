# Sprint: Coca-Cola (29.06.2021 - 09.07.2021)


## Features/Stories/Tasks

* Feature: define REST resource/create domain models
  - Story: Create the product domain model  

* Feature: Setup Aspnet core backend  
  - Story: As a frontend system I want a backend server    
Create a new dotnet webapi with the command: "dotnet new webapi"  
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio  
Create a test project for unit/integration tests (See BasicWebApi.Test.csproj)  
https://fluentassertions.com/introduction  
  - Story: Setup database with efcore  
Create an entityModel to save in the database/table  
Create a DbSet(efcore) for the model  
https://docs.microsoft.com/en-us/ef/core/  

* Feature: Implement CRUD for resource product
  - Story: As a system I want to CREATE products  
Create a controller method for posting products  
Create contract types for the model (Create/view model)  
Create a service method for saving the product to a database
  - Story: AS a system I want to UPDATE products  
Create a controller method for putting products  
Create a contract type for updatemodel  
Create a service method for updating the product in a database  
  - Story: As a system I want to DELETE products  
Create a controller method for deleting products  
Create a service method for deleting the product in a database
  - Story: As a system I want to READ   products  
Create a controller method for getting all products   
Create a controller method for getting one specific product    
Creata a service method for getting all products from the database  
Creata a service method for getting a specific product from the database  

* Feature: Implement CRUD for resource comment
  - Story: As a system I want to CREATE comments  
Create a controller method for posting comments  
Create contract types for the model (Create/view model)  
Create a service method for saving the commentto a database
  - Story: AS a system I want to UPDATE comments  
Create a controller method for putting comments  
Create a contract type for updatemodel  
Create a service method for updating the commentin a database  
  - Story: As a system I want to DELETE comments  
Create a controller method for deleting comments  
Create a service method for deleting the commentin a database
  - Story: As a system I want to READ   comments  
Create a controller method for getting all comments   
Create a controller method for getting one specific comment   
Creata a service method for getting all comments from the database  
Creata a service method for getting a specific commentfrom the database  


* Feature: Host vue.js app with dotnet core  
  - Story: As a Developer I want to host my front-end within the dotnet core api  
Configure the aspnet core api to host js-frontend(vue)   
Configure the front-end to send request to aspnet api(instead of express)  

* Feature add the possiblity to update and delete comments and products. And to be able to create products
- Story: As user i want to be able to delete comments and products in the vue app
- Story: As user i want to be able to update comments and products in the vue app
- Story: As user i want to be albe to create products

* Feature add state managment to products
-As a developer i want to use states for products.


