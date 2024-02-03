insert into campus (campus_region)
values ('SEOUL'),
       ('DAEJEON'),
       ('GWANGJU'),
       ('GUMI'),
       ('BOOLKYUNG');

insert into users (campus_id, email, password, nickname, phone_number, name, generation, is_major)
values (2, "ssafy1234@ssafy.com", "1234", "애옹", "010-1234-1234", "이싸피", 10, false),
       (1, "ssafy12345@naver.com", "qwerty", "후추", "010-1212-1212", "김싸피", 11, true);

insert into crew (title, content, region, category, is_recruit)
values ("제목1", "내용1", "SEOUL", "STUDY", true),
       ("제목2", "내용2", "DAEJEON", "CHALLENGE", true),
       ("제목3", "내용3", "DAEJEON", "SOCIETY", false),
       ("제목4", "내용4", "SEOUL", "CHALLENGE", false),
       ("제목5", "내용5", "GWANGJU", "STUDY", true);