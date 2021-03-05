UPDATE 
    sat_profile 
SET 
    zip = $2, 
    lat = $3, 
    lng = $4 
WHERE 
    profile_id = $1