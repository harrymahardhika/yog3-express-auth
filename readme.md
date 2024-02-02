# Authentication

## Description

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
