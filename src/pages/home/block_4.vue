<template>
    <div class="container">
        <headerHomeBlock :title="$t('home.block4.title')" :subTitle="$t('home.block4.subTitle')" />
        <div class="inner">
            <div class="l-part">
                <!-- <img src="/img/block_4_bg.png"  v-if="!user" /> -->
                <cus-time-line :lines="linesData"></cus-time-line>
            </div>
            <div class="r-part">
                <form-charge-xch class="r-part-form"></form-charge-xch>
            </div>
        </div>
    </div>
</template>

<script>
import headerHomeBlock from '@/layouts/header/header_home_block.vue'
import formChargeXch from '@/layouts/form/form_charge_xch.vue'
import cusTimeLine from '@/layouts/timeline/temp_01.vue'
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('user', {
            'user': 'user'
        })
    },
    components: {headerHomeBlock, formChargeXch, cusTimeLine},
    data() {
        return {
            linesData: [{
                title: 'home.block4.timelineItem1hd',
                content: [{
                    txt: 'home.block4.timelineItem1ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-02'
            },{
                title: 'home.block4.timelineItem2hd',
                content: [{
                    txt: 'home.block4.timelineItem2ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-05'
            },{
                title: 'home.block4.timelineItem3hd',
                content: [{
                    txt: 'home.block4.timelineItem3ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-03'
            },{
                title: 'home.block4.timelineItem4hd',
                content: [{
                    txt: 'home.block4.timelineItem4ctn',
                    style: '',
                    type: 'String'
                }],
                size: 'large',
                type: 'primary',
                icon: 'cus-icon-timeline-01'
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

.r-part {
    -webkit-box-flex: 1;
    flex: 1;
    &-form {
        max-width: 520px;
    }
}

.l-part {
    padding-right: 70px;
    img {
        width: 388px;
        height: 324px;
    }
}
</style>