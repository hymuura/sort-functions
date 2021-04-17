function selection_sort(collection){
	for(let x=0; x<collection.length-1; x++){
		let min = collection[x];
		for(let y=x+1; y<collection.length; y++){
			if(min>collection[y]){
				let aux = min;
				min = collection[y];
				collection[y] = aux;
			}
		}
		collection[x]=min;
	}
}