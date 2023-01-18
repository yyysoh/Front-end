
--일회성 쿼리문이다
--데이터베이스에 저장되지 않는다 이거 한번만 가동되는 것 (오라클 저장 안됨 재사용 안된다 또 불러올 수가 없음 / 이거는 마지막 실행된 거만 다시 실행할 수 있는거고)
--반복적인 쿼리문을 함수처럼 여러번 굳이 할 필요 없이 할 것


-- 지금까지의 PL/SQL 블록은 '익명블록'
-- 이름이 없기에 '저장' 이 안되고, 다시 재사용도 불가.
--
-- 자주 사용되는 PL/SQL 블록에 이름을 지정하고 생성해서 저장해두었다가
-- 필요할때 호출해서 사용 가능.
-- 이를 서브프로그램이라 하는데 다음과 같은 것들이 있다
--
--  Procedure
--  Function
--  Package
--  TRIGGER
 
-- ─────────────────────────────────────────────────────────────────────
-- 1. PROCEDURE (프로시저)
 
-- 현재 사용자의 Stored procedure 목록 보기
 



SELECT object_name
FROM user_procedures
WHERE object_type = 'PROCEDURE';

-- dbeaver 에서는 procedure 생성은 가능하나 실행은 안됨.

-- 부서번호가 20번인 사람들의 job 을 'CLERK'  로 변경하는 프로시져
CREATE OR REPLACE PROCEDURE update_20
IS -- AS 도 가능!
BEGIN 
	UPDATE t_emp
	SET job = 'CLERK'
	WHERE deptno = 20;
END;
/

EXECUTE update_20;  -- dbeaver 에서 실행 불가.

SELECT ename, job, deptno FROM t_emp WHERE deptno = 20;

-- 삭제
DROP PROCEDURE update_20;


-- -------------------------------------------------
-- Procedure, Function 등에선 DECLARE 를 명시하지 않는다!
-- DECLARE 로 명시했던것들은 IS 와 BEGIN 사이에 기술
CREATE OR REPLACE PROCEDURE update_20  
IS 
	v_job t_emp.job%TYPE := 'CLERK';
	v_deptno t_emp.deptno%TYPE := 20;
BEGIN 
	UPDATE t_emp
	SET job = v_job
	WHERE deptno = v_deptno;
END;
/

EXEC update_20;

SELECT ename, job, deptno FROM t_emp WHERE deptno = 20;

-- 후에 rollback 하면 원상복귀




-- 학년의 이름과 학년을 출력하는 procedure
CREATE OR REPLACE PROCEDURE print_student
IS
	CURSOR c_student 
	IS 
		SELECT name, grade FROM T_STUDENT 
		ORDER BY grade DESC;
BEGIN 
	FOR r_student IN c_student
	LOOP
		DBMS_OUTPUT.PUT_LINE(r_student.name || ':' || r_student.grade);
	END LOOP;
	
END;
/




-- -------------------------------------------------
-- 파라미터 Parameter
-- 프로시져를 실행할때 호출환경과 프로시저 간에 값을 주고 받을때 사용되는 매개변수(parameter)
-- 다음 3가지 모드에 따라 역할이 다르게 수행됨.
--  1. IN 모드 : (디폴트)  서브프로그램에 전달됨,  형식 파라미터가 상수로 동작
--  2. OUT 모드 : 값이 호출환경에 리턴됨 .  초기화 되지 않은 변수 
--  3. INOUT 모드 : 서브프로그램에 전달됨 + 값이 호출환경에 리턴됨.  초기화된 변수
 
 

-- 사용자로부터 값을 입력받아 급여를 인상하는 프로시저
 
-- 우선 변경전 내용 조회
SELECT empno, ename, sal FROM t_emp WHERE empno=7902;
-- 변경전 sal 값은 3000 임
 
 
CREATE OR REPLACE PROCEDURE up_sal
(v_empno IN t_emp.empno%TYPE) -- 매개변수, 입력값을 저장할 변수 (IN 모드)
IS 
BEGIN 
	UPDATE t_emp SET sal = 5000
	WHERE empno = v_empno; -- 입력받은 empno의 sal를 5000으로 변경
END;
/

