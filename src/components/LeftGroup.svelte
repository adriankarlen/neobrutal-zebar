<script lang="ts">
  import { onMount } from "svelte";
  import { init } from "zebar";
  import Button from "./Button.svelte";
  import Meter from "./Meter.svelte";
  import type {
    CpuOutput,
    BatteryOutput,
    MemoryOutput
  } from "../types/providers";

  let cpuOutput = $state<CpuOutput>();
  let batteryOutput = $state<BatteryOutput>();
  let memoryOutput = $state<MemoryOutput>();

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

<div class="flex flex-row gap-3 items-center">
  <Button class="text-zb-icon" iconClass="heart-filled" />
  <div class="flex gap-1 items-center">
    <i class="ti ti-ruler-2"></i>
    <Meter
      class="bg-zb-memory"
      percent={Math.round(memoryOutput?.usage ?? 0)}
    />
  </div>
  <div class="flex gap-1 items-center">
    <i class="ti ti-cpu"></i>
    <Meter class="bg-zb-cpu" percent={Math.round(cpuOutput?.usage ?? 0)} />
  </div>
  <div class="flex gap-1 items-center">
    <i class="ti ti-bolt"></i>
    <Meter
      class="bg-zb-battery-good"
      percent={Math.round(batteryOutput?.chargePercent ?? 100)}
    />
  </div>
</div>
