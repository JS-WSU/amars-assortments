<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Sheet from '$lib/components/ui/sheet';
	import Button from '$lib/components/ui/button/button.svelte';
	import { CloudCog } from 'lucide-svelte';
	import CATEGORIES from '$lib/constants/CATEGORIES';
	import MainMenu from '$lib/components/MainMenu.svelte';
	import { base } from '$app/paths';
	import { loopThroughObjRecurse } from '$lib/utils';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="kanit-medium flex h-screen flex-col">
	<header class="flex items-center justify-between bg-gray-200 p-2 lg:justify-normal">
		<a href={`${base}/`} class="flex items-center">
			<Icon icon="material-symbols:food-bank-rounded" class="text-5xl" />
			<h1 class="kanit-extrabold-italic text-xl">Amar's Assortments</h1>
		</a>
		<nav class="hidden gap-4 pl-8 lg:flex">
			{#each Object.keys(CATEGORIES) as category}
				<MainMenu {category} />
			{/each}
		</nav>
		<Sheet.Root>
			<Sheet.Trigger class="text-5xl lg:hidden"
				><Icon icon="material-symbols:menu-rounded" /></Sheet.Trigger
			>
			<Sheet.Content class="w-full">
				<Sheet.Header>
					<Sheet.Title>Amar's Assortments</Sheet.Title>
					<nav class="flex flex-col gap-4">
						{#each Object.keys(CATEGORIES) as category}
							<MainMenu {category} />
						{/each}
					</nav>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	</header>
	<main class="mx-auto max-w-screen-lg flex-1 p-4">
		<slot></slot>
	</main>
	<footer class="bg-gray-500 p-4 text-gray-200">
		<div class="kanit-bold text-center">Amar's Assortments</div>
	</footer>
</div>

<style>
	.kanit-extralight {
		font-family: 'Kanit', sans-serif;
		font-weight: 200;
		font-style: normal;
	}

	.kanit-light {
		font-family: 'Kanit', sans-serif;
		font-weight: 300;
		font-style: normal;
	}

	.kanit-regular {
		font-family: 'Kanit', sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.kanit-medium {
		font-family: 'Kanit', sans-serif;
		font-weight: 500;
		font-style: normal;
	}

	.kanit-semibold {
		font-family: 'Kanit', sans-serif;
		font-weight: 600;
		font-style: normal;
	}

	.kanit-bold {
		font-family: 'Kanit', sans-serif;
		font-weight: 700;
		font-style: normal;
	}

	.kanit-extrabold {
		font-family: 'Kanit', sans-serif;
		font-weight: 800;
		font-style: normal;
	}

	.kanit-black {
		font-family: 'Kanit', sans-serif;
		font-weight: 900;
		font-style: normal;
	}

	.kanit-thin-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 100;
		font-style: italic;
	}

	.kanit-extralight-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 200;
		font-style: italic;
	}

	.kanit-light-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 300;
		font-style: italic;
	}

	.kanit-regular-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 400;
		font-style: italic;
	}

	.kanit-medium-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 500;
		font-style: italic;
	}

	.kanit-semibold-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 600;
		font-style: italic;
	}

	.kanit-bold-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 700;
		font-style: italic;
	}

	.kanit-extrabold-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 800;
		font-style: italic;
	}

	.kanit-black-italic {
		font-family: 'Kanit', sans-serif;
		font-weight: 900;
		font-style: italic;
	}
</style>
