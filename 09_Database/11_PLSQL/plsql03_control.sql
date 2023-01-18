

-- PL/SQL 의 제어문   p433
 
-- ───────────────────────────────────────────────
-- 1.조건문 IF ~ END IF
 
-- t_emp 테이블에서 empno, ename, dname 을 출력하세요
-- 단, dname 은 아래와 같이 출력하세요
---  deptno 값이 10 이면 '재무팀'
--   deptno 값이 20 이면 '연구개발팀'
--   deptno 값이 30 이면 '영업팀'
--   deptno 값이 40 이면 'operations' 로 출력하세요
 
DECLARE -- 4개의 변수 선언
    vempno t_emp.empno%TYPE;
    vename t_emp.ename%TYPE;
    vdeptno t_emp.deptno%TYPE;
    vdname VARCHAR2(20) := NULL;
BEGIN
	SELECT empno, ename, deptno
    INTO vempno, vename, vdeptno
    FROM T_EMP
    WHERE empno = 7900;
 
   -- 변수로 하기 오라클은 == 없음 절대 쓰지 말기
	if(vdeptno = 10) THEN
		vdname := '회계팀';
	ELSIF(vdeptno = 20) THEN
	vdname := '연구개발팀';
	ELSIF(vdeptno = 30) THEN
		vdname := '영업팀';
	ELSIF(vdeptno = 40) THEN
		vdname := '운영팀';
	END IF; -- IF 끝내기 꼭 해야함
	DBMS_OUTPUT.PUT_LINE(vempno || ' ' || vename || ' ' || vdeptno || ' ' || vdname);
END;
/

 

--------------------------
-- 'CASE문'과 'CASE식'
-- 'CAST식'

DECLARE
    vempno t_emp.empno%TYPE;
    vename t_emp.ename%TYPE;
    vdeptno t_emp.deptno%TYPE;
    vdname VARCHAR2(20) := NULL;
BEGIN
    SELECT empno, ename, deptno
    INTO vempno, vename, vdeptno
    FROM T_EMP
    WHERE empno = &empno;
 
   	vdname := CASE vdeptno -- CASE 값에 따라 아래에서 수행할 WHEN 문 결정 : case문
   				WHEN 10 THEN '회계팀'
   				WHEN 20 THEN '연구개발팀'
   				WHEN 30 THEN '영업팀'
   				WHEN 40 THEN '운영팀'
   			END;
   		DBMS_OUTPUT.PUT_LINE(vempno || ' ' || vename || ' ' || vdeptno || ' ' || vdname);
END;
/



------------------
-- 'CASE 문' 의 경우
--t_emp 테이블에서 사용자로부터 사원번호를 입력받아
--사원의 empno, ename, sal, deptno, 그리고 '인상후 연봉(up_sal)'을 출력
--
--부서번호가 10번 부서는 현재 연봉의 10% 인상
--부서번호가 20번, 30번 부서는 20% 인상
--부서번호가 30번보타 클 경우 30% 인상
 
DECLARE
    v_empno t_emp.empno%TYPE;
    v_ename t_emp.ename%TYPE;
    v_sal t_emp.sal%TYPE;
    v_deptno t_emp.deptno%TYPE;
    v_up_sal t_emp.sal%TYPE;
BEGIN
    SELECT empno, ename, sal, deptno
    INTO v_empno, v_ename, v_sal, v_deptno
    FROM t_emp
    WHERE empno = &empno;
 
   v_up_sal := CASE  -- 값 없음? 아래 CASE 수행한 결과가 변수에 저장된다
	   WHEN v_deptno = 10 THEN v_sal * 1.1
	   WHEN v_deptno IN (20, 30) THEN v_sal * 1.2
	   WHEN v_deptno > 30 THEN v_sal * 1.3
	   ELSE v_sal
	 END;
	DBMS_OUTPUT.PUT_LINE('사원번호' || ' ' || '이름' || ' ' || '급여' || ' ' || '부서번호' || ' ' || '인상후급여');
	DBMS_OUTPUT.PUT_LINE(v_empno || ' ' || v_ename || ' ' || v_sal || ' ' || v_deptno || ' ' || v_up_sal);
