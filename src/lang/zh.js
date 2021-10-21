export default {
    public: {
        fee: '手续费率',
        feeAmount: '手续费',
        send: '发送',
        cancel: '取消',
        item1Name: '查看交易',

        placeholder1: '请输入',
        placeholder2: '请选择',
        
        nodata: '没有数据',
        check: "查看交易",
        minimunQuantity: '最小兑换数量',
        detail: '详情',
        number: '数字',
        address: '地址',
        this: '这'
    },
    msg: {
        require: '{val}是必须的',
        effective: '请输入有效的',
        addressIlleagal: '地址不合法'
    },
    navs: {
        item1: '关于代理商',
        item2: '兑换WXCH',
        item3: '换回 XCH',
        item4: '历史交易',
        item5: '新手指南',
        item6: '联系我们',
        btn1: '注册',
        dropDownItem1: '设置',
        dropDownItem2: '登出',
    },
    footer: {
        lpart: {
            item1: 'WXCH 是第一个以奇亚币 1:1背书的ERC20 代币',
            item2: '如需帮助，请联系'
        },
    },
    msgs: {

    },
    home: {
        block1: {
            title: '透明度和安全性确保信任',
            content: '通过桥梁在链上移动资产的最大担心是建立在安全之上的信任。为了建立这种信任，我们采取的措施包括： 1) 公开的经过审计的智能合约，并将源代码公开； 2) 透明的服务和动机，以及 3) 多重签名支持的托管服务。所有的交易记录都是在存储在链上，当你将一个 XCH 转换为 WXCH 时，只有一个 WXCH 被铸造，当 XCH 代币被赎回时，对应的WXCH 将被销毁。',
            button: '连接钱包',
            al: '用户 Eth 地址'
        },
        block2: {
            title: '关于代理商',
            subTitle: '您会看到代理商的基本信息，帮助您更好地进行交易。',
            item1Name: '代理商名字',
            item1Desc: '',
            item2Name: '代理商的Chia钱包地址',
            item2Desc: '',
            item3Name: '代理商的WXCH钱包地址',
            item3Desc: '',
        },
        block3: {
            title: '立即兑换WXCH',
            subTitle: '您可以把XCH兑换成WXCH，由此可以提高奇亚币的流动性。',
            item1Name: '发送XCH',
            item2Name: '兑换成 WXCH',
            item3Name: '手续费',
            item4Name: 'WXCH 接收地址',
            btn1: '立即兑换WXCH',
            timelineItem1hd: '存入 XCH',
            timelineItem1ctn: '提交兑换申请之前，请存入足够的 XCH 到您的专属 XCH 地址：',
            timelineItem2hd: '提交兑换申请',
            timelineItem2ctn: '在网页上填写 XCH 数量，点击“立即兑换 WXCH”。',
            timelineItem3hd: '等待 WXCH 到账',
            timelineItem3ctn: '从 XCH 转换为 WXCH，跨链桥需要一些时间，请您耐心等待。',
            timelineItem4hd: 'WXCH 到账成功',
            timelineItem4ctn1: '交易成功后，您可在 MetaMask 查看收到的 WXCH',
            timelineItem4ctn2: '为了方便您查看资产，请在 MetaMask 账户添加 WXCH 代币。WXCH 代币地址:',
        },
        block4: {
            title: '兑换成XCH',
            subTitle: '您可以随时把 WXCH 兑换回 XCH 到您的奇亚地址。',
            item1Name: '发送WXCH',
            item2Name: '兑换成XCH',
            item3Name: 'XCH 接收地址',
            // item4Name: 'Receiving  WXCH address',
            btn1: '换回XCH',

            timelineItem1hd: '提交兑换申请',
            timelineItem1ctn: '在网页上填写 WXCH 数量，填写接收 XCH 的地址，点击“兑换回 XCH”。',
            timelineItem2hd: '授权代理商扣取 WXCH',
            timelineItem2ctn: 'MetaMask 会弹出窗口请求授权代理商扣取 WXCH，请点击“同意”。',
            timelineItem3hd: '等待 XCH 到账',
            timelineItem3ctn: '从 WXCH 转换为 XCH，跨链桥需要一些时间，请您耐心等待。',
            timelineItem4hd: 'XCH 到账成功',
            timelineItem4ctn: '交易成功后，您可在 Chia 地址查看收到的 XCH。',
        },
        block5: {
            title: '历史交易',
            item1: '累计兑换 WXCH',
            item2: '累计换回 XCH',
            tab1: '兑换成 WXCH',
            tab2: '兑换成XCH',
            cell1: '交易时间',
            cell2: '数量',
            cell3: '发送地址',
            cell4: '接收地址',
            cell5: '结果',
            tbHandler: '查看详情',
            status: {
                created: '已创建',
                xch_transferred: 'XCH已接收',
                xch_transferring: 'XCH发送中',
                wxch_transferred: 'WXCH已发送',
                wxch_transferring: 'WXCH发送中',
                finished: '已完成',
                closed: '已关闭',
                error: '交易异常'
            }
        }
    },
    register: {
        pageTitle: '注册一个WXCH账号',
        subTitle: 'WXCH 是第一个以奇亚币 1:1背书的ERC20 代币',
        item1Name: '以太坊钱包地址',
        item1Unit: '连接钱包',
        item2Name: '国家',
        item2PlaceHold: '请选择',
        item3Name: '名',
        item3Unit: '',
        item4Name: '姓',
        item4Unit: '',
        item5Name: '手机号码',
        item5Unit: '',
        item5PlaceHold: '请选择',
        item6Name: '地址',
        item6Unit: '',
        item7Name: '城市',
        item8Name: '州',
        item9Name: '邮编',
        item10Name: '邮箱地址',
        extrItem1: '我确认我提供的信息是准确的',
        btn1: '注册帐号'
    },
    account: {
        pageTitle: '账号设置',
        subTitleItem1: 'WXCH 资产',
        subTitleItem2: 'XCH 资产',
        item1Name: '名',
        item2Name: '姓',
        item3Name: '国家',

        item4Name: '手机号码',
        item5Name: '地址',
        item6Name: '城市',
        item7Name: '州',
        item8Name: '邮编',
        item9Name: '邮箱地址',
        item10Name: '奇亚币钱包地址',
        item11Name: '以太坊钱包地址',
        
        btn1: '保存'
    },
    transDetail: {
        pageTitle: '交易详情',
        subTitleItem1: '交易时间',
        subTitleItem2: '结果',
        subTitleItem3: '手续费',

        item1Name: '发送地址',
        item2Name: '接收地址',
        item3Name: '数量',
        item4Name: '状态',
        item5NameChia: 'Chia 交易哈希',
        item5NameEth: 'Eth 交易哈希',
        // item6Name: '以太坊交易'
    }
    
}