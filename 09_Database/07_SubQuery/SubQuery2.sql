

-- 3. 다중칼럼 Sub Query
-- Sub Query 결과가 여러 칼럼인 경우.  
-- 주로 Primary Key 를 여러 칼럼을 합쳐서 만들었을 경우 한꺼번에
-- 비교하기 위해서 자주 사용.
 
--#7201) 예제
-- t_student 테이블을 조회하여
-- 각 학년별로 최대 키를 가진 학생들의
-- 학년과 이름과 키를 출력하세요
-- 학년 오름차순으로 출력

 
SELECT grade, max(weight)
FROM t_student
GROUP BY grade;


SELECT grade "학년", name "이름", height "키"
FROM T_STUDENT 
WHERE (grade, height) IN  -- grade, height 같은 값만 뽑아서 나올 것이다
						(SELECT grade, max(height)
						FROM t_student
						GROUP BY grade)
ORDER BY "학년";
						


-- #7202
SELECT * FROM t_professor;
SELECT * FROM t_department;



SELECT p.profno "교수번호"
		, p.name "교수명"
		, to_char(HIREDATE, 'yyyy-mm-dd') "입사일"
		, d.dname "학과명"
FROM t_professor p, t_department d
WHERE (p.deptno, p.hiredate) IN (SELECT deptno, min(to_char(HIREDATE, 'yyyy-mm-dd')) "min(hiredate)"
								FROM t_professor
								GROUP BY deptno) 
							AND p.deptno = d.deptno
ORDER BY "학과명";


SELECT deptno, min(to_char(HIREDATE, 'yyyy-mm-dd')) "min(hiredate)"
FROM t_professor
GROUP BY deptno;









-- #7203

SELECT * FROM t_emp2;


SELECT name "사원명", post "직급", pay "연봉"
FROM T_EMP2 
WHERE (post, pay) IN (SELECT post, max(pay)
					FROM t_emp2
					GROUP BY post)
ORDER by pay;



SELECT post, max(pay)
FROM t_emp2
GROUP BY post;


-- 번외, null 값 직급 포함시키기
SELECT name "사원명", post "직급", pay "연봉"
FROM T_EMP2 
WHERE (nvl(post, ' '), pay) IN (SELECT nvl(post, ' '), max(pay)
					FROM t_emp2
					GROUP BY post)
ORDER by pay;



-- #7204
-- 다중 컬럼 아님

SELECT * FROM T_EMP2;
SELECT * FROM T_DEPT2;

SELECT avg(pay)
FROM T_EMP2
GROUP BY deptno

SELECT d.dname, e.name, e.pay
FROM t_emp2 e, T_DEPT2 d
WHERE pay < ALL (SELECT avg(pay)
FROM T_EMP2
GROUP BY deptno) AND e.DEPTNO  = d.DCODE;



-- #7202) 연습
-- t_professor , t_department 테이블 :  
-- 각 학과별로 입사일이 가장 오래된 교수의 
-- 교수번호와 이름, 입사일, 학과명을 출력하세요.  
-- 단 학과이름 순으로 오름차순 정렬하세요
 
 
 
--#7203) 연습
--t_emp2 테이블 : 
--직급별로 해당직급에서 최대 연봉을 받는 직원의 
--이름과 직급, 연봉을 출력하세요,  
--단, 연봉순으로 오름차순 정렬하세요
 
 
--#7204) 연습
--t_emp2, t_dept2 테이블 : 
--각 부서별 평균 연봉을 구하고 
--그 중에서 평균 연봉이 가장 적은 부서의 평균연봉보다 
--적게 받는 직원들의 
--부서명, 직원명, 연봉을 출력 하세요
 








-- 4. 상호연관 Sub Query
-- Main Query 값을 Sub Query 에 주고
-- Sub Query를 수행한 후 그 결과를 다시
-- Main Query 로 반환해서 수행하는 쿼리.
               
-- #7205) 연습
-- t_emp2 테이블 :  
-- 직원들 중에서 자신의 직급의 평균연봉과
-- 같거나 많이 받는 사람들의
-- 이름과 직급, 현재 연봉을 출력하세요.
 
SELECT * FROM t_emp2;

SELECT 
FROM T_EMP2 a
WHERE a.pay >= (a의 직급 평균 pay)
--a 직원의 pay가 a의 직급 평균 pay보다 크거나 같으면 select

SELECT a.name "사원이름"
		, nvl(a.post, ' ') "직급"
		, a.pay "급여"
FROM T_EMP2 a
--WHERE a.pay >= (a의 직급 평균 pay)
-- 메인쿼리 a가 작동해야 한다
WHERE a.pay >= (SELECT avg(b.pay) FROM t_emp2 b WHERE nvl(a.post, ' ') = nvl(b.post, ' '));
-- 메인쿼리의 a가 서브쿼리로 넘어오고 서브쿼리에서 연산 후 메인쿼리에서 결과 냄. 서브쿼리 결과가 메인에서 쓰인다
-- where절에서 from 절꺼를 사용할 수 있는 이유는 from이 먼저 연산되기 때문이다



-- self join


SELECT a.name "사원이름"
		, nvl(a.post, ' ') "직급"
		, a.pay "급여"
FROM T_EMP2 a, T_EMP2 b
WHERE a.pay >= b.pay 
-- 이거 해볼까 조인으로






--------------------------------------------
-- 스칼라 서브 쿼리 (select절에 오는 서브쿼리)
-- 한 개의 행 (한개 값)

SELECT '비바', (SELECT '봉지원' FROM dual) FROM dual;


-- #7206) 예제
--t_emp2, t_dept2 테이블:
--조회하여 사원들의 이름과 부서 이름을 출력
 
SELECT e.name "사원이름", d.dname "부서이름"
FROM t_emp2 e, t_dept2 d
WHERE e.deptno = d.dcode;

-- 상호연관 서브쿼리
SELECT name "사원이름", (SELECT dname FROM t_dept2 d WHERE e.deptno = d.dcode) "부서이름" 
FROM t_emp2 e;


-- JOIN 과 같은 결과 나옴.  
-- 그러나 데이터 양이 적은 경우는 스칼라서브쿼리 방식이 Join 보다 나은 성능을 보여줌









