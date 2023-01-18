

-- DDL
DROP TABLE phonebook;
CREATE TABLE phonebook (
	pb_uid NUMBER PRIMARY KEY,
	name varchar2(10) NOT NULL,
	phone varchar2(14) DEFAULT '010-0000-0000',
	memo clob,
	regdate date
);


ALTER TABLE PHONEBOOK 
MODIFY (
	name varchar2(15),
	phone varchar2(20)
);

ALTER TABLE PHONEBOOK 
ADD (
	email varchar2(20),
	addr varchar2(100),
	age NUMBER DEFAULT 21
);

ALTER TABLE phonebook DROP (addr, age);

DROP TABLE phonebook CASCADE CONSTRAINT purge;



-- sequence, DML
DROP SEQUENCE phonebook_seq;
CREATE SEQUENCE phonebook_seq;

DESC seq;

SELECT * FROM seq WHERE sequence_name = 'phonebook_seq';
SELECT * FROM seq WHERE sequence_name = 'PHONEBOOK_SEQ';

SELECT * FROM phonebook;

INSERT INTO phonebook (pb_uid, name, phone, memo, email, REGDATE)
VALUES (phonebook_seq.nextval, '신데렐라', '010-1111-2222', ' ', 'sin@email.com', sysdate);

delete PHONEBOOK 
WHERE pb_uid = 4;

UPDATE PHONEBOOK 
SET phone = '010-4444-5555'
WHERE pb_uid = 2;



-- 단일 함수
SELECT name, '교수님 배고파요' FROM t_professor;

SELECT studno 학번, name 이름 FROM t_student;



SELECT initcap('abcd') FROM dual;
SELECT lower('ABCD') FROM dual;
SELECT upper('abcd') FROM dual;
SELECT LENGTH('abcd') FROM dual;
SELECT lengthb('abcd') FROM dual;
SELECT lengthb('안녕') FROM dual; -- utf-8로 설정했을 경우 한글은 3byte씩
SELECT concat('abc', 'abc') FROM dual;
SELECT substr('abcdef', 2, 2) FROM dual;
SELECT substrb('abcde', 2, 4) FROM dual; -- 2번째 인덱스부터 4바이트 뽑기
SELECT substrb('안녕하세요', 2, 9) FROM dual; -- 앞에 공백 포함? 뭐징
SELECT instr('abcde', 'c') FROM dual;
SELECT instrb('안녕하세요', '하') FROM dual;
SELECT lpad('abc', 10, '*') FROM dual;
SELECT rpad('abc', 10, '*') FROM dual;
SELECT ltrim('abcd', 'a') FROM dual;
SELECT rtrim('abcd', 'd') FROM dual;
SELECT replace('abcd', 'a', 'b') FROM dual;


SELECT 'pretty girl', initcap('pretty girl')
FROM dual;

SELECT initcap(id) "id"
FROM t_student WHERE deptno1 = 201;

SELECT * FROM t_student;

SELECT lower(id), upper(id) 
FROM T_STUDENT
WHERE deptno1 = 201;


SELECT name "이름", id, length(id) "글자수"
FROM T_STUDENT 
WHERE LENGTH(id) < 7; -- 단일행 함수는 조건절에서 사용이 가능하다





SELECT name, pay, bonus, nvl(bonus, 0) + pay
FROM t_professor;


SELECT name, pay, bonus, nvl2(bonus, pay * 12 + bonus, pay * 12)
FROM t_professor;



SELECT 1 + '1' FROM dual;

SELECT '1' + 1 FROM dual;

SELECT 1 + to_number('1') FROM dual;

SELECT to_number('20') FROM dual;

SELECT 1 +'a' FROM dual;




SELECT to_char(sysdate, 'yy') 
FROM dual;

SELECT 1234, to_char(1234, '99,999') FROM dual;


SELECT
	TO_DATE('2022-08-31', 'YYYY-MM-DD') "to-date"
FROM dual;



SELECT MOD(12, 5) FROM dual;


