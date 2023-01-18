
-- ###########################################################
-- (1) INITCAP 함수
-- 첫글자만 대문자로 출력하고 나머지는 전부 소문자로 출력하는 함수
-- 문법: INITCAP (문자열 또는 칼럼명)

SELECT 'pretty girl', INITCAP('pretty girl')
FROM dual;

-- #4102
SELECT INITCAP(id) "ID"
FROM t_student WHERE deptno1 = 201;
--각각의 행에 대해 결과가 나오는게 단일 행이라고 부른다


--###########################################################
-- (2) LOWER 함수
-- 입력되는 값을 전부 소문자로 변경하여 출력
-- 문법: LOWER(문자열 또는 칼럼명)
 
-- (3) UPPER 함수
-- 문법: UPPER(문자열 또는 칼럼명)
-- 입력되는 값을 전부 대문자로 변경하여 출력
 
-- #4103
-- t_t_student 테이블 : 1전공(deptno1) 이 201번인 학생들의
-- ID를 이름과 함께 소문자, 대문자로 출력 / upper() 사용
 
SELECT lower(id), upper(id)
FROM t_student
WHERE deptno1 = 201;



-- ###########################################################
-- (4) LENGTH / LENGTHB 함수
-- 입력된 문자열의 길이(바이트수)를 계산해주는 함수
 
-- 문법: LENGTH(문자열 또는 컬럼명) / LENGTHB(문자열 또는 컬럼명)
 
-- #4104
-- t_student 테이블 :
-- ID가 9글자 이상인 학생들의
-- 이름과 ID 와 글자수 출력 / length() 사용
 
SELECT name 이름, ID, length(id) 글자수
FROM t_student
WHERE LENGTH(id) >= 9; --단일행 함수는 조건절에서 사용이 가능하다

-- #4015
SELECT name 이름, LENGTH(name) 문자개수, LENGTHB(name) 바이트 -- 한글자 당 3바이트씩, 인코딩 세팅값에 따라 바이트 수가 다르다 utf-8로 쓰기에 3바이트로 나온다
FROM t_student 
WHERE deptno1 = 201;



-- ###########################################################
-- (5) CONCAT 함수 ( || 연산자와 동일 )
-- 문법 : CONCAT ('문자열1', '문자열2')
 
-- #4106
-- t_professor 테이블 :  101번 학과 (deptno) 의 교수들의 이름(name)과 직급(position)을
-- 하나의 컬럼으로 출력하세요.  컬럼명은 "교수님명단" / concat() 사용
-- 합쳐져서 하나의 컬럼으로 나온다
 SELECT concat(name, POSITION) "교수님명단", name || POSITION, concat('a', 'b', 'c') -- concat은 매개변수 2개만 받는다 3개는 못받는다 mysql은 여러개 받는다 
 FROM t_professor 
 WHERE deptno = 101;



-- s###########################################################
-- (6) SUBSTR 함수
-- 구문: SUBSTR( ‘문자열’ 또는 컬럼명,   시작위치,  추출할 글자수 )
-- 문자열에서 특정 길이의 문자를 추출할 때 사용하는 함수
-- 시작위치, 음수 가능.
-- ★ 시작 인덱스가 1부터 시작한다 (오라클의 문자열 인덱스는 1부터 시작)
 
-- SUBSTR 사용예
SELECT substr('ABCDE', 2, 3) FROM dual;
SELECT substr('ABCDE', 20, 3) FROM dual; -- 에러가 아닌 null이 뜬다 
SELECT substr('ABCDE', 4, 2) FROM dual; 
SELECT substr('ABCDE', -2, 2) FROM dual; -- 음수 인덱스 지원한다

-- #4107 단일함수이기에 조건절에서도 쓸 수 있다
SELECT name, substr(jumin, 1, 6) "생년월일"
FROM t_student WHERE deptno1 = 101;

-- 실습
-- #4108
SELECT * FROM T_STUDENT;

SELECT name, substr(jumin, 1, 6) AS birthday
FROM t_student
WHERE substr(jumin, 3, 2) = '08';

-- #4109
SELECT name, jumin
FROM t_student
WHERE grade = 4 AND substr(jumin, 7, 1) = '2';



--###########################################################
-- (8) INSTR 함수
-- 주어진 문자열이나 칼럼에서 특정 글자의 위치를 찾아주는 함수
 
-- 문법: INSTR('문자열', 찾는문자열, 시작위치, 몇번째등장?);
 
-- INSTR 사용예
 
