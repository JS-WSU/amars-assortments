<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let category: string;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{category}</Card.Title>
		<Card.Description></Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<div>
			<img src="https://placehold.co/300x300" alt={category} srcset="" class="mx-auto" />
		</div>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam assumenda delectus
			doloremque modi consequuntur, officiis laudantium consectetur. Reprehenderit odit ducimus
			tempore, saepe dignissimos numquam est molestias et earum sunt dolores! Sapiente suscipit
			nihil assumenda laborum cumque porro numquam error est rem debitis inventore iusto voluptate,
			quaerat cupiditate obcaecati neque a officia. Quae eveniet impedit fugit nemo expedita
			possimus error facere. Amet ipsum, laboriosam eum est in sunt fuga! Illo commodi enim
			recusandae quibusdam velit ducimus aliquam, totam sed, eius voluptatum dicta nulla alias autem
			labore saepe repellat, quidem dolorum necessitatibus.
		</p>
	</Card.Content>
</Card.Root>
