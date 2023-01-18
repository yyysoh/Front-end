-- 아래의 요구사항을 검토하여 제시된 데이터베이스를 설계하세요
--
-- [요구사항]
--    a. 학생 은 '학생고유번호(PK)', '학생이름', '나이', '학년', '전공학과번호(FK)' 의 속성을 갖습니다 
--
--      1) '학생이름'은 필수입니다
--      2) '나이' 는 0 이상의 정수입니다. 
--      3) '학년'은 1~4 까지의 숫자값만 갖습니다.
--
--    b. 학과 는 '학과고유번호(PK)', '학과명', '건물동번호' 의 속성을 갖습니다.
--       1) '학과명'은 필수 속성이며 고유해야 합니다.
--       2) '건물동번호' 는  'K301', 'A203', 'B306' 세가지중 하나의 값을 갖습니다
--
-- [문제]
--     a. 위 요구사항을 구현할 물리적 설계 (DDL) 을 작성하세요
--         - 테이블명과 컬럼명은 아래와 같이 작성하세요
--	   b. 위 테이블에 학과 3개와 학생 5명의 데이터를 INSERT 하는 쿼리 (DML) 을 작성하세요 
--
-- [학생테이블 (TEST_STUDENT) ]
--
--	학생고유번호	stu_uid
--	학생이름		stu_name
--	나이			stu_age
--	학년			stu_grade
--	전공학과번호	dept_uid
--
-- [학과테이블 (TEST_DEPARTMENT) ]
--
--	학과고유번호	dept_uid
--	학과명		dept_name
--	건물동번호		dept_build        

-- ↓ DDL 을 작성하세요


-- test_student
DROP TABLE test_student;

CREATE TABLE test_student(
	stu_uid NUMBER(10) PRIMARY KEY,
	stu_name VARCHAR2(10) NOT NULL,
	stu_age INT CHECK(stu_age >= 0),
	stu_grade number(1) CHECK(stu_grade between 1 AND 4),
	dept_uid number(5) REFERENCES test_department(dept_uid)
);

-- test_department
DROP TABLE test_department;

CREATE TABLE test_department (
	dept_uid number(10) PRIMARY KEY,
	dept_name varchar2(30) NOT NULL UNIQUE,
	dept_build varchar2(5) CHECK (dept_build IN ('K301', 'S203', 'B306'))
);




SELECT * FROM test_department;
SELECT * FROM test_student;



-- ↓ DML 을 작성하세요

INSERT INTO test_department VALUES (111, '컴퓨터공학과', 'K301');
INSERT INTO test_department VALUES (222, '경영학과', 'S203');
INSERT INTO test_department VALUES (333, '디자인학과', 'B306');


INSERT INTO test_student VALUES (19110905, '홍길동', 20, 1, 111);
INSERT INTO test_student VALUES (21110905, '콩쥐', 23, 3, 222);
INSERT INTO test_student VALUES (20220905, '팥쥐', 21, 2, 111);
INSERT INTO test_student VALUES (22330905, '렐라', 24, 4, 333);
INSERT INTO test_student VALUES (19330905, '백설이', 22, 1, 222);
























