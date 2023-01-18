--시중은행들이 오라클 DB를 쓰는 가장 큰 이유는 
--RAC(Real application clusters)라는 기능 때문이다. 
--RAC는 간단히 말하면 하나의 DB를 여러 서버가 공유하는 기술이다. 
--하나의 DB를 여러 서버가 공유하기 때문에 서버 하나가 장애가 나도 데이터 정합성이 유지된다.
--안전성이 보장되었다. 대기업에서 보장해주니까



-- SELECT 결과물중 맨 위의 5개만 출력해보고 싶으면 어케 해야 하나?
-- SELECT 결과물중 n 번째 부터 m 개를 출력하고 싶다면?
--   ex) 게시판.. 페이징
 
-- DBMS 마다 구현 방법 다름
--  MYSQL : LIMIT 제일 깔끔
--  MS SQL server : TOP
--  ORACLE : ROWNUM 제일 더럽게 나옴
 
SELECT empno, ename, sal FROM t_emp;
 
-- select 시 oracle에서 붙여주는 행 번호 (rownum)
SELECT ROWNUM, empno, ename, sal FROM t_emp;

-- 뭘 해도 행 번호는 1, 2, 3...
SELECT ROWNUM, empno, ename, sal FROM t_emp ORDER BY empno DESC;

-- 상위 5개만 select 하기
SELECT ROWNUM, empno, ename, sal FROM t_emp 
WHERE rownum <= 5
ORDER BY empno DESC;

-- 굳이 rownum을 select 하지 않아도 rownum은 존재한다
SELECT empno, ename, sal FROM t_emp 
WHERE rownum <= 5
ORDER BY empno DESC;

-- rownum은 select 수행한 후에 붙여진다 
-- select 이후에 order by를 하면 순서가 망가질 수 있다
SELECT rownum, empno, ename, sal FROM t_emp 
WHERE rownum <= 5
ORDER BY sal desc; -- 순서 엉망 pk 아닌걸로 ORDER BY 했을 때!

-- order by 없을 때 무슨 순서대로 값이 정렬될까?
-- pk의 오름차순. pk가 인덱스로 설정되는데 그 pk의 오름차순 순서대로 나온다.


-- rownum 범위가 1을 포함하지 않으면 안되나??
SELECT rownum, empno, ename, sal 
FROM t_emp 
WHERE rownum > 5 -- 안된다 why?? 휴.. 응? 15:23
ORDER BY empno desc;


-- 상위 5개 출력
-- 1행부터 5행까지 출력 (1페이지)
SELECT rownum, empno, ename, sal 
FROM t_emp 
WHERE rownum >=1 AND rownum < 1 + 5
ORDER BY empno DESC;

-- 6행부터 10행까지 출력 (2페이지) mysql은 나오나 oracle은 나와 -> 해결방법 서브쿼리 사용!
SELECT rownum, empno, ename, sal 
FROM t_emp 
WHERE rownum >= 6 AND rownum < 6 + 5
ORDER BY empno DESC;



-------------------------------------

-- 이걸 FROM 절 서브쿼리에 넣기
SELECT empno, ename, sal FROM t_emp ORDER BY empno DESC 

--서브쿼리에 넣고 거기에 있는 걸 다 뽑아낸다
SELECT t.* -- t에 있는 모든 컬럼
FROM (SELECT empno, ename, sal FROM t_emp ORDER BY empno DESC) t; -- 별명 t

SELECT rownum AS rnum, t.* -- rnum 별명 붙여야 한다
FROM (SELECT empno, ename, sal FROM t_emp ORDER BY empno DESC) t;


--이 결과를 서브쿼리에 넣을 것
-- 완성! inline view와 rownum 활용
SELECT * FROM
(
	SELECT ROWNUM AS RNUM, T.*
	FROM (SELECT empno, ename, sal FROM t_emp ORDER BY empno DESC) T
)
--WHERE RNUM >= 6 AND RNUM < 6 + 5  -- 2페이지
WHERE RNUM >= 11 AND RNUM < 11 + 5  -- 3페이지
;




------------------------------------

-- ROW_NUMBER() OVER (ORDER BY 정렬컬럼1, ... )
-- 특정 컬럼의 값을 기준으로 정렬한뒤 순서 매기기
-- 사용법
-- SELECT ROW_NUMBER() OVER (ORDER BY 정렬컬럼1, ... ), 서브쿼리컬럼 FROM 서브쿼리
--
 
-- over 키워드 같이 와야 한다
-- sal 역순으로 한 게 나온다
-- 특정 컬럼의 값을 기준으로 (sal 기준) rnum 순서 매기기! 그냥은 안됨
SELECT row_number() OVER (ORDER BY sal DESC) AS rnum, t.*
FROM (SELECT empno, ename, sal FROM t_emp ORDER BY empno DESC) T



-- 학생 점수
SELECT s.name, e.total
FROM t_student s, t_exam01 e
WHERE s.studno = e.studno;

-- row_number() 붙이기
SELECT ROW_NUMBER() OVER (ORDER BY total DESC) AS RNUM, T.*
FROM (
	SELECT s.name, e.total
	FROM t_student s, t_exam01 e
	WHERE s.studno = e.studno
) T
;

-- row_number() 는 '출력 순서'
-- rank() 는 '순위 통계'
-- 동일한 점수는 동일한 RANK 값으로. 1,2,2,4
SELECT 
	ROW_NUMBER() OVER (ORDER BY total DESC) AS RNUM, 
	RANK() OVER (ORDER BY total DESC) AS RANK, 
	T.*
FROM (
	SELECT s.name, e.total
	FROM t_student s, t_exam01 e
	WHERE s.studno = e.studno
) T
;















