<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Options } from "$lib/options";
  import type { PageProps } from "./$types";

  const { data }: { data: Options } = $props();

  let settingsOpen = $state(false);

  let folderList: string = $derived(data.targetFolders.join(","));

</script>

<button onclick={() => (settingsOpen = !settingsOpen)}>
  {settingsOpen ? "Close Settings" : "Open Settings"}
</button>

{#if settingsOpen}
  <form method="POST" class="settings" use:enhance>
    <input
      name="sourceFolder"
      type="text"
      bind:value={data.sourceFolder}
      placeholder="Source Folder"
    />
    <input
      name="targetFolders"
      type="text"
      bind:value={folderList}
      placeholder="Source Folder"
    />
    <button type="submit"> Save </button>
  </form>
{/if}
