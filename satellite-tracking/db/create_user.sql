insert into users(password, user_email)
values ($1, $2);
select * from users where user_email = $2;
-- select user_id, user_email from users
-- where user_email = $2;