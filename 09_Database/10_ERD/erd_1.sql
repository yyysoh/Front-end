
/* Drop Tables */

-- 이미 만들어진 테이블 있으면 삭제하고 제약조건까지 삭제해라
DROP TABLE register CASCADE CONSTRAINTS;
DROP TABLE student CASCADE CONSTRAINTS;
DROP TABLE subject CASCADE CONSTRAINTS;
DROP TABLE professor CASCADE CONSTRAINTS;




/* Create Tables */

CREATE TABLE professor
(
	profno number NOT NULL,
	-- 교수님 이름은 필수사항입니다
	name varchar2(10) NOT NULL,
	-- 학과번호 101, 102 ...
	deptno number,
	PRIMARY KEY (profno)
);


CREATE TABLE register
(
	studno number NOT NULL,
	subject number NOT NULL
);


CREATE TABLE student
(
	studno number NOT NULL,
	profno number NOT NULL,
	name varchar2(10) NOT NULL,
	deptno number NOT NULL defalut 101,
	PRIMARY KEY (studno)
);


CREATE TABLE subject
(
	subject number NOT NULL,
	name varchar2(10) NOT NULL,
	profno number NOT NULL,
	PRIMARY KEY (subject)
);



/* Create Foreign Keys */

ALTER TABLE student
	ADD FOREIGN KEY (profno)
	REFERENCES professor (profno)
;


ALTER TABLE subject
	ADD FOREIGN KEY (profno)
	REFERENCES professor (profno)
;


ALTER TABLE register
	ADD FOREIGN KEY (studno)
	REFERENCES student (studno)
;


ALTER TABLE register
	ADD FOREIGN KEY (subject)
	REFERENCES subject (subject)
;



/* Comments */

COMMENT ON COLUMN professor.name IS '교수님 이름은 필수사항입니다';
COMMENT ON COLUMN professor.deptno IS '학과번호 101, 102 ...';

-- professor register subject 들어갔다
SELECT tname FROM tab;

