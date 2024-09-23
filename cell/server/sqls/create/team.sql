-- 团队表
CREATE TABLE `team` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '团队自增id',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '团队名',
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    PRIMARY KEY (`id`)
);
-- 团队和用户的关联表
CREATE TABLE `team_user` (
    `team_id` INT(11) UNSIGNED NOT NULL COMMENT '团队id',
    `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
    PRIMARY KEY (`team_id`, `user_id`)
);