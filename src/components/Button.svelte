<script>
  let { textColor, iconClass } = $props();
</script>

<button
  class={`flex bg-blend-30 border border-zb-border radius shadow-button hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none p-1 ${textColor}`}
>
  <i class="ti ti-{iconClass}"></i>
</button>
