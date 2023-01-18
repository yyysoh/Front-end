


--console.log(1 + '1') -- 문자열 '11'

-- 묵시적 형변환 (자동 형변환)
SELECT 1+ '1' FROM dual;

SELECT 1+ to_number('1') FROM dual;

-- SELECT 1 + 'A' FROM dual; -- 에러가 뜬다 문자 A를 숫자로 변환시키려고 하는 것이기에


-- 묵시적 형변환은 편한것 같지만,
-- 튜닝에서 뜻하지 않은 성능저하를 가져올수 있다.
 
 
-- 고로 명시적 형변환을 하는 게 좋다
-- TO_CHAR 함수 (날짜 -> 문자)

SELECT SYSDATE,
	TO_CHAR(SYSDATE, 'YYYY') AS 연도4자리,
	TO_CHAR(SYSDATE, 'YY') AS 연도2자리,
	TO_CHAR(SYSDATE, 'YEAR') AS 연도영문
FROM dual;

SELECT 
	TO_CHAR(SYSDATE, 'MM') AS 월2자리,
	TO_CHAR(SYSDATE, 'MON') AS 월3자리,
	TO_CHAR(SYSDATE, 'MONTH') AS 월전체,
	TO_CHAR(SYSDATE, 'month') AS 월전체, -- 알아서 포맷팅되어서 나온다
	TO_CHAR(SYSDATE, 'Month') AS 월전체,
	TO_CHAR(SYSDATE, 'Month', 'NLS_DATE_LANGUAGE=ENGLISH') AS 월전체
FROM dual;	

SELECT 
	TO_CHAR(SYSDATE, 'DD') 일숫자2자리,
	TO_CHAR(SYSDATE, 'DDTH') 몇번째날,
	TO_CHAR(SYSDATE, 'DAY') 요일,
	TO_CHAR(SYSDATE, 'DY') 요일앞자리
FROM dual;	

SELECT
    TO_CHAR(SYSDATE, 'HH24') 시24hr,
    TO_CHAR(SYSDATE, 'HH')  시12hr,
    TO_CHAR(SYSDATE, 'MI') 분,
    TO_CHAR(SYSDATE, 'SS') 초
FROM dual;
 

-- #4301
SELECT SYSDATE, TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS 날짜 -- 문자열로 나온다(TO_CHAR)
FROM dual;

SELECT SYSDATE, TO_CHAR(SYSDATE, 'YYYY"년"MM"월"DD"일" HH24"시"MI"분"SS"초"') AS 날짜 -- 이런 데이터포맷은 없다고 뜬다 (에러) -> ESCAPE 해야 날짜 포맷팅이 뜬다 -> 쌍따옴표 붙이기
FROM dual;

-- #4302
SELECT name, TO_CHAR(birthday, 'YYYY-MM-DD') AS 생일
FROM t_student
WHERE TO_CHAR(birthday, 'MM') = 03;


-- ################################################3
-- TO_CHAR() 함수  - 숫자를 문자로 변환
 
SELECT 1234,
		TO_CHAR(1234),
		TO_CHAR(1234, '99999') "9하나당 1자리", -- 5자리에 맞혀서 나왔다
		TO_CHAR(1234, '099999') "빈자리 0으로", -- 빈자리는 0으로 나온다
		TO_CHAR(1234, '$9999') "빈자리 $으로", -- 빈자리는 0으로 나온다
		TO_CHAR(1234.1278, '9999.99') "소수점이하 두자리", -- 반올림되어 나온다
		TO_char(1234, '99,999') "천단위 구분기호" -- 반올림되어 나온다
FROM dual;


-- #4303
-- t_professor 테이블에서 101번 학과 교수들의 이름(name), 연봉(pay) 를 출력하세요,
-- 단, 연봉은 (pay * 12) + bonus로 계산하고 천단위 구분기호로 표시하세요.
-- nvl / to_char() 사용
 
SELECT name, to_char(nvl2(bonus, pay * 12 + bonus, pay * 12), '99,999') AS 연봉
FROM T_PROFESSOR
WHERE deptno = 101;


-- ########################################################
-- to_number() 함수 :  문자 -> 숫자로 변환

SELECT '123.44', to_number('123.44') FROM dual


-- ####################################################
-- to_date() 함수 : 문자 -> 날짜로 변환

SELECT
	TO_DATE('2022-08-31', 'YYYY-MM-DD') "to-date"
FROM dual;


--#4304
--t_professor 테이블에서 2000년 이전에 입사한 교수명과 입사일,
--현재 연봉과 10% 인상 후 연봉을 출력하세요.
--연봉은 보너스(bonus)를 제외한 pay * 12 로 계산하고
--연봉과 인상후 연봉은 천단위 구분 기호를 추가하여 출력하세요
 
SELECT 
	NAME , 
	TO_CHAR(HIREDATE , 'YYYY-MM-DD') AS 입사일, 
	TO_CHAR((pay*12), '99,999')  AS 연봉, 
	TO_CHAR(((pay*12)) * 1.1, '99,999')  AS 인상후
FROM T_PROFESSOR 
WHERE to_char(hiredate, 'YYYY') < '2000';
;











