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
       (2, 'test1@test.com', '1234','추천테스트1', '010-8888-9999', '최싸피', 7, false, 'ACTIVE'),
       (2, 'test3@test.com', '1234', '추천테스트2', '010-3453-5678', '이싸피', 8, true, 'ACTIVE'),
       (3, 'test4@test.com', '1234', '추천테스트3', '010-3453-1212', '남궁싸피', 9, false, 'ACTIVE'),
       (2, 'test5@test.com', '1234', '추천테스트4', '010-3453-2323', '독고싸피', 9, true, 'ACTIVE'),
       (1, 'test6@test.com', '1234', '추천테스트5', '010-3453-3434', '구싸피', 11, true, 'ACTIVE'),
       (4, 'test7@test.com', '1234', '추천테스트6', '010-3453-2232', '신싸피', 10, false, 'ACTIVE'),
       (1, 'test8@test.com', '1234', '추천테스트7', '010-3453-6543', '양싸피', 10, true, 'ACTIVE');

insert into crew (title, user_id, content, region, category, is_recruit)
values ('구인글1', 2, '내용1', 'SEOUL', 'STUDY', true),
       ('구인글2', 1, '내용2', 'DAEJEON', 'CHALLENGE', true),
       ('구인글3', 1, '내용3', 'DAEJEON', 'SOCIETY', false),
       ('구인글4', 2, '내용4', 'SEOUL', 'CHALLENGE', false),
       ('구인글5', 1, '내용5', 'GWANGJU', 'STUDY', false);

insert into board(user_id, is_anonymous, content, title, category)
values (1, false, 'content', '바보', 'FREEDOM'),
       (1, false, 'content', '바보인데 자유는 아님', 'DEVELOPMENT'),
       (1, false, 'content', '아예 아무것도 아님', 'FREEDOM'),
       (1, false, 'content', '마지막 보바보바', 'FREEDOM');

