<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import CATEGORIES from '$lib/constants/CATEGORIES';
	import * as Sheet from '$lib/components/ui/sheet';

	type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];

	export let subCategory: Record<string, never> | Record<string, Record<string, never>>;
	export let key: string;
	export let href: string = key;

	const subCategories = Object.entries(subCategory);
</script>

{#if !subCategories.length}
	<DropdownMenu.Item class="text-start"><a {href} class="w-full">{key}</a></DropdownMenu.Item>
{:else}
	<DropdownMenu.Sub>
		<DropdownMenu.SubTrigger>{key}</DropdownMenu.SubTrigger>
		<DropdownMenu.SubContent class="kanit-medium">
			{#each subCategories as [k, sc]}
				<svelte:self key={k} subCategory={sc} href={`/${key}/${k}`} />
			{/each}
		</DropdownMenu.SubContent>
	</DropdownMenu.Sub>
{/if}