exec up_sal(7902); -- 매개변수 넘기기. v_empno로 (v_empno IN t_emp.empno%TYPE)

SELECT empno, ename, sal FROM t_emp WHERE empno=7902;




-- out 모드 파라미터 사용
-- 해당 프로시저를 호출한 곳으로 out 함
CREATE OR REPLACE PROCEDURE info_prof(
-- 매개변수 여러 개
	v_profno IN t_professor.profno%TYPE,
	v_name OUT t_professor.name%TYPE,
	v_pay OUT t_professor.pay%TYPE
)
IS -- 블록 정의할 것
BEGIN 
	SELECT name, pay INTO v_name, v_pay -- 이 변수는 OUT 모드
	FROM t_professor 
	WHERE profno = v_profno; -- IN 모드로 받았던 것. 교수 번호를 입력받아 이름, 급여 출력해서 변수에 담기
 END;
/

DECLARE
	v_name t_professor.name%TYPE;
	v_pay t_professor.pay%TYPE;
BEGIN -- 선언 후 호출
	info_prof(1001, v_name, v_pay); -- info_prof은 매개변수 세개였음
	-- 1001 받아서 넘어오고 v_name, v_pay는 out 모드에 담겨져서 아래에 호출하는 쪽에 담긴다. 프로시저의 결과를 이런 식으로 
	DBMS_OUTPUT.PUT_LINE(v_name || '교수의 급여는 ' || v_pay || '입니다');
END;
/

-- 반복되는 작업은 프로시저나 function으로 만들어야해서 필요한 것이긴 함 근데 문법이 참.. 더럽다!




-- 임의의 순서로 호출도 가능하다

-- 매개변수는 기본적으로 선언된 순서대로 호출하여야 하나
-- 임의순서로 호출하려면 아래와 같이 하면 된다.
 
DECLARE
    v_name t_professor.name%TYPE;
    v_pay t_professor.pay%TYPE;
BEGIN
 	info_prof( -- 아래와 같이 하면 매개변수를 순서대로 명시 안해도 된다
 		 v_name => v_name, 
 		 v_profno => 1001, 
 		 v_pay => v_pay     -- 얜 또 화살표야
 	);
    DBMS_OUTPUT.PUT_LINE('이름 ' || v_name);
    DBMS_OUTPUT.PUT_LINE('급여 ' || v_pay);
END;
/
 
 

/* 생성된 프로시져 내용 확인하기
SQL> DESC USER_SOURCE;
 Name                                      Null?    Type
 ----------------------------------------- -------- ----------------------------
 NAME                                               VARCHAR2(30)
 TYPE                                               VARCHAR2(12)
 LINE                                               NUMBER
 TEXT                                               VARCHAR2(4000)
 
SQL> SELECT text FROM user_source WHERE name = 'INFO_PROF';
*/

-- 프로시저가 text로 저장된다. user_source에서 확인이 가능하다


------------------------------------

-- 2. FUNCTION (내장함수)
-- 기본적인 문법과 특징은 프로시저와 비슷
-- 차이점!
--  함수는 (무조건) 정해진 작업 수행후 값을 돌려준다.  ( 값 리턴한다! 프로시저와의 차이점! )
-- CREATE FUNCTION / DROP FUNCTION / ALTER FUNCTION 으로 다룸
-- 에러 발생시는 SHOW ERROR 명령으로 확인 가능
 
-- 부서 번호를 입력 받아 최고 급여액을 출력하는 함수
 
CREATE OR REPLACE FUNCTION s_max_sal
(s_deptno t_emp.deptno%TYPE) -- TYPE만 명시하면 된다
RETURN NUMBER -- 리턴 타입 명시
IS 
	max_sal t_emp.sal%TYPE;
BEGIN 
	SELECT max(sal) INTO max_sal
	FROM t_emp
	WHERE deptno = s_deptno;
	RETURN max_sal;  -- 위에서 명시한 RETURN 타입명시
END;
/

select s_max_sal(10) from dual; -- 단일행 함수를 실행시킨 것이다

select distinct deptno from t_emp;

select distinct deptno, s_max_sal(deptno)  from t_emp; -- 얘도 나온다!






