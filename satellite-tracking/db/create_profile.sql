insert into sat_profile(user_id, zip, lat, lng)
values ($1, $2, $3, $4);

select * from sat_users
join sat_profile
on(sat_users.user_id = sat_profile.user_id)
where sat_users.user_id = $1;



