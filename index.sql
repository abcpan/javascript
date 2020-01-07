create table if not exists`websites`(
    `id` int not null  primary key auto_increment,
    `site_name` varchar(64) not null default '' unique key,
    `url` varchar(256) not null default '',
    `alexa` int not null default '0',
    `country`  varchar(64) not null default ''
)engine=innodb default charset=utf8;


insert into `websites`(`site_name`,`url`,`alexa`,`country`) values('cainiao','http://www.runoob.com/ ',4689,'CN'),('sina.microblog','http://weibo.com/  ',20,'CN'),('Facebook','https://www.facebook.com/',3 ,'USA'),('stackoverflow','http://stackoverflow.com/',0,'IND');

create table if not exists `apps`(
    `id` int not null primary key auto_increment,
    `app_name` varchar(64) not null default '' unique key,
    `url` varchar(256) not null default '',
    `country` varchar(64) not null default ''
)engine=innodb default charset=utf8;

insert into `apps`(`app_name`,`url`,`country`)values('QQ APP','http://im.qq.com/','CN'),('微博 APP','http://weibo.com/','CN'),('淘宝 APP','https://www.taobao.com/','CN');


create table runoob_test_tbl ( runoob_author varchar(40) NOT NULL, runoob_count  INT );
 INSERT INTO runoob_test_tbl (runoob_author, runoob_count) values ('RUNOOB', 20);
 INSERT INTO runoob_test_tbl (runoob_author, runoob_count) values ('菜鸟教程', NULL);
 INSERT INTO runoob_test_tbl (runoob_author, runoob_count) values ('Google', NULL);
 INSERT INTO runoob_test_tbl (runoob_author, runoob_count) values ('FK', 20);

 show columns from type_test;
alter table type_test MODIFY id bigint unsigned;

alter table type_test alter id set default '1000'; 
alter table type_test alter id drop default;

alter table type_test add `user_id` varchar(64) not null default '' after id;