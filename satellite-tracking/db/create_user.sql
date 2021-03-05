insert into sat_users(password, user_email)
values ($1, $2)
returning *;
-- select user_id, user_email from users
-- where user_email = $2;