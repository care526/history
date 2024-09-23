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
