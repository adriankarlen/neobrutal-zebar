<script lang="ts">
  import { onMount } from "svelte";
  import { init } from "zebar";
  import Button from "./Button.svelte";

  let cpuOutput = $state({ usage: 0 });
  let batteryOutput = $state({ chargePercent: 0 });
  let memoryOutput = $state({ usage: 0 });

  onMount(async () => {
    const zebarCtx = await init();

    const [cpu, battery, memory] = await Promise.all([
      zebarCtx.createProvider({ type: "cpu" }),
      zebarCtx.createProvider({ type: "battery" }),
      zebarCtx.createProvider({ type: "memory" })
    ]);

    cpu.onOutput((output) => (cpuOutput = output));
    battery.onOutput((output) => (batteryOutput = output));
    memory.onOutput((output) => (memoryOutput = output));
  });
</script>

<div class="flex flex-row gap-2 items-center">
  <Button textColor="text-zb-icon" iconClass="heart-filled" />
  <div>
    <i class="ti ti-ruler-2 text-zb-memory"></i>
    {Math.round(memoryOutput.usage)}%
  </div>
  <div>
    <i class="ti ti-cpu text-zb-cpu"></i>
    {Math.round(cpuOutput.usage)}%
  </div>
  <div>
    <i class="ti ti-bolt text-zb-battery-good"></i>
    {batteryOutput.chargePercent}%
  </div>
</div>
