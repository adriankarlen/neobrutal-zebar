<script lang="ts">
  type ButtonProps = {
    iconClass: string;
    callback: () => void;
    class: string;
  };
  let { iconClass, callback, ...rest }: ButtonProps = $props();
</script>

<button
  class="flex bg-blend-30 border border-zb-border rounded-base shadow-button hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none p-1 {rest.class}"
  onclick={callback}
>
  <i class="ti ti-{iconClass}"></i>
</button>
