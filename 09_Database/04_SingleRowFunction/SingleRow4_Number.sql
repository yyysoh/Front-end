
-- ROUND()
SELECT 
	'ROUND',
	ROUND(12.34) "(12.34)", -- 소수점 1자리에서 반올림
	ROUND(12.536) "(12.536)",    
    ROUND(12.536, 2) "(12.536, 2)", -- 소수점 3자리에서 반올림, 2자리까지 유지된다
    ROUND(16.345, -1) "(16.345, -1)" -- 1의 자리에서 반올림 -> 20, 음수면 소수점 앞자리에서 반올림
FROM dual;


-- TRUNC() 함수
SELECT
    'TRUNC',
    TRUNC(12.345) "(12.345)",         -- 소수점 자름 (디폴트)
    TRUNC(12.345, 2) "(12.345, 2)",   -- 소수점 3자리부터 자름
    TRUNC(12.345, -1) "(12.345, -1)"  -- 1의 자리부터 자름 -> 10이 나오네
FROM dual;
 

-- ROUND() TRUNC() CEIL() FLOOR() 함수 비교
 
SELECT
    '12.5'  "12.5",
    ROUND(12.5) "ROUND", -- 13
    TRUNC(12.5) "TRUNC", -- 12
    CEIL(12.5) "CEIL", -- 13 큰 것 중 작은 것
    FLOOR(12.5) "FLOOR" -- 12 작은 것 중 큰 것
FROM
    dual;

   
SELECT
    '-12.5'  "-12.5",
    ROUND(-12.5)    "ROUND", -- -13
    TRUNC(-12.5) "TRUNC", -- -12
    CEIL(-12.5) "CEIL", -- -12
    FLOOR(-12.5) "FLOOR" -- -13
FROM
    dual;
 

-- 오라클은 % 연산자 없다
-- MOD() : 나머지 연산 함수
SELECT 
	MOD(12, 10),
	MOD(12.6, 4.1)
FROM dual;


-- POWER() : 제곱
-- 앞 콤마(,) : 코드 유지보수하기 좋다 오래된 언어일수록 마지막에 , 안되는 게 많다
SELECT 
	POWER(3, 2)
	, POWER(-3, 3)
	, POWER(10, -2)
	, POWER(2, 1/2)
FROM dual;


-- #################################################
-- 조건에 따라 쿼리문이 바꿔야할 때가 있다 그럴 때마다 조립해야 한다
-- 가변적인 조건을 위해 where 처음에 
-- 문자열 넣었다 뺏다 쉽지 않으므로 1 = 1 이것을 한다

SELECT * 
FROM t_student 
WHERE 
	grade = 1 AND height >= 170 AND weight <= 80
	;

SELECT * 
FROM t_student 
WHERE 
	1 = 1
	AND grade = 1
	AND weight > 60
	AND height < 190
	;

































