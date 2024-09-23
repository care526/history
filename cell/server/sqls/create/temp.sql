-- 应用表
CREATE TABLE `application` (
    `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
    `logo` varchar(200) NOT NULL DEFAULT '' COMMENT '应用logo',
    PRIMARY KEY (`app_id`)
);
-- 组织应用表
CREATE TABLE `application_organization` (
    `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    PRIMARY KEY (`app_id`, `organization_id`)
);