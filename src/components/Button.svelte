<script>
  let { iconClass, ...rest } = $props();
</script>

<button
  class="flex bg-blend-30 border border-zb-border rounded-base shadow-button hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none p-1 {rest.class}"
>
  <i class="ti ti-{iconClass}"></i>
</button>
