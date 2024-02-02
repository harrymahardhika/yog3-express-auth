import { PermissionAssignment } from './app/authorization.js'

Object.keys(PermissionAssignment).forEach(async (role) => {
  console.log('->', role)

  PermissionAssignment[role].forEach(async (permission) => {
    console.log(permission)
  })
})
