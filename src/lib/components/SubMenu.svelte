<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import CATEGORIES from '$lib/constants/CATEGORIES';
	import * as Sheet from '$lib/components/ui/sheet';
	import { base } from '$app/paths';
	import type { Categories } from '$lib/types';

	export let subCategory: Categories;
	export let key: string;

	const subCategories = Object.entries(subCategory);
</script>

{#if !subCategories.length}
	<DropdownMenu.Item class="text-start"><a href={`${base}/${key}`} class="w-full">{key}</a></DropdownMenu.Item>
{:else}
	<DropdownMenu.Sub>
		<DropdownMenu.SubTrigger>{key}</DropdownMenu.SubTrigger>
		<DropdownMenu.SubContent class="kanit-medium">
			{#each subCategories as [k, sc]}
				<svelte:self key={k} subCategory={sc} />
			{/each}
		</DropdownMenu.SubContent>
	</DropdownMenu.Sub>
{/if}
