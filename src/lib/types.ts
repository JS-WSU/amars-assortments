export type Categories =
	| {
			[key: string]: Categories;
	  }
	| Record<string, never>;
