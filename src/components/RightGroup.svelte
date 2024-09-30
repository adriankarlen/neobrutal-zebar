<script lang="ts">
  import type { DateOutput, GlazeWmOutput, NetworkOutput, WeatherOutput } from "zebar";
  import NowPlaying from "./NowPlaying.svelte";

  type RightGroupProps = {
    date: DateOutput;
    glazewm: GlazeWmOutput;
    network: NetworkOutput;
    weather: WeatherOutput;
  };

  let { date, glazewm, network, weather }: RightGroupProps = $props();
</script>

<div class="flex flex-row gap-3 items-center">
  <NowPlaying glazewm={glazewm}/>
  <div class="flex flex-row items-center gap-1">
    {#if network?.defaultInterface?.type === "ethernet"}
      <i class="ti ti-network"></i>
    {:else if network?.defaultInterface!.type === "wifi"}
      {#if network.defaultGateway!.signalStrength! >= 75}
        <i class="ti ti-wifi"></i>
      {:else if network.defaultGateway!.signalStrength! >= 50}
        <i class="ti ti-wifi-2"></i>
      {:else if network.defaultGateway!.signalStrength! >= 25}
        <i class="ti ti-wifi-1"></i>
      {:else}
        <i class="ti ti-wifi-off"></i>
      {/if}
      {network.defaultGateway?.ssid}
    {:else}
      <i class="ti ti-wifi-off"></i>
    {/if}
  </div>
  {#if weather}
    <div>
      {#if weather.status === "clear_day"}
        <i class="nf nf-weather-day_sunny"></i>
      {:else if weather.status === "clear_night"}
        <i class="nf nf-weather-night_clear"></i>
      {:else if weather.status === "cloudy_day"}
        <i class="nf nf-weather-day_cloudy"></i>
      {:else if weather.status === "cloudy_night"}
        <i class="nf nf-weather-night_alt_cloudy"></i>
      {:else if weather.status === "light_rain_day"}
        <i class="nf nf-weather-day_sprinkle"></i>
      {:else if weather.status === "light_rain_night"}
        <i class="nf nf-weather-night_alt_sprinkle"></i>
      {:else if weather.status === "heavy_rain_day"}
        <i class="nf nf-weather-day_rain"></i>
      {:else if weather.status === "heavy_rain_night"}
        <i class="nf nf-weather-night_alt_rain"></i>
      {:else if weather.status === "snow_day"}
        <i class="nf nf-weather-day_snow"></i>
      {:else if weather.status === "snow_night"}
        <i class="nf nf-weather-night_alt_snow"></i>
      {:else if weather.status === "thunder_day"}
        <i class="nf nf-weather-day_lightning"></i>
      {:else if weather.status === "thunder_night"}
        <i class="nf nf-weather-night_alt_lightning"></i>
      {/if}
      {Math.round(weather.celsiusTemp)}°
    </div>
  {/if}
  <i class="ti ti-point-filled"></i>
  {date?.formatted}
</div>
