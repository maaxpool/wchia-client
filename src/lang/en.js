export default {
    public: {
        fee: 'Fee',
        feeAmount: 'Fee Amount',
        send: 'send',
        cancel: 'Cancel',
        item1Name: 'Check transaction',

        placeholder1: 'Please input',
        placeholder2: 'Please select',
        
        nodata: 'No Data',
        check: "Check Details",
        minimunQuantity: 'Minimum exchange',
        detail: 'Details',
        number: 'number',
        address: 'address',
        this: 'this'
    },
    msg: {
        require: '{val} is required',
        effective: 'please input the effective ',
        addressIlleagal: 'This Address is illegal'
    },
    navs: {
        item1: 'About Broker',
        item2: 'Exchange WXCH',
        item3: 'Exchange XCH',
        item4: 'Historical transaction',
        item5: 'Guide',
        item6: 'Connect Us',
        btn1: 'Sign Up',
        dropDownItem1: 'setting',
        dropDownItem2: 'Sign out',
    },
    footer: {
        lpart: {
            item1: 'WXCH is the first ERC20 tokenbacked 1:1 with Chia',
            item2: 'If you need help, please contact'
        },
    },
    msgs: {

    },
    home: {
        block1: {
            title: 'Transparency and security ensures trust',
            content: 'The greatest concern of moving assets across a chain via a bridge is trust built on top of security.  In order to establish such trust, we are taking the following measures: 1)to have a public audited smart contract and have the source code open to the public; 2) to be transparent with our services and ourmotivations and 3) to have multisig custodian services. By doing so, when you convert one XCH to WXCH, your proof of reserve is on-chain, there will be only one WXCH to be minted, and the WXCH will be burned when the XCH token is redeemed.',
            button: 'Connect Wallet',
            al: 'User Eth Address'
        },
        block2: {
            title: 'About Broker',
            subTitle: 'You will see the basic information of Broker to help you trade better.',
            item1Name: 'Broker’s Name',
            item1Desc: '',
            item2Name: 'Broker’s ChiaWallet Address',
            item2Desc: '',
            item3Name: 'Broker’s Ethereumaddress for WXCH',
            item3Desc: '',
        },
        block3: {
            title: 'EXCHANGE WXCH',
            subTitle: 'You can convert XCH to WXCH, which can increase the liquidity of Chia token.',
            item1Name: 'Send XCH',
            item2Name: 'Exchange WXCH',
            item3Name: 'Fee',
            item4Name: 'Receiving  WXCH address',
            btn1: 'Redeem WXCH now',
            timelineItem1hd: 'Deposite XCH',
            timelineItem1ctn: 'Before submitting the exchange request, please deposit enough XCH to your exclusive XCH address provided by broker:',
            timelineItem2hd: 'Submitting the exchange request',
            timelineItem2ctn: 'Fill in the amount of XCH on the webpage and click "Exchange WXCH ".',
            timelineItem3hd: 'Waiting WXCH  transfer to your account',
            timelineItem3ctn: 'To convert from XCH to WXCH, it takes some time to cross the bridge. please wait patiently.',
            timelineItem4hd: 'WXCH successfully deposited into account',
            timelineItem4ctn1: 'After the transaction is successful, you can check the received WXCH in MetaMask.',
            timelineItem4ctn2: 'To facilitate your viewing of assets, please add WXCH tokens to your MetaMask account. WXCH token address:',
        },
        block4: {
            title: 'EXCHANGE XCH',
            subTitle: 'You can exchange WXCH back to XCH to your Chia Wallet at any time.',
            item1Name: 'Send WXCH',
            item2Name: 'Exchange XCH',
            item3Name: 'XCH address',
            // item4Name: 'Receiving  WXCH address',
            btn1: 'Exchange back to XCH',
            timelineItem1hd: 'Submitting the exchange request',
            timelineItem1ctn: 'Fill in the WXCH quantity on the webpage, fill in the XCH receiving address, and click "Exchange XCH".',
            timelineItem2hd: 'Approve Broker can deduct WXCH from your account.',
            timelineItem2ctn: 'MetaMast would pop-up a window for asking approve broker deduct WXCH. Please click "Confirm" here.',
            timelineItem3hd: 'Waiting XCH  transfer to your account.',
            timelineItem3ctn: 'To convert from WXCH to XCH, it takes some time to cross the bridge. please wait patiently.',
            timelineItem4hd: 'XCH successfully deposited into account.',
            timelineItem4ctn: 'After the transaction is successful, you can check the received XCH at your Chia address.',
        },
        block5: {
            title: 'Historical transaction',
            item1: 'Cumulative exchange WXCH',
            item2: 'Cumulative exchange XCH',
            tab1: 'Exchange WXCH',
            tab2: 'Exchange XCH',
            cell1: 'Transaction Time',
            cell2: 'Quantity',
            cell3: 'Sending address',
            cell4: 'Receiving address',
            cell5: 'Result',
            tbHandler: 'Check details',
            status: {
                created: 'created',
                xch_transferred: 'xch transferred',
                xch_transferring: 'xch transferring',
                wxch_transferred: 'wxch transferred',
                wxch_transferring: 'wxch transferring',
                finished: 'finished',
                closed: 'closed',
                error: 'error'
            }
        }
    },
    register: {
        pageTitle: 'Create a WXCH account',
        subTitle: 'WXCH is the first ERC20 tokenbacked 1:1 with Chia',
        item1Name: 'ETH Wallet Address',
        item1Unit: 'Connect Wallet',
        item2Name: 'Contry',
        item2PlaceHold: 'Please select',
        item3Name: 'First name',
        item3Unit: '',
        item4Name: 'Last name',
        item4Unit: '',
        item5Name: 'Phone number',
        item5Unit: '',
        item5PlaceHold: 'Please select',
        item6Name: 'Address line',
        item6Unit: '',
        item7Name: 'City',
        item8Name: 'State',
        item9Name: 'Zip code',
        item10Name: 'Email address',
        extrItem1: 'I confirm that the information I provided is accurate',
        btn1: 'Register an account'
    },
    account: {
        pageTitle: 'Account',
        subTitleItem1: 'Balance of WXCH',
        subTitleItem2: 'Balance of XCH',
        item1Name: 'First name',
        item2Name: 'Last name',
        item3Name: 'Country',

        item4Name: 'Phone number',
        item5Name: 'Address line',
        item6Name: 'City',
        item7Name: 'State',
        item8Name: 'Zip code',
        item9Name: 'Email',
        item10Name: 'Chia Wallet Address',
        item11Name: 'ETH Wallet Address',
        
        btn1: 'Preserve'
    },
    transDetail: {
        pageTitle: 'Transaction Details',
        subTitleItem1: 'Transaction Time:',
        subTitleItem2: 'Result',
        subTitleItem3: 'Fee:',

        item1Name: 'Sending address',
        item2Name: 'Receiving address',
        item3Name: 'Quantity',
        item4Name: 'Status',
        item5NameChia: 'Chia Transaction Hash',
        item5NameEth: 'Eth Transaction Hash'
    }
    
}