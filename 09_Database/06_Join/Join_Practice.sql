
-- #6203
SELECT * FROM t_student;
SELECT * FROM t_exam01;
SELECT * FROM t_credit;

-- oracle
SELECT s.name "학생이름", e.total "점수", c.grade "학점"
FROM t_student s, t_exam01 e, t_credit c
WHERE s.studno = e.studno AND e.total BETWEEN c.min_point AND c.max_point;
-- 앞의 것과(s.studno = e.studno) 뒤의 것을(e.total) 조인   total이 point 사이에 있어야 한다

-- ansi
SELECT s.name "학생이름", e.total "점수", c.grade "학점"
FROM t_student s 
	JOIN t_exam01 e  ON s.studno = e.studno
	JOIN t_credit c ON e.total BETWEEN c.min_point AND c.max_point;
-- on은 join에 연결되는 것


-- #6204
SELECT * FROM t_customer;
SELECT * FROM t_gift;
--

-- oracle
SELECT c.c_name "고객명", c.c_point "point", g.g_name "상품명"
FROM t_customer c, t_gift g
WHERE  g.g_name = '산악용자전거' AND g.g_start <= c.c_point;

-- ansi
SELECT c.c_name "고객명", c.c_point "point", g.g_name "상품명"
FROM t_customer c 
		JOIN t_gift g ON g.g_start <= c.c_point;
WHERE g.g_name = '산악용자전거'  -- WHERE 절 먼저 수행하여 부하를 줄여준다


-- #6205
SELECT * FROM t_emp2;
SELECT * FROM t_post;
-- 현재 나이가 P.S_AGE와 P.E_AGE 사이에 있어야 한다 그러면 그 해당하는 직위를 오른쪽 테이블에서 꺼낼 수 있다

-- oracle
SELECT e.name "이름" 
	, to_char(SYSDATE, 'yyyy') - to_char(birthday, 'yyyy')  + 1 "현재나이"
	, nvl(e.post, ' ') "현재직급"
	, p.post "예상직급"
FROM t_emp2 e, t_post p
WHERE to_char(SYSDATE, 'yyyy') - to_char(birthday, 'yyyy')  + 1 BETWEEN p.s_age AND p.e_age;

-- ansi
SELECT e.name "이름" 
	, to_char(SYSDATE, 'yyyy') - to_char(birthday, 'yyyy')  + 1 "현재나이"
	, nvl(e.post, ' ') "현재직급"
	, p.post "예상직급"
FROM t_emp2 e JOIN t_post p
ON to_char(SYSDATE, 'yyyy') - to_char(birthday, 'yyyy')  + 1 BETWEEN p.s_age AND p.e_age;




-- #6210
-- 우선 자신보다 입사일 빠른 사람들을 SELECT
SELECT * FROM t_professor;

-- oracle
SELECT P1.PROFNO "교수번호"
		, P1.NAME "교수명"
		, TO_CHAR(P2.HIREDATE, 'YYYY-MM-DD') "입사일"
		, count(P1.HIREDATE) "빠른사람"
FROM T_PROFESSOR P1 LEFT OUTER JOIN T_PROFESSOR P2
ON P1.PROFNO = P2.PROFNO
GROUP BY P1.PROFNO, P1.NAME, P2.HIREDATE 
--HAVING (P1.HIREDATE, 'YYYY-MM-DD') < TO_CHAR(P2.HIREDATE, 'YYYY-MM-DD')
ORDER BY "입사일", "교수명";


-- RESULT
SELECT a.profno "교수번호", a.name "교수명", a.hiredate "입사일", b.name "빨리입사한교수님", b.hiredate "그 분 입사일" 
FROM t_professor a left OUTER JOIN t_professor b
		ON b.hiredate < a.hiredate
ORDER BY 1;
-- 자기보다 빨리 입사한 사람이 없기 때문에 조인형 교수는 안뜬다 그래서 outer join이 필요하다 -> 이 상태에서 COUNT 해야한다

--GROUP BY 하기
SELECT a.profno "교수번호", a.name "교수명", 
		TO_CHAR(a.hiredate, 'YYYY-MM-DD') "입사일", 
		COUNT(b.hiredate) "빠른사람"
FROM t_professor a right OUTER JOIN t_professor b
		ON b.hiredate < a.hiredate
GROUP BY a.profno, a.name, a.hiredate
ORDER BY "빠른사람";





--#6203
SELECT * FROM t_student;
SELECT * FROM t_exam01;
SELECT * FROM t_credit;


SELECT s.name "학생이름", e.total "점수", c.grade "학점"
FROM t_student s, t_exam01 e, t_credit c
WHERE s.studno = e.studno AND e.total BETWEEN c.min_point AND c.max_point;

--#6204
SELECT * FROM t_customer;
SELECT * FROM t_gift;

SELECT c.c_name "고객명", c.c_point "point", g.g_name "상품명"
FROM t_customer c, t_gift g
WHERE g.g_start <= c.c_point AND g.g_name = '산악용자전거';

--#6205
SELECT * FROM t_emp2;
SELECT * FROM t_post;

SELECT t.name "이름"
		, to_char(sysdate, 'yyyy') - to_char(t.birthday, 'yyyy') + 1 "현재나이"
		, nvl(t.post, ' ') "현재직급"
		, p.post "예상직급"
FROM t_emp2 t, t_post p
WHERE to_char(sysdate, 'yyyy') - to_char(birthday, 'yyyy') + 1 BETWEEN p.s_age AND p.e_age


--#6210
SELECT * FROM t_professor;

SELECT p1.profno "교수번호"
		, p1.name "교수명"
		, to_char(p1.hiredate, 'yyyy-mm-dd') "입사일"
		, count(p2.hiredate) "빠른사람"
FROM t_professor p1 LEFT OUTER JOIN t_professor p2
ON p2.hiredate < p1.hiredate
GROUP BY p1.profno, p1.name, p1.hiredate
ORDER BY "빠른사람";





























