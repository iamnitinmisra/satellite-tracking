drop table if exists satelliteTracking;
drop table if exists profile;
drop table if exists users; 
create table users(
    user_id serial primary key,
    password text not null,
    user_email text not null
);

create table profile(
    profile_id serial primary key,
    picture text default 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
    user_id integer references users(user_id)
);

select * from users join profile
on(users.user_id = profile.user_id);

create table satelliteTracking(
    satellite_id serial primary key,
    user_id integer,
    satellites_name text,
    launch_date text,
    time_viewable text
);

select * from users join satelliteTracking
on(users.user_id = satelliteTracking.user_id);