SELECT 
	MONTHS_BETWEEN('2012-03-01', '2012-01-01') "양수" -- 왼쪽이 큰 값이면 양수가 나온다
	, MONTHS_BETWEEN('2012-01-01', '2012-03-01') "음수" -- 오른쪽이 큰 값이면 음수가 나온다
	, MONTHS_BETWEEN('2012-02-29', '2012-02-28') "2/29-2/01" -- 28일차가 계산이 된다
	, MONTHS_BETWEEN('2012-04-30', '2012-04-01') "4/30-4/01" -- 29일차가 계산이 된다
FROM dual;


SELECT round((sysdate - hiredate), 1) FROM t_professor;

SELECT * FROM t_professor;
SELECT count(*) FROM t_professor;
SELECT count(name) FROM t_professor;

SELECT count(*), count(name), count(hpage) FROM t_professor;


SELECT avg(bonus) FROM t_professor;
SELECT avg(nvl(bonus, 0)) FROM t_professor;




SELECT deptno, avg(pay)
FROM T_PROFESSOR
having avg(pay) > 450
GROUP BY deptno;



SELECT e.ename, d.dname FROM t_emp e CROSS JOIN t_dept d;

SELECT * FROM t_emp;
SELECT * FROM t_dept;


-- equi join : 양쪽 테이블 join한 카티션곱에서 같은 조건이 있는 경우에만 값을 가져오는 것

SELECT * FROM t_student;
SELECT * FROM t_department;
SELECT * FROM t_professor;

SELECT s.name, s.deptno1, d.dname
FROM t_student s, t_department d
WHERE s.deptno1 = d.deptno;

SELECT s.name, d.dname, p.name
FROM t_student s, t_department d, t_professor p
WHERE s.deptno1 = d.deptno AND s.profno = p.profno;


SELECT s.name, d.dname, p.name
FROM t_student s 
	JOIN t_department d ON s.deptno1 = d.deptno
	JOIN t_professor p ON s.profno = p.profno;


SELECT * FROM t_customer;
SELECT * FROM t_gift;

SELECT g.g_name, count(*)
FROM t_customer c, t_gift g
WHERE c.c_point BETWEEN g.g_start AND g.g_end
GROUP BY g.g_name;


SELECT * FROM t_student;
SELECT * FROM t_professor;


-- 교수 없는 학생은 select 안된다 나오게 하려면? outer join
SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s INNER JOIN t_professor p
ON s.profno = p.profno;


SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s LEFT OUTER JOIN t_professor p
ON s.profno = p.profno;


SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s RIGHT OUTER JOIN t_professor p
ON s.profno = p.profno;


SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s full OUTER JOIN t_professor p
ON s.profno = p.profno;



SELECT * FROM t_dept2;

SELECT d1.dname "부서명", d2.dname "상위부서명"
FROM t_dept2 d1, t_Dept2 d2
WHERE d1.PDEPT = d2.dcode;



SELECT * FROM t_dept JOIN dept_temp USING(deptno);
SELECT * FROM t_dept, dept_temp;



SELECT * 
FROM t_dept JOIN dept_temp USING (deptno, dname);










SELECT * FROM t_emp;


SELECT ename, sal
FROM t_emp
WHERE sal > (SELECT sal FROM t_emp WHERE ename = 'SCOTT');


SELECT deptno1 from t_student WHERE name = '이윤나'

SELECT s.name, d.dname
FROM t_student s, t_department d
WHERE d.deptno = s.DEPTNO1 





SELECT * FROM t_student;

CREATE OR REPLACE PROCEDURE p0(v_name IN t_student.name%TYPE)
IS 
	v_studno t_student.studno%TYPE
BEGIN 
	SELECT name, studno INTO v_name, v_studno
	FROM t_student
	WHERE name = v_name;
END;
/

--EXEC p0('서진수');

DECLARE
	v_studno t_student.studno%TYPE;
BEGIN -- 선언 후 호출
	p0('서진수', v_studno); -- info_prof은 매개변수 세개였음
	-- 1001 받아서 넘어오고 v_name, v_pay는 out 모드에 담겨져서 아래에 호출하는 쪽에 담긴다. 프로시저의 결과를 이런 식으로 
	DBMS_OUTPUT.PUT_LINE(v_name || '교수의 급여는 ' || v_studno || '입니다');
END;
/
 







































































