<script lang="ts">
  type Props = {
    percent: number;
    class: string;
  };
  let { percent, ...rest }: Props = $props();
</script>

<div class="relative inline-flex items-center justify-center group">
  <span
    class="inline-block w-12 h-4 border border-zb-border radius transition-all duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0"
  >
    <span
      class="block h-full w-0 border-r border-zb-border {rest.class}"
      style="width: {percent}%"
    >
    </span>
  </span>
  <span
    class="absolute inset-0 flex items-center justify-center transform -translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
  >
    {percent}%
  </span>
</div>
