

-- 제약조건 (constraint)

SELECT * FROM t_dept2;

-- #9001
-- 테이블 생성 시 동시에 생성하기
DROP TABLE t_emp4 CASCADE CONSTRAINT purge; 

CREATE TABLE t_emp4 (
	NO number(4) PRIMARY KEY 
	, name varchar2(10) NOT NULL
	, jumin varchar2(13) NOT NULL UNIQUE -- 제약조건 여러개 설정 가능하다
	, area number(1) CHECK(area < 5) -- area 조건
	, deptno varchar(6) REFERENCES t_dept2(dcode) -- d_dept2의 dcode를 참조 (외래키) dcode 값 이외의 값은 받을 수 없다
);



-- 제약조건을 별도의 항목으로도 정의 가능
DROP TABLE t_emp4 CASCADE CONSTRAINT purge; 

CREATE TABLE t_emp4 (
	NO number(4) 
	, name varchar2(10) NOT NULL -- NOT null은 별도의 항목으로 만들지 못한다
	, jumin varchar2(13) NOT NULL 
	, area number(1) 
	, deptno varchar(6) 
	, PRIMARY key(no) 
	, UNIQUE(jumin)
	, CHECK(area < 5)
	, FOREIGN KEY(deptno) REFERENCES t_dept2(dcode)
);


-- #9003) 설정되어 있는 제약조건 조회
-- 눈에 보이지 않지만 데이터베이스는 데이터베이스 시스템에 내부적으로 많은 데이터베이스를 운영하고 있다 그게 딕셔너리
SELECT OWNER, CONSTRAINT_NAME, CONSTRAINT_TYPE ,STATUS
FROM USER_CONSTRAINTS 
WHERE table_name = 'T_EMP4'; -- 테이블명 대문자로. 내부적으로 저장된 건 대문자로 표현된다
-- 제약조건 이름은 오라클이 일련의 이름으로 만들어 준다. 제약조건을 작성할 때마다
-- CONSTRAINT TYPE
-- 'C' : NN, CK
-- 'P' : PK
-- 'U' : UK
-- 'R' : FK
 

-- #9002
-- 제약조건명을 명시하여 정의할 수 있다
DROP TABLE t_emp3 CASCADE CONSTRAINT purge; 

CREATE TABLE t_emp3 (
	NO number(4)  CONSTRAINT emp3_no_pk PRIMARY KEY
	, name varchar2(10) CONSTRAINT emp3_name_nn NOT NULL -- NOT null은 별도의 항목으로 만들지 못한다
	, jumin varchar2(13) 
				CONSTRAINT emp3_jumin_nn NOT NULL
				CONSTRAINT emp3_jumin_uk UNIQUE 
	, area number(1) CONSTRAINT emp3_area_ck CHECK(area < 5)
	, deptno varchar(6) CONSTRAINT emp3_deptno_fk REFERENCES t_dept2(dcode)
);




-- 별도 항목으로 정의 가능
DROP TABLE t_emp3 CASCADE CONSTRAINT purge; 

CREATE TABLE t_emp3 (
	NO number(4) 
	, name varchar2(10) CONSTRAINT emp3_name_nn NOT NULL -- NOT null은 별도로 명시 안됨
	, jumin varchar2(13) 
				CONSTRAINT emp3_jumin_nn NOT NULL
	, area number(1) 
	, deptno varchar(6) 
	, CONSTRAINT emp3_no_pk PRIMARY KEY(no)
	, CONSTRAINT emp3_jumin_uk UNIQUE(jumin)
	, CONSTRAINT emp3_area_ck CHECK(area < 5)
	, CONSTRAINT emp3_deptno_fk FOREIGN KEY(deptno) REFERENCES t_dept2(dcode)
);


-- #9003) 설정되어 있는 제약조건 조회 - > 내가 바꾼 것으로 값 나옴!
-- 눈에 보이지 않지만 데이터베이스는 데이터베이스 시스템에 내부적으로 많은 데이터베이스를 운영하고 있다 그게 딕셔너리
SELECT OWNER, CONSTRAINT_NAME, CONSTRAINT_TYPE ,STATUS
FROM USER_CONSTRAINTS 
WHERE table_name = 'T_EMP3';

SELECT * FROM t_emp3;
SELECT * FROM t_dept2;

-- 이 제약조건에 위배되면 무슨 일이 일어나는지 확인해보자

-- #9005
-- 제약조건에 위배될 때
INSERT INTO t_emp3 values(
	1, '오라클', '1234561234567', 4, 1000 
);
-- 또 실행하면 pk 때문에 에러
--SQL Error [1] [23000]: ORA-00001: unique constraint (SCOTT726.EMP3_NO_PK) violated
--에러메시지에 내가 지정한 제약조건 이름이 뜬다

INSERT INTO t_emp3 values(
	2, '오라클', '1234561234567', 4, 1000 
);
-- jumin uk 오류 
-- SQL Error [1] [23000]: ORA-00001: unique constraint (SCOTT726.EMP3_JUMIN_UK) violated

INSERT INTO t_emp3 values(
	2, '오라클', '2222222222222222222', 4, 1000 
);
-- SQL Error [12899] [72000]: ORA-12899: value too large for column "SCOTT726"."T_EMP3"."JUMIN" (actual: 19, maximum: 13)
-- varchar2(13) 초과 오류

-- 에러메시지 보고 이게 자바에서 발생한건지 데이터베이스에서 발생한건지 알 수 있어야 함


INSERT INTO t_emp3 values(
	3, 'tigers', '33333333', 3, 2000 
);
-- SQL Error [2291] [23000]: ORA-02291: integrity constraint (SCOTT726.EMP3_DEPTNO_FK) violated - parent key not found
-- FK 오류