END;
/




-- ───────────────────────────────────────────────
-- 3.반복문
 
-- 기본적인 반복문:  LOOP 사용
-- 0 ~ 5 까지 숫자 출력
DECLARE
    num NUMBER := 0;
BEGIN
 	LOOP -- LOOP  ~~ END LOOP 순환문   EXIT [ 조건 ] 때까지 순환
 		DBMS_OUTPUT.PUT_LINE(num);
 		num := num + 1;
 		EXIT WHEN num > 5; -- EXIT WHEN 조건
 	END LOOP;
END;
/



-- WHILE 반복문
DECLARE
    num NUMBER := 0;
BEGIN
 	WHILE num < 6 LOOP -- WHILE 조건 LOOP, 조건이 참인동안 수행
 		DBMS_OUTPUT.PUT_LINE(num);
 		num := num + 1;
-- 		EXIT WHEN num > 5; -- EXIT WHEN 조건 WHILE문엔 필요없다
 	END LOOP;
END;
/



-- 연습
-- 기본 LOOP 와  WHILE 문을 사용하여 구구단 2단 출력하기
--2 x 1 = 2
--2 x 2 = 4
--2 x 3 = 6
--2 x 4 = 8
--2 x 5 = 10
--2 x 6 = 12
--2 x 7 = 14
--2 x 8 = 16
--2 x 9 = 18
 
 
DECLARE
    num NUMBER := 1;
BEGIN
 	LOOP 
 		DBMS_OUTPUT.PUT_LINE(2 || ' x ' || num || ' = ' || 2*num);
 		num := num + 1;
 		EXIT WHEN num > 9; 
 	END LOOP;
END;
/



DECLARE
    num NUMBER := 1;
   	two NUMBER := 2;
BEGIN
 	WHILE num < 10 LOOP 
 		DBMS_OUTPUT.PUT_LINE(two || ' x ' || num || ' = ' || two*num);
 		num := num + 1;
 	END LOOP;
END;
/


----------------
-- FOR 반복문

-- 0 부터 5까지 1씩 증가하면서 순환. FOR 반복문내 사용하는 인덱스 변수는 DECLARE 하지 않아도 사용 가능!
 
BEGIN
	FOR i IN 0..5 LOOP
		DBMS_OUTPUT.PUT_LINE(i);
	END LOOP;
END;
/


-- 역순
BEGIN
	FOR i IN REVERSE 0..5 LOOP
		DBMS_OUTPUT.PUT_LINE(i);
	END LOOP;
END;
/

SELECT * FROM t_emp;

-- 예제  : For 반본문
-- 사원번호를 입력받아 사원 이름의 글자수 만큼 화면에 * 찍는 문장
 
DECLARE
	v_empno t_emp.empno%TYPE := &eno; -- 입력 받기 위한 치환 변수
	v_ename t_emp.ename%TYPE;
	v_number NUMBER;
	v_char VARCHAR2(100);

BEGIN
	SELECT ename, length(ename) INTO v_ename, v_number
	FROM T_EMP 
	WHERE empno = v_empno; -- 사용자가 입력한 값이 이 쿼리에 반영된다 해당 번호의 이름과 갯수

	FOR i IN 1..v_number LOOP -- 변수값을 넣을 수 있다
		v_char := v_char || '*'; -- 초기화 안시켰는데 에러 안남, 초기화 안된 변수값은 기본적으로 null
		DBMS_OUTPUT.PUT_LINE(v_char);
	END LOOP;
	
END;
/



SELECT NULL + 100 FROM dual; -- NULL과 연산하면 NULL 
SELECT NULL || '**' FROM dual; -- 문자열은 가능




-----------------------------
-- continue

DECLARE
	total NUMBER := 0;
BEGIN
	FOR i IN 1..10 LOOP
		CONTINUE WHEN i > 5; -- 5보다 크면 아래꺼 수행 안한다
		total := total + 1;
		DBMS_OUTPUT.PUT_LINE('total : ' || total);
	END LOOP;
END;
/





