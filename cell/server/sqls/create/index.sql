-- 用户表
CREATE TABLE `user` (
  `id` INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户自增id',
  `account` varchar(200) NOT NULL COMMENT '账号',
  `password` varchar(30) NOT NULL COMMENT '密码',
  `name` varchar(200) DEFAULT '' COMMENT '用户名',
  `avatar` varchar(200) DEFAULT '' COMMENT '用户头像',
  `register_time` Datetime NOT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`),
  KEY `account` (`account`)
);
-- 组织表
CREATE TABLE `organization` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '组织自增id',
  `owner_id` INT(11) UNSIGNED NOT NULL COMMENT '所有者id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '组织名',
  PRIMARY KEY (`id`)
);
-- 团队表
CREATE TABLE `team` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '团队自增id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '团队名',
  `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
  PRIMARY KEY (`id`)
);
-- 角色表
-- CREATE TABLE `role` (
--   `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '角色自增id',
--   `name` varchar(200) NOT NULL DEFAULT '' COMMENT '角色名',
--   `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
--   PRIMARY KEY (`id`)
-- );
-- 部门标签表
-- CREATE TABLE `department_label` (
--   `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '部门自增id',
--   `name` varchar(200) NOT NULL DEFAULT '' COMMENT '部门名',
--   `level` INT(11) UNSIGNED NOT NULL COMMENT '部门的层级',
--   `parent_id` INT(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '上级部门id, 0是顶级',
--   `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
--   PRIMARY KEY (`id`)
-- );
-- 应用表
-- CREATE TABLE `application` (
--   `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
--   `name` varchar(200) NOT NULL DEFAULT '' COMMENT '应用名称',
--   `logo` varchar(200) NOT NULL DEFAULT '' COMMENT '应用logo',
--   PRIMARY KEY (`app_id`)
-- );
-- 任务表
-- 完全抽象任务
-- 部分抽象任务(抽象加可执行)
-- 具体可执行任务
CREATE TABLE `task` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '任务自增id',
  `name` varchar(200) NOT NULL COMMENT '任务名',
  `owner_id` INT(11) UNSIGNED NOT NULL COMMENT '创建者',
  `executor_ids` varchar(200) COMMENT '执行者们',
  `inspector_ids` varchar(200) COMMENT '审核者们',
  `owner_team_id` INT(11) UNSIGNED NOT NULL COMMENT '所属团队ID',
  `create_time` Datetime NOT NULL COMMENT '创建时间',
  `start_time` Datetime NOT NULL COMMENT '开始时间',
  `end_time` Datetime NOT NULL COMMENT '结束时间',
  `over_time` Datetime COMMENT '完成时间',
  -- `status` INT(11) UNSIGNED NOT NULL COMMENT '任务状态',
  -- 未开始 进行中 已暂停 审核中 审核驳回 已完成 已超时
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`)
);

-- 组织和用户的关联表
CREATE TABLE `organization_user` (
  `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
  `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
  PRIMARY KEY (`organization_id`, `user_id`)
);
-- 组织和团队的关联表
CREATE TABLE `organization_team` (
  `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
  `team_id` INT(11) UNSIGNED NOT NULL COMMENT '团队id',
  PRIMARY KEY (`organization_id`, `team_id`)
);
-- 组织应用表
-- CREATE TABLE `organization_application` (
--   `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
--   `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用id',
--   PRIMARY KEY (`organization_id`, `app_id`)
-- );
-- 团队和用户的关联表
CREATE TABLE `team_user` (
  `team_id` INT(11) UNSIGNED NOT NULL COMMENT '团队id',
  `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
  PRIMARY KEY (`team_id`, `user_id`)
);
-- 用户和角色关联表
-- CREATE TABLE `user_role` (
--   `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
--   `role_id` INT(11) UNSIGNED NOT NULL COMMENT '角色id',
--   `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
--   PRIMARY KEY (`user_id`, `role_id`, `organization_id`)
-- );