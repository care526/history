-- 组织表
CREATE TABLE `organization` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '组织自增id',
    `owner_id` INT(11) UNSIGNED NOT NULL COMMENT '所有者id',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '组织名',
    PRIMARY KEY (`id`)
);
-- 组织和用户的关联表
CREATE TABLE `organization_user` (
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
    PRIMARY KEY (`user_id`, `organization_id`)
);
-- 组织和团队的关联表
CREATE TABLE `organization_team` (
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    `team_id` INT(11) UNSIGNED NOT NULL COMMENT '团队id',
    PRIMARY KEY (`user_id`, `team_id`)
);
-- 组织应用表
CREATE TABLE `organization_application` (
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    `app_id` varchar(200) NOT NULL DEFAULT '' COMMENT '应用id',
    PRIMARY KEY (`app_id`, `organization_id`)
);