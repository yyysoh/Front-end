

-- 집합 연산자 set operator

-- 컬럼 수 동일, 컬럼의 데이터 타입이 상호호환해야 집합 연산자 가능하다!!

SELECT studno, name, deptno1
FROM t_student
WHERE deptno1 = 101;
 
SELECT profno, name, deptno
FROM t_professor
WHERE deptno = 101;
 

-- 두 테이블을 UNION으로 합치기 (합집합)
-- 두개의 SELECT문으로 나타낸 테이블, 사실상 위에꺼가 메인 아래꺼가 서브쿼리이긴 하다
-- 정렬되어서 나온다, 중복값 제거

SELECT studno, name, deptno1
FROM t_student
WHERE deptno1 = 101
UNION 
SELECT profno, name, deptno
FROM t_professor
WHERE deptno = 101;



-- UNION ALL로 합치기
-- 정렬되지 않고 차례대로 순서대로 나온다, 중복값 제거하지 않는다

SELECT studno, name, deptno1
FROM t_student
WHERE deptno1 = 101
UNION ALL
SELECT profno, name, deptno
FROM t_professor
WHERE deptno = 101;



-- 위 두 쿼리 결과에서 UNION 은 정렬되어 나타났고,  오른쪽은 그렇지 않았다.
 
-- #3202)  UNION 을 사용하여
-- t_student 에서 제1전공(deptno1)이 101번학과인 학생과
-- 제2전공(deptno2)이 201번 학과를 전공하는 학생들의 이름을 모두 출력
 
 SELECT name FROM t_student WHERE deptno1 = 101
 UNION 
 SELECT name FROM t_student WHERE deptno2 = 201;
-- union은 중복값 제거함. 중복되는 서진수는 한번만 select된다

 SELECT name FROM t_student WHERE deptno1 = 101
 UNION ALL
 SELECT name FROM t_student WHERE deptno2 = 201;
-- union all은 중복값 제거 안한다. 서진수는 두번 select된다. 정렬 x 순차적으로 나온다

SELECT name, grade FROM t_student WHERE deptno1 = 101
UNION
SELECT name FROM t_student WHERE deptno2 = 201;
-- error. 컬럼 개수다름!
-- SQL Error [1789] [42000]: ORA-01789: query block has incorrect number of result columns

SELECT grade FROM t_student WHERE deptno1 = 101
UNION
SELECT name FROM t_student WHERE deptno2 = 201;
-- error. 데이터 타입이 다름! 타입이 호환되어야 한다 grade는 숫자 name은 문자
--SQL Error [1790] [42000]: ORA-01790: expression must have same datatype as corresponding expression




--  #3202)  INTERSECT 을 사용
-- t_student 에서 제1전공(deptno1)이 101번,
-- 그리고 제2전공(deptno2)이 201번 을 복수 전공하는 학생들의 이름을 모두 출력

SELECT name FROM t_student WHERE deptno1 = 101
INTERSECT 
SELECT name FROM t_student WHERE deptno2 = 201;



-- #3203) MINUS 사용
--t_professor 교수님들의
--급여를 20% 인상하기 위한 명단(이름, 직급)을 출력
--단, 직급인 전임강사인 사람은 제외
 
-- 전체명단
SELECT name, position
FROM t_professor
ORDER BY 2;
 
SELECT name, position
FROM t_professor
MINUS
SELECT name, position
FROM t_professor
WHERE POSITION = '전임강사'



















