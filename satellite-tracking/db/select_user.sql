select * from sat_users
join sat_profile
on(sat_users.user_id = sat_profile.user_id)
where user_email = $1;