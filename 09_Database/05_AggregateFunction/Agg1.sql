
SELECT * FROM t_professor;
SELECT count(*), count(name), count(hpage) FROM t_professor; 
-- 교수님 데이터에 총 몇개의 데이터가 있는지 나온다 컬럼의 개수를 세는 게 아니라 컬럼의 수로 데이터 수를 계산하는 것이다
-- hpage : 4개 나온다. 왜? null 값이 있기에. 
-- ★★그룹함수에서는 null 값은 (기본적으로) 계산에서 제외한다

-- null : 합산을 해도 결과가 나온다(null은 배제)
SELECT count(bonus), sum(bonus) FROM t_professor;

-- 이렇게 통계내면 안된다. bonus를 받는 교수들의 대한 평균 (null 제외한 값만) -> 통계 오류 -> null 처리!
SELECT avg(bonus) FROM t_professor;

SELECT max(hiredate), min(hiredate) FROM t_emp;


-- 교수님들의 보너스 평균값 출력 ( AVG() 사용)
-- 그룹함수는 null 값은 계산안하기 때문에
-- null 허용 필드에 대해 계산할때는 반드시 nvl, nvl2 사용해야 함.
 
SELECT 	avg(bonus), avg(nvl(bonus, 0))
FROM t_professor;



--########################################
-- GROUP BY

-- 학과별로 교수들의 평균 보너스 출력
SELECT DISTINCT deptno FROM t_professor; -- 총 7개 학과
SELECT * FROM t_professor;

-- 아래와 같이 그룹 함수와 그룹 함수가 아닌 결과는 같이 select 불가하다 -> 오라클은 에러 난다
SELECT deptno, avg(nvl(bonus, 0)) 
FROM t_professor;

-- group by, 그룹함수와 아닌 걸 같이 select 하기 위한 방법
 -- 그러니 그룹 함수가 아닌 걸 GROUP BY 로 묶기
SELECT deptno, round(avg(nvl(bonus, 0)), 1) "보너스 평균"
FROM t_professor
GROUP BY deptno;

-- #5101
SELECT * FROM t_professor;

SELECT deptno, POSITION, AVG(pay) "평균급여"
FROM t_professor
GROUP BY deptno, POSITION
ORDER BY deptno ASC, POSITION ASC;


-- 학과별 평균 급여를 출력하되, 평균 급여가 450 보다 많은 학과만 SELECT 
-- 에러가 난다 WHY? 
-- ★ 단일함수와 달리 그룹함수는 WHERE 조건절에서 사용이 불가하다!!
SELECT deptno, AVG(pay)
FROM t_professor
WHERE AVG(pay) > 450
GROUP BY deptno;

-- HAVING : GROUP BY 함수에 조건을 거는 것
SELECT deptno, AVG(pay)
FROM t_professor
GROUP BY deptno
HAVING AVG(pay) > 300;



-- <SELECT 쿼리문 순서>       <처리 순서>
--  SELECT                  - (5)
--  FROM                    - (1)
--  WHERE                   - (2)
--  GROUP BY                - (3)
--  HAVING                  - (4)
--  ORDER BY                - (6) select 처리한 다음에 나온다
 
 
-- #5102)연습
-- t_emp 테이블: 매니저별(MGR)로 관리하는 직원들의
-- ‘매니저’, ‘직원수’와 ‘급여총액’과 ‘급여평균’과 ‘교통비 (COMM) 평균’ 지급액 을 출력하세요.  
-- 단 사장님은 (job = president)제외
SELECT * FROM t_emp;

SELECT mgr
	, count(ename) AS 직원수
	, sum(sal) AS 급여총액
	, avg(sal) AS 급여평균
	, avg(nvl(comm, 0)) AS 교통비평균
FROM t_emp
--WHERE job != 'PRESIDENT' -- 아닌 것 !=, <>
WHERE job <>'PRESIDENT'
GROUP BY mgr;


-- #5103
SELECT * FROM t_professor;

SELECT
	deptno AS 학과번호
	, count(name) AS 총인원
	, round(avg(sysdate - hiredate), 5) AS 근속평균
	, avg(pay) AS 급여평균
	, avg(nvl(bonus, 0)) AS 보너스평균
FROM t_professor
WHERE POSITION = '정교수' OR POSITION = '조교수'
GROUP BY deptno
ORDER BY 보너스평균 DESC;  
-- ORDER BY 5 DESC;   -- 5번 COLUMN 역순으로 하는 것도 가능하다! column 인덱스 사용 가능
-- 이게 가능한 이유. SELECT가 먼저 처리되기 때문에 그 다음 ORDER BY에 별명 쓰는 게 가능하다
-- 처리 순서가 중요한 이유


-- #5104
SELECT * FROM t_student;

SELECT
	deptno1 AS 학과
	, max(weight) - min(weight) AS 최대최소몸무게차
FROM t_student
GROUP BY deptno1;


-- #5105
SELECT
	deptno1 AS 학과
	, max(weight) - min(weight) AS 최대최소몸무게차
FROM t_student
GROUP BY deptno1
HAVING (max(weight) - min(weight)) >= 30;













