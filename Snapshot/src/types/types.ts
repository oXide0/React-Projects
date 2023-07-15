export interface IImage {
	id: string;
	server: string;
	secret: string;
	title: string;
}

export interface Idata {
	data: {
		photos: {
			photo: IImage[];
		};
	};
}
