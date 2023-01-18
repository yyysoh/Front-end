
/* Drop Tables */

DROP TABLE course CASCADE CONSTRAINTS;
DROP TABLE class CASCADE CONSTRAINTS;
DROP TABLE professor CASCADE CONSTRAINTS;
DROP TABLE student CASCADE CONSTRAINTS;
DROP TABLE department CASCADE CONSTRAINTS;




/* Create Tables */

CREATE TABLE class
(
	class_no number NOT NULL,
	class_name varchar2(10) NOT NULL,
	class_credit number,
	class_num number NOT NULL,
	class_room varchar2(10),
	class_year date,
	pro_no number NOT NULL,
	PRIMARY KEY (class_no)
);


CREATE TABLE course
(
	std_no number NOT NULL,
	class_no number NOT NULL
);


CREATE TABLE department
(
	dep_tno number NOT NULL,
	dept_tel number NOT NULL,
	dept_office varchar2(10),
	dept_name varchar2(20) NOT NULL,
	PRIMARY KEY (dep_tno)
);


CREATE TABLE professor
(
	pro_no number NOT NULL,
	pro_jumin varchar2(13) NOT NULL,
	pro_address varchar2(30),
	pro_pfoname varchar2(10) NOT NULL,
	pro_post varchar2(10),
	pro_tel varchar2(10),
	pro_year date,
	dep_tno number NOT NULL,
	PRIMARY KEY (pro_no)
);


CREATE TABLE student
(
	std_no number NOT NULL,
	std_address varchar2(30),
	std_tel number NOT NULL,
	std_grade number NOT NULL,
	std_jumin varchar2(13) NOT NULL,
	std_name varchar2(10) NOT NULL,
	std_deptno number NOT NULL,
	PRIMARY KEY (std_no)
);



/* Create Foreign Keys */

ALTER TABLE course
	ADD FOREIGN KEY (class_no)
	REFERENCES class (class_no)
;


ALTER TABLE professor
	ADD FOREIGN KEY (dep_tno)
	REFERENCES department (dep_tno)
;


ALTER TABLE student
	ADD FOREIGN KEY (std_deptno)
	REFERENCES department (dep_tno)
;


ALTER TABLE class
	ADD FOREIGN KEY (pro_no)
	REFERENCES professor (pro_no)
;


ALTER TABLE course
	ADD FOREIGN KEY (std_no)
	REFERENCES student (std_no)
;

SELECT tname FROM tab;


