<script lang="ts">
	import { page } from '$app/stores';
	import FoodCard from '$lib/components/ui/FoodCard.svelte';
</script>

<div>hi there</div>

<FoodCard category={$page.params.food} />
