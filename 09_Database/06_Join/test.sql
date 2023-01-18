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


SELECT * FROM T_EMP2;


CREATE OF REPLACE PROCEDURE inc_pay(
	v_name t_emp2.name%TYPE;
--	v_post t_emp2.post%TYPE := '&post';
--	up_pay NUMBER(10) := '&up_pay';
	v_post OUT t_emp2.name%TYPE;
--	up_pay OUT NUMBER(10);
);
IS
BEGIN
	SELECT name, post, pay INTO v_name, v_post, v_pay
	FROM t_emp2;
    WHERE post = v_post;
--	WHILE up_pay > 0 LOOP
	DBMS_OUTOUT.PUT_LINE(v_post);
		
--	END LOOP

END;
/



CREATE OF REPLACE PROCEDURE inc_pay(
	v_name t_emp2.name%TYPE;
	v_post OUT t_emp2.name%TYPE;
)
IS
BEGIN
	SELECT name, post INTO v_name, v_post
	FROM t_emp2;
    WHERE post = v_post;
	DBMS_OUTOUT.PUT_LINE(v_post);
END;
/


CREATE OR REPLACE PROCEDURE inc_pay(
	v_name OUT t_professor.name%TYPE,
	v_post IN t_professor.post%TYPE,
	v_pay OUT t_professor.pay%TYPE
)
IS -- 블록 정의할 것
BEGIN 
	SELECT name, pay INTO v_name, v_pay -- 이 변수는 OUT 모드
	FROM t_emp2 
	WHERE post = v_post; 
 END;
/

DECLARE
	v_name t_professor.name%TYPE;
	v_pay t_professor.pay%TYPE;
BEGIN -- 선언 후 호출
	info_prof(v_name, '부장', v_pay);
	DBMS_OUTPUT.PUT_LINE(v_name || ' ' || v_pay);
END;
/

SELECT * FROM t_emp2;


DROP PROCEDURE inc_pay;










