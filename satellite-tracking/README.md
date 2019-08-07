# Satellite-Tracking

## client

### dependencies
- axios
- react-router-dom (browser router)
- redux
- react-redux
- node-sass
- react-icons
- http-proxy-middleware
- redux-promise-middleware

### routes
login => / => Login.js
register => /register => Register.js
home => /home => Home.js
profile => /profile => Profile.js
instructions = /howtoview = Instructions.js

### file-structure

- src/
    - components/
        - login/
            - Login.js
            - Login.scss
        - home/
            - Home.js
            - Home.scss
        - instructions/
            - Instructions.js
            - Instructions.scss
        - profile/
            - Profile.js
            - Profile.scss
        - register/
            - Register.js
            - Register.scss
        - tracking/
            - tracking.js
            - tracking.scss
    - redux/
        - store.js
        - reducer.js
    - App.js
    - index.js
    - reset.css
    - setupProxy.js

## server

### dependencies

- express
- massive
- dotenv
- express-session
- bcrypt

### server file structure
- server/
    index.js
    - controller/
        - authController.js
        - satTrackingController.js
    - middlewares/
        - middleware.js

### endpoints

**auth**

- POST => login: => /api/login
- POST => register: => /api/register
- GET: => logout: => /api/logout
- GET: => session: => /api/session

**user**
- PUT => updateProfile: => /api/profile/:id 
- DELETE => deleteProfile: => /api/profile/:id

**N2YO**
- GET: => http://www.n2yo.com/rest/v1/satellite/visualpasses/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_visibility} 

**NASA** (Desktop background)
- GET: => https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

## database

- users

```sql
create table users(
    user_id serial primary key,
    password text not null,
    user_email text not null
);
```

- profile 

```sql
create table profile(
    profile_id serial primary key,
    picture text default 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
    user_id integer references users(user_id)
);
```

- join tables
```sql
select * from users join profile
on(users.user_id = profile.user_id);
```

```sql 
create table satelliteTracking(
    satellite_id serial primary key,
    user_id integer,
    satellites_name text,
    sat_info text,
    time_viewable text
);
```

- join tables
```sql
select * from users join satelliteTracking
on(users.user_id = satelliteTracking.user_id);
```