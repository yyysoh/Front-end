
-- JOIN
-- FROM 절의 테이블에도 별명(alias)를 줄 수 있다


-- 20 record
SELECT s.STUDNO, s.name, s.DEPTNO1, grade
FROM t_student s;


-- 12 record
SELECT d.deptno, d.dname
FROM t_department d;


-- 카티션곱 (Cartesian Product)
-- 두개의 테이블을 JOIN 하게 되면,
-- 각 테이블의 레코드들의 모든 조합이 출력된다.
-- WHERE 나 ON 등으로 JOIN 조건이 주어지지 않으면
-- 모든 카티션곱이 출력된다.
 -- 내부적으로 카티션 곱이 만들어진다 언제? 테이블에 만들어지면, 모든 조합이 만들어진다

-- 240개 = 20 x 12 -> cartition 곱이라고 한다
SELECT 
	s.studno, s.name, s.deptno1,
	d.deptno, d.dname
FROM t_student s, t_department d; -- oracle JOIN 구문


SELECT 
	s.studno, s.name, s.deptno1,
	d.deptno, d.dname
FROM t_student s CROSS JOIN t_department d; -- ANSI SQL 구문 (표준 SQL)



-- 위의 카티션 곱에서 조건을 주면 원하는 레코드만 추출 가능.
 
-----------------------------------------------------------------------------------
-- Equi Join (등가 Join)
-- 일반적으로 많이 쓰이는 Join 이며, 양쪽 테이블 Join 한 카티션곱에서 ‘같은조건’이 존재할 경우만 값을 가져오는 것
 
-- 예) #6101
-- t_student 테이블과 t_department 테이블을 사용하여 학생이름, 1전공 학과번호, 1전공 학과 이름을 출력하세요

-- ORACLE JOIN 구문
SELECT * FROM t_student;
SELECT * FROM t_department;

SELECT s.name AS 학생이름, s.deptno1 AS 학과번호, d.dname AS 학과이름
FROM t_student s, t_department d 
WHERE s.deptno1 = d.deptno; -- deptno가 같은 것만 걸러내는 걸 WHERE 절에 입력한다
							-- JOIN 조건

-- ANSI 구문
SELECT s.name AS 학생이름, 
		s.deptno1 AS 학과번호, d.dname AS 학과이름
FROM t_student s 
	JOIN t_department d ON s.deptno1 = d.deptno; -- deptno가 같은 것만 걸러내는 걸 WHERE 절에 입력한다


-- 제2전공은?
-- ★ NULL 값은 JOIN에 참여 안하기에 결과값이 적게 나온 것
SELECT s.name "학생이름", s.deptno2 "제2전공번호", d.dname "제2전공이름"
FROM t_student s, t_department d
WHERE s.deptno2 = d.deptno;


-- #6102
-- t_student 테이블, t_professor 테이블 을 join하여
-- ‘학생이름’, ‘지도교수번호’, ‘지도교수이름’ 을 출력하세요
 
SELECT * FROM t_student s;
SELECT * FROM t_professor p;

-- ORACLE 구문
SELECT s.name "학생이름", 
		s.profno "지도교수번호", p.name "지도교수이름" --, profno  -- 두 테이블에 있기에 에러가 뜬다 그래서 별명이 필요한 것!
FROM t_student s, t_professor p
WHERE s.profno = p.profno;

--ANSI 구문
SELECT s.name "학생이름", 
		s.profno "지도교수번호", p.name "지도교수이름"
FROM t_student s 
	JOIN t_professor p ON s.profno = p.profno;



-- #6103
-- t_student, t_department, t_professor 테이블 을 join 하여
--  학생의 이름, 학과이름, 지도교수 이름  을 출력하세요
SELECT * FROM  t_student;
SELECT * FROM  t_department;
SELECT * FROM  t_professor;


-- 3개 테이블 join ORACLE 구문
SELECT s.name "학생이름", d.dname "학과이름", p.name "교수이름"
FROM t_student s, t_department d, t_professor p	
WHERE s.deptno1 = d.deptno AND s.profno = p.profno;

-- 3개 테이블 ANSI 구문
SELECT s.name "학생이름", d.dname "학과이름", p.name "교수이름"
FROM 
t_student s 
	JOIN t_department d ON s.deptno1 = d.deptno
	JOIN t_professor p ON s.profno = p.profno;



-- #6104

-- ORACLE 구문
SELECT * FROM t_emp2;
SELECT * FROM t_post;

SELECT e.name "사원이름", e.post "현재"
		, e.pay "현재연봉", p.s_pay "하한금액", p.e_pay "상한금액"
FROM t_emp2 e, t_post p
WHERE e.post = p.post;


-- ANSI 구문
SELECT e.name "사원이름", e.post "현재"
		, e.pay "현재연봉", p.s_pay "하한금액", p.e_pay "상한금액"
FROM t_emp2 e 
JOIN t_post p ON e.post = p.post;




-- #6105

-- ORACLE 구문
SELECT * FROM t_student;
SELECT * FROM t_professor;

SELECT s.name "학생이름", p.name "교수이름" 
FROM t_student s, t_professor p
WHERE s.deptno1 = 101; -- 일반 검색 조건 -> 카티션 곱 만드는 폭이 줄어드니 먼저! DB 부하가 줄어든다 (JOIN 조건보다 먼저 수행 -> 카티션 곱의 크기를 줄일 수 있다)
	AND s.profno = p.profno -- JOIN 조건
 


-- ANSI 구문
SELECT s.name "학생이름", p.name "교수이름" 
FROM t_student s 
	JOIN t_professor p ON s.profno = p.profno 
						AND s.deptno1 = 101;







