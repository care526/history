-- 应用表
CREATE TABLE `application` (
    `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
    `logo` varchar(200) NOT NULL DEFAULT '' COMMENT '应用logo',
    PRIMARY KEY (`app_id`)
);