-- 산술연산자
-- + , - , * , /
 
-- 직원이름(ename), 급여(sal), 급여10%인상분
 SELECT ename, sal * 1.1
 FROM t_emp;
 
-- WHERE : 원하는 조건만 검색
 
-- SELECT [컬럼명 또는 표현식]
-- FROM [테이블명, 뷰명]  
-- WHERE [조건절] ;
 
-- 직원 테이블(t_emp) 에서 직책(job)이 salesman 인 사람만 조회
-- 저장된 문자열은 대소문자 구분한다 키, 테이블명은 안함
SELECT * FROM t_emp WHERE job = 'SALESMAN';


-- 직원 테이블(t_emp) 에서 10번 부서(deptno)에 근무하는 직원의  
-- 원의 이름(ename)과 급여(sal)와 부서번호(deptno) 출력
 
SELECT ename, sal
FROM t_emp
WHERE deptno = 10;

--직원 테이블(t_emp) 에서 급여(sal) 가 2000보다 큰 사람의
--이름(ename)과 급여(sal)를 출력하세요
 
SELECT ename, sal
FROM t_emp
WHERE sal > 2000;
 
--직원 테이블(t_emp) 에서 이름이 SCOTT인 사람의
--이름(ename)과 사원번호(empno), 급여(sal) 출력
 
SELECT ename, sal, empno 
FROM t_emp
WHERE ename = 'SCOTT'

-- 학생 테이블(t_student) 에서
-- 2,3 학년(grade) 학생의  이름(name), 학년(grade) 출력
 
SELECT name, grade
FROM t_student 
WHERE grade IN(2, 3);   
--grade = 2 OR grade = 3;

--NOT IN은 2와 3을 제외한 학년
SELECT name, grade
FROM t_student 
WHERE grade NOT IN(2, 3);    

SELECT name, grade FROM t_student 
WHERE grade BETWEEN 2 AND 3;

SELECT name, pay, POSITION 
FROM t_professor 
WHERE pay > 300 AND POSITION='정교수';

SELECT name, POSITION 
FROM t_professor 
WHERE bonus IS NULL;

--주의!) null 값과 다른 값과의 연산 결과는 null이다!!!!!!!!!
SELECT name, pay, bonus, pay + bonus
FROM t_professor;

-- LIKE 와 같이 쓰는 와일드 카드  % ,  _ 특정 문자열 매칭시켜준다
-- % : 글자수 제한 없고 어떤 글자가 와도 됨
-- _ : 글자수는 한글자가 반드시 와야 되고 어떤 글자 와도 좋음
   
-- 연습
-- 교수님 중에서 김씨 성을 가진 교수님의 이름만 출력 (LIKE 사용)
 
SELECT name 
FROM t_professor 
WHERE name LIKE '김%';

-- 직원 테이블(t_emp)에서 직원이름 (ename) 중에
-- NE 문자열이 포함된 직원만 출력
 
SELECT ename FROM t_emp 
WHERE ename LIKE '%NE%';

-- 직원 테이블(t_emp)에서 직원이름 (ename) 중에
-- 두번째 글자가 'A' 인 사람의 이름(ename)만 출력
 
SELECT ename FROM t_emp 
WHERE ename LIKE '_A%';

---------------------------------
 
-- ORDER BY
-- 직원중 이름에 L 이 들어간 사람의 이름을 사전오름차순으로 출력하기 
--맨 마지막에 입력된다!

SELECT ename FROM t_emp 
WHERE ename LIKE '%L%'
ORDER BY ename DESC;

-- 직원의 이름,직책, 급여를 출력하되
-- 우선은 직책(job) 사전 내림차순으로,
-- 그리고 급여(sal) 오름차순으로 출력
 
SELECT ename, job, sal FROM t_emp 
ORDER BY job DESC, sal;

-- 연습
-- 학생 테이블(t_student) 에서  학생의 이름(name)과 학년(grade)와 키(height)를 출력하세요,
-- 단 학년은 1학년부터 출력하고,  키는 큰사람부터  출력하세요
 
SELECT name, grade, height FROM t_student 
ORDER BY grade ASC, height DESC;



