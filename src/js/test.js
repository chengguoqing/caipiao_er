CREATE TABLE `zdh_agent_user_wallet_order` (`wallet_order_id`
    int(11) NOT NULL COMMENT '提现id',
    `wallet_order_sn` varchar(255) NOT NULL DEFAULT ''COMMENT '提现单号',
        `relate_user_id` int(11) NOT NULL COMMENT '申请提现的 用户id',
    `add_time`  int(11) NOT NULL COMMENT '记录的添加时间',
        `wallet_money` decimal(10, 2) NOT NULL DEFAULT '0.00' COMMENT '申请提现的金额',

    `wallet_money_type`  tinyint(1) NOT NULL DEFAULT '1' COMMENT '申请提现到账方式；1 到微信零钱，2 到银行卡',
     `bank_card`varchar(255) NOT NULL DEFAULT '' COMMENT '银行卡号',
    `card_user` varchar(255DEFAULT '' COMMENT '持卡人姓名',
    `note` varchar(200) NOT NULL COMMENT '代理商申请提现的时候，填写的备注',
    `admin_id`  int(11) NOT NULL DEFAULT '0'COMMENT '审核人id',
   `admin_op_time` int(11) NOT NULL DEFAULT '0' COMMENT '审核的时间',
    `send_admin_id` int(11) NOT NULL DEFAULT '0'COMMENT '发放人的id',
    `send_time` int(11) NOT NULL DEFAULT '0' COMMENT '发放人 的发放时间',
    `send_wallet_money`  char(10) DEFAULT NULL COMMENT '实际发放金额', `send_note`
    varchar(255) NOT NULL DEFAULT ''
    COMMENT '发送人填写的备注', `send_money_type`
    tinyint(1) NOT NULL DEFAULT '1'
    COMMENT '1 微信零钱 2 微信红包 3 离线发送', `shop_id`
    int(11) NOT NULL DEFAULT '0'
    COMMENT '店铺id', `status`
    tinyint(1) NOT NULL DEFAULT '0'
    COMMENT '0等审，1审核通过（等待发放），2已完成，-1无法发放') ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT = '代理商提现申请表';
