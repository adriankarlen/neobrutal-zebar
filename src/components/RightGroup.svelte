<script lang="ts">
  import { onMount } from "svelte";
  import { init } from "zebar";
  import type { NetworkOutput, WeatherOutput } from "../types/providers";

  let dateOutput = $state({ formatted: "" });
  let networkOutput = $state<NetworkOutput>();
  let weatherOutput = $state<WeatherOutput>();

  onMount(async () => {
    const zebarCtx = await init();

    const [date, network, weather] = await Promise.all([
      zebarCtx.createProvider({ type: "date", formatting: "HH:mm" }),
      zebarCtx.createProvider({ type: "network" }),
      zebarCtx.createProvider({ type: "weather" })
    ]);

    date.onOutput((output) => (dateOutput = output));
    network.onOutput((output) => (networkOutput = output));
    weather.onOutput((output) => (weatherOutput = output));
  });
</script>

<div class="flex flex-row gap-2 items-center">
  <div class="flex flex-row items-center gap-1">
    {#if networkOutput?.defaultInterface?.type === "ethernet"}
      <i class="ti ti-network"></i>
    {:else if networkOutput?.defaultInterface!.type === "wifi"}
      {#if networkOutput.defaultGateway!.signalStrength! >= 75}
        <i class="ti ti-wifi"></i>
      {:else if networkOutput.defaultGateway!.signalStrength! >= 50}
        <i class="ti ti-wifi-2"></i>
      {:else if networkOutput.defaultGateway!.signalStrength! >= 25}
        <i class="ti ti-wifi-1"></i>
      {:else}
        <i class="ti ti-wifi-off"></i>
      {/if}
      {networkOutput.defaultGateway?.ssid}
    {:else}
      <i class="ti ti-wifi-off"></i>
    {/if}
  </div>
  <div>
    {#if weatherOutput?.status === "clear_day"}
      <i class="nf nf-weather-day_sunny"></i>
    {:else if weatherOutput?.status === "clear_night"}
      <i class="nf nf-weather-night_clear"></i>
    {:else if weatherOutput?.status === "cloudy_day"}
      <i class="nf nf-weather-day_cloudy"></i>
    {:else if weatherOutput?.status === "cloudy_night"}
      <i class="nf nf-weather-night_alt_cloudy"></i>
    {:else if weatherOutput?.status === "light_rain_day"}
      <i class="nf nf-weather-day_sprinkle"></i>
    {:else if weatherOutput?.status === "light_rain_night"}
      <i class="nf nf-weather-night_alt_sprinkle"></i>
    {:else if weatherOutput?.status === "heavy_rain_day"}
      <i class="nf nf-weather-day_rain"></i>
    {:else if weatherOutput?.status === "heavy_rain_night"}
      <i class="nf nf-weather-night_alt_rain"></i>
    {:else if weatherOutput?.status === "snow_day"}
      <i class="nf nf-weather-day_snow"></i>
    {:else if weatherOutput?.status === "snow_night"}
      <i class="nf nf-weather-night_alt_snow"></i>
    {:else if weatherOutput?.status === "thunder_day"}
      <i class="nf nf-weather-day_lightning"></i>
    {:else if weatherOutput?.status === "thunder_night"}
      <i class="nf nf-weather-night_alt_lightning"></i>
    {/if}
    {weatherOutput?.celsiusTemp}°
  </div>
  <i class="ti ti-point-filled"></i>
  {dateOutput.formatted}
</div>
