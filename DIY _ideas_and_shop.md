This single page application uses Angular (and TypeScript) for frontend part, server (restful listening on port 3000) side written on express (and JavaScript) and also stylization based on pure CSS and HTML. For database is used MongoDB (MongoDb Compass(localhost:27017/DIY)).

For the purposes of the application - project defense, are used some of the Angular's tools and best practices like:

# lifecycle hooks: OnInit and OnDestroy;
# using of dependency injection;
# services for handling the data manipulation;
# observables;
# handling errors;
# creating custom modules: core, share and router;
# router guards;
# directives: components and structural;
# reactive forms;
# interceptor;
# lazy loading;
# subjects;
and more.

The application has the following structure and restful API endpoints with methods:

# Public:
## Home page (with special greeting for guest) ➡ "/api/home" (GET);
## Catalog (list of products) ➡ "/api/catalog" (GET); 
## Details page for each product ➡ "/api/ideas/:ideaId/details" (GET);
## Details page for each user (user's products list) ➡ "/api/users/:userId/profile" (GET);
## Login page ➡ "/api/users/login" (POST for signing up);
## Register page ➡ "/api/users/register" (POST for signing in);
## 404 page - NOT FOUND

# Private:
## Home page (with special greeting for the current user and his own products) ➡ "/api/home" (GET);
## Create page ➡ "/api/ideas/create" (POST);
## Details page (for products) - options: like, buy and comment (for regular user - NOT for owner of product) ➡ "/api/ideas/:ideaId/details"(PUT for like, dislike); "/api/ideas/:ideaId/details/buy"(PUT); "/api/ideas/:ideaId/details/comment"(PUT);
## Edit page (for owner of product) ➡ "/api/ideas/:ideaId/update" (PUT);
## Delete page (for owner of product) ➡ "api/ideas/:ideaId/details" (DELETE);
## Profile page (for current user) - options to update user's information ➡ "/api/users/profile/personalInfo" (GET); update profile: "/api/users/profile/personalInfo" (PUT);
## Balance page (for current user) - showing information about sell and buy products and total income ➡ "/api/users/profile/balance" (GET)
## (logout ➡ "/api/users/logout" (POST));





