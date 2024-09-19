<script lang="ts">
  import "../app.css";
  import Group from "../components/Group.svelte";
  import LeftGroup from "../components/LeftGroup.svelte";
  import RightGroup from "../components/RightGroup.svelte";
  import Workspaces from "../components/Workspaces.svelte";
</script>

<div class="grid grid-cols-3 items-center h-bar my-zby mx-zbx text-zb-text">
  <Group class="justify-self-start">
    <LeftGroup />
  </Group>
  <Group class="justify-self-center">
    <Workspaces />
  </Group>
  <Group class="justify-self-end">
    <RightGroup />
  </Group>
</div>
