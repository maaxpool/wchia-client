<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block3.title')" :subTitle="$t('home.block3.subTitle')" />
        <div class="inner">
            <form-charge-wxch class="l-part"></form-charge-wxch>
            <div class="r-part">
                <img src="/img/block_3_bg.png" v-if="!user" />
                <cus-time-line v-else :lines="linesData"></cus-time-line>
            </div>
        </div>
    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/header_home_block.vue'
import formChargeWxch from '@/layouts/form/form_charge_wxch.vue'
import cusTimeLine from '@/layouts/timeline/temp_01.vue'
import {mapGetters} from 'vuex'
export default {
    components: {headerHomeBlock, formChargeWxch, cusTimeLine},
    computed: {
        ...mapGetters('user', {
            'user': 'user',
            'conf': 'conf'
        })
    },
    watch: {
        'user': {
            handler(n, o) {
                this.linesData[0]['content'][1]['txt'] = n.chia_address
            },
            immediate: true,
            deep: true
        },
        'conf': {
            handler(n, o) {
                this.linesData[3]['content'][2]['txt'] = n.eth_address
            },
            immediate: true,
            deep: true
        }
    },
    data () {
        return {
            linesData: [{
                title: 'home.block3.timelineItem1hd',
                content: [{
                    txt: 'home.block3.timelineItem1ctn',
                    style: '',
                    type: 'String'
                },{
                    txt: '',
                    style: {color: '#000'},
                    type: 'Object'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-01'
            },{
                title: 'home.block3.timelineItem2hd',
                content: [{
                    txt: 'home.block3.timelineItem2ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-02'
            },{
                title: 'home.block3.timelineItem3hd',
                content: [{
                    txt: 'home.block3.timelineItem3ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-03'
            },{
                title: 'home.block3.timelineItem4hd',
                content: [{
                    txt: 'home.block3.timelineItem4ctn1',
                    style: {'margin-bottom': '30px'},
                    type: 'String'
                },{
                    txt: 'home.block3.timelineItem4ctn2',
                    style: '',
                    type: 'String'
                },{
                    txt: '',
                    style: {color: '#000'},
                    type: 'Object'
                },],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-04'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.inner {
    display: -webkit-flex;
    display: flex;
    align-items: center;
}

.l-part {
    -webkit-box-flex: 1;
    flex: 1;
}

.r-part {
    padding-left: 64px;
    img {
        width: 395px;
        height: 295px;
    }
}
</style>