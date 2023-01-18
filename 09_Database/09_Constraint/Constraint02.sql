

-- pk를 하나의 컬럼에만 지정했는데 여러개의 컬럼에 만들 수도 있다
-- > 복합키 제약조건

CREATE TABLE test_member (
    mb_uid NUMBER NOT NULL,
    mb_nick VARCHAR2(10) NOT NULL,
    mb_name VARCHAR2(10) NOT NULL,
    CONSTRAINT test_member_pk PRIMARY KEY(mb_uid, mb_nick)
    -- 앞으로 이 두개의 컬럼 조합이 중복되지 않으면 된다 
);


INSERT INTO test_member values(1, 'aaa', 'john');
INSERT INTO test_member values(1, 'bbb', 'john'); -- 가능
INSERT INTO test_member values(2, 'aaa', 'john'); -- 가능
INSERT INTO test_member values(1, 'aaa', 'john'); -- 불가능
-- 복합키는 조합이 같아야 중복인 것 고로 이렇게 aaa, bbb 만 달라도 가능하다
-- 특정 컬럼이 중복되는 게 아닌 조합!이 중복이 되야 중복인 것이다

SELECT * FROM test_member;































