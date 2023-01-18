
/* Drop Tables */

DROP TABLE comments CASCADE CONSTRAINTS;
DROP TABLE friend CASCADE CONSTRAINTS;
DROP TABLE likes CASCADE CONSTRAINTS;
DROP TABLE photo CASCADE CONSTRAINTS;
DROP TABLE post CASCADE CONSTRAINTS;
DROP TABLE members CASCADE CONSTRAINTS;




/* Create Tables */

CREATE TABLE comments
(
	co_content varchar2(100) NOT NULL,
	co_date date,
	post_no number NOT NULL,
	mem_id varchar2(10) NOT NULL
);


CREATE TABLE friend
(
	request_state number NOT NULL,
	mem_send varchar2(10) NOT NULL,
	mem_reciever varchar2(10) NOT NULL,
	PRIMARY KEY (request_state)
);


CREATE TABLE likes
(
	mem_id varchar2(10) NOT NULL,
	post_no number NOT NULL
);


CREATE TABLE members
(
	mem_id varchar2(10) NOT NULL,
	mem_pw varchar2(15) NOT NULL,
	PRIMARY KEY (mem_id)
);


CREATE TABLE photo
(
	photo_data varchar2(100),
	post_no number NOT NULL
);


CREATE TABLE post
(
	post_no number NOT NULL,
	mem_id varchar2(10) NOT NULL,
	post_title varchar2(50) NOT NULL,
	post_content varchar2(1000) NOT NULL,
	post_open number NOT NULL,
	psot_count number,
	post_information date,
	PRIMARY KEY (post_no)
);



/* Create Foreign Keys */

ALTER TABLE comments
	ADD FOREIGN KEY (mem_id)
	REFERENCES members (mem_id)
;


ALTER TABLE friend
	ADD FOREIGN KEY (mem_send)
	REFERENCES members (mem_id)
;


ALTER TABLE friend
	ADD FOREIGN KEY (mem_reciever)
	REFERENCES members (mem_id)
;


ALTER TABLE likes
	ADD FOREIGN KEY (mem_id)
	REFERENCES members (mem_id)
;


ALTER TABLE post
	ADD FOREIGN KEY (mem_id)
	REFERENCES members (mem_id)
;


ALTER TABLE comments
	ADD FOREIGN KEY (post_no)
	REFERENCES post (post_no)
;


ALTER TABLE likes
	ADD FOREIGN KEY (post_no)
	REFERENCES post (post_no)
;


ALTER TABLE photo
	ADD FOREIGN KEY (post_no)
	REFERENCES post (post_no)
;


SELECT tname FROM tab;
