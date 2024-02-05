# Authentication & Authorization

## Authentication

- create new database
- create User model
- create Token model (Belongs to User)
- insert data User
- create auth route
- create a protected routes
- create middleware for protected routes
  - check if token exist on request header
  - check if token exist in database
  - check if token has not expired
  - check if user is not blocked
  - append user to request
  - next

## Authorization

- create Role model
- create Permission model
- create PermissionRole model (Belongs to Role and Permission)
- create middleware for protected routes
  - get user from request
  - get user roles
  - check if required permission exist in user roles
  - next
