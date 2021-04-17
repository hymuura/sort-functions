function bubble_sort(collection){
	let change = true;
	while(change){
		change = false;
		for(let x=0; x<collection.length-1; x++){
			if(collection[x]>collection[x+1]){
				let aux = collection[x];
				collection[x] = collection[x+1];
				collection[x+1] = aux;
				change = true;
			}
		}
	}
}