
-- 서브쿼리, DML에서도 사용이 가능하다
CREATE TABLE test_emp_a (
	emp_id NUMBER,
	emp_name VARCHAR2(100)
);


CREATE TABLE test_emp_b (
	emp_id NUMBER,
	emp_name VARCHAR2(100)
);

DROP TABLE test_emp_a;
DROP TABLE test_emp_b;




-- 한 개 ROW씩 INSERT. DML 결과는 정수 나온다 -> 1 나옴
INSERT INTO test_emp_a VALUES(101, '아이언');

INSERT INTO test_emp_b VALUES(101, '캡틴그놈');

SELECT * FROM test_emp_a;
SELECT * FROM test_emp_b;

INSERT ALL --14:20 다시
	INTO test_emp_a values(102, '블랙위도우')
	INTO test_emp_b values(202, '비젼')
SELECT * FROM dual;


-- insert 할 때 서브쿼리로 insert 가능, values 대신에!
INSERT INTO test_emp_a (SELECT 400, '설현아' FROM dual);



-- 테이블 x2 배로 만들기 테이블 뻥튀기!
-- a 테이블을 a 테이블에 넣기
INSERT INTO test_emp_a(SELECT * FROM test_emp_a); 

SELECT * FROM test_emp_a;

-- a의 id 값만 b에 넣기!
INSERT INTO test_emp_b(emp_id) (select emp_id FROM test_emp_a);

SELECT * FROM test_emp_b;

SELECT * FROM phonebook;
-- id가 pk이다 지금 그걸 뻥튀기하려고 하면 에러 뜬다 why? pk 중복되기 때문에
INSERT INTO phonebool (SELECT * FROM phonebook); -- 에러, pk 중복

SELECT phonebook_seq.nextval, name, phone, email FROM phonebook;
-- seq 객체는 참조될 때마다 1씩 증가된다

INSERT INTO phonebook (id, name, phone, email)
(SELECT phonebook_seq.nextval, name, phone, email FROM phonebook);


UPDATE phonebook SET id = id + 1000; -- WHERE 절 없이 하면 dbeaver가 안위험하겠어? 괜찮아? 란 창이 뜬다

SELECT * FROM phonebook ORDER BY id;



-- create table에도 서브쿼리 사용
CREATE TABLE test_phonebook
AS 
SELECT * FROM phonebook;


SELECT * FROM test_phonebook;



