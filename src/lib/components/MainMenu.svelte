<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import CATEGORIES from '$lib/constants/CATEGORIES';
	import Icon from '@iconify/svelte';
	import SubMenu from './SubMenu.svelte';

	export let category: string;

	let open = false;
</script>

<DropdownMenu.Root onOpenChange={() => (open = !open)}>
	<DropdownMenu.Trigger>
		<div class={`flex items-center ${open ? 'text-gray-700' : ''}`}>
			{category}
			{#if open}
				<Icon icon="mdi:chevron-up" />
			{:else}
				<Icon icon="mdi:chevron-down" />
			{/if}
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start">
		<DropdownMenu.Group>
			{#each Object.entries(CATEGORIES[category]) as [key, subCategory]}
				<SubMenu {subCategory} {key} />
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
