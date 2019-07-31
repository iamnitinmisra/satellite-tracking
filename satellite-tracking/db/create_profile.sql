insert into profile(user_id, zip)
values ($1, $2);

select * from users
join profile
on(users.user_id = profile.user_id)
where users.user_id = $1;