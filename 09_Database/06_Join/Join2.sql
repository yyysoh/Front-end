
-- 비등가 조인 (Non-Equi Join)
 
-- #6201)
-- t_customer 테이블, t_gift 테이블을 join 하여  
-- 고객의 마일리지 포인트별로 받을수 있는 상품을 조회하여
-- 고객의 '이름(c_name)'과 포인트(c_point) 상품명(g_name)을 출력하세요
-- BETWEEN ~ AND ~ 사용
 
SELECT * FROM t_customer;
SELECT * FROM t_gift;


-- ORACLE 구문
SELECT c.c_name "고객명", c.c_point "point", g.g_name "상품명" 
FROM t_customer c, t_gift g
WHERE c.c_point BETWEEN g.g_start AND g.g_end;

-- ANSI 구문
SELECT c.c_name "고객명", c.c_point "point", g.g_name "상품명" 
FROM t_customer c
	JOIN t_gift g ON c.c_point BETWEEN g.g_start AND g.g_end;



--  #6202) 연습
-- 앞 예제에서 조회한 상품의 이름(gname)과 필요수량이 몇개인지 조회하세요
-- (그룹함수 동원되어야 한다)
 SELECT * FROM T_CUSTOMER;
 SELECT * FROM T_GIFT;

-- ORACLE 구문
SELECT g.g_name "상품명", count(*) "필요수량"
FROM t_customer c, t_gift g
WHERE c.c_point BETWEEN g.g_start AND g.g_end
GROUP BY g.g_name;

-- ANSI 구문
SELECT g.g_name "상품명", count(*) "필요수량"
FROM t_customer c JOIN t_gift g
ON c.c_point BETWEEN g.g_start AND g.g_end
GROUP BY g.g_name;



-- 지금까지는 조건이 만족되는 것만 걸러져서 나오는 교집합만 했다 --> inner join
-- 왼쪽 조인에 참여하지 않는 것 left outer join

-----------------------------------
-- OUTER JOIN
 
-- #6206)
--t_student 테이블과 t_professor 테이블 Join :
--학생이름과 지도교수 이름을 출력하세요.
--단! 지도교수가 결정되지 않은 학생의 명단도 함께 출력하세요
 
--** 기존의 INNER Join 방식으로 먼저 만들어 보고 OUTER Join 을 해보고 비교해보자
 
-- 지도 교수가 없는 학생은 select 되지 않는다
SELECT * FROM t_student;
SELECT * FROM t_professor;

SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s
	INNER JOIN t_professor p ON s.profno = p.profno;

-- ORACLE의 OUTER JOIN은 ANSI 구문만 가능하다
-- JOIN에 참여하지 않은 학생들도 SELECT 되어야 한다
-- 왼쪽에서 참여하지 않은 게 나오게 
SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s
	LEFT OUTER JOIN t_professor p ON s.profno = p.profno;


-- #6207)
--t_student, t_professor 테이블 join :  
--학생이름과 지도교수 이름을 출력,
--단! 지도 학생이 결정되지 않은 교수 명단도 출력
SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s
	RIGHT OUTER JOIN t_professor p ON s.profno = p.profno;
 

-- #6208)
--t_student, t_professor 테이블 join :  
--학생이름과 지도교수 이름을 출력,
--단! 지도 학생이 결정되지 않은 교수 명단,
--지도교수가 결정되지 않은 학생명단 모두 출력
  SELECT s.name "학생이름", p.name "교수이름"
FROM t_student s
	FULL OUTER JOIN t_professor p ON s.profno = p.profno;


-- OUTER JOIN은 INNER JOIN에 비해 성능이 떨어진다 
-- 쿼리문을 수행하는데 무겁다. 남용하진 말고 필요하다면 쓰자




------------------------------------------------
-- self join
 
-- #6209)
-- t_dept2 테이블에서
-- 부서명 과 그 부서의 상위부서명을 출력하세요
 
-- 둘 다 한 테이블에 존재한다. 그러면 동일한 테이블을 JOIN 해야 한다
-- 어떻게? 별명을 다르게 주면 된다

SELECT * FROM t_dept2;

SELECT d1.dname "부서명", d2.dname "상위부서명"
FROM t_dept2 d1, t_dept2 d2
WHERE d1.PDEPT = d2.dcode;






