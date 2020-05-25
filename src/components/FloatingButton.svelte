<script>
    /** type to use for horizontal placement (either 'left', 'center' or 'right')
     * @svelte-prop {String} tag=horizontal
     * @values <code>left</code>, <code>center</code>, <code>right</code>
     * */
    export let horizontal

    /** type to use for vertical placement (either 'top', or 'bottom')
     * @svelte-prop {String} tag=vertical
     * @values <code>top</code>, <code>bottom</code>
     * */
    export let vertical
</script>

<div class="svakura-floating-btn-wrap"
    class:vertial-top="{vertical === 'top'}"
    class:vertical-bottom="{vertical === 'bottom'}"
    class:horizontal-left="{horizontal === 'left'}"
    class:horizontal-center="{horizontal === 'center'}"
    class:horizontal-right="{horizontal === 'right'}">

    <button>
        <slot />
    </button>
</div>

<style>
    div.svakura-floating-btn-wrap {
        position: absolute;
        display: inline-flex;
        
    }

    div.vertical-bottom {
        bottom: 24px;
    }
    div.vertical-top {
        top: 24px;
    }

    div.horizontal-left {
        left: 24px;
    }
    div.horizontal-center {
        left: 50%;
        transform: translateX(-50%);
    }
    div.horizontal-right {
        right: 24px;
    }
</style>