insert into follow (from_user, to_user)
values (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
       (2, 6), (3, 6), (4, 6), (5, 6), (1, 7),
       (2, 3), (5, 6), (1, 8);

insert into student (student_name, student_email, student_number)
values ("이예원", "2_yewon@naver.com", 1035775),
       ("이수민", "judy3504@naver.com", 1038591),
       ("노현석", "nhs503601@gmail.com", 1030533),
       ("임지은", "ljieun01@naver.com", 1031156),
       ("김수은", "tndms0308@naver.com", 1036351),
       ("김혜진", "hyejin9203@naver.com", 1034262);

insert into shuttle (campus_id)
values (2), (2), (2), (2), (2), (2);

# insert into bus_stop (bus_stop_name, shuttle, latitude, longitude)
# values ("오정동 육교 밑 (국민연금북대전지사)", 1, 36.3587785, 127.4126905),
#        ("재뜰네거리 (샘머리부근)", 1, 36.3579, 127.3956),
#        ("정부청사역 4번 출구 앞 ", 1, 36.357916, 127.381506),
#        ("갈마역 ", 1, 36.3579167, 127.3815),
#        ("월평역 (유림공원방면) 버스정류장 ", 1, 36.3587, 127.3624),
#        ("GS셀프 충대 앞 주유소 ", 1, 36.361250, 127.344117),
#        ("유성문화원 ", 1, 36.359897, 127.341616),
#        ("송강전통시장 버스정류장", 2, 36.435463, 127.387155),
#        ("연구단지 네거리 (대덕고등학교 버스정류장)", 2, 36.386512, 127.378520),
#        ("유성구청 앞 버스정류장", 2, 36.361382, 127.356099),
#        ("이마트24 R유성 대학로점(전 소비자마트)", 2, 36.360731, 127.349605),
#        ("학사마을", 2, 36.364129, 127.339318),
#        ("월드컵경기장역 3번 출구", 2, 36.367021, 127.317191),
#        ("우송대학교 서 캠퍼스 버스정류장", 3, 36.338976, 127.445207),
#        ("대전역 동광장 김희선 제육 짜글이 식당 맞은편", 3, 36.333392, 127.437938),
#        ("서대전 네거리 역 (제일가구 프라자 앞)", 3, 36.32230, 127.4114),
#        ("유천동 현대아파트 버스정류장", 3, 36.318787, 127.398438),
#        ("도마네거리 (서부 교육 지원청 앞)", 3, 36.312659, 127.378799),
#        ("가수원 네거리 (현대자동차 도안가수원지점)", 3, 36.306253, 127.353076),
#        ("도안 수목토 아파트 버스승강장", 3, 36.318517, 127.347978),
#        ("유성온천역 5번출구 맥도날드 앞", 3, 36.354207, 127.340214),
#        ("송촌동 동춘당 맞은편 승강장", 4, 36.364727, 127.440395),
#        ("용전네거리", 4, 36.347029, 127.431147),
#        ("국민건강보험공단 대전동부지사", 4, 36.339662, 127.419609),
#        ("오룡역 3번 출구 (보람상조 앞)", 4, 36.328351, 127.403652),
#        ("태평오거리 (모카 라이팅)", 4, 36.326123, 127.394395),
#        ("가장네거리 (맑은 아침 버스정류장)", 4, 36.330413, 127.383115),
#        ("서중학교 버스 정류장", 4, 36.333159, 127.373614),
#        ("원신흥동 기아 도안지점", 4, 36.332398, 127.340178),
#        ("덕명중학교 정문", 4, 36.345934, 127.301520),
#        ("뚜레주르", 4, 36.348582, 127.298141),
#        ("반석역 1번출구", 5, 36.391240, 127.315006),
#        ("지족역 2번출구", 5, 36.383631, 127.319823),
#        ("노은역 1번출구", 5, 36.373630, 127.317756),
#        ("유성온천역 5번출구 맥도날드 앞", 5, 36.354207, 127.340214),
#        ("(구)유성시외버스 승강장 봉명네거리 승강장 (만년닭강정 앞)", 5, 36.355655, 127.334679),
#        ("대전시청 버스승강장", 6, 36.351218, 127.385170),
#        ("탄방중학교 버스승강장", 6, 36.350394, 127.395128),
#        ("한양공작아파트", 6, 36.348237, 127.395060),
#        ("경성큰마을 사거리", 6, 36.349293, 127.376143),
#        ("갈마삼거리 육교", 6, 36.351378, 127.371876),
#        ("유성온천역 5번출구 맥도날드 앞", 6, 36.354207, 127.340214),
#        ("현충원역", 6, 36.359521, 127.320080);


-- 피드 더미 데이터
INSERT INTO feed (user_id, content, hit) VALUES
    (1, 'Feed content 1', 10),
    (2, 'Feed content 2', 15),
    (3, 'Feed content 3', 20),
    (4, 'Feed content 4', 25),
    (5, 'Feed content 5', 30);

-- 해시태그 더미 데이터
INSERT INTO hashtag (hashtag_id, tag_name) VALUES
    (1, 'tag1'),
    (2, 'tag2'),
    (3, 'tag3'),
    (4, 'tag4'),
    (5, 'tag5');

-- 피드-해시태그 연결 더미 데이터
INSERT INTO feed_hashtag (feed_id, hashtag_id) VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 5);

-- 이미지 더미 데이터
INSERT INTO feed_image (feed_id, image_url) VALUES
    (1, 'image_url_1'),
    (2, 'image_url_2'),
    (3, 'image_url_3'),
    (4, 'image_url_4'),
    (5, 'image_url_5');

-- 피드 좋아요 더미 데이터
INSERT INTO feed_like (feed_id, user_id) VALUES
    (1, 2),
    (1, 3),
    (2, 3),
    (3, 4),
    (4, 5);

-- 피드 스크랩 더미 데이터
INSERT INTO feed_scrap (feed_id, user_id) VALUES
    (1, 3),
    (2, 4),
    (3, 5),
    (4, 1),
    (5, 2);

-- 피드 댓글 더미 데이터
INSERT INTO feed_comment (feed_id, user_id, content, is_deleted, parent_id) VALUES
    (1, 2, 'Comment 1', false, NULL),
    (1, 3, 'Comment 2', false, NULL),
    (1, 3, 'Comment 2', false, 1),
    (1, 3, 'Comment 2', false, 1),
    (2, 4, 'Comment 3', false, NULL),
    (3, 5, 'Comment 4', false, NULL),
    (3, 2, 'Reply to Comment 4', false, 4);

-- 피드 댓글 좋아요 더미 데이터
INSERT INTO feed_comment_like (feed_comment_id, user_id) VALUES
    (1, 3),
    (2, 4),
    (3, 5),
    (4, 1),
    (5, 2);

-- 채용 스크랩 더미 데이터
INSERT INTO recruitment_scrap (user_id, recruitment_id) VALUES
    (1, 47548770),
    (2, 47548635),
    (3, 47548630),
    (4, 47548445),
    (5, 47548326);

-- 자유게시판 스크랩 더미 데이터
INSERT INTO board_scrap (board_scrap_id, user_id, board_id) VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4);