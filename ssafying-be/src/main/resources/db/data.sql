insert into campus (campus_region)
values ('SEOUL'),
       ('DAEJEON'),
       ('GWANGJU'),
       ('GUMI'),
       ('BOOLKYUNG');

insert into users (campus_id, email, password, nickname, phone_number, name, generation, is_major, status)
values (2, 'ssafy1@ssafy.com', '1234', '애옹', '010-1111-1111', '이싸피', 10, false, 'ACTIVE'),
       (1, 'ssafy2@ssafy.com', '1234', '리오레이비', '010-2222-2222', '이싸피', 10, false, 'ACTIVE'),
       (3, 'ssafy3@ssafy.com', '1234', '숭', '010-3333-3333', '김싸피', 10, true, 'ACTIVE'),
       (2, 'ssafy4@ssafy.com', '1234', '깃마스터', '010-4444-4444', '임싸피', 11, false, 'ACTIVE'),
       (4, 'ssafy5@ssafy.com', '1234', '폭주기관차', '010-5555-5555', '김싸피', 11, true, 'ACTIVE'),
       (1, 'ssafy6@ssafy.com', '1234', '예스맨', '010-6666-6666', '노싸피', 11, true, 'ACTIVE'),
       (2, 'test1@test.com', '1234','테스트1', '010-8888-9999', '최싸피', 10, false, 'ACTIVE'),
       (2, 'test2@test.com', '1234', '테스트2', '010-3453-2222', '박싸피', 10, false, 'ACTIVE');

insert into users (campus_id, generation, is_major, email, name, nickname, password, phone_number)
values (2, 10, false, "ssafy7@ssafy.com", "최싸피", "추천테스트", "5678", "010-7777-7777");

insert into crew (title, content, region, category, is_recruit)
values ('구인글1', '내용1', 'SEOUL', 'STUDY', true),
       ('구인글2', '내용2', 'DAEJEON', 'CHALLENGE', true),
       ('구인글3', '내용3', 'DAEJEON', 'SOCIETY', false),
       ('구인글4', '내용4', 'SEOUL', 'CHALLENGE', false),
       ('구인글5', '내용5', 'GWANGJU', 'STUDY', false);

insert into follow (from_user, to_user)
values (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
       (2, 6), (3, 6), (4, 6), (5, 6), (1, 7),
       (2, 3), (5, 6), (1, 8);

insert into student (student_name, student_email, student_number)
values ("이예원", "2_yewon@naver.com", 1035775);