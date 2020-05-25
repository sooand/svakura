<script>
  import { onMount } from 'svelte'
  import { omit } from '../utils'

  /** HTML tag to use for button (either 'a' or 'button')
   * @svelte-prop {String} tag=button
   * @values <code>button</code>, <code>a</code>
   * */
  export let tag = 'button'

  export let nativeType = 'button'

  export let loading = false

  export let href = ''

  onMount(() => {
    if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a button`)
  })

  $: props = {
    class: `svakura-btn ${$$props.class || ''}`,
  }
</script>

{#if tag === 'button'}
  <button
    class={props.class}
    type={nativeType}
    class:is-loading={loading}
    on:click>
    <span>
      <slot />
    </span>
  </button>
{:else if tag === 'a'}
  <a
    {href}
    class={props.class}
    class:is-loading={loading}
    on:click>
    <span>
      <slot />
    </span>
  </a>
{/if}

<style>
  .svakura-btn {
    background-color: var(--primary-bg-color);
  }
</style>