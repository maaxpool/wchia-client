<template>
  <div class="page-body">
    <div class="banner">
      <div class="container">
        <h2>TRANSPARENCY AND SECURITY ENSURES TRUST</h2>
        <article>The greatest concern of moving assets across a chain via a bridge is trust built on top of security. 
          In order to establish such trust, we are taking the following measures: 1)to have a public audited smart 
          contract and have the source code open to the public; 2) to be transparent with our services and our 
          motivations and 3) to have multisig custodian services. By doing so, when you convert one XCH to WXCH, 
          your proof of reserve is on-chain, there will be only one WXCH to be minted, and the WXCH will be burned 
          when the XCH token is redeemed.</article>
      </div>
    </div>

    <div class="container">
      <div class="main">

        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"  @change="handleSelect">
          <el-radio-button v-for="(item, tabIdx) in tabGroup" :key="tabIdx+'tab'" :label="tabIdx">
            {{item.title}}
          </el-radio-button>
        </el-radio-group>

        <div class="tl">
          <h3>{{tabGroup[isCollapse]['title']}}</h3>
          <p>{{tabGroup[isCollapse]['subTitle']}}</p>
        </div>

        <div class="inner sum-board">
            <div class="item">
                <h5>NETWORK</h5>
                <div class="ctn">
                    <img src="/img/block_5_wxch.png" />
                    <div class="count">
                        0.000021215121212000 WXCH
                    </div>
                </div>
                <div class="desc">ERC20 Token Contract</div>
            </div>
            <div class="item">
                <h5>CUSTODY</h5>
                <div class="ctn">
                    <img src="/img/block_5_xch.png" />
                    <div class="count">
                        0.000000 XCH
                    </div>
                </div>
                <div class="desc">ERC20 Token Contract</div>
            </div>
        </div>

        <db-ord-book-tb /> 

      </div>
    </div>
  </div>
</template>

<script>
import dbOrdBookTb from '@/layouts/table/table_dashboard_orderbook.vue'
export default {
  components: {dbOrdBookTb},
  data() {
    return {
      tabGroup: [{
        title: 'ORDER BOOK',
        subTitle: 'A record of all minting and burning of WXCH on Ethereum.'
      }, {
        title: 'PROOF OF ASSETS',
        subTitle: 'The custodian performs audits on a regular basis to show transparency through publicly viewable and verifiable transactions. \
          The  Chia addresses below are controlled by the custodian.',
      }, {
        title: 'PARTNERS',
        subTitle: 'WXCH is a community-led project and its partners include merchants, custodians, exchanges, and DAO members.'
      }],
      isCollapse: 0,
      curIdx: 0
    }
  },
  methods: {
    handleSelect(n, idx) {
      // console.log(n, idx ,'sel')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.banner {
  background:  $--home-nav;
  .container {
    padding: 35px 0 90px;
    background: url('/img/dashboard_banner.png') no-repeat bottom right;
    background-size: auto 100%;
  }

  h2 {
    font-size: 40px;
    margin: 0 153px 62px 0;
    color: $--color-primary;
  }

  article {
    color: #ffffff;
    line-height: 150%;
    font-size: 18px;
  }
}


.main {
  padding-top: 60px;
  padding-bottom: 50px;

  .el-radio-group {
    .el-radio-button {
      margin-right: 15px;
      ::v-deep &__inner {
        font-size: 18px;
        border: 0 none;
        border-radius: 4px !important;
      }
    }

  }
}

.sum-board {
    @include displayFlex;
    align-items: center;
    padding: 45px;
    border-radius: 18px;
    background: $--color-white;
    border-radius: 18px;
    box-shadow: $--page-item-shodow-1;
    margin-bottom: 30px;
    .item {
        -webkit-box-flex: 1;
        flex: 1;

        &:first-child {
          .desc {
            color: $--color-primary;
          }
        }
    }

    h5 {
        font-size: 22px;
        color: $--color-black-2;
        margin-bottom: 18px;
    }
    
    .ctn {
        display: -webkit-box;
        display: flex;
        align-items: center;
        img {
            width: 60px;
            height: 60px;
            margin-right: 18px;
        }

        .count {
            -webkit-box-flex: 1;
            flex: 1;
            font-size: 28px;
            font-weight: 500;
        }
    }

    .desc {
      padding-left: 78px;
      font-size: 14px;
      margin-top: 20px;
    }
}
</style>