SELECT INSTR('A*B*C*', '*', 1, 1) FROM dual; -- 2
SELECT INSTR('A*B*C*', '*', 1, 2) FROM dual; -- 4
SELECT INSTR('A*B*C*', '*', 3, 2) FROM dual; -- 6
SELECT INSTR('A*B*C*', '*', -4, 1) FROM dual; -- 2 음수위치부터 찾기. 시작하면 음의 방향으로 검색 진행
SELECT INSTR('A*B*C*', '*', -4, 2) FROM dual; -- NULL이 아닌 0을 리턴한다 c언어스러운
SELECT INSTR('A*B*C*', '*', -2, 2) FROM dual; -- 2
SELECT INSTR('A*B*C*', '*') FROM dual; -- 뒤에 없어도 DEFAULT 값으로 1, 1 나온다


-- #4110
SELECT name, INSTR(tel, ')', 1, 1) "위치"
FROM t_student
WHERE deptno1 = 101;

-- [실습] #4111
-- t_student 테이블 : 1전공이 101 인 학생의 이름과 전화번호, 지역번호를 출력하세요.
-- 지역번호는 숫자만!  / substr(), instr() 사용
 SELECT name, tel, substr(tel, 1, instr(tel, ')', 1, 1) -1) AS 지역번호
 FROM t_student 
 WHERE deptno1 = 101;



-- ###########################################################
-- (9) LPAD 함수
-- (10) RPAD 함수
 
-- 문법: LPAD('문자열', 자릿수, 채움문자)
 
-- LPAD/RPAD 사용예
 
SELECT 'abcd', 
		LPAD('abcd', 10, '#-'), -- 왼쪽에 #-이 채워진다
		RPAD('abcd', 10, '#-') -- 오른쪽에 #-이 채워진다
FROM dual;


-- #4112
SELECT id, LPAD(id, 10, '$') LPAD
FROM t_student 
WHERE deptno1 = 101;
-- 지금은 좌측정렬로 되어 있는데 실제 출력되는 콘솔에서 우측정렬처럼 보이게 하고 싶으면 PADDING 문자를 빈 문자열로 주면 된다


-- #4113 한글은 2글자(2칸)로 인식한다(영어보다 폭이 더 크니까) C언어의 흔적
SELECT LPAD(dname, 10, 1234567890) AS LPAD연습
FROM t_dept2;


-- ###########################################################
-- LTRIM() 함수 RTRIM() 함수
 
-- LTRIM/RTRIM/TRIM 사용예 
 
SELECT 
	LTRIM('      슈퍼슈퍼슈가맨') AS LTRIM, -- 좌측 공백을 없애준다 (좌측공백만 사라짐 오른쪽은 살아있다)
	RTRIM('슈퍼슈퍼슈가맨      ') AS RTRIM, -- 우측 공백을 없애준다 (우측공백만 사라짐 왼쪽은 살아있다)
	TRIM('  슈퍼슈퍼슈가맨  ') AS TRIM 
FROM dual;

-- 두번째 매개변수에 넣어 특정 문자열을 지울 수 있다
SELECT 
	LTRIM('슈퍼슈퍼슈가맨', '슈퍼') AS LTRIM -- 왼쪽의 슈퍼를 제거한다
FROM dual;

-- #4117
SELECT RTRIM(dname, '부') AS RTRIM예제
FROM t_dept2;



-- ###########################################################
-- REPLACE() 함수
-- 문법: REPLACE('문자열', '문자1', '문자2');
-- ‘문자열’ 에서 ‘문자1’ 이 있으면 ‘문자2’ 로 치환.
 
-- REPLACE 사용예

SELECT REPLACE('슈퍼맨 슈퍼걸', '슈퍼', '파워') AS REPLACE예제
FROM dual;

-- 공백 제거 (문자열 안의 공백을 제거, trim은 좌우 공백 제거)
SELECT 'ab cd ef',
	REPLACE('ab cd ef', ' ', '')
FROM dual;



-- #4118
-- t_student 테이블에서 102번 학과(deptno1) 의 학생들의 이름을 출력하되
-- 성 부분은 ‘#’  으로 표시되게 출력하세요 / replace() , substr()사용
 SELECT REPLACE(name, substr(name, 1, 1), '#') AS 학생
 FROM t_student
 WHERE deptno1 = 102;

SELECT'#' || substr('우영우', 2)
 

-- #4121
SELECT name, tel, REPLACE(tel, substr(tel, instr(tel, ')') + 1, 3), '###') AS 전화번호
FROM t_student
WHERE deptno1 = 102;









