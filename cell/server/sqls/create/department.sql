-- 部门标签表
CREATE TABLE `department_label` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '部门自增id',
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '部门名',
    `level` INT(11) UNSIGNED NOT NULL COMMENT '部门的层级',
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id',
    `parent_id` INT(11) UNSIGNED NOT NULL COMMENT '上级部门id',
    PRIMARY KEY (`id`)
);
-- 用户和部门关联表
CREATE TABLE `user_department` (
    `user_id` INT(11) UNSIGNED NOT NULL COMMENT '用户id',
    `department` varchar(200) NOT NULL DEFAULT '' COMMENT '部门标签列表(1,2,3,4)',
    `organization_id` INT(11) UNSIGNED NOT NULL COMMENT '组织id'
);