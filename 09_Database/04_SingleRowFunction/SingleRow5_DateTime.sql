
-- oracle은 연산이 하루 단위로 되어 있어서 계산하기 쉽다
SELECT 	
	SYSDATE "오늘"
	, SYSDATE + 1 "내일"	
	, SYSDATE - 2 "그저께"	
	, SYSDATE + 1/24 "1시간 후"	
FROM dual;


-- 일 차이 계산
SELECT 	
	SYSDATE "오늘"
	, SYSDATE - TO_DATE('2022-07-26') "수업 시작한 지"
FROM dual;

-- 개월 수 차이 : MONTHS_BETWEEN()
-- 난 자동 변환이 자동으로 됨. 안되면 포맷팅해야한다
SELECT 
	MONTHS_BETWEEN('2012-03-01', '2012-01-01') "양수" -- 왼쪽이 큰 값이면 양수가 나온다
	, MONTHS_BETWEEN('2012-01-01', '2012-03-01') "음수" -- 오른쪽이 큰 값이면 음수가 나온다
	, MONTHS_BETWEEN('2012-02-29', '2012-02-01') "2/29-2/01" -- 28일차가 계산이 된다
	, MONTHS_BETWEEN('2012-04-30', '2012-04-01') "4/30-4/01" -- 29일차가 계산이 된다
FROM dual;


-- #4501
-- professor 테이블에서 오늘(SYSDATE)을 기준으로
-- 근속연, 근속개월, 근속일를 계산해서 출력
-- 출력양식은 YYYY-MM-DD 로
-- 근속월, 근속일은 반올림 하여 소수점 1자리까지 표현
 
SELECT * FROM t_professor;

SELECT name AS 이름
	, TO_CHAR(SYSDATE, 'YYYY-MM-DD') AS 오늘
	, TO_CHAR(HIREDATE, 'YYYY-MM-DD') AS 입사일
	, TRUNC(MONTHS_BETWEEN(SYSDATE, HIREDATE) / 12) AS 근속연수 
	, ROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE), 1) 근속개월 
    , ROUND(SYSDATE - HIREDATE, 1) 근속일 
FROM t_professor;



SELECT 
	name "이름"
	, sysdate "오늘"
	, to_char(hiredate, 'yyyy-mm-dd') "입사일"
	, to_char(sysdate, 'yyyy') - to_char(hiredate, 'yyyy') "근속연수"
	, round(MONTHS_BETWEEN(sysdate, hiredate), 1) "근속개월"
	, round((sysdate - hiredate), 1) "근속일"
FROM t_professor










