-- -- 用户表
-- CREATE TABLE `user` (
--     `id` INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户自增id',
--     `account` varchar(200) NOT NULL COMMENT '账号',
--     `password` varchar(30) NOT NULL COMMENT '密码',
--     `name` varchar(200) DEFAULT '' COMMENT '用户名',
--     `avatar` varchar(200) DEFAULT '' COMMENT '用户头像',
--     `register_time` Datetime NOT NULL COMMENT '注册时间',
--     PRIMARY KEY (`id`),
--     KEY `account` (`account`)
-- );
-- 角色表
CREATE TABLE `role` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色自增id',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '角色名',
    PRIMARY KEY (`id`)
);
-- 用户和角色关联表
CREATE TABLE `user_role` (
    `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
    `role_id` INT(11) UNSIGNED NOT NULL COMMENT '角色id',
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id'
);