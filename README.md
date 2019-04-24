# fpl-api-js

## A basic js-library that simplifies fetching data from https://fantasy.premierleague.com/

### Install

````
npm install fpl-api-js --save
````

### Usage
Example
````
import { getBootstrap } from 'fpl-api-js'
````

### Requests

----
#### Bootstrap
 ````
getBootstrap()
````
 
 Overview information about everything.

----
#### Gameweeks
 ````
getGameweeks()
````
 
Return information about all gameweeks

----
#### League
 ````
getLeague(id)
````
 
Data about a specified league, league id must be supplied

----
#### Player
 ````
getPlayer(id)
````
 
Data about a single player, player id needs to be supplied.

----
#### Team
 ````
getTeam(id)
````
 
Data about a players team, team id needs to be supplied.


 ````
getTeamByGW(id, gw)
````
 
Fetches info about a team, with a specified gameweek in focus. Id and gw-number needs to be specified.

----
#### Premier League Teams
 ````
getPLTeams()
````
 
Returns an overview of all the premier league teams.

----