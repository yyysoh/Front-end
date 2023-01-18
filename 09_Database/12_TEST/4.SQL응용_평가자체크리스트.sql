-- 다음 요구사항의 procedure 를 작성하세요

-- t_emp2 테이블의 사원들중 특정 직위(post) 의 사원들의 급여(pay) 의
-- 인상예상분을 출력하는 procedure 를 작성합니다

-- procedure명: inc_pay
-- 입력: (직위, 인상분) 
--     인상분은 0.0 이상. ex: 0.1 이면 10% 인상
-- 출력내용: "이름", "직위", "인상후급여" 

-- 실행 예)
-- SQL> EXEC inc_pay('과장', 0.15);
-- 천만득 과장 64400000
-- 유관순 과장 58650000
-- 최일도 과장 57500000
-- 이윤나 과장 56350000

-- ↓ procedure 를 작성하세요

SELECT * FROM t_emp2;

CREATE OR REPLACE PROCEDURE inc_pay (
	v_post IN t_emp2.post%TYPE,
	up_pay IN NUMBER
)
IS 
	CURSOR c_emp
	IS 
		SELECT name, post, pay * (1 + up_pay) "인상분"
		FROM T_EMP2 
		WHERE post = v_post;
BEGIN 
	FOR last_emp IN c_emp LOOP 
		DBMS_OUTPUT.PUT_LINE(last_emp.name || ' ' || last_emp.post || ' ' || last_emp.인상분);
	END LOOP;
END;
/






























-- 인상 예상분 출력!

CREATE OR REPLACE PROCEDURE inc_pay(
	v_post IN t_emp2.post%TYPE,
	v_inc IN NUMBER
)
IS -- IS 나 AS 
	CURSOR c_emp
	IS 
		SELECT name, post, pay * (1 + v_inc) "인상분"
		FROM T_EMP2 
		WHERE post = v_post
		ORDER BY "인상분" DESC;
		
BEGIN
	FOR r_emp IN c_emp
	LOOP
		DBMS_OUTPUT.PUT_LINE(r_emp.name || ' ' || r_emp.post || ' ' || r_emp.인상분);
	END LOOP;
END;
/




SELECT * FROM t_emp2;












------------



SELECT * FROM t_emp2;

CREATE OR REPLACE PROCEDURE inc_pay(
  v_post IN t_emp2.post%TYPE
--  up_pay IN NUMBER,
)
IS
	CURSOR testPUT_LINE(r_student.name || ' : ' ||  r.student.grade);
    END LOOP;
	IS 	
		SELECT name INTO v_name
		FROM T_EMP2
		WHERE post = v_post;
BEGIN
	FOR up_test IN test
	LOOP
		dbms_output.put_line(up_test.name);
	END LOOP;
END;
/

EXEC inc_pay('과장'); -- 매개변수 넘기기

SELECT name FROM t_emp2 WHERE post = '과장' AND  pay = 56000000;



CREATE OR REPLACE PROCEDURE inc_pay(
  	v_post IN t_emp2.post%TYPE
)
IS 
	v_name t_emp2.name%ROWTYPE;
BEGIN
	FOR up_test IN 		
	(SELECT name 
		FROM T_EMP2
		WHERE post = v_post)
	LOOP
	DBMS_OUTPUT.PUT_LINE(up_test.name);			
	END LOOP;
END;
/

EXEC inc_pay('과장'); 











