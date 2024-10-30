# API SOLID

GymPass

## FRs

- [x] It should be possible to register
- [x] It should be possible to authenticate
- [x] It should be possible to obtain the profile of a logged user
- [ ] It should be possible to obtain the number of check-ins of a logged user
- [ ] It should be possible for the user to obtain their check-ins  history
- [ ] It should be possible for the user to search for nearby gyms
- [ ] It should be possible for the user to search gym by name
- [ ] It should be possible for the user check-in at a gym
- [ ] It should be possible validate a user check-in
- [ ] It should be possible to register a gym

## BRs

- [x] User cannot register with a duplicated e-mail address
- [ ] User cannot make 2 check-ins on the same day
- [ ] User cannot make check-in if he is not close (100m) to the gym
- [ ] The check-in can only be validated up to 20 minutes after it is created
- [ ] The check-in can only be validated by administrators
- [ ] The gym can only be registered by administrators
  
## NFRs

- [x] The user password must be encrypted
- [x] Application data needs to be persisted in a PostgreSQL database
- [ ] All data lists must be paginated with 20 items per page
- [ ] The user needs to be authenticated by a JWT ( JSON Web Token)