INSERT INTO t_emp3 values(
	3, '우영우', '33333333', 10, 1000 
);
-- SQL Error [1438] [22003]: ORA-01438: value larger than specified precision allowed for this column
-- SQL 오류 [1438] [22003]: ORA-01438: 이 열에 허용된 지정된 정밀도보다 큰 값
-- area CK 위배 오류

INSERT INTO t_emp3(NO, jumin, area, deptno) values(
	3, '33333333', 4, 1001
);
-- SQL Error [1400] [23000]: ORA-01400: cannot insert NULL into ("SCOTT726"."T_EMP3"."NAME")
-- name의 not null 위배 오류


SELECT * FROM t_emp3;

UPDATE t_emp3 SET area = 10 WHERE NO = 1;
-- SQL Error [1438] [22003]: ORA-01438: value larger than specified precision allowed for this column
-- area 범위에 해당하지 않는 값으로 변경 불가능 
-- area ck 위배 오류

DELETE FROM t_dept2 WHERE dcode = 1000;
-- SQL Error [2292] [23000]: ORA-02292: integrity constraint (SCOTT726.EMP3_DEPTNO_FK) violated - child record found
-- 참조되고 있는 부모는 삭제 불가. 삭제하려고 하면 에러가 뜬다
-- 부모 : t_dept2 자식 : t_emp3
-- [on delete restrict] : (default) 참조되는 부모 쪽 삭제 허용 안함
-- [on delete cascade] : 참조되는 부모 쪽 삭제되면 참조하는 자식도 함께 삭제됨
-- create table에 명시할 수 있다


-- #9005 ALTER 명령을 사용하여 테이블에 제약조건 추가 가능
ALTER TABLE t_emp4
ADD CONSTRAINT emp4_name_uk UNIQUE(name);


DROP TABLE t_emp4;

-- 제약조건 추가되었다
SELECT OWNER, CONSTRAINT_NAME, CONSTRAINT_TYPE ,STATUS
FROM USER_CONSTRAINTS 
WHERE table_name = 'T_EMP4';


-- #9006
-- t_emp4.area 컬럼에 not null 제약조건 추가
ALTER TABLE t_emp4
ADD constraint emp4_area_nn NOT NULL(area);

-- 에러 뜬다 테이블에 null은 허용하는 게 기본이다
-- null 허용은 이미 있는 것이기에 추가가 안된다 수정을 해야한다
-- 이미 테이블 컬럼에 기본값인 null로 되어 있기 때문에 ADD가 아닌 MODIFY로 해야 한다

-- area에 not null 추가
ALTER TABLE t_emp4
MODIFY (area CONSTRAINT emp4_area_nn NOT NULL); -- check 삭제됨


-- #9007 외래키 추가
-- t_emp4 테이블의 no 컬럼이 t_emp2 테이블의
-- empno 컬럼의 값을 참조하도록 참조키 제약조건을 설정하세요
-- 그러나! 참조되는 부모테이블의 컬럼은 Primary Key 이거나 Unique 이어야 한다
 
ALTER TABLE t_emp4
ADD CONSTRAINT emp4_name_fk FOREIGN key(name) REFERENCES t_emp2(name);
-- SQL Error [2270] [42000]: ORA-02270: no matching unique or primary key for this column-list
-- 참조되는 부모키는 unique, pk여야 한다 그렇지 않으면 자식이 참조 못한다 id 참조하려고 하는데 그 값이 두개 이상이면 어떤 걸 해야할지 모르니까

-- 부모 테이블의 name을 unique 제약조건을 부여하고 다시 위의 쿼리 수행하면 된다
ALTER TABLE t_emp2
ADD CONSTRAINT emp2_name_uk UNIQUE(name);


-- #9008) t_emp3 테이블을 DROP 하고, 이전과 같은 조건으로 다시 만들되
-- t_dept2(dcode)를 참조하는 detpno 컬럼은
-- 부모테이블의 해당 데이터가 삭제되면 함께 삭제되도록 설정
 
DROP TABLE t_emp3 CASCADE CONSTRAINT purge; 

CREATE TABLE t_emp3 (
	NO number(4)  CONSTRAINT emp3_no_pk PRIMARY KEY
	, name varchar2(10) CONSTRAINT emp3_name_nn NOT NULL -- NOT null은 별도의 항목으로 만들지 못한다
	, jumin varchar2(13) 
				CONSTRAINT emp3_jumin_nn NOT NULL
				CONSTRAINT emp3_jumin_uk UNIQUE 
	, area number(1) CONSTRAINT emp3_area_ck CHECK(area < 5)
	, deptno varchar(6) CONSTRAINT emp3_deptno_fk REFERENCES t_dept2(dcode)
			ON DELETE CASCADE -- 부모 테이블의 참조가 삭제되면 자식도 함께 삭제된다
);
-- [on delete restrict] : (default) 참조되는 부모 쪽 삭제 허용 안함
-- [on delete cascade] : 참조되는 부모 쪽 삭제되면 참조하는 자식도 함께 삭제됨
-- [on delete set null] : 참조되는 부모가 삭제되면 자식은 null로 변경

-- oracle은 지원 안하는데 [on update..] : 부모 쪽이 변경되면 ..


-- 기존 제약조건 삭제
ALTER TABLE t_emp3
DROP CONSTRAINT emp3_deptno_fk;
-- emp3_deptno_fk 에 걸린 이 제약조건을 삭제한다 
-- 그럼 이거 어떻게 되는거야? 제약 조건 삭제하면? 삭제되지 뭐











