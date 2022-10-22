/*
---------------------------
Basic Context API Setup
---------------------------
1. context API: Share auth state with other components (across the application).
2. create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js
5. To consume the context: export the AuthContext from UsesrContext
6. Now at Header or Home or anywhere else: use useContext hook to get the info in the context
*/

/*
Auth Integration
1. use getAuth by passing the app from firebase config
2. create a function named createUser to return createUserWithEmailAndPassword
*/