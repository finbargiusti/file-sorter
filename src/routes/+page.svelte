<script lang="ts">
  import type { Options } from "$lib/options";
import type { PageProps } from "./$types";

  const { data }: { data: Options } = $props();

  let settingsOpen = $state(false)

  let folderList = $derived(data.targetFolders.join(','));
  const deriveFolders = () => {
    data.targetFolders = folderList.split(',').map(folder => folder.trim());
  }
</script>

<button onclick={() => settingsOpen = !settingsOpen} >
  { settingsOpen ? 'Close Settings' : 'Open Settings' }
</button>

{#if settingsOpen}
  <div class="settings">
    <input type="text" bind:value={data.sourceFolder} placeholder="Source Folder" />
    <input type="text" bind:value={folderList} oninput={deriveFolders} placeholder="Source Folder" />
  </div>
{/if}
