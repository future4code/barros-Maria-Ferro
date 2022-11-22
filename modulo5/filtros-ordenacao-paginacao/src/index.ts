import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPagination } from "./endpoints/getPagination";
import { getUsersComplete } from "./endpoints/getUsersComplete";
import { searchUsersByName } from "./endpoints/searchUsersByName";
import { searchUsersByType } from "./endpoints/searchUsersByType";
import { sortUsers } from "./endpoints/sortUsers";

app.get("/users/all", getAllUsers)
app.get("/users/search", searchUsersByName)
app.get("/users/sort", sortUsers)
app.get("/users/page", getPagination)
app.get("/users/:type", searchUsersByType)
app.get("/users/:type/all", getUsersComplete)