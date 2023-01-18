--dual은 row 1개짜리 dummy table이다
SELECT 'abcde' FROM dual;

SELECT 100, 200, 100 * 2 FROM dual;

-- 이클립스 단축키 사용
-- Lower case: CTRL+SHIFT+Y
-- Upper case: CTRL+SHIFT+X
 
-- SELECT - 데이터 조회/질의
-- SELECT [컬럼명 또는 표현식] FROM [테이블명, 뷰명]
 
-- ‘모든 컬럼’ 조회  :  * 사용

SELECT * FROM t_emp;

-- 원하는 컬럼만 조회
SELECT empno, ename FROM t_emp;

-- 순서, 개수 무관
SELECT ename, empno, job, job, job FROM t_emp;

-- 표현식 사용하여 출력
SELECT name FROM t_professor;


--명시한 게 컬럼명으로 온다 -> 별명으로 줄 수 있다
SELECT name, '교수님 사랑해요' FROM t_professor;

-- 컬럼 별칭(alias) 사용하여 출력
SELECT studno 학번, name 이름 FROM t_student;

-- ""와 AS는 별명 만들 때 사용한다 쌍따옴표 안의 공백은 된다
SELECT studno "학번 name", name AS 이름 FROM t_student;

SELECT HEIGHT, NAME 
FROM T_STUDENT;

SELECT empno AS 사원번호, ename AS 사원명, job AS 직업 
FROM t_emp;

SELECT deptno AS 부서#, dname AS 부서명, loc AS 위치
FROM t_dept;

-- DISTINCT - 중복값 제거하고 출력
-- SELECT  DISTINCT [컬럼명 또는 표현식] FROM [테이블명, 뷰명] ;
SELECT DISTINCT deptno FROM t_emp;

SELECT DISTINCT deptno1 FROM t_student;
SELECT DISTINCT job FROM t_emp;

-- || : 필드, 문자열 연결 연산자
SELECT name, POSITION FROM t_professor;

SELECT name || '-' || POSITION FROM t_professor;


-- 학생테이블(t_student)를 사용하여
-- 모든 학생들이
-- ‘서진수의 키는 180cm, 몸무게는 55kg 입니다’
-- 와 같은 형식으로 출력되도록 문자를 추가하고,
-- 칼럼 이름은 ‘학생의 키와 몸무게’ 라는 별명으로 출력하세요    
 
SELECT * FROM t_student;
SELECT name || '의 키는' || height || 'cm, 몸무게는' || weight || 'kg입니다' "학생의 키와 몸무게"
FROM t_student;















