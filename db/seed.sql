/* Seed */
USE go_fish_db;

/* removes data in tables for a clean slate */ 
TRUNCATE TABLE go_fish_stats;

/* table */ 
INSERT INTO go_fish_stats (wins, loss, tie)
VALUES 
    (5, 1, 1);
    
SELECT * FROM go_fish_stats;