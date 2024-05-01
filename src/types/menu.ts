export interface DBMenuItem {
	_id: string;
	course: string;
	category: string;
	public_id: string;
	name: string;
	reference: { owner: string; owner_url: string; platform: string; url: string };
	description: string;
	price: number;
	tags: string[];
	online_available: boolean;
}
