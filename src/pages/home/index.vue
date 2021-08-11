<template>
    <div class="page">
        <div class="block block-1">
            <block-1 />
        </div>

        <!-- block2 -->
        <div id="Block_2" class="block block-2">
            <block-2 />
        </div>

        <!-- block3 -->
        <div id="Block_3" class="block block-3">
            <block-3 />
        </div>

        <!-- block4 -->
        <div id="Block_4" class="block block-4">
            <block-4 />
        </div>

        <!-- block 5  -->
        <div id="Block_5" class="block block-5">
            <block-5 />
        </div>

        <page-footer />

    </div>
</template>

<script>


import pageFooter from '@/layouts/footer'

import block1 from './block_1'
import block2 from './block_2'
import block3 from './block_3'
import block4 from './block_4'
import block5 from './block_5'

import {mapGetters} from 'vuex'
export default {
    name: 'home',
    components: {pageFooter, block1, block2, block3, block4, block5},
    computed: {
        // ...mapGetters('ethereum', {
        //     account: 'account',
        //     eth_sign: 'eth_sign'
        // }),
        ...mapGetters('user', {
            user: 'user'
        }),
        
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/custom';
.block {
    padding: 40px 0;
    &:nth-child(odd) {
        background-color: #F8FAFB;
    }

    .inner {
        display: -webkit-flex;
        display: flex;
        align-items: center;
    }

    &-1 {
        background-color: $--home-nav !important;
        color: $--color-white;
        padding: 20px 0 33px;
    }


}
</style>

