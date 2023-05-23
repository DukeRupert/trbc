// Posts object
export interface Posts {
	_key: string;
	_type: string;
	defaultTag: Tag;
	max: number;
	searchTags: Tag[];
}

export interface Tag {
	title: string;
}
