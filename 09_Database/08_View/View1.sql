

-- 커넥션 여러개 만들 수 있음 system 으로 생성

-- view

-- 특정 계정이 view 생성 가능한지 권한 확인
-- ★SYSTEM 계정으로 확인
SELECT PRIVILEGE  -- 해피함 ♡♡♡
FROM DBA_SYS_PRIVS
WHERE GRANTEE = 'SCOTT726'
;




-- #8101)
-- t_professor 테이블의 profno, name, email, hpage 칼럼만 
-- 사용하는 view를 생성하세요 view 의 이름은 v_prof로 하세요

-- 이 서브쿼리 내용으로 뷰를 생성하겠다
-- 이제 v_prof 이것은 테이블처럼 동작한다
-- SQL Error [955] [42000]: ORA-00955: name is already used by an existing object
-- OR REPLACE VIEW : 기존에 있었으면 덮어씌기 한다
CREATE OR REPLACE  VIEW v_prof
AS 
SELECT profno, name, email, hpage
FROM t_professor;

-- 실제로 물리적으로 테이블이 존재하는 것은 아니다
SELECT * FROM v_prof;



-- view 생성 시 별도의 컬럼 이름을
CREATE OR REPLACE VIEW v_prof(pfno, nm, em, hp) -- 내가 지정한 컬럼 이름이 나온다
AS 
SELECT profno, name, email, hpage
FROM t_professor;

SELECT * FROM v_prof;

SELECT tname FROM tab;
--테이블과 같이 어깨를 견주어 나온다


-- 어떤 select문도 view로 만들 수 있다
-- 특정 테이블이 외부로 노출되는 걸 꺼릴 때 view를 만들고 자주 사용하는 쿼리문이 드럽게 길 때
-- 자주 사용하는 쿼리를 view로 정의하면 편리하게 쓸 수 있다


--#8102)  예제
--t_professor, t_department 테이블을 join 하여
--교수번호와 교수이름과 소속학과 이름을 조회하는 view 를 생성하세요.  
--(이름: v_prof_dept)
 

SELECT * FROM t_professor;
SELECT * FROM t_department;

CREATE OR REPLACE VIEW v_prof_dept
AS 
SELECT p.profno "교수번호", p.name "교수이름", d.dname "소속학과명"
FROM t_professor p, t_department d
WHERE p.profno = d.deptno;



-- 인라인뷰
-- View 는 한번 만들어 놓으면 계속 사용할수 있습니다.
-- 그러나 1회용으로만 사용할 경우는 FROM 절의 서브쿼리 형태로 만들수 있습니다.
-- 이러한 뷰를 Inline View 라 합니다.
 
--#8103) 예제
-- t_student, t_department 테이블 :
-- 학과별로 학생들의 최대키와 최대몸무게, 학과 이름을 출력하세요
 
SELECT deptno1, MAX(height) max_height, MAX(weight) max_weight
FROM t_student
GROUP BY deptno1
;


SELECT
	d.dname "학과명",
	s.max_height "최대키",
	s.max_weight "최대몸무게"
FROM (
	SELECT deptno1, MAX(height) max_height, MAX(weight) max_weight
	FROM t_student
	GROUP BY deptno1
) s, t_department d
WHERE s.deptno1 = d.deptno
;

-- 도전: 위 쿼리를 스칼라 서브쿼리로 만든다면??




