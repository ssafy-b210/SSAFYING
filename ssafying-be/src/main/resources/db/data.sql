insert into campus (campus_region)
values ('SEOUL'),
       ('DAEJEON'),
       ('GWANGJU'),
       ('GUMI'),
       ('BOOLKYUNG');

insert into users (birthday, campus_id, email, password, nickname, phone_number, name, generation, is_major)
values ("1994-05-12", 2, "ssafy1234@ssafy.com", "1234", "애옹", "010-1234-1234", "이싸피", 10, false),
       ("2017-09-14", 1, "ssafy12345@naver.com", "qwerty", "후추", "010-1212-1212", "김싸피", 11, true);