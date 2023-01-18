

-- 여러 개의 행이 select 되기 위해서 cursor가 제공된다

-- 참조: https://www.oracletutorial.com/plsql-tutorial/plsql-cursor-for-loop/
 
-- Cursor
-- SELECT 문으로 읽어들인 레코드를 cursor에 담아
-- FOR LOOP 등에서 사용 가능.
 
-- 기본구문]
-- FOR record IN cursor_name
-- LOOP
--    처리 구문들..;
-- END LOOP;

SELECT name, grade FROM T_STUDENT 
ORDER BY grade DESC;
 

BEGIN -- for의 변수는 declare에서 따로 선언하지 않아도 된다
	FOR r_student IN (
		SELECT name, grade FROM T_STUDENT 
		ORDER BY grade DESC -- 20명의 정보를 담은 게 r_student 꺼내려면 loop
	)
	LOOP -- CURSOR 객체에 대해서 LOOP 가 돌아간다
		DBMS_OUTPUT.PUT_LINE(r.student.name || ' : ' || r.student.grade);
	END LOOP;
END;
/
 
-- cursor을 선언할 수 있다
 
DECLARE
	CURSOR c_student  -- c_student 라는 이름의 cursor 정의
	IS 
		SELECT name, grade FROM t_student 
		ORDER BY grade DESC;
BEGIN
	FOR r_student IN c_student -- c_student 하나하나의 record를 가져와서 담고 LOOP 돌린다
		LOOP -- CURSOR 객체에 대해서 LOOP 가 돌아간다
			DBMS_OUTPUT.PUT_LINE(r_student.name || ' : ' || r_student.grade);
		END LOOP;
END;
/






