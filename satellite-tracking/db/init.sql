drop table if exists satelliteTracking;
drop table if exists sat_profile;
drop table if exists sat_users; 
create table sat_users(
    user_id serial primary key,
    password text not null,
    user_email text not null
);

create table sat_profile(
    profile_id serial primary key,
    zip integer not null check (zip between 10000 and 99999),
    user_id integer references sat_users(user_id)
);

-- select * from users join profile
-- on(users.user_id = profile.user_id);

create table satelliteTracking(
    satellite_id serial primary key,
    user_id integer,
    satellites_name text,
    sat_info text,
    time_viewable text
);

-- select * from users join satelliteTracking
-- on(users.user_id = satelliteTracking.user_id);

select * from sat_users 
join sat_profile
on(sat_users.user_id = sat_profile.user_id);
join satelliteTracking
on(sat_users.user_id = satelliteTracking.user_id)